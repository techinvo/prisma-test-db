'use client';
import { useEffect, useState } from 'react';
import axios from 'axios';
import TableComponent from '../components/TableComponent';

const Management = () => {
    const [tables, setTables] = useState([]);
    const [selectedTable, setSelectedTable] = useState('');
    const [tableData, setTableData] = useState({ data: [] });
    const [relationData, setRelationData] = useState({ relationships: [] });
    const [columnData, setColumnData] = useState({ columns: [] });
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const fetchTables = async () => {
        try {
            setLoading(true);
            const res = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/api/management`);
            setTables(res.data);
        } catch (err) {
            setError('Error fetching tables');
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchTables();
    }, []);

    useEffect(() => {
        if (selectedTable) {
            const fetchTableData = async () => {
                try {
                    setLoading(true);
                    const data = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/management`, {
                        tableName: selectedTable
                    });
                    setTableData(data.data);
                } catch (err) {
                    setError('Error fetching table data');
                } finally {
                    setLoading(false);
                }
            };
            const fetchRelationData = async () => {
                try {
                    setLoading(true);
                    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/management/getrelation`, {
                        tableName: selectedTable
                    });
                    setRelationData(res.data);
                } catch (err) {
                    setError('Error fetching relation data');
                } finally {
                    setLoading(false);
                }
            };
            const fetchColumnData = async () => {
                try {
                    setLoading(true);
                    const res = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/api/management/column`, {
                        tableName: selectedTable
                    });
                    setColumnData(res.data);
                } catch (err) {
                    setError('Error fetching column data');
                } finally {
                    setLoading(false);
                }
            };
            fetchColumnData();
            fetchRelationData();
            fetchTableData();
        }
    }, [selectedTable]);

    return (
        <div className="p-6 bg-gray-100 min-h-screen">
            <h1 className="text-3xl font-bold mb-4 text-center">Database Tables</h1>
            <div className="mb-4">
                <label htmlFor="tables" className="block text-lg font-semibold mb-2">Choose a table:</label>
                <select
                    className="block w-full p-2 border border-gray-300 rounded-md"
                    id="tables"
                    value={selectedTable}
                    onChange={(e) => setSelectedTable(e.target.value)}
                >
                    <option value="">Select a table</option>
                    {tables.map((table, index) => (
                        <option key={index} value={table}>
                            {table}
                        </option>
                    ))}
                </select>
            </div>
            {loading && <p className="text-center text-gray-500">Loading...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}
            {selectedTable && tableData.data && tableData.data.length > 0 && (
                <div className="mb-4">
                    <TableComponent
                        data={tableData.data}
                        headers={columnData.columns}
                        name={selectedTable}
                    />
                </div>
            )}
            {selectedTable && columnData.columns && columnData.columns.length > 0 && (
                <div className="mb-4">
                    <h2 className="text-xl font-bold mb-2">Columns</h2>
                    <ul className="bg-white p-4 rounded-lg shadow-md flex flex-wrap gap-4">
                        {columnData.columns.map((col, index) => (
                            <li key={index} className="bg-gray-200 p-2 rounded-md">
                                <strong>{(index + 1) + ': ' + col}</strong>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
            {selectedTable && relationData.relationships && relationData.relationships.length > 0 && (
                <div className="mt-4">
                    <h2 className="text-xl font-bold mb-2">Relationships</h2>
                    <ul className="bg-white p-4 rounded-lg shadow-md">
                        {relationData.relationships.map((rel, index) => (
                            <li key={index} className="mb-2">
                                Column <strong>{rel.columnName}</strong> references <strong>{rel.referencedTableName}</strong> ({rel.referencedColumnName})
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default Management;
