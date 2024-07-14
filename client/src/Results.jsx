import { useEffect, useState } from "react";
import Add from "./Add";
import Data from "./Data";
import axios from "axios";

const Results = () => {
  const [data, setData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalItems, setTotalItems] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  useEffect(() => {
    fetchData(currentPage, itemsPerPage);
  }, [currentPage, itemsPerPage]);

  const fetchData = async (page, limit) => {
    try {
      const response = await axios.get(`http://localhost:3001/api/users`, {
        params: {
          limit: limit,
          page: page,
        },
      });
      setData(response.data.data);
      setTotalItems(response.data.total);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
  };

  return (
    <div className="p-4 space-y-10">
      <Add setTableData={setData} />
      <Data
        currentPage={currentPage}
        totalItems={totalItems}
        itemsPerPage={itemsPerPage}
        onPageChange={handlePageChange}
        tableData={data}
        setItemsPerPage={setItemsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Results;
