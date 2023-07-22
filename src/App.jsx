import { AppRoutes } from "./routes/AppRoutes";
import { Navbar, Footer } from "./components";
import { BrowserRouter, HashRouter } from "react-router-dom";

export const App = () => {
  return (
    <HashRouter>
      <Navbar />
      <AppRoutes />
      <Footer />
    </HashRouter>
  );
};
