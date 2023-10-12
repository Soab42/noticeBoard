"use client";

const App = () => {
  const fetchData = async (e) => {
    "use sever";
    e.preventDefault();
    const response = await fetch(`/api/loan`);
    const data = await response.json();
    console.log(data);
  };

  return (
    <div className="p-5 text-center flex justify-between">
      <div className="bg-lime-300 p-4">
        <button onClick={fetchData}>get data</button>
      </div>
    </div>
  );
};

export default App;
