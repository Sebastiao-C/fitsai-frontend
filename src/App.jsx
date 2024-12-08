import React, { useEffect, useState } from "react";
import api from "./api";

function App() {
    const [message, setMessage] = useState("");

    useEffect(() => {
        api.get("/")
            .then((response) => {
              console.log("API Response:", response.data); // Add this
              setMessage(response.data.message);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    return (
        <div>
            <h1>Frontend Connected to Backend</h1>
            <p>{message}</p>
        </div>
    );
}

export default App;
