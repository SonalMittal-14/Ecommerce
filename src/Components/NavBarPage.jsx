import React from "react";

const NavBarPage = () => {
  return (
    <React.Fragment>
      <div className="flex  px-20  h-20 bg-black text-white items-center justify-between">
        <h1 className="text-4xl">Harfuu</h1>
        <div className="space-x-12">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Product</a>
          <a href="#">Contact</a>
          <a href="#">Account</a>
        </div>
      </div>
    </React.Fragment>
  );
};

export default NavBarPage;
