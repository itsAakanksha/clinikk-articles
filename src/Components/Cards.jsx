import React from "react";
import Card from "./Card"; // Assuming Card is in the same directory
import cardData from "../cardData.js"; // Import the card data
import Cta from "./Cta.jsx";

function Cards({ currentItems }) {
  return (
    <>
      <div className="my-3">
        {" "}
        {currentItems.map((item, index) => (
          <div key={index}>
            <div className="font-bold p-4 text-3xl mx-auto text-center md:text-left md:mt-16 my-6">
              {item.categoryName}
            </div>
            <div className="flex justify-evenly gap-y-6 flex-wrap">
              {item.type.map(
                (typeItem, typeIndex) =>
                  typeIndex < 3 && <Card key={typeItem.id} item={typeItem} />
              )}
            </div>
            <Cta/>
          </div>
        ))}
      
      </div>
    </>
  );
}

export default Cards;
