import React, { useState, useMemo, useEffect } from "react";
import InputField from "../../../components/UI/InputField";
import Dropdown from "../../../components/UI/Dropdown";
import createAxiosInstance from "../../../api/axiosInstance";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const UserFormPage = () => {
  const axiosInstance = useMemo(() => createAxiosInstance(), []);
  const navigate = useNavigate();
  const { pk } = useParams();

  const [formData, setFormData] = useState({
    first_name: "",
    middle_name: "",
    last_name: "",
    email: "",
    perfix: "",
    suffix: "",
    tax_vat_number: "",
    gender: "",
    business_description: "",
    quantify_order: "",
    nearest_international_airport: "",
    is_imported: false,
    mail_sent: false,
    is_confirmed: false,
    request_for_wholesale: false,
    is_active: false,
    is_staff: false,
    user_type: "",
    password: "",
    confirm_password: "",
    last_login: new Date().toISOString(),
  });

  const [errors, setErrors] = useState({});
  const [isUpdate, setIsUpdate] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");

  useEffect(() => {
    if (pk) {
      setIsUpdate(true);
      const fetchUserData = async () => {
        try {
          const response = await axiosInstance.get(`/user/${pk}/`);
          if (response.status === 200) {
            setFormData(response.data);
          }
        } catch (error) {
          console.log("Error fetching user data:", error);
        }
      };
      fetchUserData();
    }
  }, [pk, axiosInstance]);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form data submitted:", formData);

    try {
      const response = pk
        ? await axiosInstance.put(`/user/${pk}/`, formData) // Update existing user
        : await axiosInstance.post("/user/", formData); // Create new user if no pk

      if (response.status === 200 || response.status === 201) {
        const message = "User saved successfully!";

        setTimeout(() => {
          navigate("/admin/users", { state: { message, type: "success" } });
        }, 100);

        return;
      }
    } catch (err) {
      console.log(err.response);
    }
  };

  return (
    <div className="flex-1 bg-gray-100 px-10 py-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-2xl font-semibold">User Management</h1>
          <p className="font-normal text-gray-500">
            Manage all registered users, their roles, and account status.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-xl shadow-lg overflow-hidden mb-6">
        <div className="p-6 flex justify-between items-center border-b">
          <h2 className="text-xl font-semibold text-gray-800">
            {isUpdate ? "Update User" : "Create New User"}
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-8">
          <div>
            <h3 className="text-lg font-medium mb-4 text-gray-800 pb-2 border-b">
              Personal Information
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-6">
              <InputField
                name="first_name"
                label="First Name*"
                value={formData.first_name}
                onChange={handleChange}
                error={errors.first_name}
              />

              <InputField
                name="last_name"
                label="Last Name*"
                value={formData.last_name}
                onChange={handleChange}
                error={errors.last_name}
              />

              <InputField
                name="email"
                type="email"
                label="Email Address*"
                value={formData.email}
                onChange={handleChange}
                error={errors.email}
              />
            </div>

            {!isUpdate && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-7 mb-6">
                <Dropdown
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  options={[
                    { value: "", label: "Select Gender" },
                    { value: "M", label: "Male" },
                    { value: "F", label: "Female" },
                  ]}
                  error={errors.gender}
                />
                <InputField
                  name="password"
                  type="password"
                  label="Password"
                  value={formData.password}
                  onChange={handleChange}
                  error={errors.password}
                />
                <InputField
                  name="confirm_password"
                  type="password"
                  label="Confirm Password"
                  value={formData.confirm_password}
                  onChange={handleChange}
                  error={errors.confirm_password}
                />
              </div>
            )}
            {isUpdate && (
              <p className="text-sm text-gray-500">
                Password is hashed in the system and cannot be viewed.
              </p>
            )}
          </div>

          {/* Account Status */}
          <div>
            <h3 className="text-lg font-medium mb-4 text-gray-800 pb-2 border-b">
              Account Status
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-7 mb-6">
              <div>
                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    name="is_active"
                    id="is_active"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    checked={formData.is_active}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="is_active"
                    className="ml-2 text-sm text-gray-700"
                  >
                    Is Active
                  </label>
                </div>

                <div className="flex items-center mb-4">
                  <input
                    type="checkbox"
                    name="is_staff"
                    id="is_staff"
                    className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                    checked={formData.is_staff}
                    onChange={handleChange}
                  />
                  <label
                    htmlFor="is_staff"
                    className="ml-2 text-sm text-gray-700"
                  >
                    Is Staff
                  </label>
                </div>
              </div>
            </div>

            <div>
              <div className="relative w-full mb-6">
                <select
                  id="floating_user_type"
                  name="user_type"
                  value={formData.user_type}
                  onChange={handleChange}
                  className="block w-full px-3 py-2 border rounded-md text-gray-700 focus:ring-blue-500 focus:outline-none"
                >
                  <option value="">Select User Type</option>
                  <option value="Admin">Admin</option>
                  <option value="Customer">Customer</option>
                  <option value="Wholesale">Wholesale</option>
                </select>
                {errors.user_type && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.user_type}
                  </p>
                )}
              </div>
            </div>
          </div>

          {successMessage && (
            <div className="fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center p-4">
              <div className="bg-white rounded-lg shadow-xl max-w-md w-full transform transition-all animate-fadeIn">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="flex-shrink-0 bg-green-100 rounded-full p-2 mr-3">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </div>
                    <h3 className="text-lg font-medium text-gray-900">
                      Success
                    </h3>
                  </div>

                  <div className="mt-2 mb-5">
                    <p className="text-gray-700">{successMessage}</p>
                  </div>

                  <div className="flex justify-end border-t border-gray-100 pt-4">
                    <button
                      onClick={() => setSuccessMessage("")}
                      className="px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transition-colors duration-150 ease-in-out flex items-center"
                    >
                      <span>Got it</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-4 w-4 ml-2"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}

          <div className="border-t pt-6 flex justify-end space-x-4">
            <button
              type="button"
              className="px-6 py-3 rounded-lg text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 transition-colors shadow-sm"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-6 py-3 rounded-lg text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 transition-colors shadow-sm"
            >
              Save User
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserFormPage;
