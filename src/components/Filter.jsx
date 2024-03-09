import React from "react";

const Filter = ({ filterData,category,setCategory }) => {

    function filterHandler(title){
        setCategory(title);
    }

  return (
    <div className="w-full flex flex-wrap items-center justify-center">
      <div className="w-10/12 lg:w-5/12 flex flex-wrap text-gray-200 py-4 items-center justify-between">
        {filterData.map((item) => {
          return (
            <button className="text-sm sm:text-lg px-2 my-2 py-1 rounded-md font-medium text-white bg-black hover:bg-opacity-50 border-2 "
            key={item.id} onClick={()=>filterHandler(item.title)}
            >
              {item.title}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default Filter;
