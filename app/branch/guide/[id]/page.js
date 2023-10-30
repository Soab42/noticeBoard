"use client";
import Img from "@components/guide/Img";
import Section from "@components/guide/section";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

export default function Page() {
  const [data, setData] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    async function getData(callback) {
      const response = await fetch(`/api/guide/${id}`);
      const responseData = await response.json();
      //   const data = JSON.parse(responseData);
      setData(responseData);
      setIsLoading(false);
    }
    getData();
  }, []);
  // console.log(typeof data);
  let content;
  if (isLoading) {
    content = <div className="animate-pulse">loading...</div>;
    return content;
  }

  if (!data.title) {
    content = (
      <div className="bg-black/10 flex items-center justify-center text-3xl p-20 text-justify">
        No Data Added. We Are Working On It. Thanks For Being With Us. You Can
        give US Suggestions To leave a Massege Here.
      </div>
    );
  }
  if (data.title) {
    content = (
      <div>
        <div className="h-10 uppercase rounded-b-full text-center  shadow-lg shadow-rose-700/60 text-sky-600 text-2xl">
          {data?.title}
        </div>

        <main className="flex flex-col gap-4 mt-5 p-4 text-justify h-[78vh] overflow-scroll">
          {Object.values(data).map((entry) => {
            if (entry.img) {
              return <Img data={entry.img} />;
            }
            if (entry.section) {
              return <Section data={entry.section} />;
            }
          })}
        </main>
      </div>
    );
  }

  return content;
}
