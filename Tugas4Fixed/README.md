# implementasi Desain Figma ke Website dengan React & Vite

## Teknologi dan Tools yang Digunakan
- **React**
adalah library JavaScript yang digunakan untuk membangun antarmuka pengguna berbasis komponen. React memudahkan pengembangan web karena:

- **Vite**
adalah build tool modern yang lebih cepat dibandingkan Create React App

- **React Router DOM**
Digunakan untuk menambahkan navigasi halaman di aplikasi React. Dengan ini, kita bisa membuka halaman seperti /home, /about, atau /contact tanpa reload.

- **CSS**
Proyek ini menggunakan file CSS terpisah untuk mengatur tampilan. Beberapa teknik styling yang digunakan:
    - Flexbox untuk menyusun layout.
    - Media query untuk responsivitas.
    - Transition & animation untuk efek visual (seperti floating CTA dan menu).

## Struktur Proyek

```
src/
│
├── assets/                # Gambar & aset lainnya
│   └── Profile.jpg
│
├── components/            # Komponen yang digunakan di banyak halaman
│   ├── CTA.jsx            # Tombol Call To Action (floating button)
│   ├── FloatingMenu.jsx   # Menu overlay fullscreen
│   └── Navbar.jsx         # Navigasi utama (Home, About, Contact)
│
├── pages/                 # Halaman utama
│   ├── About.jsx          # Halaman tentang (optional)
│   ├── Contact.jsx        # Halaman kontak
│   ├── Home.jsx           # Landing Page
│   └── LandingPage.jsx    # Komposisi halaman (gabungkan Home, Contact, dst)
│
├── styles/
│   └── index.css          # Styling global (warna, font, layout)
│
├── App.jsx                # Root komponen utama (memuat <LandingPage />)
└── main.jsx               # Entry point aplikasi, render App ke root DOM
```

## Penjelasan Kode/ Komponen
### CTA
```jsx
function CTA({ onClick }) {
  return (
    <a href="#" className="floating-cta" onClick={onClick}>
      <span className="wave">👋</span>
      <span className="cta-text">Hi I'm Andini</span>
    </a>
  );
}

```
- ``function CTA({ onClick })``
Komponen fungsional React yang menerima prop onClick, yaitu fungsi yang dijalankan saat tombol diklik.

- `` <a href="#" onClick={onClick}>`` Elemen link yang berperan sebagai tombol. onClick akan menjalankan fungsi yang dikirim dari komponen induk.

- ``<span className="wave">👋</span>`` Menampilkan emoji lambaian tangan sebagai bagian dari tombol.

- ``<span className="cta-text">Hi I'm Andini</span>`` Teks ajakan yang muncul di tombol.

## Floating Menu
```jsx
function FloatingMenu({ isOpen, onClose }) {
  return (
    <div className={`floating-menu-half ${isOpen ? "open" : ""}`}>
      <div className="left-side">
      </div>

      <div className="right-side">
        <button className="close-btn" onClick={onClose}>
          <FaTimes />
        </button>
        <ul className="menu-links">
          <li><a href="#home" onClick={onClose}>Home</a></li>
          <li><a href="#about" onClick={onClose}>About</a></li>
          <li><a href="#contact" onClick={onClose}>Contact</a></li>
        </ul>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/andini-prihartiningtias-4418aa326" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://www.instagram.com/anprhnn" target="_blank" rel="noopener noreferrer">Instagram</a>
          <a href="https://github.com/AndiniPrihartiningtias" target="_blank" rel="noopener noreferrer">GitHub</a>
        </div>
      </div>
    </div>
  );
}

```
- ``className={\floating-menu-half ${isOpen ? "open" : ""}`}``  Menambahkan ``class"open"``saat ``isOpen`` bernilai ``true` untuk memicu animasi/transisi CSS.

- ``<FaTimes />`` Icon “X” dari ``react-icons`` untuk tombol tutup.

- ``onClick={onClose}`` Dipasang pada tombol dan link untuk menutup menu saat diklik.

- ``<ul className="menu-links">`` Navigasi ke bagian Home, About, dan Contact dengan scroll ke anchor.

- ``<div className="social-links">`` Link ke media sosial (LinkedIn, Instagram, GitHub), terbuka di tab baru.

## Navbar
```jsx
function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="navbar">
        <div className="navbar-container">
          <div className="logo">
            <a href="#">Andini Prihartiningtias</a>
          </div>

          <div className="menu-icon" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </div>

          <ul className={`menu ${menuOpen ? 'open' : ''}`}>
            <li><a href="#home" onClick={() => setMenuOpen(false)}>Home</a></li>
            <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
            <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </nav>
    </>
  );
}
```
- Menggunakan ``useState()`` untuk mengatur status buka/tutup menu ``(menuOpen)``.
- Icon menu menggunakan ``react-icons``:
    - ``FaBars`` (☰) untuk membuka menu.
    - ``FaTimes`` (✕) untuk menutup menu.
- Saat icon diklik, ``menuOpen`` akan toggle (``true``/``false``) untuk mengontrol class open pada menu.
- Navigasi (``Home``, ``About``, ``Contact``) ditutup otomatis saat salah satu link diklik (``setMenuOpen(false)``).
- Logo bertuliskan "**Andini Prihartiningtias**", bisa diarahkan ke halaman utama.



### Landing Page 
```jsx
function LandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div id="home">
      <Navbar />
      <Home />
      <About />
      <Contact />
      {!isMenuOpen && <CTA onClick={handleToggleMenu} />}
      <FloatingMenu isOpen={isMenuOpen} onClose={handleToggleMenu} />
    </div>
  );
}
```
- Menggunakan **React Hook** ``useState()`` untuk mengatur state ``isMenuOpen``, yang menentukan apakah ``FloatingMenu`` sedang ditampilkan atau tidak.
- Fungsi ``handleToggleMenu()`` digunakan untuk membuka atau menutup menu.
- Kondisi ``!isMenuOpen && <CTA />`` membuat tombol hanya muncul jika menu belum dibuka.
- Komponen ``FloatingMenu`` akan menerima props:
     - ``isOpen`` → status buka/tutup
    - ``onClose`` → fungsi untuk menutup menu saat tombol “X” diklik

### Home 
```jsx
function Home() {
  return (

     <div className="Home-wrapper">
    <section className="Home">
      <div className="Home-content">
        <h1>Flow Developer — <span className="highlight">UI/UX</span></h1>
      </div>
      <div className="Home-image">
      <img src={ProfileImg} alt="Profile" /> 
      </div>
    </section>
    </div>
  );
  ```

- ``<div className="Home-wrapper">`` dan ``<section className="Home"> ``digunakan untuk membungkus dan menata konten agar lebih terstruktur.
- ``<div className="Home-content">`` menampilkan teks judul.
- ``<div className="Home-image">`` menampilkan gambar profil.
- Class ``highlight`` digunakan untuk memberi warna khusus pada teks "UI/UX"

### About 
```jsx
function About() {
  return (
    <section id="about" className="about-section">
      <h2>About</h2>
      <p>
     Hi aku Andini.
     </p>
     <p>
    web ini diawali sebagai bagian dari tugas 
    web client Development dalam pengaplikasian react dan penggunaan vite.
    </p>
    <p>
    apakah hanya itu? tentu tidak 
    Sebagai creator aku akan terus berusaha mengembangkan web ini
      </p>
    </section>
  );
}
```
- ``<section>`` dengan ``id="about"`` membuat bagian ini bisa di-scroll langsung melalui anchor link di navbar ( ``#about``).
- Menggunakan class ``about-section`` untuk pengaturan layout dan styling seperti padding, warna, layout, dan responsivitas bagian ini.

### Contact 
Komponen ini dibagi menjadi dua bagian: kontak kiri (informasi kontak & sosial media) dan kontak kanan (formulir pesan).
```jsx
function Contact() {
  return (
    <section id="contact" className="contact-container">
      ...
    </section>
  );
}
```


**Bagian 1: contact-left (Kiri)**

Berisi informasi profil dan sosial media.
```jsx
<div className="contact-left">
  <img src={ProfileImg} alt="Profile" className="profile-img" />
  <div className="contact-info">
    <h3>Contact Details</h3>
    <p>Email dan Nomor HP</p>

    <h3>Social</h3>
    <ul>
      <li><a href="...">LinkedIn</a></li>
      <li><a href="...">Instagram</a></li>
      <li><a href="...">GitHub</a></li>
    </ul>
  </div>
</div>
```
**Fungsinya**
- Menampilkan foto profil pengguna (ProfileImg)
- Menyediakan informasi kontak (email, no HP)
- Menyediakan link ke sosial media (LinkedIn, Instagram, GitHub)



**Bagian 2: contact-right (Kanan)**

Berisi form input agar pengunjung bisa mengirim pesan
```jsx
<div className="contact-right">
  <h2>Let’s build something cool together</h2>
  <form className="contact-form">
    <label>Nama</label>
    <input type="text" placeholder="Nama Kamu" required />

    <label>Email</label>
    <input type="email" placeholder="emailkamu@gmai.com" required />

    <label>Subjek</label>
    <input type="text" placeholder="Contoh: Kerja sama proyek" />

    <label>Pesan</label>
    <textarea placeholder="Tulis pesan kamu di sini..." rows="5"></textarea>

    <button type="submit">Submit</button>
  </form>
</div>
```
**Fungsinya**
- Memberikan ajakan kolaborasi lewat teks
- Menyediakan form input yang terdiri dari: Nama, Email, Subjek dan Pesan
- Tombol Submit untuk mengirim pesan

## Cara Menjalankan Proyek
Jalankan proyek ini dengan  clone dan run dengan mudah:

1. **Clone repository**
```bash
git clone https://github.com/AndiniPrihartiningtias/nama-repo-kamu.git

cd nama-repo-kamu
```

2. Install dependencies

```bash
npm install
```

3. Jalankan proyek

```bash
npm run dev
```

## Kesimpulan
Proyek ini merupakan implementasi dari desain Figma ke dalam website nyata menggunakan React dan Vite sebagai tools utama. Dengan pendekatan komponen dan routing, website ini dibangun secara modular, efisien, dan mudah dikembangkan.

Selain itu, berbagai fitur seperti navigasi responsif, CTA button interaktif, dan form kontak menjadikan website ini tidak hanya fungsional, tapi juga memberikan pengalaman pengguna yang baik.

Web ini juga menjadi bukti kemampuan dalam:

    - Menerapkan konsep UI/UX dari desain ke kode
    - Mengelola struktur proyek React secara bersih
    - Menggunakan tools modern (Vite, React Router, CSS responsive)

Ke depannya, proyek ini masih sangat terbuka untuk dikembangkan lebih jauh, baik dari segi fitur, styling, maupun integrasi backend untuk form kontak dan lainnya.