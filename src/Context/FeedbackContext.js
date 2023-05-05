import { createContext, useState, useEffect } from "react";
// import { v4 as uuidv4 } from "uuid";

const FeedbackContext = createContext();
export const FeedbackProvider = ({ children }) => {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    fechFeedBack();
  }, []);

  const fechFeedBack = async () => {
    const response = await fetch("http://localhost:5000/feedback");
    const data = await response.json();

    console.log(data);
  };
  const [feedbackEdit, setFeedbackEdit] = useState({
    item: {},
    edit: false,
  });

  const addFeedback = async (newFeedback) => {
    const response = await fetch("http://localhost:5000/feedback", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newFeedback),
    });

    const data = await response.json();
    setFeedback([data, ...feedback]);
  };

  //delete fedd back item
  const deleteFeedback = async (id) => {
    if (window.confirm("Are you sure ypu wnat to delete?")) {
      await fetch("http://localhost:5000/feedback/${id}", { method: "DELETE" });
      setFeedback(feedback.filter((item) => item.id !== id));
    }
  };
  //update feedback item
  const updateFeedback = (id, updatedItem) => {
    setFeedback(
      feedback.map((item) =>
        item.id === id ? { ...item, ...updatedItem } : item
      )
    );
  };
  //function to set item to be updated
  const editFeedback = (item) => {
    setFeedbackEdit({
      item,
      edit: true,
    });
  };
  return (
    <FeedbackContext.Provider
      value={{
        feedback,
        feedbackEdit,
        deleteFeedback,
        addFeedback,
        editFeedback,
        updateFeedback,
      }}
    >
      {children}
    </FeedbackContext.Provider>
  );
};

export default FeedbackContext;
