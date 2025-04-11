import { Outlet } from "react-router-dom";
import Footer from "../sections/Footer";

export const AuthLayout = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <div className="flex-grow">
                <Outlet />
            </div>
            <Footer
                empresa="Oficina de Grados y Gestión del Egresado de la Escuela Universitaria de Posgrado de la Universidad Villarreal"
                year={2025}
                email="ogge.eupg@unfv.edu.pe"
                location="Jr. Prolongación Camaná N°1014 Lima" />
        </div >
    )
};