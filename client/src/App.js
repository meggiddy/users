import "font-awesome/css/font-awesome.min.css";
import "./App.css";
import Button from "./components/button";
import StepBar from "./components/step";
import { UserProvider } from "./UserContext";

function App() {
  return (
    <UserProvider>
      <div className="App">
        <StepBar />
        <Button />
      </div>
    </UserProvider>
  );
}

export default App;
