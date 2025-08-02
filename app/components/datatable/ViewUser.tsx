import React from "react";
import { fetchUserById } from "./datatable";
import type { User } from "../../types/user";

interface ViewUserProps {
  user: User | null;
  onClose: () => void;
}

export default function ViewUser({ user, onClose }: ViewUserProps) {
  // Debug: Log user data
  console.log("ViewUser - user data:", user);
  
  // Kiểm tra nếu user không tồn tại hoặc không có dữ liệu cần thiết
  if (!user || !user.id || !user.name) {
    console.log("ViewUser - user is null, undefined, or missing required fields");
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md space-y-4">
          <h2 className="text-xl font-bold mb-2 text-black">
            Lỗi
          </h2>
          <p className="text-red-500">Không tìm thấy thông tin người dùng hoặc dữ liệu không hợp lệ</p>
          <div className="flex justify-end mt-4">
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    );
  }

  // Helper function để hiển thị role
  const getRoleDisplay = (role: number | null) => {
    if (role === null || role === undefined) return "Chưa có";
    switch (role) {
      case 1: return "Admin";
      case 2: return "User";
      case 3: return "Manager";
      default: return `Role ${role}`;
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md space-y-4">
        <h2 className="text-xl font-bold mb-2 text-black">
          Chi tiết người dùng
        </h2>
        
        <div className="space-y-3">
          <div>
            <label className="block text-sm font-medium text-gray-700">ID:</label>
            <p className="mt-1 text-sm text-gray-900">{user.id || "N/A"}</p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Tên:</label>
            <p className="mt-1 text-sm text-gray-900">{user.name || "N/A"}</p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Email:</label>
            <p className="mt-1 text-sm text-gray-900">{user.email || "N/A"}</p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Tuổi:</label>
            <p className="mt-1 text-sm text-gray-900">{user.age || "N/A"}</p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Giới tính:</label>
            <p className="mt-1 text-sm text-gray-900">{user.gender || "N/A"}</p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Địa chỉ:</label>
            <p className="mt-1 text-sm text-gray-900">{user.address || "N/A"}</p>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">Vai trò:</label>
            <p className="mt-1 text-sm text-gray-900">{getRoleDisplay(user.role)}</p>
          </div>
        </div>
        
        <div className="flex justify-end mt-4">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
} 