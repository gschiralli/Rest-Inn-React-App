import Homepage from "./pages/Homepage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signuppage from "./pages/Signuppage";
import Loginpage from "./pages/Loginpage";
import Listingpage from "./pages/Listingpage";
import Descriptionpage from "./pages/Descriptionpage";
import Typepage from "./pages/Typepage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Loginpage />} />
        <Route path="/signup" element={<Signuppage />} />
        <Route path="/properties" element={<Listingpage />} />
        <Route path="/properties/:id" element={<Descriptionpage />} />
        <Route path="/properties/type/:type" element={<Typepage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
