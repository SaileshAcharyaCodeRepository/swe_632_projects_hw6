// Gemini AI assisted code

import React from "react";

const HelpPage = () => {
  const faqData = [
    {
      question: "What is this Website Used for?",
      answer:
        "This website aims to assist users by providing a tool to track product prices across multiple online retailers in a single location.",
    },
    {
      question: "How do I add Product to Track?",
      answer:
        "Price Tracker page has an add button to add product to track, once clicked it will prompt for product name and number then this will generate a card with two buttons, edit and details and outer button to remove the product. Additional option to add websites to be tracked and details to show the price and name of the websites. The Details button will show the websites and prices on a table.",
    },
    {
      question: "What does a Review page do?",
      answer:
        "Community page to provide product reviews of any product that was bought.",
    },
    {
      question: "What is a Contact page have?",
      answer: "The page to send email to the owner of the page.",
    },
    // Add more FAQ items here
  ];

  return (
    <div>
      <br />
      <h1>Help Page</h1>
      <p>
        Welcome to our help page. Here you can find answers to frequently asked
        questions.
      </p>
      <br />
      <h2>Frequently Asked Questions</h2>
      <br />
      <br />
      <div
        className="faq-container"
        style={{ textAlign: "left", padding: "20px" }}
      >
        {faqData.map((faq, index) => (
          <div className="faq-item" key={index}>
            <h3>{faq.question}</h3>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
      {/*
      <ul>
        <li>
          <strong>Question 1:</strong> What is this Website Used for?
          <p>
            This website aims to assist users by providing a tool to track
            product prices across multiple online retailers in a single
            location.
          </p>
        </li>
        <br />
        <li>
          <strong>Question 2:</strong> How do I add Product to Track?
          <p>
            Price Tracker page has an add button to add product to track, once
            clicked it will prompt for product name and number then this will
            generate a card with two buttons, edit and details and outer button
            to remove the product. Additional option to add websites to be
            tracked and details to show the price and name of the websites. The
            Details button will show the websites and prices on a table.
          </p>
        </li>
        <br />
        <li>
          <strong>Question 3:</strong> What is a Community page do?
          <p>
            Community page to provide product reviews of any product that was
            bought.
          </p>
        </li>
        <br />
        <li>
          <strong>Question 4:</strong> What is a Contact page have?
          <p>The page to send email to the owner of the page.</p>
        </li>        
      </ul>
      */}
    </div>
  );
};

export default HelpPage;
