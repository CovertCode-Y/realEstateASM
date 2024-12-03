import { BrowserRouter as Router } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";

const App = () => {
  return (
    <Router basename="/realEstateASM"> {/* שים את שם המאגר כאן */}
      <div className="app">
        <AppRoutes />
      </div>
    </Router>
  );
};

export default App;
