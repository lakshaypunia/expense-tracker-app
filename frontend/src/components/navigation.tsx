import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

export default function NavigationBar() {
  const location = useLocation();
  const pathname = location.pathname;  

  return (
    <nav className="bg-white shadow-sm border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-8">
            <h1 className="text-xl font-bold text-gray-900">Expense Tracker</h1>
            <div className="flex space-x-4">
            <Link
                to="/"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === "/" ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
            >
                Home
            </Link>
            <Link
                to="/about"
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                pathname === "/about" ? "bg-blue-100 text-blue-700" : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
            >
                About
            </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
