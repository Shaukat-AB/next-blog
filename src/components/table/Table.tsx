import { ReactNode } from "react";

const Table = ({
    children,
    tableHead = [],
}: {
    children: any;
    tableHead: string[];
}) => {
    return (
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    {tableHead.map((title) => (
                        <th key={title} scope="col" className="px-6 py-3">
                            {title}
                        </th>
                    ))}
                </tr>
            </thead>

            {children}
        </table>
    );
};

export default Table;
