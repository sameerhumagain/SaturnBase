import React, { useState } from "react";

const MediaDetailsModal = ({ media, onClose, onSave }) => {
  const [title, setTitle] = useState(media.title);
  const [altText, setAltText] = useState(media.altText);
  const [description, setDescription] = useState(media.description || "");

  return (
    <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl w-2/3 p-6">
        <div className="flex justify-between items-center">
          <h3 className="text-xl font-semibold">Media Details</h3>
          <button onClick={onClose} className="text-red-600 font-bold text-xl">
            ×
          </button>
        </div>

        {/* Flex container for Image and Form fields */}
        <div className="flex-grow">
          <div className="flex mt-6 space-x-6">
            {/* Image on the left */}
            <div className="flex-none w-1/2">
              {media.file instanceof File ? (
                <img
                  src={URL.createObjectURL(media.file)}
                  alt={altText || title || "Media"}
                  className="w-full h-auto object-cover rounded-lg"
                />
              ) : (
                <img
                  src={`http://127.0.0.1:8000${media.file}`}
                  alt={altText || title || "Media"}
                  className="w-full h-auto object-cover rounded-lg"
                />
              )}
            </div>

            {/* Form fields on the right */}
            <div className="" style={{ width: "33%" }}>
              {/* Title Field */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Title
                </label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter media title"
                />
              </div>

              {/* Alt Text Field */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Alt Text
                </label>
                <input
                  type="text"
                  value={altText}
                  onChange={(e) => setAltText(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter alt text"
                />
              </div>

              {/* Description Field */}
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700">
                  Description
                </label>
                <textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter media description"
                  rows="4"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Save and Close Button */}
        <div className="mt-4 flex justify-between">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition-all duration-300"
          >
            Close
          </button>
          <button
            onClick={() => onSave({ ...media, title, altText, description })}
            className="px-4 py-2 bg-primary text-white rounded-md hover:bg-opacity-90 transition-all duration-300"
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  );
};

export default MediaDetailsModal;
