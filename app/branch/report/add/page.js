"use client";
import FormatTable from "@components/main/report/FormatTable";
import RForm from "@components/main/report/RForm";
import ReportTable from "@components/main/report/ReportTable";
import { useGetRpReportQuery } from "@features/report/reportSlice";
import React, { useRef } from "react";
import { useDownloadExcel } from "react-export-table-to-excel";
export default function page() {
  const { data, isError, isLoading, isSuccess } = useGetRpReportQuery();
  console.log(data);
  const tableRef = useRef(null);

  const { onDownload } = useDownloadExcel({
    currentTableRef: tableRef.current,
    filename: "Users table",
    sheet: "Users",
  });

  return (
    <div className="flex flex-col gap-4 min-w-full h-[80vh] overflow-scroll ">
      <p className="text-xl text-center bg-green-300 p-2 rounded-md min-w-full">
        Healtd Report page
      </p>
      <div className="w-full flex relative">
        <RForm tableRef={tableRef} />
        <RForm tableRef={tableRef} />
        <button
          onClick={onDownload}
          className="absolute -top-12 right-0 bg-green-600 px-4 rounded-full py-1"
        >
          Export to excel
        </button>
      </div>
    </div>
  );
}
