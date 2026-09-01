import Navbar from "../pages/shared/navBar/NavBar";
import Footer from "../pages/shared/footer/Footer";
import { Outlet } from "react-router";



const RootLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
    );
};

export default RootLayout;