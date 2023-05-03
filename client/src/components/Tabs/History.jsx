import React from "react";
import Pagination from "../Pagination";
import Table from "../Table";

const History = () => {
  return (
    <div>
      <h1 className="text-2xl font-semibold">Your History</h1>
      <h1 className="text-md text-slate-500 font-medium mb-10">
        Your transaction history for swap, withdrawal, and purchase will appear
        here.
      </h1>
      <Pagination />
      <Table />
      <Pagination />
    </div>
  );
};

export default History;
