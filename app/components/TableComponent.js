'use client';
import { useState, useEffect } from 'react';

const TableComponent = ({ data = [], height = '400px', headers = [], relationships = [], name = '' }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [pageCount, setPageCount] = useState(Math.ceil(data.length / rowsPerPage));
  const [displayData, setDisplayData] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredData, setFilteredData] = useState(data);
  const [tableHeaders, setTableHeaders] = useState(headers);
  const [nameTable, setNameTable] = useState(name);
  const options = [10, 15, 20, 25, 50, 75, 100, 200, 500];

  // Generate headers from data keys if headers is empty
  useEffect(() => {
    if (tableHeaders.length === 0 && data.length > 0) {
      setTableHeaders(Object.keys(data[0]));
    }
    setNameTable(name);
  }, [data, tableHeaders]);

  useEffect(() => {
    const filtered = data.filter(item =>
      Object.values(item).some(value =>
        String(value).toLowerCase().includes(searchQuery.toLowerCase())
      )
    );
    setFilteredData(filtered);
    setPageCount(Math.ceil(filtered.length / rowsPerPage));
    setCurrentPage(1); // Reset to first page when search changes
  }, [data, searchQuery, rowsPerPage]);

  useEffect(() => {
    setDisplayData(filteredData.slice((currentPage - 1) * rowsPerPage, currentPage * rowsPerPage));
  }, [filteredData, currentPage, rowsPerPage]);

  const updateHeaders = () => {
    return tableHeaders.map((title, index) => <th key={index} className="p-2 bg-gray-200">{title}</th>);
  };

  const displayRows = () => {
    if (displayData.length === 0) {
      return (
        <tr>
          <td colSpan={tableHeaders.length} className="text-center text-gray-700 font-bold">No data available</td>
        </tr>
      );
    }
    return displayData.map((row, index) => (
      <tr key={index} className="border-b">
        {Object.values(row).map((value, i) => (
          <td key={i} className="p-2 text-nowrap">{value}</td>
        ))}
      </tr>
    ));
  };

  const updatePaginationButtons = () => {
    let buttons = [];
    let maxVisibleButtons = 3;
    let startPage = Math.max(currentPage - Math.floor(maxVisibleButtons / 2), 1);
    let endPage = Math.min(startPage + maxVisibleButtons - 1, pageCount);

    if (startPage > 1) buttons.push(<span className="dot-link" key="start">...</span>);
    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          className={`btn btn-link btn-sm pagination-button ${i === currentPage ? 'bg-blue-500 text-white' : 'text-blue-500'}`}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      );
    }
    if (endPage < pageCount) buttons.push(<span className="dot-link" key="end">...</span>);

    return buttons;
  };

  return (
    <div className="container ">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-xl font-bold">Data for {nameTable}</h1>
        <input
          type="text"
          className="form-input border rounded px-2 py-1"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="overflow-y-auto" style={{ maxHeight: height }}>
        <table className="min-w-full border-collapse">
          <thead>
            <tr>{updateHeaders()}</tr>
          </thead>
          <tbody>{displayRows()}</tbody>
        </table>
      </div>
      <div className="flex justify-center items-center gap-4 mt-4">
        <div className="flex text-sm">
          <span className="text-gray-600 font-bold">Row </span>
          <span id="paginationInfoRow" className="ml-1">{`${(currentPage - 1) * rowsPerPage + 1}-${Math.min(currentPage * rowsPerPage, filteredData.length)}/${filteredData.length}`}</span>
          <span className="text-gray-600 font-bold ml-2">Page: </span>
          <span id="paginationInfoPage" className="ml-1">{`${currentPage}/${pageCount}`}</span>
        </div>
        <div className="flex items-center text-sm">
          <span className="text-gray-600 font-bold">Row Per Page: </span>
          <select
            id="selectRowPerPage"
            className="form-select ml-2"
            value={rowsPerPage}
            onChange={(e) => setRowsPerPage(parseInt(e.target.value))}
          >
            {options.map((value) => (
              <option key={value} value={value}>
                {value}
              </option>
            ))}
          </select>
        </div>
        <div className="flex items-center">
          <button id="firstPage" className="text-blue-500 text-sm" onClick={() => setCurrentPage(1)}>First</button>
          <button
            id="previousPage"
            className="text-blue-500 text-sm ml-2"
            onClick={() => currentPage > 1 && setCurrentPage(currentPage - 1)}
          >
            &lt;
          </button>
          <div id="pagination" className="flex items-center ml-2">
            {updatePaginationButtons()}
          </div>
          <button id="nextPage" className="text-blue-500 text-sm ml-2" onClick={() => currentPage < pageCount && setCurrentPage(currentPage + 1)}>&gt;</button>
          <button id="lastPage" className="text-blue-500 text-sm ml-2" onClick={() => setCurrentPage(pageCount)}>Last</button>
        </div>
        <div className="flex items-center text-sm text-gray-600 font-bold">
          <span>Go to page :</span>
          <input
            type="number"
            id="pageInput"
            className="form-input ml-2 w-16 text-center"
            min="1"
            placeholder="Page #"
            onKeyPress={(e) => {
              if (e.key === 'Enter') {
                const page = parseInt(e.target.value);
                if (page >= 1 && page <= pageCount) {
                  setCurrentPage(page);
                } else {
                  alert('Please enter a valid page number.');
                }
              }
            }}
          />
        </div>
      </div>
      <div className="mt-4">
        <h2 className="text-xl font-bold mb-2">Relationships</h2>
        <ul>
          {relationships.map((rel, index) => (
            <li key={index}>
              Column <strong>{rel.columnName}</strong> references <strong>{rel.referencedTableName}</strong> ({rel.referencedColumnName})
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TableComponent;
