import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import Header from "../components/Shared/Header";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";

const AuthLayout = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  // if user is authenticated navigate to home page
  if (isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return (
    <div className="flex flex-col min-h-screen bg-[#FAFAFA] font-sans">
      <div className="sticky top-0 z-50 bg-white">
        <Header />
        <Navbar />
      </div>

      <div className="flex justify-center items-center flex-1 ">
        {children}
      </div>

      <div className="z-40 bg-gray-200">
        <Footer />
      </div>
    </div>
  );
};

export default AuthLayout;
