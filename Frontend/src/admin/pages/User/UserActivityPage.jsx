import React, { useState } from "react";
import {
  FaComment,
  FaFile,
  FaCode,
  FaCheckCircle,
  FaTools,
  FaFileAlt
} from "react-icons/fa";
import SearchFilter from "../../components/SearchFilter";
import ProductPagination from "../../../components/UI/ProductPagination";

const UserActivityPage = () => {
  const [activities, setActivities] = useState([
    {
      id: 1,
      time: "9:42 AM",
      icon: <FaComment className="text-yellow-600" />,
      user: "Grant McNulty",
      action: "Comment by Grant McNulty on Website UI Redesign:",
      description:
        "Hi, Greg. I have a suggestion regarding the button placements on the homepage. Could we explore more prominent positioning?",
      status: "Comment awaiting approval",
      userAvatar: "https://api.dicebear.com/8.x/initials/svg?seed=GM",
    },
    {
      id: 2,
      time: "11:14 AM",
      icon: <FaFile className="text-gray-500" />,
      user: "Nauris Pūkis",
      action: "10 updates deployed to Website Dashboard",
      description: "Implemented new filters for data visualization.",
      status: "Administrator",
      userAvatar: "https://api.dicebear.com/8.x/initials/svg?seed=NP",
    },
    {
      id: 3,
      time: "1:22 PM",
      icon: <FaFile className="text-gray-500" />,
      user: "Nauris Pūkis",
      action: "Backup completed for Staging Site",
      description: "Full site backup and database sync completed.",
      status: "Administrator",
      userAvatar: "https://api.dicebear.com/8.x/initials/svg?seed=NP",
    },
    {
      id: 4,
      time: "3:09 PM",
      icon: <FaCode className="text-blue-500" />,
      user: "Alice Johnson",
      action: "Code commit: Refactor of homepage layout",
      description: "Refactored CSS and HTML to improve mobile responsiveness.",
      status: "Developer",
      userAvatar: "https://api.dicebear.com/8.x/initials/svg?seed=AJ",
    },
    {
      id: 5,
      time: "4:30 PM",
      icon: <FaCheckCircle className="text-green-600" />,
      user: "Alice Johnson",
      action: "Pull request approved for Contact Form update",
      description: "Form validation improvements and UI tweaks finalized.",
      status: "Developer",
      userAvatar: "https://api.dicebear.com/8.x/initials/svg?seed=AJ",
    },
    {
      id: 6,
      time: "5:15 PM",
      icon: <FaFile className="text-gray-500" />,
      user: "Eve Smith",
      action: "Documented change log for Homepage revamp",
      description: "Added sections for new features and layout updates.",
      status: "Content Manager",
      userAvatar: "https://api.dicebear.com/8.x/initials/svg?seed=ES",
    },
    {
      id: 7,
      time: "6:03 PM",
      icon: <FaComment className="text-yellow-600" />,
      user: "John Doe",
      action: "Comment by John Doe on SEO Optimization:",
      description:
        "Can we ensure the mobile optimization covers the new blog layout?",
      status: "Comment awaiting approval",
      userAvatar: "https://api.dicebear.com/8.x/initials/svg?seed=JD",
    },
    {
      id: 8,
      time: "7:25 PM",
      icon: <FaTools className="text-teal-500" />,
      user: "Sophia Lee",
      action: "Site maintenance completed successfully",
      description: "Database optimizations and minor security patch applied.",
      status: "System Administrator",
      userAvatar: "https://api.dicebear.com/8.x/initials/svg?seed=SL",
    },
    {
      id: 9,
      time: "8:00 PM",
      icon: <FaComment className="text-yellow-600" />,
      user: "David Kim",
      action: "Feedback request from David Kim on Blog Post layout",
      description:
        "Do you think the sidebar would be better on the left instead?",
      status: "Feedback awaiting response",
      userAvatar: "https://api.dicebear.com/8.x/initials/svg?seed=DK",
    },
    {
      id: 10,
      time: "9:30 PM",
      icon: <FaFileAlt className="text-gray-500" />,
      user: "Olivia Zhang",
      action: "Content revision for About Us page",
      description: "Updated team bios and mission statement for clarity.",
      status: "Content Manager",
      userAvatar: "https://api.dicebear.com/8.x/initials/svg?seed=OZ",
    },
  ]);

  return (
    <div className="flex-1 bg-gray-100 px-10 py-6">
      
      <SearchFilter placeholder={"User Activity"} />

      <div className="md:col-span-3 bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-6 border-b flex justify-between items-center">
          <div>
            <h2 className="text-xl font-semibold">Activity Timeline</h2>
            <p className="text-gray-500 text-sm">May 20, 2020 — Today</p>
          </div>
        </div>

        <div className="divide-y">
          {activities.map((activity) => (
            <div key={activity.id} className="p-6 hover:bg-gray-50 transition">
              <div className="flex items-start space-x-4">
                <img
                  src={activity.userAvatar}
                  alt={activity.user}
                  className="w-10 h-10 rounded-full"
                />
                <div className="flex-grow">
                  <div className="flex items-center mb-2">
                    <span className="font-semibold mr-2">{activity.user}</span>
                    {activity.status && (
                      <span className="text-sm text-gray-500">
                        {activity.status}
                      </span>
                    )}
                  </div>
                  <div className="space-y-1">
                    <p className="text-gray-800 font-medium">
                      {activity.action}
                    </p>
                    {activity.description && (
                      <p className="text-gray-600 text-sm">
                        {activity.description}
                      </p>
                    )}
                  </div>
                </div>
                <div className="text-gray-500 text-sm self-start">
                  {activity.time}
                </div>
              </div>
            </div>
          ))}
        </div>

        <ProductPagination />
      </div>
    </div>
  );
};

export default UserActivityPage;
