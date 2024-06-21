import React from "react";
import Card from "./Card"; // Assuming Card is in the same directory
import cardData from "../cardData.js"; // Import the card data

function Cards({ currentItems }) {
  return (
    <>
      <div>
        {" "}
        <div className="font-bold p-4 text-2xl md:my-12 my-6">
        Chronic treatments at Clinikk
        </div>
        <div className="flex justify-evenly gap-y-6 flex-wrap">
        {currentItems.map((item, index) => (
          index < 3 && <Card key={item.id} item={item} />
        ))}
        </div>
        <div className="font-bold p-4 text-2xl md:my-12 my-6">
        Skin Conditions we treat 
        </div>
        <div className="flex justify-evenly gap-y-6 flex-wrap">
        {currentItems.map((item, index) => (
          index < 3 && <Card key={item.id} item={item} />
        ))}
        </div>
        <div className="font-bold p-4 text-2xl md:my-12 my-6">
          All Chronic Treatments
        </div>
        <div className="flex justify-evenly gap-y-6 flex-wrap">
          {currentItems.map((item) => (
            <Card key={item.id} item={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export default Cards;
