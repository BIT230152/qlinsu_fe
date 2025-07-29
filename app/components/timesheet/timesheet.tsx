export default function Timesheet() {
  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-sky-600">Chấm công cá nhân</h1>
      <div className="rounded-xl shadow overflow-hidden">
        <table className="table-auto w-full text-left">
          <thead>
            <tr className="bg-sky-200 text-sky-800">
              <th className="p-3">Ngày</th>
              <th className="p-3">Giờ vào</th>
              <th className="p-3">Giờ ra</th>
              <th className="p-3">Ghi chú</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr className="hover:bg-sky-50">
              <td className="p-3">01/05</td>
              <td className="p-3">08:00</td>
              <td className="p-3">16:30</td>
              <td className="p-3">Đi làm</td>
            </tr>
            <tr className="hover:bg-sky-50">
              <td className="p-3">02/05</td>
              <td className="p-3">08:00</td>
              <td className="p-3">16:30</td>
              <td className="p-3">Đi làm</td>
            </tr>
            <tr className="hover:bg-sky-50">
              <td className="p-3">03/05</td>
              <td className="p-3">08:00</td>
              <td className="p-3">17:00</td>
              <td className="p-3">Nghỉ</td>
            </tr>
            <tr className="hover:bg-sky-50">
              <td className="p-3">04/05</td>
              <td className="p-3">—</td>
              <td className="p-3">—</td>
              <td className="p-3">—</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
