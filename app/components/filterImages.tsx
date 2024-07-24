"use client";
import Image from "next/image";
import React, { useState } from "react";
export const images = [
  {
    id: 1,
    src: "/img1.jpeg",
    category: "Nature",
  },
  {
    id:2,
    src: "/img2.jpeg",
    category: "Nature",
  },
  {
    id: 3,
    src: "/img3.jpeg",
    category: "Car",
  },
  {
    id: 1,
    src: "/IMG4.jpeg",
    category: "Car",
  },
  {
    id: 5,
    src: "/img5.jpeg",
    category: "Technology",
  },
  {
    id: 6,
    src: "/img6.jpeg",
    category: "Technology",
  },
  {
    id: 7,
    src: "/img7.jpeg",
    category: "Food",
  },
  {
    id: 8,
    src: "/img8.jpeg",
    category: "Food",
  },
  {
    id: 9,
    src: "/Lp1.jpeg",
    category: "Laptop",
  },
  {
    id: 10,
    src: "/Lp2.jpeg",
    category: "Laptop",
  },
  {
    id: 11,
    src: "/sl1.jpeg",
    category: "Solar",
  },
  {
    id: 12,
    src: "/sl2.jpeg",
    category: "Solar",
  },
  {
    id: 13,
    src: "/ip1.jpeg",
    category: "Iphone",
  },
  {
    id: 13,
    src: "/ip2.jpg",
    category: "Iphone",
  },
  {
    id: 15,
    src: "/ip3.jpeg",
    category: "Iphone",
  },
];
export default function FilterImages() {
  const [filter, setFilter] = useState("all");
  const filteritems =
    filter === "all" ? images : images.filter((img) => img.category === filter);
  return (
    <div className=" mx-auto container">
      <div className="flex justify-center  py-3 gap-3 mt-10">
        <button
          className={`"px-4  p-2 rounded " ${
            filter === "all" ? "bg-blue-900 text-white" : "bg-black text-white"
          }`}
          onClick={() => setFilter("all")}
        >All</button>
        <button
          className={`"px-4 p-2 rounded" ${
            filter === "Nature"
              ? "bg-blue-900 text-white"
              : "bg-black text-white"
          }`}
          onClick={() => setFilter("Nature")}
        >Nature</button>
        <button
          className={`"px-4 p-2  rounded" ${
            filter === "Car" ? "bg-blue-900 text-white" : "bg-black text-white"
          }`}
          onClick={() => setFilter("Car")}
        >Car</button>
        <button
          className={`"px-2 p-2  rounded" ${
            filter === "Technology"
              ? "bg-blue-900 text-white"
              : "bg-black text-white"
          }`}
          onClick={() => setFilter("Technology")}
        >Technology</button>
        <button
          className={`"px-2 p-2  rounded" ${
            filter === "Food" ? "bg-blue-900 text-white" : "bg-black text-white"
          }`}
          onClick={() => setFilter("Food")}
        >Food</button>
        <button
          className={`"px-2 p-2  rounded" ${
            filter === "Laptop"
              ? "bg-blue-900 text-white"
              : "bg-black text-white"
          }`}
          onClick={() => setFilter("Laptop")}
        >Laptop</button>
        <button
          className={`"px-2 p-2  rounded" ${
            filter === "Iphone"
              ? "bg-blue-900 text-white"
              : "bg-black text-white"
          }`}
          onClick={() => setFilter("Iphone")}
        >Iphone</button>
        <button
          className={`"px-2 p-2 rounded" ${
            filter === "solar"
              ? "bg-blue-900 text-white"
              : "bg-black text-white"
          }`}
          onClick={() => setFilter("Solar")}
        >Solar</button>
      </div>
      <div className="mx-auto grid grid-colsx-2 py-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full ">
      {filteritems.map((item,index)=>{
        return(
            <div key={index}>
                <Image className=" h-[350px] w-[600px]" src={item.src} width={300} height={300}  alt={item.category} />

            </div>
        )
      })}
      </div>
    </div>
  );
}
