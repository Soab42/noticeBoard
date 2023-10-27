export const handleScroll = (e, setPage) => {
  const { scrollTop, scrollHeight, clientHeight } = e.target;
  // console.log(scrollTop + clientHeight + 2);
  // console.log("scrollhright", scrollHeight);
  if (scrollTop + clientHeight + 2 >= scrollHeight) {
    setPage((prevPage) => prevPage + 1);
  }
};
