import React from "react";

export default function FormChat() {
  return (
    <form
      action="https://formspree.io/f/maqpvanv"
      method="POST"
      className="form"
    >
      <h2>Contact</h2>

      <input
        type="text"
        name="name"
        placeholder="Votre nom"
        required
      />

      <input
        type="email"
        name="email"
        placeholder="Votre email"
        required
      />

      <button type="submit">Envoyer</button>
    </form>
  );
}