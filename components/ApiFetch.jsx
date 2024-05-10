"use client"
import React, { useEffect, useState } from "react";
import Sidebar from "./common/Sidebar";

const ApiFetch = () => {
    const [dogImages, setDogImages] = useState([]);
    useEffect(() => {
        fetch("https://dog.ceo/api/breeds/image/random/50") 
          .then((response) => response.json())
          .then((data) => setDogImages(data.message))
          .catch((error) => console.error("Error fetching dog images:", error));
      }, []);
  return (
    <div>
       <Sidebar/>
      <div className="mx-auto px-3 max-w-[1140px] py-5">
        <h1 className="text-center mb-4">== Api Fetch Start Here ==</h1>
        <div className="grid xl:grid-cols-5 md:grid-cols-4 sm:grid-cols-3 grid-cols-2 gap-6">
          {dogImages.map((dog, index) => (
            <img className="aspect-video w-full"
              key={index}
              width="200px"
              height="200px"
              src={dog}
              alt={`dog-${index}`}
            />
          ))}
        </div>
        <h1 className="text-center my-4">^^ Api Fetch End Here ^^</h1>
      </div>
    </div>
  );
};

export default ApiFetch;
