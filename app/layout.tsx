// app/layout.tsx
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="flex h-screen bg-gray-100">
        {/* Sidebar */}
        <aside className="w-64 bg-gray-900 text-white">
          <div className="p-4 text-lg font-bold">Admin Panel</div>
          <nav>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-700 rounded-md"
                >
                  🕒 Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-700 rounded-md"
                >
                  📦 Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-700 rounded-md"
                >
                  🛒 Orders
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-700 rounded-md"
                >
                  👥 Users
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-700 rounded-md"
                >
                  💬 Testimonials
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 px-4 hover:bg-gray-700 rounded-md"
                >
                  ⚙️ Settings
                </a>
              </li>
            </ul>
          </nav>
        </aside>
        {/* Main Content */}
        <main className="flex-1 p-6">{children}</main>
      </body>
    </html>
  );
}
