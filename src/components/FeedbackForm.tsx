import React ,{ useState } from "react";


export default function Form() {
  const [responseMessage, setResponseMessage] = useState("");

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);
    const response = await fetch("/api/feedback", {
      method: "POST",
      body: formData,
    });
    const data = await response.json();
    if (data.message) {
      setResponseMessage(data.message);
    }
  }

  return (
    <form onSubmit={submit}>
      <label htmlFor="name">
        Nombre
        <input type="text" id="name" name="name" autoComplete="name" required />
      </label>
      <label htmlFor="email">
        Correo electrónico
        <input type="email" id="email" name="email" autoComplete="email" required />
      </label>
      <label htmlFor="message">
        Mensaje
        <textarea id="message" name="message" autoComplete="off" required />
      </label>
      <button>Enviar</button>
      {responseMessage && <p>{responseMessage}</p>}
    </form>
  );
}