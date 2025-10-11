import "./App.css";

function App() {
  return (
    <>
      <div className="p-6 space-y-8">
        {/* LATIHAN 1 - NAVBAR */}
        LATIHAN 1
        <nav className="p-4 bg-gray-100 flex flex-col md:flex-row md:items-center md:justify-between">
          {/* Kiri - Logo */}
          <div className="font-bold text-lg mb-2 md:mb-0">MyLogo</div>

          {/* Kanan - Menu */}
          <ul className="flex flex-col md:flex-row gap-2 md:gap-6">
            <li>
              <a href="#" className="hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                About
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <hr />
        {/* LATIHAN 2 - GRID GALERI) */}
        LATIHAN 2
        <div className="p-4 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri 1"
            className="h-48 w-48 object-cover"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri 2"
            className="h-48 w-48 object-cover"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri 3"
            className="h-48 w-48 object-cover"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri 4"
            className="h-48 w-48 object-cover"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri 5"
            className="h-48 w-48 object-cover"
          />
          <img
            src="https://www.placehold.co/200x200"
            alt="Gambar Galeri 6"
            className="h-48 w-48 object-cover"
          />
        </div>
        <hr />
        {/* LATIHAN 3 - PRICING TABLE */}
        LATIHAN 3
        <div className="p-4 grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] gap-4 text-center">
          <div className="bg-gray-200 p-6 rounded shadow">
            Basic
            <br />
            Rp 50.000
          </div>

          <div className="bg-blue-100 p-6 rounded shadow">
            Pro
            <br />
            Rp 100.000
          </div>

          <div className="bg-gray-200 p-6 rounded shadow">
            Premium
            <br />
            Rp 200.000
          </div>
        </div>
        <hr />
        {/* LATIHAN 4 - DASHBOARD LAYOUT */}
        LATIHAN 4
        <div className="min-h-screen grid grid-cols-12 gap-2">
          {/* Header */}
          <header className="bg-gray-300 p-4 col-span-12">Header</header>

          {/* Sidebar */}
          <aside className="bg-gray-200 p-4 col-span-12 md:col-span-3">
            Sidebar
          </aside>

          {/* Content */}
          <main className="bg-white p-4 border col-span-12 md:col-span-9">
            Content
          </main>

          {/* Footer */}
          <footer className="bg-gray-300 p-4 col-span-12">Footer</footer>
        </div>
        <hr />
        {/* LATIHAN 5 - CARD PRODUCT */}
        LATIHAN 5
        <div className="p-4 border rounded-lg shadow-sm">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            {/* Gambar Produk */}
            <img
              src="https://www.placehold.co/80x80"
              alt="Gambar Produk"
              className="h-20 w-20 object-cover"
            />

            {/* Detail Produk */}
            <div className="text-center md:text-left">
              <h3 className="font-bold">Nama Produk</h3>
              <p className="text-sm text-gray-600">
                Deskripsi produk singkat...
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
