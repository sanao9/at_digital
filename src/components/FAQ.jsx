import React, { useState } from 'react';
import { ChevronUpIcon, ChevronDownIcon } from 'lucide-react';

// FAQ data
const faqData = [
  {
    question: "Lorem ipsum dolor sit amet consectetur. Leo at sit eu libero?",
    answer: "Lorem ipsum dolor sit amet consectetur. Faucibus commodo suscipit id ipsum. Elementum ultrices nulla faucibus odio est sed aliquam. Sapien massa morbi risus sagittis tortor integer."
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur. Tortor scelerisque integer?",
    answer: "Lorem ipsum dolor sit amet consectetur. Answer for the second question goes here."
  },
  {
    question: "Lorem ipsum dolor sit amet consectetur. Faucibus scelerisque nunc?",
    answer: "Lorem ipsum dolor sit amet consectetur. Answer for the third question goes here."
  }
];

// FAQItem component
const FAQItem = ({ item, isOpen, toggleOpen }) => (
  <div className="border-b border-black last:border-b-0">
    <button
      className="flex justify-between items-center w-full py-5 px-4 text-left focus:outline-none"
      onClick={toggleOpen}
    >
      <span className={`text-lg font-medium ${isOpen ? 'text-primary' : 'text-black'}`}>{item.question}</span>
      {isOpen ? (
        <ChevronUpIcon className="w-6 h-6 text-primary" />
      ) : (
        <ChevronDownIcon className="w-6 h-6 text-black" />
      )}
    </button>
    {isOpen && (
      <div className="px-4 pb-5 text-gray-600">
        <p>{item.answer}</p>
      </div>
    )}
  </div>
);

// FAQSection component
const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <div className="max-w-3xl mx-auto py-12 px-4">
      <h2 className="text-3xl font-bold text-primary mb-8 text-center">Frequently asked questions</h2>
      <div className="bg-purple-50 rounded-lg overflow-hidden shadow-lg">
        {faqData.map((item, index) => (
          <FAQItem
            key={index}
            item={item}
            isOpen={index === openIndex}
            toggleOpen={() => setOpenIndex(index === openIndex ? -1 : index)}
          />
        ))}
      </div>
    </div>
  );
};

export default FAQSection;
