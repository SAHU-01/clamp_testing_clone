import { Alert, Navbar, Tab } from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <div className="min-h-screen">
      <Alert />
      <Navbar />
      <Tab />
      <ToastContainer />
    </div>
  );
};

export default App;
