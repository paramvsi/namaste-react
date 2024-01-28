import React from "react";
import {
  Accordion,
  AccordionHeader,
  AccordionBody,
} from "@material-tailwind/react";
import FoodInfo from "../food-info/FoodInfo";

const Icon = ({ id, open }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        id === open ? "rotate-180" : ""
      } h-5 w-5 transition-transform`}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M19.5 8.25l-7.5 7.5-7.5-7.5"
      />
    </svg>
  );
};

const FoodCategory = ({ foodCategory, open, handleOpen }) => {
  return (
    <>
      <Accordion
        open={open === foodCategory.title}
        icon={<Icon id={foodCategory.title} open={open} />}
      >
        <AccordionHeader
          className="text-lg font-bold text-gray-800"
          onClick={() => handleOpen(foodCategory.title)}
        >
          {foodCategory.title}&nbsp;
          {foodCategory.itemCards ? `(${foodCategory.itemCards?.length})` : ""}
        </AccordionHeader>
        <AccordionBody>
          {foodCategory.itemCards
            ? foodCategory.itemCards.map((ic) => (
                <FoodInfo key={ic.card.info.id} info={ic.card.info} />
              ))
            : foodCategory.categories &&
              foodCategory.categories.map((cat) => (
                <>
                  <Accordion open={true}>
                    <AccordionHeader className="text-lg font-bold text-gray-800">
                      {cat.title}
                    </AccordionHeader>

                    <AccordionBody>
                      {cat.itemCards.map((ic) => (
                        <FoodInfo key={ic.card.info.id} info={ic.card.info} />
                      ))}
                    </AccordionBody>
                  </Accordion>
                </>
              ))}
        </AccordionBody>
      </Accordion>
    </>
  );
};

export default FoodCategory;
