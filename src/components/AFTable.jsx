import '../pages/pages.css'

const AFTable = ({ columns, data }) => {
    return (
        <table className="w-full h-auto mt-4 border-collapse">
            {/* Table Header */}
            <thead className="bg-none text-black">
                <tr>
                    {columns.map((col, index) => (
                        <th
                            className="p-4 text-left border-b-2 border-[#888888] font-semibold"
                            key={index}
                        >
                            {col.label}
                        </th>
                    ))}
                </tr>
            </thead>
            {/* Table Body */}
            <tbody>
                {data.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        {columns.map((col, colIndex) => (
                            <td
                                className="p-4 border-b border-[#555555] text-black"
                                key={colIndex}
                            >
                                {row[col.key]}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default AFTable;
