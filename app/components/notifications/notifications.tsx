import { IoIosNotifications } from "react-icons/io";

export default function Notifications() {
  return (
    <div className="p-4 max-w-xl mx-auto">
      <div className="flex items-center gap-2 mb-4">
        <IoIosNotifications className="text-sky-500 text-2xl" />
        <h1 className="text-xl font-bold">Thông báo</h1>
      </div>
      <div className="space-y-3">
        <div className="bg-sky-50 p-4 rounded-xl shadow flex items-center justify-between">
          <span className="text-black">Bạn có thông báo mới!</span>
          <span className="bg-sky-200 text-sky-700 px-2 py-1 rounded text-xs">1 giờ trước</span>
        </div>
        <div className="bg-sky-50 p-4 rounded-xl shadow flex items-center justify-between">
          <span className="text-black">Cập nhật dữ liệu thành công.</span>
          <span className="bg-sky-200 text-sky-700 px-2 py-1 rounded text-xs">12 giờ trước</span>
        </div>
        <div className="bg-sky-50 p-4 rounded-xl shadow flex items-center justify-between">
          <span className="text-black">Chào mừng bạn quay lại!</span>
          <span className="bg-sky-200 text-sky-700 px-2 py-1 rounded text-xs">1 ngày trước</span>
        </div>
      </div>
    </div>
  );
}
