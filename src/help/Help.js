import {
  Accordion,
  AccordionBody,
  AccordionHeader,
} from "@material-tailwind/react";
import React, { useState } from "react";

const Icon = ({ idx, open }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={2}
      stroke="currentColor"
      className={`${
        open === idx ? "rotate-180" : ""
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

const Help = () => {
  const [open, setOpen] = useState(0);

  const list = [
    {
      q: "I want to partner my restaurant with AZ",
      a: "Send us an email @azfoods.com",
    },
    {
      q: "What is AZ Customer Care Number?",
      a: "You can email us your issue on support@azfoods.com",
    },
    {
      q: "Can I edit my order?",
      a: "Your order can be edited before it reaches the restaurant. You could contact customer support team via chat or call to do so. Once order is placed and restaurant starts preparing your food, you may not edit its contents",
    },
    {
      q: "I want to cancel my order",
      a: "We will do our best to accommodate your request if the order is not placed to the restaurant (Customer service number:  080-67466729). Please note that we will have a right to charge a cancellation fee up to full order value to compensate our restaurant and delivery partners if your order has been confirmed.",
    },
    {
      q: "Is there a minimum order value?",
      a: "We have no minimum order value and you can order for any amount. ",
    },
    {
      q: "Do you charge for delivery?",
      a: "Delivery fee varies from city to city and is applicable if order value is below a certain amount. Additionally, certain restaurants might have fixed delivery fees. Delivery fee (if any) is specified on the 'Review Order' page. ",
    },
    {
      q: "What are your delivery hours?",
      a: "Our delivery hours vary for different locations and depends on availability of supply from restaurant partners.",
    },
  ];
  return (
    <div className="w-full h-dvh border-b-[1px] border-b-gray-200 p-4 lg:p-24 bg-[#37718e]">
      <h2 className="text-xl lg:text-3xl font-semibold text-white">
        Help and Support
      </h2>

      <div className="bg-white my-4">
        {list.map((item, index) => (
          <Accordion
            key={item.q}
            icon={<Icon open={open} idx={index} />}
            open={open === index}
          >
            <AccordionHeader
              className="text-md font-semibold text-gray-800 px-3"
              onClick={() => {
                setOpen(index);
              }}
            >
              {item.q}
            </AccordionHeader>
            <AccordionBody className="text-sm font-light text-gray-600 px-5">
              {item.a}
            </AccordionBody>
          </Accordion>
        ))}
      </div>
    </div>
  );
};

export default Help;
