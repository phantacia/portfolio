import React from "react";

const MenuButton = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="group relative overflow-hidden cursor-pointer uppercase leading-6">
      <span className="inline-block p-1 transition duration-500 ease-out group-hover:-translate-y-[120%]">
        {children}
      </span>
      <span className="absolute right-0 translate-y-[120%] rotate-12 inline-block p-1 transition duration-500 ease-out group-hover:translate-y-0 group-hover:rotate-0">
        {children}
      </span>
    </div>
  );
};

export default MenuButton;
