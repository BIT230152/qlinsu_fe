import { FaKey, FaEnvelope, FaTrash } from "react-icons/fa";

export default function Settings() {
  return (
    <div className="p-4 flex justify-center items-center min-h-[60vh]">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-sky-600">Cài đặt</h1>
        <ul className="space-y-4">
          <li className="flex items-center gap-3 bg-sky-50 p-4 rounded-lg">
            <FaKey className="text-sky-400 text-xl" />
            <span className="text-black font-medium">Thay đổi mật khẩu</span>
          </li>
          <li className="flex items-center gap-3 bg-sky-50 p-4 rounded-lg">
            <FaEnvelope className="text-sky-400 text-xl" />
            <span className="text-black font-medium">Cập nhật email</span>
          </li>
          <li className="flex items-center gap-3 bg-sky-50 p-4 rounded-lg">
            <FaTrash className="text-red-400 text-xl" />
            <span className="text-black font-medium">Xóa tài khoản</span>
          </li>
        </ul>
      </div>
    </div>
  );
}
