import React from "react";

const Table = () => {
  return (
    <div>
      <table className="min-w-full table-auto">
        <thead>
          <tr className="bg-gray-800">
            <th className="px-16 py-2">
              <span className="text-gray-200">Name</span>
            </th>
            <th className="px-16 py-2">
              <span className="text-gray-200">Email</span>
            </th>
            <th className="px-16 py-2">
              <span className="text-gray-200">Salary</span>
            </th>
            <th className="px-16 py-2">
              <span className="text-gray-200">Birthday</span>
            </th>
            <th className="px-16 py-2">
              <span className="text-gray-200">Status</span>
            </th>
            <th className="px-16 py-2">
              <span className="text-gray-200">Actions</span>
            </th>
          </tr>
        </thead>

        <tbody className="bg-gray-200">
            <tr className="bg-gray-50 text-center">
              <td className="px-16 py-2 flex flex-row items-center">
                <img src="#" alt="" />
                <span className="text-center ml-2 font-semibold">Daily Tuition</span>
              </td>
              <td className="px-16">
                <span>dailytuition@gmail.com</span>
              </td>
            </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
