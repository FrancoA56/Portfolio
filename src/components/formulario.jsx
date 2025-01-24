import React, { useState, useRef } from "react";
import Alert from "./alert";
import axios from "axios";
import { useSelector } from "react-redux";

function Formulario() {
  const form = useRef();
  const language = useSelector((state) => state.language);

  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: "",
  });

  const [alert, setAlert] = useState({
    message: "",
    type: "success", // "success", "error", or "info"
    isVisible: false,
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const showAlert = (message, type) => {
    setAlert({ message, type, isVisible: true });
    setTimeout(() => setAlert((prev) => ({ ...prev, isVisible: false })), 3000); // Auto-hide after 3 seconds
  };

  async function handleSubmit(e) {
    e.preventDefault();

    if (formData.email && formData.message) {
      const textParts = [];
      if (formData.name) textParts.push(`Nombre: ${formData.name}`);
      if (formData.company)
        textParts.push(`Nombre de la Empresa: ${formData.company}`);
      if (formData.email) textParts.push(`Email: ${formData.email}`);
      if (formData.message) textParts.push(`Mensaje: ${formData.message}`);
      try {
        const objetoBody = {
          to: "franco.adamoli@gmail.com",
          subject: "¡Quiero hablar!",
          text: textParts.join("\n"),
        };
        const { data } = await axios.post(
          `https://portfolio-server-05hw.onrender.com`,
          objetoBody,
          { headers: { "Content-Type": "Application/Json" } }
        );
        showAlert(data.message || "¡Mensaje enviado con éxito!", "success");
      } catch (error) {
        showAlert(
          error.response?.data?.message || "Error al enviar el mensaje.",
          "error"
        );
      }
    } else {
      showAlert(
        "Debe completar al menos las casillas de correo electrónico y mensaje.",
        "error"
      );
    }
  }

  return (
    <div className="flex justify-center items-center sm:mx-96 mx-0 p-4 relative">
      <form className="w-full" onSubmit={(e) => handleSubmit(e)} ref={form}>
        {/* Nombre */}
        {language ? (
          <input
            type="text"
            name="name"
            placeholder="Nombre"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full bg-white dark:bg-slate-300 p-2 border shadow-sm text-black placeholder:text-gray-800 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        ) : (
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="mt-1 block w-full bg-white dark:bg-slate-300 p-2 border shadow-sm text-black placeholder:text-gray-800 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        )}

        {/* Empresa */}
        <div className="flex flex-row gap-3 my-2">
          {language ? (
            <input
              type="text"
              name="company"
              placeholder="Empresa"
              value={formData.company}
              onChange={handleChange}
              className="mt-1 block w-full bg-white dark:bg-slate-300 p-2 border shadow-sm text-black placeholder:text-gray-800 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          ) : (
            <input
              type="text"
              name="company"
              placeholder="Company"
              value={formData.company}
              onChange={handleChange}
              className="mt-1 block w-full bg-white dark:bg-slate-300 p-2 border shadow-sm text-black placeholder:text-gray-800 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            />
          )}

          {/* Email */}
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="mt-1 block w-full bg-white dark:bg-slate-300 p-2 border shadow-sm text-black placeholder:text-gray-800 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          />
        </div>
        {/* Mensaje */}
        <div>
          {language ? (
            <textarea
              name="message"
              placeholder="Mensaje"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full bg-white dark:bg-slate-300 p-2 border shadow-sm text-black placeholder:text-gray-800 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
          ) : (
            <textarea
              name="message"
              placeholder="Message"
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="mt-1 block w-full bg-white dark:bg-slate-300 p-2 border shadow-sm text-black placeholder:text-gray-800 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
          )}
        </div>
        {/* Botón */}
        {language ? (
          <button
            type="submit"
            className="w-full bg-mainL dark:bg-mainD text-white dark:text-black dark:hover:text-white py-2 mt-4 px-4 hover:bg-mainD hover:text-black dark:hover:bg-mainL transition duration-300"
          >
            Enviar
          </button>
        ) : (
          <button
            type="submit"
            className="w-full bg-mainL dark:bg-mainD text-white dark:text-black dark:hover:text-white py-2 mt-4 px-4 hover:bg-mainD hover:text-black dark:hover:bg-mainL transition duration-300"
          >
            Send
          </button>
        )}
      </form>

      {/* Componente Alert */}
      <Alert
        message={alert.message}
        type={alert.type}
        isVisible={alert.isVisible}
        onClose={() => setAlert((prev) => ({ ...prev, isVisible: false }))}
      />
    </div>
  );
}

export default Formulario;
