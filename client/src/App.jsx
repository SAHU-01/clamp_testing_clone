import { useState } from "react";
import { Alert, Navbar, Tab } from "./components";
import { ToastContainer } from "react-toastify";
import { ImArrowUp2 } from "react-icons/im";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [showScrollUp, setShowScrollUp] = useState(false);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      setShowScrollUp(true);
    } else {
      setShowScrollUp(false);
    }
  });

  return (
    <div className="min-h-screen">
      <Alert />
      <Navbar />
      <Tab />
      <ToastContainer />
      {showScrollUp && (
        <button
          className="fixed bottom-8 right-8 p-4 bg-[#FF7a30] rounded-full text-white hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-900"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <ImArrowUp2 size={16} />
        </button>
      )}
    </div>
  );
};

export default App;
