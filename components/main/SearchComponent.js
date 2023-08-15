"use client";
import React, { useState } from "react";
// import LeftBar from "./leftBar";
import Catagories from "./Website";
import SingleFile from "./SingleFile";
import Search from "@components/utils/Search";

import { useSelector } from "react-redux";
import { useGetDatabaseAllQuery } from "@features/database/dbApi";
import SingleLoader from "@components/utils/SingleLoader";
import { handleScroll } from "@components/utils/infiniteScrollCopy";

export default function LeftComponent() {
  const search = useSelector((state) => state.filter.search);
  const [page, setPage] = useState(1);
  const contentParPage = 10;
  const { data, isError, isLoading, isSuccess } = useGetDatabaseAllQuery();

  // const handleScroll = (e) => {
  //   const { scrollTop, scrollHeight, clientHeight } = e.target;

  //   if (scrollTop + clientHeight >= scrollHeight) {
  //     setPage((prevPage) => prevPage + 1);
  //   }
  // };

  // console.log(data);
  const filteredData =
    !isLoading &&
    data
      ?.filter((item) => {
        // Check if any of the tags partially match the search term
        const matchingTags = item?.tags?.filter((tag) =>
          tag.toLowerCase().includes(search.toLowerCase())
        );

        // Return true if any tag matches, or if the createdAt includes the search term
        return matchingTags?.length > 0 || item?.createdAt?.includes(search);
      })
      .sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  let content;
  if (isLoading) {
    content = (
      <div className="flex justify-between w-full">
        <div className="w-[20%] xl:flex md:flex hidden">
          <Catagories />
        </div>
        <div className="flex flex-col  p-2 gap-1 w-full">
          <Search />
          <div className="overflow-hidden grid h-[78vh] w-full ">
            <div className="flex flex-col gap-2 p-2 w-full overflow-scroll">
              <SingleLoader />
              <SingleLoader />
              <SingleLoader />
              <SingleLoader />
              <SingleLoader />
              <SingleLoader />
            </div>
          </div>
        </div>
      </div>
    );
  }
  if (!isError && !isLoading) {
    content = (
      <div className="xl:flex xl:flex-row  w-full flex flex-col justify-between p-2 gap-1 overflow-hidden">
        <div className="w-[20%] min-w-fit">
          <Catagories />
        </div>
        <div className="flex flex-col w-full  p-2 gap-1 ">
          <Search />
          <div className=" flex flex-col h-[78vh] overflow-hidden  w-full">
            <div
              className="flex flex-col gap-2 p-2 w-full overflow-scroll"
              onScroll={(e) => handleScroll(e, setPage)}
            >
              {filteredData &&
                filteredData
                  ?.slice(0, page * contentParPage)
                  ?.map((sdata, i) => {
                    // console.log(sdata);
                    return <SingleFile data={sdata} key={i} />;
                  })}{" "}
            </div>
          </div>
        </div>
      </div>
    );
  }
  return content;
}

// <InfiniteScroll
//   dataLength={items.length} //This is important field to render the next data
//   next={fetchData}
//   hasMore={true}
//   loader={ <SingleLoader />}
//   endMessage={
//     <p style={{ textAlign: 'center' }}>
//       <b>Yay! You have seen it all</b>
//     </p>
//   }
//   // below props only if you need pull down functionality
//   refreshFunction={this.refresh}
//   pullDownToRefresh
//   pullDownToRefreshThreshold={50}
//   pullDownToRefreshContent={
//     <h3 style={{ textAlign: 'center' }}>&#8595; Pull down to refresh</h3>
//   }
//   releaseToRefreshContent={
//     <h3 style={{ textAlign: 'center' }}>&#8593; Release to refresh</h3>
//   }
// >
//   {items}
// </InfiniteScroll>
