import Link from 'next/link';

export default function Sidebar() {
  return (
    <div className="w-60 h-screen bg-gray-900 text-white p-4">
      <h1 className="text-xl mb-5">Admin Panel</h1>

      <Link href="/admin">Dashboard</Link>
      <br />
      <Link href="/admin/users">Users</Link>
      <br />
      <Link href="/admin/settings">Settings</Link>
    </div>
  );
}
