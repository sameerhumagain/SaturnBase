import React, { useState, useEffect, useMemo } from "react";
import { FaChevronDown } from "react-icons/fa";
import SearchFilter from "../../components/SearchFilter";
import product_img from "../../../assets/Product/hemp_bag.png";
import MediaDetailsModal from "./MediaDetailsModal";
import MediaUpload from "../../../components/UI/MediaUpload";
import createAxiosInstance from "../../../api/axiosInstance";
import { toast } from "react-toastify"; // Import toast

const defaultItems = [
  {
    id: 1,
    src: product_img,
    title: "Sample Image 1",
    altText: "A beautiful landscape",
  },
  {
    id: 2,
    src: product_img,
    title: "Sample Image 2",
    altText: "A gorgeous sunset",
  },
  {
    id: 3,
    src: product_img,
    title: "Sample Image 3",
    altText: "A snowy mountain",
  },
  { id: 4, src: product_img, title: "Sample Image 4", altText: "Ocean view" },
  {
    id: 5,
    src: product_img,
    title: "Sample Image 5",
    altText: "A bright forest",
  },
  {
    id: 6,
    src: product_img,
    title: "Sample Image 6",
    altText: "City skyline at night",
  },
  {
    id: 7,
    src: product_img,
    title: "Sample Image 7",
    altText: "A bustling street market",
  },
  {
    id: 8,
    src: product_img,
    title: "Sample Image 8",
    altText: "A desert with dunes",
  },
  {
    id: 9,
    src: product_img,
    title: "Sample Image 9",
    altText: "A calm beach at sunrise",
  },
  {
    id: 10,
    src: product_img,
    title: "Sample Image 10",
    altText: "A tranquil lake surrounded by mountains",
  },
  {
    id: 11,
    src: product_img,
    title: "Sample Image 11",
    altText: "Night sky with stars",
  },
  {
    id: 12,
    src: product_img,
    title: "Sample Image 12",
    altText: "A dense forest",
  },
  {
    id: 13,
    src: product_img,
    title: "Sample Image 13",
    altText: "Rolling hills in the countryside",
  },
  {
    id: 14,
    src: product_img,
    title: "Sample Image 14",
    altText: "A river flowing through a valley",
  },
  {
    id: 15,
    src: product_img,
    title: "Sample Image 15",
    altText: "A snow-covered village",
  },
  {
    id: 16,
    src: product_img,
    title: "Sample Image 16",
    altText: "A majestic waterfall",
  },
  {
    id: 17,
    src: product_img,
    title: "Sample Image 17",
    altText: "A field of wildflowers",
  },
  {
    id: 18,
    src: product_img,
    title: "Sample Image 18",
    altText: "A snowy forest path",
  },
  {
    id: 19,
    src: product_img,
    title: "Sample Image 19",
    altText: "A mountain range at dusk",
  },
  {
    id: 20,
    src: product_img,
    title: "Sample Image 20",
    altText: "A misty morning in the woods",
  },
];

const MediaList = () => {
  const [bulkActionOpen, setBulkActionOpen] = useState(false);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedMedia, setSelectedMedia] = useState(null);
  const [mediaItems, setMediaItems] = useState([]);
  const [isAddMediaModalOpen, setIsAddMediaModalOpen] = useState(false);
  const axiosInstance = useMemo(() => createAxiosInstance(), []);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchMedia = async () => {
      try {
        const response = await axiosInstance.get("/media/");
        setMediaItems(response.data);
      } catch (error) {
        console.error("Error fetching Media:", error);
      }
    };

    fetchMedia();
  }, []);

  const handleBulkAction = (action) => {
    console.log(`Performing ${action} on Products:`, selectedProducts);
    setBulkActionOpen(false);
  };

  // Handle selecting a media item (checkbox)
  const handleSelectMedia = (id) => {
    setSelectedProducts((prev) =>
      prev.includes(id)
        ? prev.filter((productId) => productId !== id)
        : [...prev, id]
    );
  };

  // Open modal for editing a specific media item
  const handleOpenDetails = (media) => {
    setSelectedMedia(media);
    setIsModalOpen(true);
  };

  // Close modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedMedia(null);
  };

  const handleAddMedia = (newMedia) => {
    // Add the newly uploaded media to the list
    setMediaItems((prevItems) => [
      {
        id: prevItems.length + 1,
        src: newMedia.url,
        title: newMedia.title,
        altText: newMedia.altText,
      },
      ...prevItems,
    ]);
  };

  const handleSaveChanges = async (updatedMedia) => {
    console.log("Updated Media Details:", updatedMedia);

    if (!updatedMedia) {
      console.error("No media selected");
      toast.error("No media selected!"); // Show error toast
      return;
    }

    const formDataToSend = new FormData();
    formDataToSend.append("title", updatedMedia.title || "");
    formDataToSend.append("altText", updatedMedia.altText || "");
    formDataToSend.append("description", updatedMedia.description || "");

    if (updatedMedia.file && updatedMedia.file instanceof File) {
      formDataToSend.append("file", updatedMedia.file);
    }

    try {
      const response = await axiosInstance.put(
        `/media/${updatedMedia.id}/`,
        formDataToSend,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.status === 200 || response.status === 201) {
        setMediaItems((prevItems) =>
          prevItems.map((item) =>
            item.id === updatedMedia.id ? response.data : item
          )
        );
        console.log("Saved Media Alt Text:", updatedMedia.altText);
        toast.success("Media details updated successfully!"); 
        closeModal();
      }
    } catch (error) {
      console.error("Error saving changes:", error);
      toast.error("Failed to save media changes. Please try again."); 
      setErrors({ general: "An error occurred while saving the media." });
    }
  };

  return (
    <div className="flex-1 bg-gray-100 px-10 p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="media-management">
          <h1 className="text-3xl font-semibold text-gray-900">
            Media Management
          </h1>
          <p className="font-normal text-gray-600 mt-2">
            Manage all Media, including their properties, permissions, and
            statuses.
          </p>
        </div>
      </div>
      <div>
        <MediaUpload
          accept=".jpg, .png, .gif"
          uploadUrl="/media/"
          onUploadSuccess={(response) => {
            console.log("File uploaded successfully:", response);
            // Handle success (e.g., update UI, display success message, etc.)
          }}
        />

        <SearchFilter placeholder={"Media"} />

        <div className="bg-white rounded-lg shadow-sm overflow-hidden">
          <div className="p-4 flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <h2 className="text-xl font-semibold">Media Gallery</h2>
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
                    <div
                      className="py-1"
                      role="menu"
                      aria-orientation="vertical"
                    >
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
          </div>

          <div className="grid grid-cols-10 gap-6 p-4">
            {mediaItems.map((media) => (
              <div
                key={media.id}
                className="relative group cursor-pointer"
                onClick={() => handleOpenDetails(media)} // Open the modal to view details
              >
                <div className="mb-4 relative">
                  {/* Conditionally render the image based on whether media.file is a File or a URL */}
                  {media.file instanceof File ? (
                    <img
                      src={URL.createObjectURL(media.file)} // Use Object URL if it's a File
                      alt={media.altText || media.title || "Media"}
                      className="w-full h-32 object-cover rounded-lg shadow-md"
                    />
                  ) : (
                    <img
                      src={`http://127.0.0.1:8000${media.file}`}
                      alt={media.altText || media.title || "Media"}
                      className="w-full h-32 object-cover rounded-lg shadow-md"
                    />
                  )}

                  <div className="absolute bottom-2 left-2 right-2 text-white text-sm font-semibold">
                    {media.title}
                  </div>
                  <input
                    type="checkbox"
                    checked={selectedProducts.includes(media.id)}
                    onChange={() => handleSelectMedia(media.id)}
                    className="absolute top-2 right-2"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for Editing Media */}
      {isModalOpen && selectedMedia && (
        <MediaDetailsModal
          media={selectedMedia}
          onClose={closeModal}
          onSave={(updatedData) => handleSaveChanges(updatedData)} // Pass updated data
        />
      )}
    </div>
  );
};

export default MediaList;
