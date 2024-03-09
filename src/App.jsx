import Navbar from "./components/navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { filterData, apiUrl } from "./data";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Spinner from "./components/Spinner";

function App() {
  const [course, setCourse] = useState([]);
  const [loading, setLoading] = useState(true);
  const [category, setCategory] = useState(filterData[0].title);
  async function fetchData() {
    setLoading(true);
    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourse(output.data);
    } catch (error) {
      toast.error("Something went wrong");
    }
    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className=" min-h-screen flex flex-col bg-[#42435f]">
      <div>
        <Navbar></Navbar>
      </div>
      <Filter
        filterData={filterData}
        category={category}
        setCategory={setCategory}
      ></Filter>
      <div className="w-11/12 lg:max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh] ">
        {loading === true ? (
          <Spinner />
        ) : (
          <Cards course={course} category={category}></Cards>
        )}
      </div>
    </div>
  );
}

export default App;
