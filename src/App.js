import React, { useEffect, useState } from "react";
import Nav from "./components/nav.jsx";
import "./App.css";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [start, setStart] = useState(false);

  useEffect(() => {
    if (!start) {
      const startServer = async () => {
        try {
          const { data } = await axios.get(
            `https://portfolio-server-05hw.onrender.com`
          );
          if (data.message === "ok") {
            setStart(true);
          }
        } catch (error) {
          console.error("Error starting the server:", error);
        }
      };
      startServer();
    }
  }, [start]);

  return (
    <div className="bg-white dark:bg-black h-screen w-screen">
      <Nav />
    </div>
  );
}

export default App;
