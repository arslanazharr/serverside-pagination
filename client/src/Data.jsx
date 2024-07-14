/* eslint-disable react/prop-types */
const Data = ({
  tableData,
  currentPage,
  totalItems,
  itemsPerPage,
  onPageChange,
  setCurrentPage,
  setItemsPerPage,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const handleItemsPerPageChange = (event) => {
    setItemsPerPage(Number(event.target.value));
    setCurrentPage(1);
  };

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-white border border-green-600 select-none">
        <thead>
          <tr className="bg-green-100 border-b border-green-600">
            <th className="text-left text-green-600 py-2 px-4 border-r border-green-600">
              Name
            </th>
            <th className="text-left text-green-600 py-2 px-4 border-r border-green-600">
              Age
            </th>
            <th className="text-left text-green-600 py-2 px-4 border-r border-green-600">
              Height
            </th>
            <th className="text-left text-green-600 py-2 px-4 border-r border-green-600">
              Gender
            </th>
            <th className="text-left text-green-600 py-2 px-4">Profession</th>
          </tr>
        </thead>
        <tbody>
          {tableData?.map((row, index) => (
            <tr key={index} className="border-b border-green-600">
              <td className="py-2 px-4 border-r border-green-600">
                {row?.name}
              </td>
              <td className="py-2 px-4 border-r border-green-600">
                {row?.age}
              </td>
              <td className="py-2 px-4 border-r border-green-600">
                {row?.height}
              </td>
              <td className="py-2 px-4 border-r border-green-600">
                {row?.gender}
              </td>
              <td className="py-2 px-4">{row?.profession}</td>
            </tr>
          ))}
        </tbody>

        <tfoot className="bg-green-50 border-t border-green-600 whitespace-nowrap">
          <tr>
            <td colSpan={12} className="p-4">
              <div className="flex md:justify-end md:flex-row items-center md:space-x-10 flex-col justify-center md:space-y-0 space-y-3">
                <div>
                  Rows per page:{" "}
                  <select
                    className="border border-green-600 focus:outline-none bg-green-100 cursor-pointer"
                    onChange={handleItemsPerPageChange}
                    value={itemsPerPage}
                  >
                    <option value={5}>5</option>
                    <option value={10}>10</option>
                    <option value={25}>25</option>
                  </select>
                </div>

                <div className="cursor-default">
                  {currentPage} of {totalPages}
                </div>

                <div className="space-x-3">
                  <button
                    onClick={handlePrevious}
                    disabled={currentPage === 1}
                    className={`rounded-lg border border-green-600 px-2 bg-green-100 hover:opacity-70 cursor-pointer ${
                      currentPage === 1 &&
                      "cursor-not-allowed hover:opacity-60 opacity-60"
                    }`}
                  >
                    Previous
                  </button>
                  <button
                    onClick={handleNext}
                    disabled={currentPage === totalPages}
                    className={`rounded-lg border border-green-600 px-2 bg-green-100 hover:opacity-70 cursor-pointer ${
                      currentPage === totalPages &&
                      "cursor-not-allowed hover:opacity-60 opacity-60"
                    }`}
                  >
                    Next
                  </button>
                </div>
              </div>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default Data;
