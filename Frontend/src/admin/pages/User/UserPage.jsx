import React, { useState, useEffect, useMemo, useRef } from "react";
import SearchFilter from "../../components/SearchFilter";
import Button from "../../../components/UI/Button";
import {
  FaTrash,
  FaPlus,
  FaChevronDown,
  FaUserPlus,
  FaUpload,
  FaTimes,
  FaCheck,
} from "react-icons/fa";
import Pagination from "../../../components/UI/ProductPagination";
import { useNavigate, useLocation } from "react-router-dom";
import createAxiosInstance from "../../../api/axiosInstance";
import Table from "../../components/Table";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import MediaUpload from "../../../components/UI/MediaUpload"; // Importing MediaUpload

const UserPage = () => {
  const columns = [
    {
      name: "user",
      title: "User",
      render: (row) => (
        <div className="flex items-center">
          <div className="h-10 w-10 flex-shrink-0">
            <img
              className="h-10 w-10 rounded-full"
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt=""
            />
          </div>
          <div className="ml-4">
            <div className="font-medium text-gray-900">
              {row.first_name} {row.last_name}
            </div>
            <div className="text-gray-500">#CRNP {row.id}</div>
          </div>
        </div>
      ),
    },
    {
      name: "email",
      title: "Email",
    },
    {
      name: "user_type",
      title: "Role",
      render: (row) => (
        <span
          className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
            row.user_type === "Admin"
              ? "bg-blue-100 text-blue-800"
              : "bg-gray-100 text-gray-800"
          }`}
        >
          {row.user_type}
        </span>
      ),
    },
    {
      name: "is_active",
      title: "Status",
      render: (row) => (
        <span
          className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${
            row.is_active === true
              ? "bg-green-100 text-green-800"
              : "bg-yellow-100 text-yellow-800"
          }`}
        >
          {row.is_active ? "Active" : "Inactive"}
        </span>
      ),
    },
    {
      name: "last_login",
      title: "Last Login",
      render: (row) => new Date(row.last_login).toLocaleDateString(),
    },
  ];

  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [bulkActionOpen, setBulkActionOpen] = useState(false);
  const navigate = useNavigate();
  const axiosInstance = useMemo(() => createAxiosInstance(), []);

  const { state } = useLocation();

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axiosInstance.get("/user/");
        if (response.status === 200) {
          const userData = Array.isArray(response.data) ? response.data : [];
          setUsers(userData);
        } else {
          setError("Failed to fetch users. Please try again.");
        }
      } catch (err) {
        console.error("Error fetching users", err.response);
        setError(
          err.response?.data?.message ||
            "Sorry, couldn't fetch users. Please try again."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, [axiosInstance]);

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    if (!selectAll) {
      setSelectedUsers(users.map((user) => user.id));
    } else {
      setSelectedUsers([]);
    }
  };

  const handleSelectUser = (userId) => {
    setSelectedUsers((prevSelected) => {
      if (prevSelected.includes(userId)) {
        return prevSelected.filter((id) => id !== userId);
      } else {
        return [...prevSelected, userId];
      }
    });
  };

  const handleBulkAction = (action) => {
    console.log(`Performing ${action} on users:`, selectedUsers);
    setBulkActionOpen(false);
  };

  const handleEditUser = (userId) => {
    navigate(`/admin/users/${userId}/`);
  };

  const handleDeleteUser = async (userId) => {
    try {
      const confirmation = window.confirm(
        "Are you sure you want to delete this user?"
      );
      if (confirmation) {
        const response = await axiosInstance.delete(`/user/${userId}/`);

        if (response.status === 204) {
          setUsers((prevUsers) =>
            prevUsers.filter((user) => user.id !== userId)
          );
          alert("User deleted successfully.");
        } else {
          alert("An error occurred while deleting the user.");
        }
      }
    } catch (error) {
      console.error("Error deleting user:", error);
      alert("An error occurred while deleting the user.");
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex-1 bg-gray-100 px-10 p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="user-management">
          <h1 className="text-3xl font-semibold text-gray-900">
            User Management
          </h1>
          <p className="font-normal text-gray-600 mt-2">
            Manage all registered users, their roles, and account statuses.
          </p>
        </div>
      </div>

      <div>
        {/* Media Upload Component for Bulk Upload */}
        <div className="mb-6">
          <MediaUpload
            accept=".csv" // You can change this to other file types if needed
            uploadUrl="/user/bulk-upload/" // Specify the upload URL
            onUploadSuccess={(response) => {
              console.log("Bulk upload successful:", response);
            }}
          />
        </div>

        <SearchFilter placeholder={"User"} />

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-4 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <h2 className="text-xl font-semibold">User List</h2>

              <div className="relative">
                <button
                  className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none"
                  onClick={() => setBulkActionOpen(!bulkActionOpen)}
                >
                  Bulk Actions
                  <FaChevronDown className="ml-2 h-3 w-3" />
                </button>

                {bulkActionOpen && (
                  <div className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                    <div className="py-1" role="menu">
                      <button
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                        onClick={() => handleBulkAction("activate")}
                      >
                        Activate
                      </button>
                      <button
                        className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 w-full text-left"
                        onClick={() => handleBulkAction("deactivate")}
                      >
                        Deactivate
                      </button>
                      <button
                        className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 w-full text-left"
                        onClick={() => handleBulkAction("delete")}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="flex space-x-3">
              {/* Button for Add User */}
              <Button
                className="w-auto py-2.5 bg-primary text-white hover:bg-opacity-90 transition-all duration-300"
                label="Add User"
                onClickFunc={() => {
                  navigate("/admin/users/create");
                }}
              />
            </div>
          </div>

          <Table
            columns={columns}
            rows={users || []} // Ensure we pass an array, even if users is null/undefined
            selectedItems={selectedUsers}
            handleSelectAll={handleSelectAll}
            handleSelectItem={handleSelectUser}
            handleDeleteItem={handleDeleteUser}
            handleEditItem={handleEditUser}
            handleProductClick={handleEditUser}
          />
          <Pagination />
        </div>
      </div>
    </div>
  );
};

export default UserPage;
