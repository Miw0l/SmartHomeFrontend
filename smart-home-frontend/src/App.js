import { AuthProvider } from "react-auth-kit";
import RoutesComponent from "./Routes";
import "./styles/globalStyles.css";

function App() {
  return (
    <AuthProvider authName={"_auth"} authType={"cookie"}>
      <RoutesComponent />
    </AuthProvider>
  );
}

export default App;
