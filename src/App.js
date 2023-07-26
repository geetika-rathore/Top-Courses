import React from "react";
import { apiUrl, filterData } from './data';
import Navbar from "./components/Navbar";
import Filter from "./components/Filter";
import Cards from "./components/Cards";
import { toast } from "react-toastify";
import { useState, useEffect } from 'react';
import Spinner from "./components/Spinner";
const App = () => {
  const [courses, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category,setCategory]= useState("All");
  async function fetchData() {
    setLoading(true);
    try {
      let res = await fetch(apiUrl);
      let out = await res.json();
      setCourse(out.data);
    }
    catch (error) {
      toast.error("something went wrong");
    }
    setLoading(false);
  }
  useEffect(() => {
    fetchData();
  }, [])

  
  return (
    <div className="min-h-screen flex flex-col bg-bgDark2">
      <div>
        <Navbar />
      </div>
      <div className="bg-bgDark2">
      <div>
        <Filter filterData={filterData}
        category={category}
        setCategory={setCategory} />
      </div>
      <div className="w-9/12 max-w[1200px] mx-auto flex flex-wrap justify-center items-centermin-h-[50vh]">
        {
          loading ? (<Spinner />) : 
          (<Cards courses={courses}  category={category}/>)
        }
      </div>

      </div>
    </div>
  );
};

export default App;
