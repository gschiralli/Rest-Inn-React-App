import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signuppage from "./pages/Signuppage";
import Loginpage from "./pages/Loginpage";
import Listingpage from "./pages/Listingpage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signup" element={<Signuppage />} />
        <Route path="/properties" element={<Listingpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
