import { useDeleteDataMutation } from "@features/guide/guideApi";
import { usePathname } from "next/navigation";
import React from "react";
import { MdClose } from "react-icons/md";
import { useSelector } from "react-redux";

export default function Section({ data, id }) {
  const [deleteData] = useDeleteDataMutation();
  const dashboard = usePathname().startsWith("/dashboard");
  // console.log(dashboard);
  return (
    <div className={`${dashboard && "hover:ring-1"} flex relative p-2 pr-4`}>
      <section dangerouslySetInnerHTML={{ __html: data }} />

      {dashboard && (
        <div
          className="absolute -right-0 top-0 bg-slate-400/20 opacity-25 cursor-pointer hover:opacity-100"
          onClick={() => deleteData(id)}
        >
          <MdClose />
        </div>
      )}
    </div>
  );
}
