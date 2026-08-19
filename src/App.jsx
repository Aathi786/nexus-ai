import { useEffect, useState } from "react";
import Loader from "./components/ui/Loader";
import Home from "./pages/Home";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return loading ? <Loader /> : <Home />;
}

export default App;