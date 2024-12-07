import React, { useState } from "react";

// CSS
import './Filter.css';

const items = [
  {
    title: "Categories",
    content: [
      "Comedy Shows",
      "Workshops",
      "Music Shows",
      "Meetups",
      "Kids",
      "New Year Parties",
      "Performances",
    ],
  },
  {
    title: "More Filters",
    content: [
      "Outdoor Events",
      "Fast Filling",
      "Must Attend",
      "Kids Allowed",
      "Online Streaming",
      "Dinner",
      "DJ Party",
    ],
  },
  {
    title: "Price",
    content: ["Free", "0 - 500", "501 - 2000", "Above 2000"],
  },
  {
    title: "Date",
    content: ["Today", "Tomorrow", "This Weekend"],
  },
  {
    title: "Languages",
    content: [
      "Hindi",
      "English",
      "Marathi",
      "Tamil",
      "Bengali",
      "Kannada",
      "Malayalam",
      "Telugu",
    ],
  },
];

const Filter = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <>
      <h2 className='fw-bold my-4'>Filter</h2>
      <div className="accordion">
        {items.map((item, index) => (
          <div key={index} className="accordion-item">
            <div
              className="accordion-title"
              onClick={() => toggleAccordion(index)}
            >
              <h4>{item.title}</h4>
              <span>{activeIndex === index ? "-" : "+"}</span>
            </div>
            {activeIndex === index && (
              <div className="accordion-content">
                {item.content.map((option, idx) => (
                  <button key={idx} className="accordion-option">
                    {option}
                  </button>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </>
  );
};

export default Filter;   