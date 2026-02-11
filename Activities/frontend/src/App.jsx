import Login from "./pages/login";
import "./App.css";
import { AuthProvider } from "./contexts/AuthContext";
import Inventory from "./pages/Inventory";

function App() {
  return (
    <>
      <AuthProvider>
        <Inventory></Inventory>
      </AuthProvider>
    </>
  );
}

export default App;
