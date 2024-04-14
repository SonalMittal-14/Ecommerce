import React from "react";
import Box from "./Box";
import BoxFill from "./BoxFill";
import ProductList from "./ProductList";
import { useEffect , useState } from "react";
import "./MainPage.css"

function MainPage() {

  const [loader,setloader] = useState(true);
  useEffect(()=>{
    setTimeout(()=>{
      setloader(false);
    },1000)
  },[])


  return (

    <div className="bg-black">

    {
loader ? <span class="loader my-16 "></span>

:
    
    <div className="bg-gray-300 py-4 w-full px-24 flex items-center">
      <div className="bg-white  w-full px-20 py-12 ">
        <h1 className="text-gray-700 text-xl">Home/Shop</h1>
        <h1 className="text-8xl pt-10 text-red-600">Shop</h1>
        <div className="flex justify-between mt-20">
          <input
            type="text"
            placeholder="Search"
            className="border border-black rounded-lg pl-4 py-1 focus:outline-0"
          />
          <select
            name="Default"
            className="border border-black border-dashed rounded-lg space-x-4 focus:outline-0"
          >
            <option value="Default">Default</option>
            <option value="Sort by Name">Sort by Name</option>
            <option value="Sort by Price: Low to High">
              Sort by Price: Low to High
            </option>
            <option value="Sort by Price: Hight to Low">
              Sort by Price: Hight to Low
            </option>
          </select>
        </div>
        <div className="">
          <ProductList/>
        </div>
        <div className="mt-20 flex space-x-6">
          <BoxFill props="1"/>
          <Box props="2"/>
          <Box props="→"/>
        </div>
      </div>
    </div>
}
    </div>
    
  );
}

export default MainPage;
