import { useState, useEffect } from "react";
import type { User } from "../../types/user";
import { updateUser } from "./datatable";

interface EditFormProps {
  user: User;
  onSuccess: () => void;
  onCancel: () => void;
}

export default function EditForm({ user, onSuccess, onCancel }: EditFormProps) {
  // Kiểm tra nếu user không hợp lệ
  if (!user || !user.id) {
    return (
      <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md space-y-4">
          <h2 className="text-xl font-bold mb-2 text-black">
            Lỗi
          </h2>
          <p className="text-red-500">Không tìm thấy thông tin người dùng để chỉnh sửa</p>
          <div className="flex justify-end mt-4">
            <button
              onClick={onCancel}
              className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    );
  }

  const [form, setForm] = useState<User>({
    id: user.id,
    name: user.name || "",
    email: user.email || "",
    age: user.age || 0,
    gender: user.gender || "",
    address: user.address || "",
    role: user.role || null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Cập nhật form khi user thay đổi
  useEffect(() => {
    if (user) {
      setForm({
        id: user.id,
        name: user.name || "",
        email: user.email || "",
        age: user.age || 0,
        gender: user.gender || "",
        address: user.address || "",
        role: user.role || null,
      });
    }
  }, [user]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "age" || name === "role" ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await updateUser(user.id, form);
      onSuccess();
    } catch (err) {
      setError("Không thể cập nhật người dùng");
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    onCancel();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md space-y-4"
      >
        <h2 className="text-xl font-bold mb-2 text-black">
          Sửa thông tin người dùng
        </h2>
        {error && <div className="text-red-500">{error}</div>}
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Tên"
          className="w-full px-3 py-2 border rounded"
          required
        />
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          type="email"
          className="w-full px-3 py-2 border rounded"
          required
        />
        <input
          name="age"
          value={form.age}
          onChange={handleChange}
          placeholder="Tuổi"
          type="number"
          min={0}
          className="w-full px-3 py-2 border rounded text-black"
          required
        />
        <input
          name="gender"
          value={form.gender}
          onChange={handleChange}
          placeholder="Giới tính"
          className="w-full px-3 py-2 border rounded"
          required
        />
        <input
          name="address"
          value={form.address}
          onChange={handleChange}
          placeholder="Địa chỉ"
          className="w-full px-3 py-2 border rounded"
          required
        />
        <input
          name="role"
          value={form.role ?? ""}
          onChange={handleChange}
          placeholder="Vai trò"
          type="number"
          className="w-full px-3 py-2 border rounded"
        />
        <div className="flex gap-2 justify-end mt-4">
          <button
            type="button"
            onClick={handleCancel}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
          >
            Hủy
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600"
            disabled={loading}
          >
            {loading ? "Đang cập nhật..." : "Cập nhật"}
          </button>
        </div>
      </form>
    </div>
  );
}
