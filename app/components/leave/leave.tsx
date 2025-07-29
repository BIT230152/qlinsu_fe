export default function Leave() {
  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-sky-600">Nghỉ phép</h1>
      <div className="flex justify-between mb-6 gap-4">
        <div className="flex-1 bg-sky-100 rounded-xl p-4 text-center shadow">
          <div className="text-3xl font-bold text-sky-600">2</div>
          <div className="text-black">Số ngày đã nghỉ</div>
        </div>
        <div className="flex-1 bg-sky-100 rounded-xl p-4 text-center shadow">
          <div className="text-3xl font-bold text-sky-600">3</div>
          <div className="text-black">Ngày phép còn lại</div>
        </div>
      </div>
      <div className="rounded-xl shadow overflow-hidden">
        <table className="table-auto w-full text-left">
          <thead>
            <tr className="bg-sky-200 text-sky-800">
              <th className="p-3">Bắt đầu</th>
              <th className="p-3">Kết thúc</th>
              <th className="p-3">Lý do</th>
              <th className="p-3">Thực trạng</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr>
              <td className="p-3">2/5</td>
              <td className="p-3">2/5</td>
              <td className="p-3">Du lịch</td>
              <td className="p-3"><span className="bg-green-100 text-green-700 px-2 py-1 rounded-full text-xs">Đã duyệt</span></td>
            </tr>
            <tr>
              <td className="p-3">20/3</td>
              <td className="p-3">22/3</td>
              <td className="p-3">Ốm</td>
              <td className="p-3"><span className="bg-yellow-100 text-yellow-700 px-2 py-1 rounded-full text-xs">Chờ duyệt</span></td>
            </tr>
            <tr>
              <td className="p-3">5/4</td>
              <td className="p-3">5/4</td>
              <td className="p-3">Việc riêng</td>
              <td className="p-3"><span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs">Từ chối</span></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
