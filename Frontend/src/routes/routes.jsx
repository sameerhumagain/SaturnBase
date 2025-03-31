import { useSelector } from "react-redux";
import Dashboard from "../admin/pages/Dashboard";
import UserPage from "../admin/pages/User/UserPage";
import UserFormPage from "../admin/pages/User/UserFormPage";

import AdminLayout from "../layouts/AdminLayout";

import MediaList from "../admin/pages/Media/MediaList";
import UserActivityPage from "../admin/pages/User/UserActivityPage";

const RoutesComponent = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  const routes = [
    //admin
    {
      path: "/admin",
      element: (
        <AdminLayout>
          <Dashboard />
        </AdminLayout>
      ),
    },
    {
      path: "/admin/user-activity",
      element: (
        <AdminLayout>
          <UserActivityPage />
        </AdminLayout>
      ),
    },
    {
      path: "/admin/users",
      element: (
        <AdminLayout>
          <UserPage />
        </AdminLayout>
      ),
    },
    {
      path: "/admin/users/create",
      element: (
        <AdminLayout>
          <UserFormPage />
        </AdminLayout>
      ),
    },
    {
      path: "/admin/users/:pk",
      element: (
        <AdminLayout>
          <UserFormPage />
        </AdminLayout>
      ),
    },

    {
      path: "/admin/media",
      element: (
        <AdminLayout>
          <MediaList />
        </AdminLayout>
      ),
    },

    // {
    //   path: "/admin/reviews/create",
    //   element: (
    //     <AdminLayout>
    //       <ReviewsFormPage />
    //     </AdminLayout>
    //   ),
    // },
  ];

  return routes;
};

export default RoutesComponent;
