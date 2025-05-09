# POKEMON APP
pokemon-app adalah aplikasi berbasis React yang menggunakan React Hooks untuk pengelolaan state dan efek samping. Fitur-fitur utamanya termasuk layout toggle, filter, search, dan sorting Pokémon, serta navigasi antar halaman menggunakan React Router. Implementasi localStorage memastikan preferensi pengguna tetap ada meskipun aplikasi direfresh.

## Fitur
- **Layout Switch (View Toggle)**: Pengguna dapat memilih tampilan Pokémon dalam **List** atau **Grid**.
- **Sorting**: Daftar Pokémon dapat disortir berdasarkan nama (A-Z atau Z-A).
- **Persistensi Pengaturan**: Preferensi tampilan dan sorting disimpan di **localStorage**, sehingga tetap bertahan meskipun halaman di-refresh.
- **Halaman Detail Pokémon**: Menampilkan detail dari setiap Pokémon saat dipilih.
- **Search**: Fitur pencarian berdasarkan nama Pokémon.

## Teknologi yang Digunakan
- **React**: Library untuk membangun antarmuka pengguna.
- **React Router**: Untuk mengelola routing antar halaman.
- **TypeScript**: Untuk menambahkan tipe statis di React.
- **React Hooks (useState, useEffect)**: Untuk pengelolaan state dan side effects.
- **localStorage**: Untuk menyimpan preferensi layout dan sorting pengguna.
- **CSS**: Untuk styling aplikasi.

## Instalasi

### Prasyarat

Pastikan kamu sudah menginstal **Node.js** dan **npm**.

### Langkah-langkah Instalasi

1. **Clone repository ini:**
  
   git clone https://github.com/username/pokemon-app.git

   ```bash
   cd pokemon-app
   ```

2. Instal dependensi yang dibutuhkan:

   ```bash
   npm install
   ```

3. Jalankan aplikasi:

   ```bash
   npm start
   ```
    Aplikasi akan berjalan di http://localhost:3000.

## Struktur Folder
```
pokemon-app/
├── src/
│   ├── assets/                   # Asset statis (ikon, gambar)
│   ├── components/               # Komponen UI reusable
│   │   ├── DisplayToggle         # Toggle tampilan list/grid
│   │   ├── Header                # Header aplikasi
│   │   ├── PokemonList           # Daftar kartu Pokémon
│   │   ├── SearchBar             # Komponen pencarian Pokémon
│   │   ├── ShortSelection        # Dropdown sorting A-Z / Z-A
│   ├── data/
│   │   ├── pokemonData.ts        # Data list Pokémon
│   │   ├── onePokemonData.ts     # Data detail Pokémon
│   ├── hooks/                    # Custom React Hooks
│   │   ├── useSort.ts            # Hook sorting + localStorage
│   │   ├── useDisplayType.ts     # Hook tampilan + localStorage
│   ├── pages/
│   │   ├── Home.tsx              # Halaman utama (list & filter)
│   │   ├── OnePokemon.tsx        # Halaman detail Pokémon
│   ├── App.tsx                   # Root component + routing
│   ├── main.tsx                  # Entry point aplikasi
│   ├── types.ts                  # TypeScript interface/type
├── .gitignore                    # File yang diabaikan Git

```

## Penjelasan Kode
## App.tsx
``` tsx
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import OnePokemon from "./pages/OnePokemon";
import './App.css';
```
- import komponen dan styling untuk bagian App.tsx

```tsx
<BrowserRouter>
  <div className="app-wrapper">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/pokemon/:name" element={<OnePokemon />} />
    </Routes>
  </div>
</BrowserRouter>
```
- `BrowserRouter`: Mengaktifkan navigasi berbasis URL.
- `Header`: Tampil di semua halaman.
- `Route "/"`: Tampilkan halaman daftar Pokémon.
- `Route "/pokemon/:name"`: Tampilkan detail Pokémon berdasarkan `name`.


notes:  
- Routing antar halaman (List ↔ Detail Pokémon).
- Bagian penting dari struktur aplikasi berbasis React Router.


## Home.tsx
```tsx
import useSort from '../hooks/useSort';
import useDisplayType from '../hooks/useDisplayType';
import ShortSelection from '../components/ShortSelection';
import PokemonList from '../components/PokemonList'; 
import DisplayToggle from '../components/DisplayToggle';
import { dummyData } from '../data/pokemonData';
```
Import hook untuk sorting & tampilan, komponen UI, dan data dummy Pokémon.

**State & Sorting**
```tsx
const { sortOption, setSortOption } = useSort();
const { displayType, toggleDisplayType } = useDisplayType();
```
- `useSort`: mengatur dan menyimpan pilihan sorting (A-Z, Z-A) ke `localStorage`.
- `useDisplayType`: mengatur dan menyimpan jenis tampilan (`grid` atau `list`) ke `localStorage`.

```tsx
const sortedData = [...dummyData].sort((a, b) => {
  switch (sortOption) {
    case 'az': return a.name.localeCompare(b.name);
    case 'za': return b.name.localeCompare(a.name);
    default: return 0;
  }
});
```
**Sorting data Pokémon** berdasarkan pilihan user (nama A-Z atau Z-A).

**UI Rendering**
```tsx
<ShortSelection selected={sortOption} onChange={setSortOption} />
<DisplayToggle displayType={displayType} onToggle={toggleDisplayType} />
```
- `ShortSelectio`n: Dropdown sorting.\
- `DisplayToggle`: Tombol ubah tampilan

```tsx
<PokemonList data={sortedData} displayType={displayType} />
```
Tampilkan daftar Pokémon sesuai urutan dan tampilan yang dipilih.


notes:
- React Hooks (useState, useEffect di dalam custom hooks)
- Sorting fitur
- Layout toggle (1 kolom vs 2 kolom)
- LocalStorage penyimpanan preferensi


## OnePokemon.tsx
```tsx
const { name } = useParams<{ name: string }>();
const navigate = useNavigate();
```
- `useParams`: ambil nama Pokémon dari URL.
- `useNavigate`: memungkinkan kita untuk berpindah halaman.

```tsx
return (
  <div className="pokemon-page">
    <button onClick={() => navigate(-1)}>← Kembali</button>
```
- Jika Pokémon ditemukan, tampilkan halaman detailnya.
- Tombol kembali menggunakan navigate(-1) untuk kembali ke halaman sebelumnya.

```tsx
<div className="health-bar">
  <div style={{ width: `${(pokemon.health / 1000) * 100}%` }}></div>
</div>
<span>{pokemon.health} from 1000</span>
```
-bHealth bar yang dinamis berdasarkan nilai `pokemon.health` (maks. 1000).

# Komponen UI Interaktif
## PokemonList.tsx
```tsx
interface Pokemon {
  name: string;
  image: string;
  type: string;
  power: string;
}

interface PokemonListProps {
  data: Pokemon[];
  displayType: 'list' | 'grid';
}
```
Menentukan struktur data Pokémon dan props:
- `data`: array Pokémon.
- `displayType`: tampilan`'list'` atau `'grid'`.

**Rendering List Pokemon**
```tsx
<div className={`pokemon-container ${displayType}`}>
  {data.map((pokemon) => (
    <div key={pokemon.name} className={`pokemon-card ${displayType}`}>
```
Tampilkan daftar Pokémon dalam layout grid atau list berdasarkan displayType.

**NAvigasi ke Detail
```tsx
<Link to={`/pokemon/${pokemon.name.toLowerCase()}`}>
```
Klik kartu akan navigasi ke halaman detail Pokémon (`/pokemon/nama-pokemon`).

**Menampilkan Konten**
```tsx
<img src={pokemon.image} alt={pokemon.name} />
<h3>{pokemon.name}</h3>
```
- Tampilkan gambar dan nama Pokémon.
- Jika tampilan list, juga tampilkan:
```tsx
<p className="pokemon-type">{pokemon.type}</p>
<p className="pokemon-power">{pokemon.power}</p>
```


Notes: 
- Layout Switch (grid/list)
- Navigasi ke detail Pokémon
- Responsif berdasarkan state dari React Hook (displayType)


## DisplayToggle.tsx
```tsx
interface DisplayToggleProps {
  displayType: 'list' | 'grid';
  onToggle: (type: 'list' | 'grid') => void;
}
```
- `displayType`: status tampilan saat ini.
- `onToggle`: fungsi untuk mengubah tampilan (`list` ↔ `grid`).

**Button Untuk Toggle Tampilan**
```tsx
<button
  className={`toggle-btn ${displayType === 'list' ? 'active' : ''}`}
  onClick={() => onToggle('list')}
>
```
```tsx
<button
  className={`toggle-btn ${displayType === 'grid' ? 'active' : ''}`}
  onClick={() => onToggle('grid')}
>
```
- Jika`list` aktif, tombol diberi class `active`.
- Klik tombol memanggil `onToggle('list')`.
- Tombol` grid` bekerja serupa, tapi untuk tampilan grid.


Notes:
- Implementasi layout switch (1 kolom / 2 kolom)
- Bekerja sama dengan useDisplayType.ts (hook untuk menyimpan preferensi di localStorage)


## SearchBar.tsx
```tsx
const [searchValue, setSearchValue] = useState("");
```
Menyimpan nilai input pencarian


```tsx
const filteredResults = onePokemonData.filter((pokemon) =>
  pokemon.name.toLowerCase().includes(searchValue.toLowerCase())
);
```
Filter data Pokémon berdasarkan nama (case-insensitive).

```tsx
const handleSelect = (name: string) => {
  navigate(`/pokemon/${name.toLowerCase()}`);
  setSearchValue("");
  setShowSearch(false);
};
```
Navigasi ke detail Pokémon saat hasil dipilih atau Enter ditekan.

```tsx
{filteredResults.map((pokemon) => (
  <div onClick={() => handleSelect(pokemon.name)}>{pokemon.name}</div>
))}
```
Tampilkan hasil pencarian dalam daftar interaktif.

## ShortSelection.tsx

```tsx
type Props = {
  selected: SortOption;
  onChange: (value: SortOption) => void;
};
```
Menerima props: nilai sorting terpilih (az/za) dan fungsi untuk mengubahnya.

```tsx
const options = [
  { label: 'A-Z', value: 'az' },
  { label: 'Z-A', value: 'za' },
];
```
Opsi dropdown untuk urutan alfabet Pokémon.

```tsx
<select
  value={selected}
  onChange={(e) => onChange(e.target.value as SortOption)}
>
  ...
</select>
```
Dropdown yang akan mengubah urutan berdasarkan pilihan pengguna.



# Hooks
## useDisplayType.ts
```ts
type DisplayType = "list" | "grid";
const STORAGE_KEY = "displayType";
```
- Definisi tipe tampilan (`list ` atau `grid`).
- Kunci `localStorage` untuk menyimpan preferensi.

**State Inisialisasi**
```ts
const [displayType, setDisplayType] = useState<DisplayType>(() => {
  const stored = localStorage.getItem(STORAGE_KEY);
  return (stored as DisplayType) || "grid";
});
```
- Ambil nilai dari `localStorage` saat inisialisasi. Default: "grid".

**Simpan ke localStorage saat berubah**
```ts
useEffect(() => {
  localStorage.setItem(STORAGE_KEY, displayType);
}, [displayType]);
```
- Setiap kali  `displayType` berubah, simpan nilai barunya ke `localStorage`.

**Fungsi Toggle Tampilan**
```ts
const toggleDisplayType = (type: DisplayType) => {
  setDisplayType(type);
};
```
- Fungsi untuk mengubah jenis tampilan sesuai dengan tombol yang diklik.

**Return Value**
```ts
return { displayType, toggleDisplayType };
```
Hook ini mengembalikan state saat ini dan fungsi pengubahnya.

## useSort.tx

```tsx
const stored = localStorage.getItem(STORAGE_KEY);
return (stored as SortOption) || 'az';
```
- Saat pertama dijalankan, hook mencoba membaca preferensi dari `localStorage`.
- Jika tidak ada, fallback default ke 'az'.

```tsx
useEffect(() => {
  localStorage.setItem(STORAGE_KEY, sortOption);
}, [sortOption]);
```
Menyimpan setiap perubahan sorting ke localStorage.