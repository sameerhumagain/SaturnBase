import Header from "../components/Shared/Header";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";
import Sidebar from "../components/Shared/Sidebar/Sidebar";
import { useSidebar } from "../context/SidebarContext";
import { CartModalProvider } from "../context/CartModalContext";

const MainLayout = ({ children }) => {
  const { isSideBarHidden } = useSidebar();

  return (
    <div className="flex flex-col ">
      <div className="w-full sticky top-0 z-40 shadow-md">
        <Header />
        <Navbar />
      </div>

      {/* Main Layout */}
      <div className="relative flex ">
        <div
          className={`${
            isSideBarHidden
              ? ""
              : "absolute top-0 bottom-0 z-30 left-0 lg:static"
          }`}
        >
          <Sidebar sideBarHeading={"Product Category"} />
        </div>

        <div className="flex-1  overflow-y-auto bg-primaryBackground">
          {children}
        </div>
      </div>

      {/* footer */}
      <Footer />
    </div>
  );
};

export default MainLayout;
