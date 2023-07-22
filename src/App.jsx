import { AppRoutes } from "./routes/AppRoutes";
import { Navbar, Footer } from "./components";
import { BrowserRouter } from "react-router-dom";

export const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <AppRoutes />
      <Footer />
    </BrowserRouter>
  );
};
