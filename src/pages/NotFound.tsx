
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow flex items-center justify-center bg-white">
        <div className="text-center px-4">
          <h1 className="text-9xl font-bold mb-4">404</h1>
          <div className="h-1 w-16 bg-black mx-auto mb-8"></div>
          <p className="text-xl text-gray-700 mb-8">
            Die gesuchte Seite wurde nicht gefunden.
          </p>
          <Link 
            to="/" 
            className="inline-block bg-black text-white px-6 py-3 rounded-full hover:bg-gray-800 transition-colors"
          >
            Zurück zur Startseite
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
