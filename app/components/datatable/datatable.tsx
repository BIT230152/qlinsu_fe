import React, { useState, useEffect } from "react";
import { getUser, updateUser, deleteUser } from "./datatable.ts";
import { Pagination } from "./Pagination";
import type { User } from "../../types/user";
import AddForm from "./AddForm";

export default function DataTable() {
  // Thêm states cho phân trang
  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5); // Số items trên mỗi trang

  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [searchTerm, setSearchTerm] = useState("");

  // Thêm state cho sorted users
  const [sortedUsers, setSortedUsers] = useState<User[]>([]);

  // Handler cho search
  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };

  // Filter users dựa trên search term
  const filteredUsers = (sortedUsers.length ? sortedUsers : users).filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.email.toLowerCase().includes(searchTerm.toLowerCase())
  );

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await getUser();
        const userData = response.data || response;
        setUsers(Array.isArray(userData) ? userData : [userData]);
        setLoading(false);
      } catch (err) {
        setError("Không thể tải dữ liệu người dùng");
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  // Thêm effect để reset sorted users khi users thay đổi
  useEffect(() => {
    setSortedUsers([]);
  }, [users]);

  // Handler for sorting

  // Thêm handlers cho actions
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [showEditForm, setShowEditForm] = useState(false);
  const [saveError, setSaveError] = useState<string | null>(null);
  const [showAddForm, setShowAddForm] = useState(false);

  const handleAdd = () => {
    setShowAddForm(true);
  };

  const handleView = (id: number) => {
    console.log("View user:", id);
  };

  const handleEdit = (id: number) => {
    console.log("edit user:", id);
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Are you sure you want to delete this user?")) {
      try {
        await deleteUser(id);
        setUsers(users.filter((user) => user.id !== id));
      } catch (error) {
        console.error("Error deleting user:", error);
        // Handle error (show message to user)
      }
    }
  };

  // Tính toán các items cho trang hiện tại
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredUsers.slice(indexOfFirstItem, indexOfLastItem);

  // Tính tổng số trang
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);

  // Handler cho việc thay đổi trang
  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  // Thêm handler cho việc thay đổi số lượng items per page
  const handleItemsPerPageChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setItemsPerPage(Number(e.target.value));
    setCurrentPage(1); // Reset về trang 1 khi thay đổi số lượng items
  };

  if (loading)
    return (
      <div className="p-8 flex justify-center items-center">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-sky-500"></div>
        <span className="ml-3 text-sky-600 font-medium">Đang tải...</span>
      </div>
    );
  if (error)
    return <div className="p-4 text-red-500 font-semibold">{error}</div>;

  return (
    <div className="p-4 w-full">
      <div className="bg-white rounded-xl  shadow-md">
        {/* Card Header */}
        <div className="p-4 border-b flex items-center justify-between gap-4 ">
          <div className="flex-1 max-w-md ">
            <div className="relative">
              <input
                type="text"
                placeholder="Search Users..."
                value={searchTerm}
                onChange={handleSearch}
                className="w-full px-4 py-2 rounded-lg border focus:outline-none focus:ring-2 focus:ring-sky-500 text-gray-700 placeholder-gray-400"
              />
              <span className="absolute right-3 top-2.5 text-gray-400">🔍</span>
            </div>
            
          </div>
          <button
              onClick={handleAdd}
              className="p-2 bg-sky-500 text-white rounded-lg hover:bg-sky-600"
            >
              Thêm người dùng
            </button>

          {/* Control Buttons */}
          <div className="flex items-center gap-2">
            <div className="relative"></div>
          </div>
        </div>
        {/* Hiển thị AddForm khi showAddForm = true */}
        {showAddForm && (
          <AddForm
            onSuccess={async () => {
              // Reload users
              try {
                const response = await getUser();
                const userData = response.data || response;
                setUsers(Array.isArray(userData) ? userData : [userData]);
              } catch (err) {
                setError("Không thể tải dữ liệu người dùng");
              }
              setShowAddForm(false);
            }}
            onCancel={() => setShowAddForm(false)}
          />
        )}

        {/* Table với dữ liệu đã được filter */}
        <div className="shadow overflow">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-sky-200 text-sky-800">
                <th className="p-3">ID</th>
                <th className="p-3 ">Tên</th>
                <th className="p-3">Email</th>
                <th className="p-3 ">Tuổi</th>
                <th className="p-3">Giới tính</th>
                <th className="p-3">Địa chỉ</th>
                <th className="p-3">Vai trò</th>
                <th className="p-3">Thao tác</th>
              </tr>
            </thead>
            <tbody className="bg-white text-black">
              {currentItems.length > 0 ? (
                currentItems.map((user) => (
                  <tr key={user.id} className="hover:bg-sky-50">
                    <td className="p-3">{user.id}</td>
                    <td className="p-3">{user.name}</td>
                    <td className="p-3">{user.email}</td>
                    <td className="p-3">{user.age}</td>
                    <td className="p-3">{user.gender}</td>
                    <td className="p-3">{user.address}</td>
                    <td className="p-3">{user.role}</td>
                    <td className="p-3">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleView(user.id)}
                          className="p-1.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                          title="Xem"
                        >
                          👁️
                        </button>
                        <button
                          onClick={() => handleEdit(user.id)}
                          className="p-1.5 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                          title="Sửa"
                        >
                          ✏️
                        </button>
                        <button
                          onClick={() => handleDelete(user.id)}
                          className="p-1.5 bg-red-500 text-white rounded-lg hover:bg-red-600"
                          title="Xóa"
                        >
                          🗑️
                        </button>
                      </div>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={8} className="p-3 text-center text-gray-500">
                    Không tìm thấy người dùng nào
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Thêm phân trang */}
        {filteredUsers.length > 0 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            itemsPerPage={itemsPerPage}
            totalItems={filteredUsers.length}
            startIndex={indexOfFirstItem}
            endIndex={indexOfLastItem}
            onPageChange={handlePageChange}
            onItemsPerPageChange={handleItemsPerPageChange}
          />
        )}
      </div>
    </div>
  );
}
