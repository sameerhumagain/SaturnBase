import Header from "../components/Shared/Header";
import Navbar from "../components/Shared/Navbar";
import Footer from "../components/Shared/Footer";
import SidebarA from "../components/Shared/Sidebar/SidebarA";
import { useSidebar } from "../context/SidebarContext";

const AdminLayout = ({ children }) => {
  const { isSideBarHidden } = useSidebar();

  return (
    <div className="flex flex-col ">
      <div className="w-full sticky top-0 z-40 shadow-md">
        <Navbar
          showLogo={true}
          showNavbar={false}
          showCartIcon={false}
          // showWholesaler={false}
          isAdminView = {true}
        />
      </div>
      <div className="relative flex">
        <div
          className={`${
            isSideBarHidden
              ? ""
              : "absolute top-0 bottom-0 z-30 left-0 lg:static"
          }`}
        >
          <SidebarA isAdmin={true} />
        </div>

        <div className="flex-1  overflow-y-auto bg-primaryBackground">
          {children}
        </div>
      </div>
    </div>
  );
};

export default AdminLayout;
