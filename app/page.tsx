// app/page.tsx
export default function Dashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6 text-black">Dashboard Overview</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {/* Card 1 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-gray-600">Total Products</h2>
          <p className="text-3xl font-bold">150</p>
        </div>
        {/* Card 2 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-gray-600">Total Orders</h2>
          <p className="text-3xl font-bold">1,234</p>
        </div>
        {/* Card 3 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-gray-600">Active Users</h2>
          <p className="text-3xl font-bold">892</p>
        </div>
        {/* Card 4 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-gray-600">Total Revenue</h2>
          <p className="text-3xl font-bold">$123,456</p>
        </div>
      </div>
    </div>
  );
}
