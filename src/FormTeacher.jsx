import React, { useState } from "react";

export default function FormDemo() {
  const [formData, setFormData] = useState({ mail: "", username: "" });

  const handleChange = (event) => {
    setFormData((previousData) => ({
      ...previousData,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmission = async (event) => {
    event.preventDefault();
    try {
      const response = await fetch("url form lan ap la", {
        method: "POST", 
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      console.log(response);

      if (response.ok) {
        alert("Submission is successful!!");
      } else {
        alert("Failed to submit");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <form onSubmit={handleSubmission}>
        <input
          type="text"
          placeholder="email"
          onChange={handleChange}
          name="mail"
          value={formData.mail}
        />
        <input
          type="text"
          placeholder="Name"
          onChange={handleChange}
          name="username"
          value={formData.username}
        />

        <button type="submit">Soumettre</button>
      </form>
    </>
  );
}