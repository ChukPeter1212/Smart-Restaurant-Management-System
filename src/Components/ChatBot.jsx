import { useState } from "react";

function ChatBot() {
  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");

  const responses = {
    "What are today's specials?":
      "Today's special is Chicken Alfredo for $18.99.",

    "What vegetarian meals do you have?":
      "We offer Vegetable Pasta, Margherita Pizza, and Garden Salad.",

    "What do you recommend?":
      "Based on popular orders, we recommend Chicken Alfredo.",

    "Do you have gluten-free options?":
      "Yes. We offer gluten-free pasta and selected salads.",

    "What is the most popular dessert?":
      "Our Chocolate Lava Cake is our most popular dessert.",

    "What did I order last time?":
      "Your previous order was Chicken Alfredo and Chocolate Lava Cake."
  };

  const handleAsk = () => {
    setResponse(
      responses[question] ||
      "Sorry, I do not understand that question."
    );
  };

  return (
    <div style={{ marginTop: "20px" }}>
      <h2>🤖 AI Restaurant Assistant</h2>

      <select
        value={question}
        onChange={(e) => setQuestion(e.target.value)}
      >
        <option value="">Select a Question</option>

        <option value="What are today's specials?">
          What are today's specials?
        </option>

        <option value="What vegetarian meals do you have?">
          What vegetarian meals do you have?
        </option>

        <option value="What do you recommend?">
          What do you recommend?
        </option>

        <option value="Do you have gluten-free options?">
          Do you have gluten-free options?
        </option>

        <option value="What is the most popular dessert?">
          What is the most popular dessert?
        </option>

        <option value="What did I order last time?">
          What did I order last time?
        </option>
      </select>

      <br /><br />

      <button onClick={handleAsk}>
        Ask AI Assistant
      </button>

      <p>{response}</p>
    </div>
  );
}

export default ChatBot;