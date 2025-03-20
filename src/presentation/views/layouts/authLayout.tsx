import { Login } from "../pages/Login";
import { SingUp } from "../pages/SingUp";
import { Footer } from "../sections/Footer";

export const AuthLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <main className="flex-grow w-full bg-background px-8 py-10 overflow-y-auto">
                <SingUp />
            </main>
            <Footer
                empresa="Oficina de Grados y Gestión del Egresado de la Escuela Universitaria de Posgrado de la Universidad Villarreal"
                year={2025}
                email="ogge.eupg@unfv.edu.pe"
                location="Jr. Prolongación Camaná N°1014 Lima" />
        </div>
    )
};