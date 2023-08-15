export const handleScroll = (e, setPage) => {
  const { scrollTop, scrollHeight, clientHeight } = e.target;

  if (scrollTop + clientHeight >= scrollHeight) {
    setPage((prevPage) => prevPage + 1);
  }
};
