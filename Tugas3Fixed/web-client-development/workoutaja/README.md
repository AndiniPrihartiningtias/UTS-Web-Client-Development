# CSS Landing Page
Tugas ini berfokus pada pencarian dan penambahan **CSS yang hilang (missing styles)** untuk menyempurnakan tampilan halaman website berdasarkan struktur HTML yang sudah disediakan. Tujuan akhirnya adalah agar elemen-elemen seperti navbar, konten utama (hero section), dan footer tampil sesuai dengan desain yang diharapkan.

## Struktur Folder
Berikut adalah struktur direktori dari proyek ini:
```
web-client-development/
├── images/
│ ├── balls.svg
│ ├── logo.svg
│ ├── whatsapp-icon.svg
│ └── woman.svg
├── index.html
├── README.md
└── style.css
```
## Proses Pengerjaan
1. **Analisis HTML**: Memeriksa struktur HTML untuk mengidentifikasi elemen-elemen seperti navbar, logo, konten teks, gambar hero, tombol, dan dekorasi seperti elemen `#balls`.
2. **Identifikasi CSS yang Hilang**: Mencari bagian CSS yang belum ada seperti layout `main`, elemen dekoratif (`#balls`), tombol dengan ikon, dan hover states.
3. **Penambahan dan Penyesuaian CSS**:
   - Menambahkan font keluarga dan warna sesuai desain.
   - Menyesuaikan layout agar responsif dan tersusun rapi.
   - Menambahkan efek hover dan transisi untuk pengalaman pengguna yang lebih baik.
4. **Verifikasi Tampilan**: Memastikan semua elemen telah tampil sesuai seperti desain.

## Fitur-Fitur Style
- **Navbar** dengan logo dan link navigasi yang memiliki efek hover.
- **Hero Section** dengan judul, paragraf deskriptif, tombol ajakan, dan gambar pendukung.
- **Tombol dengan Ikon WhatsApp** yang terintegrasi dalam `button`.
- **Elemen Dekoratif** berupa SVG `balls.svg` yang diletakkan secara absolut di kanan bawah.
- **Footer** yang bersih dan terpusat, menampilkan informasi tambahan atau hak cipta.

## Penjelasan Kode CSS
**Reset dan Global Style**
```css
* {
  margin: 0;
  padding: 0;
}
```
Menghilangkan margin dan padding default dari semua elemen agar layout lebih konsisten di seluruh browser.

**Body**
```css
body {
  font-family: 'Open Sans', sans-serif;
  background: linear-gradient(180deg, rgba(227, 255, 248, 0) 82.08%, rgba(227, 255, 248, 0.38) 100%);
  min-height: 100vh;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  overflow-x: hidden;
}
```
- Mengatur font utama.
- Memberi efek background gradasi ringan. 
- Menetapkan batas lebar maksimum untuk responsif. 
- overflow-x: hidden mencegah scroll horizontal.

**Container Utama**
```css
.page {
  width: 1040px;
  margin: 0 auto;
  padding-top: 64px;
}
```
- Menjadikan elemen .page sebagai kontainer utama.
- Diberi padding atas agar tidak terlalu menempel ke atas halaman.

**Navbar**
```css
nav {
  font-family: 'Mulish', sans-serif;
  color: #000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  margin-top: 40px;
}
```
- Mengatur navbar agar sejajar horizontal dan spasi antar elemennya merata.
- Menggunakan font berbeda untuk penekanan visual.

**Logo**
```css
.logo {
  font-weight: 700;
  color: #89C5CC;
  font-size: 24px;
  text-decoration: none;
}
```
Logo menggunakan warna khas dan bold, tanpa underline.

**Menu Navigasi**
```css
nav ul {
  display: flex;
  gap: 48px;
  list-style: none;
}

nav ul li a {
  text-decoration: none;
  color: #8E8E8E;
  font-weight: 400;
  font-size: 16px;
  transition: all 0.3s ease;
}

nav ul li a:hover,
nav ul li a.active {
  font-weight: 700;
  color: #000;
}

```
- Menyusun link menu secara horizontal dan memberi jarak antar item (gap)
- Warna dan ukuran font standar dengan animasi transisi saat hover.
- Saat hover atau aktif, link menjadi hitam dan lebih tebal.

**Main Layout (Hero Section)**
```css
main {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 88px 0;
  position: relative;
}
```
- Menjadikan main sebagai flex container dua kolom: teks dan gambar.
- position: relative untuk referensi posisi elemen dekoratif #balls.

## Preview Layout (Desain Akhir)
Tampilan akhir website memiliki struktur yang bersih dan modern dengan layout seperti berikut:
- Header navigasi di atas
- Konten utama dua kolom: teks di kiri dan gambar di kanan
- Footer di bagian bawah halaman
- Elemen dekoratif `balls.svg` terlihat samar di sudut kanan bawah

## Kesimpulan
Tugas ini melatih kemampuan dalam:
- Memahami dan melengkapi struktur CSS yang belum lengkap
- Menggunakan Flexbox dan elemen posisi absolut
- Menyusun layout halaman responsif yang sesuai dengan desain





