import { useState } from "react";
import type { User } from "../../types/user";
import { addUser } from "./datatable";

interface AddFormProps {
  onSuccess: () => void;
  onCancel: () => void;
}

export default function AddForm({ onSuccess, onCancel }: AddFormProps) {
  const [form, setForm] = useState<Omit<User, "id">>({
    name: "",
    email: "",
    age: 0,
    gender: "",
    address: "",
    role:null,
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: name === "age" ? Number(value) : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await addUser(form);
      onSuccess();
    } catch (err) {
      setError("Không thể thêm người dùng");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-30 z-50 t">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md space-y-4"
      >
        <h2 className="text-xl font-bold mb-2 text-black">Thêm người dùng mới</h2>
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
          className="w-full px-3 py-2 border rounded"
        />
        <div className="flex gap-2 justify-end mt-4">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 bg-gray-300 rounded hover:bg-gray-400"
            disabled={loading}
          >
            Hủy
          </button>
          <button
            type="submit"
            className="px-4 py-2 bg-sky-500 text-white rounded hover:bg-sky-600"
            disabled={loading}
          >
            {loading ? "Đang thêm..." : "Thêm"}
          </button>
        </div>
      </form>
    </div>
  );
}

