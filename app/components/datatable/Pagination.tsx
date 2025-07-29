interface PaginationProps {
  currentPage: number;
  totalPages: number;
  itemsPerPage: number;
  totalItems: number;
  startIndex: number;
  endIndex: number;
  onPageChange: (page: number) => void;
  onItemsPerPageChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

export const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  itemsPerPage,
  totalItems,
  startIndex,
  endIndex,
  onPageChange,
  onItemsPerPageChange,
}) => {

    
  return (
    <div className="flex items-center justify-between gap-2 mt-4 pb-4 px-4">
      {/* Dropdown cho items per page */}
      <div className="flex items-center gap-2">
        <label htmlFor="itemsPerPage" className="text-sm text-gray-600">
          Hiển thị:
        </label>
        <select
          id="itemsPerPage"
          value={itemsPerPage}
          onChange={onItemsPerPageChange}
          className="border rounded-lg px-2 py-1 text-sm focus:outline-none focus:ring-2 focus:ring-sky-500 text-black"
        >
          <option value={5}>5</option>
          <option value={10}>10</option>
          <option value={15}>15</option>
        </select>
      </div>

      {/* Phân trang ở giữa */}
      <div className="flex items-center gap-2">
        <button
          onClick={() => onPageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-3 py-1 rounded-lg border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 text-black"
        >
          ←
        </button>

        {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`px-3 py-1 rounded-lg text-black ${
              currentPage === page
                ? "bg-sky-500 text-black"
                : "hover:bg-gray-100"
            }`}
          >
            {page}
          </button>
        ))}

        <button
          onClick={() => onPageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-3 py-1 rounded-lg border disabled:opacity-50 disabled:cursor-not-allowed hover:bg-gray-100 text-black"
        >
          →
        </button>
      </div>

      {/* Hiển thị thông tin số lượng */}
      <div className="text-sm text-gray-600">
        {startIndex + 1}-{Math.min(endIndex, totalItems)} / {totalItems}
      </div>
    </div>
  );
};
