import React from "react";

const Table = ({ tableContents }) => {
  return (
    <div class="w-full my-5">
      <table class="w-full table-fixed border-collapse">
        <thead>
          <tr class="bg-black text-white">
            <th class="w-1/4 py-2 font-normal text-sm">Transaction Hash</th>
            <th class="w-1/4 py-2 font-normal text-sm">Transaction Type</th>
            <th class="w-1/4 py-2 font-normal text-sm">Index / Token Name</th>
            <th class="w-1/4 py-2 font-normal text-sm">Composition</th>
            <th class="w-1/4 py-2 font-normal text-sm">Age</th>
          </tr>
        </thead>
        <tbody>
          {tableContents ? (
            tableContents.map((row, index) => (
              <tr key={index} class="border-t border-gray-200">
                <td class="w-1/4 py-2">{row.transactionHash}</td>
                <td class="w-1/4 py-2">{row.transactionType}</td>
                <td class="w-1/4 py-2">{row.tokenName}</td>
                <td class="w-1/4 py-2">{row.composition}</td>
                <td class="w-1/4 py-2">{row.age}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td class="w-full py-2 text-left" colspan="4">
                Your Transaction History will appear here
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
