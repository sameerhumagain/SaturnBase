import React, { useState, useMemo } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";
import createAxiosInstance from "../../api/axiosInstance";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MediaUpload = ({
  accept = ".csv", // Default file type for validation
  onUploadSuccess,
  uploadUrl = "/media/", // Default upload URL
  method = "POST", // Default method is POST
  maxFileSize = 10 * 1024 * 1024, // Default max size 10MB
  resetStateOnSuccess = true, // Reset state on successful upload (customizable)
}) => {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState(null);
  const [fileName, setFileName] = useState(null);
  const axiosInstance = useMemo(() => createAxiosInstance(), []);

  const handleFileChange = async (event) => {
    const selectedFile = event.target.files[0];

    if (selectedFile) {
      // Validate the file type
      const fileType = selectedFile.name.split(".").pop();
      if (accept && !accept.includes(fileType)) {
        setErrors(`Please upload a valid ${accept.replace(".", "")} file.`);
        return;
      }

      // Check file size
      if (selectedFile.size > maxFileSize) {
        setErrors(`File size exceeds the limit of ${maxFileSize / (1024 * 1024)}MB.`);
        return;
      }
      setErrors(null);
      setFileName(selectedFile.name);
      setFile(selectedFile);

      // Immediately upload the file
      setLoading(true);
      const formData = new FormData();
      formData.append("file", selectedFile);

      try {
        const response = await axiosInstance({
          method,
          url: uploadUrl,
          data: formData,
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });

        console.log("File uploaded successfully:", response.data);

        // Show success toast notification
        toast.success("File uploaded successfully!");

        // Call onUploadSuccess callback if provided
        if (onUploadSuccess) {
          onUploadSuccess(response.data);
        }

        // Reset state after successful upload, if specified
        if (resetStateOnSuccess) {
          setFile(null);
          setFileName(null);
        }
      } catch (error) {
        console.error("Error uploading file:", error);
        setErrors("An error occurred while uploading the file. Please try again.");
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div className="flex justify-center">
      <div className="mb-10" style={{ width: "75%" }}>
        <div className="grid grid-cols-1 text-center">
          <div className="border border-gray-200 rounded-lg p-6 bg-white shadow-sm hover:shadow-md transition-shadow">
            <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 hover:border-blue-500 transition-colors relative">
              <div className="flex flex-col items-center justify-center py-4">
                <div className="mb-4 relative">
                  <input
                    type="file"
                    accept={accept} // Handle multiple file types
                    onChange={handleFileChange} // Trigger the upload on file change
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  />
                  <div className="flex flex-col justify-center items-center space-x-2 ">
                    <FaCloudUploadAlt className="w-10 h-10 text-gray-400 mb-3" />
                    <p className="mb-2 text-sm text-gray-500">
                      <span className="font-semibold">Click to upload</span> or
                      drag and drop
                    </p>
                    <p className="text-xs text-gray-500">
                      {accept.toUpperCase()} File (max. {maxFileSize / (1024 * 1024)}MB)
                    </p>
                  </div>
                </div>
                {fileName && (
                  <div className="mt-4">
                    <p className="text-sm text-gray-500">File: {fileName}</p>
                  </div>
                )}
              </div>
            </div>

            {/* Error Messages */}
            {errors && <p className="text-red-500 text-xs mt-2">{errors}</p>}

            {/* Loading Spinner */}
            {loading && <p className="text-sm text-gray-500 mt-2">Uploading...</p>}
          </div>
        </div>
      </div>

      {/* ToastContainer to display toast notifications */}
      <ToastContainer />
    </div>
  );
};

export default MediaUpload;
