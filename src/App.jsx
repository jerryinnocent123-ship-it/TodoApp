import { useState, useEffect } from "react";
import Loader from "./components/Loader";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000); // simulate loading
  }, []);

  return (
    <div>
      {loading ? <Loader /> : <h1>Content Loaded</h1>}
    </div>
  );
}