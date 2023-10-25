import "font-awesome/css/font-awesome.min.css";
import "./App.css";
import Button from "./components/button";
import StepBar from "./components/step";
import { UserProvider } from "./UserContext";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <UserProvider>
      <ToastContainer />
      <div className="App">
        <StepBar />
        <Button />
      </div>
    </UserProvider>
  );
}

export default App;
