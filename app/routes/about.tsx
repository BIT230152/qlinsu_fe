import { useState } from "react";
import { Link } from "react-router";
import { FaRegBell, FaRegCalendarCheck, FaRegMoneyBillAlt, FaRegCheckCircle } from "react-icons/fa";

export default function About() {
  const [showNotification, setShowNotification] = useState(false);

  return (
    <div className="min-h-[60vh] flex items-center justify-center bg-white p-3">
      <div className="bg-sky-100 p-8 rounded-2xl shadow-xl w-full max-w-2xl">
        <h1 className="text-3xl font-bold text-sky-600 mb-4">Xin chào!</h1>
        <div className="flex flex-wrap justify-around gap-2 mb-6">
          <Link
            to="/leave"
            className="bg-sky-200 hover:bg-sky-300 transition rounded-full px-4 py-2 text-black text-sm font-semibold shadow"
          >
            <FaRegCalendarCheck className="inline mr-1 text-sky-600" /> nộp đơn xin nghỉ
          </Link>
          <Link
            to="/salary"
            className="bg-sky-200 hover:bg-sky-300 transition rounded-full px-4 py-2 text-black text-sm font-semibold shadow"
          >
            <FaRegMoneyBillAlt className="inline mr-1 text-sky-600" /> xem phiếu lương
          </Link>
          <Link
            to=""
            className="bg-sky-200 hover:bg-sky-300 transition rounded-full px-4 py-2 text-black text-sm font-semibold shadow"
          >
            <FaRegCheckCircle className="inline mr-1 text-sky-600" /> check-in
          </Link>
          <Link
            to="/timesheet"
            className="bg-sky-200 hover:bg-sky-300 transition rounded-full px-4 py-2 text-black text-sm font-semibold shadow"
          >
            <FaRegBell className="inline mr-1 text-sky-600" /> lịch đi làm
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="flex items-center justify-between bg-white p-4 rounded-xl shadow mb-4">
            <div>
              <p className="text-sm text-black font-medium">Lịch nghỉ phép</p>
              <p className="text-sm text-black">Tháng 6</p>
            </div>
            <button className="text-xl text-sky-500">&gt;</button>
          </div>
          <div>
            <button
              onClick={() => setShowNotification(!showNotification)}
              className="bg-white p-3 rounded-xl w-full flex items-center justify-center gap-2 mb-4 shadow"
            >
              <span>📢</span>
              <span className="text-sm  text-black font-medium">
                Hiển thị tin thông báo
              </span>
            </button>

            {showNotification && (
              <div className="bg-yellow-100 text-yellow-800 p-2 rounded-xl text-sm mb-4 text-center shadow">
                Đây là thông báo nội bộ cho nhân viên.
              </div>
            )}

            <div className="bg-white p-6 rounded-xl flex items-center justify-center flex-col shadow">
              <p className="text-sm text-black font-medium mb-2">Hợp đồng</p>
              <div className="bg-sky-500 rounded-full p-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="white"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M4.5 12.75l6 6 9-13.5"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
