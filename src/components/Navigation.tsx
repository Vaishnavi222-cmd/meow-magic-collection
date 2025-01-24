import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <nav className="bg-white shadow-md mb-8">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex space-x-8">
            <Link
              to="/"
              className={`${
                isActive("/")
                  ? "text-cat-primary border-b-2 border-cat-primary"
                  : "text-gray-600 hover:text-cat-primary"
              } transition-colors duration-200 py-2`}
            >
              Home
            </Link>
            <Link
              to="/gallery"
              className={`${
                isActive("/gallery")
                  ? "text-cat-primary border-b-2 border-cat-primary"
                  : "text-gray-600 hover:text-cat-primary"
              } transition-colors duration-200 py-2`}
            >
              Gallery
            </Link>
            <Link
              to="/book"
              className={`${
                isActive("/book")
                  ? "text-cat-primary border-b-2 border-cat-primary"
                  : "text-gray-600 hover:text-cat-primary"
              } transition-colors duration-200 py-2`}
            >
              Our Book
            </Link>
            <Link
              to="/contact"
              className={`${
                isActive("/contact")
                  ? "text-cat-primary border-b-2 border-cat-primary"
                  : "text-gray-600 hover:text-cat-primary"
              } transition-colors duration-200 py-2`}
            >
              Contact
            </Link>
            <Link
              to="/products"
              className={`${
                isActive("/products")
                  ? "text-cat-primary border-b-2 border-cat-primary"
                  : "text-gray-600 hover:text-cat-primary"
              } transition-colors duration-200 py-2`}
            >
              Products
            </Link>
            <Link
              to="/blog"
              className={`${
                isActive("/blog")
                  ? "text-cat-primary border-b-2 border-cat-primary"
                  : "text-gray-600 hover:text-cat-primary"
              } transition-colors duration-200 py-2`}
            >
              Blog
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;