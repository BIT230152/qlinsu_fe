export default function Salary() {
  return (
    <div className="p-4 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-6 text-sky-600">Phiếu lương</h1>
      <div className="rounded-xl shadow overflow-hidden">
        <table className="table-auto w-full text-left text-black">
          <thead>
            <tr className="bg-sky-200 text-sky-800 font-bold">
              <th className="p-3">Khoản</th>
              <th className="p-3">Số tiền</th>
            </tr>
          </thead>
          <tbody className="bg-white">
            <tr>
              <td className="p-3">Lương cơ bản</td>
              <td className="p-3">20.000.000</td>
            </tr>
            <tr>
              <td className="p-3">Thưởng</td>
              <td className="p-3">2.000.000</td>
            </tr>
            <tr>
              <td className="p-3">Bảo hiểm</td>
              <td className="p-3">-1.500.000</td>
            </tr>
            <tr>
              <td className="p-3">Tạm ứng</td>
              <td className="p-3">-3.000.000</td>
            </tr>
            <tr className="font-bold bg-sky-50 text-sky-700">
              <td className="p-3">Thực lãnh</td>
              <td className="p-3">17.500.000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
