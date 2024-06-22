import React from "react";
import Card from "./Card"; // Assuming Card is in the same directory
import cardData from "../cardData.js"; // Import the card data
import Cta from "./Cta.jsx";

function Cards({ currentItems }) {
  return (
    <>
      <div>
        {" "}
        {currentItems.map((item, index) => (
          <div key={index}>
            <div className="font-bold p-4 text-2xl md:my-12 my-6">
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
        <div className="font-bold p-4 text-2xl md:my-12 my-6">
          All Chronic Treatments
        </div>
        {currentItems.map((item, index) => (
          <div className="flex justify-evenly gap-y-6 flex-wrap">
            {item.type.map(
              (typeItem, typeIndex) =>
                typeIndex < 3 && <Card key={typeItem.id} item={typeItem} />
            )}
          </div>
        ))}
      </div>
    </>
  );
}

export default Cards;
