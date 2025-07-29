import { FaUserCircle } from "react-icons/fa";

export default function Profile() {
  return (
    <div className="p-4 flex justify-center items-center min-h-[60vh]">
      <div className="bg-white rounded-2xl shadow-lg p-8 max-w-md w-full flex flex-col items-center">
        <FaUserCircle className="text-sky-400 text-6xl mb-4" />
        <h1 className="text-2xl font-bold mb-2 text-black">Hồ sơ cá nhân</h1>
        <div className="w-full mt-4">
          <div className="bg-sky-50 rounded-lg p-4 mb-2">
            <span className="font-semibold text-black">Họ và tên:</span> <span className="text-black">Nguyễn Văn A</span>
          </div>
          <div className="bg-sky-50 rounded-lg p-4 mb-2">
            <span className="font-semibold text-black">Email:</span> <span className="text-black">nguyenvana@email.com</span>
          </div>
          <div className="bg-sky-50 rounded-lg p-4 mb-2">
            <span className="font-semibold text-black">Tuổi:</span> <span className="text-black">25</span>
          </div>
          <div className="bg-sky-50 rounded-lg p-4 mb-2">
            <span className="font-semibold text-black">Giới tính:</span> <span className="text-black">Nam</span>
          </div>
          <div className="bg-sky-50 rounded-lg p-4">
            <span className="font-semibold text-black">Địa chỉ:</span> <span className="text-black">Hà Nội</span>
          </div>
        </div>
      </div>
    </div>
  );
}
