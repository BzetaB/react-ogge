import { Mail, MapPin } from "lucide-react";

interface FooterProps {
    empresa: string,
    year?: number,
    email: string,
    location: string,
}


export const Footer = ({
    empresa,
    year,
    email,
    location
}: FooterProps) => {
    return (
        <footer className="bg-primary-red text-white font-semibold py-4 w-full mt-auto">
            <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center px-4">
                <span className="text-xs text-left">
                    © {year}{" "} 
                    <a href="https://www.unfv.edu.pe/eupg/index.php/servicios/oficina-de-grados-y-gestion-del-egresado"
                        className="hover:underline">
                        {empresa}
                    </a>.
                </span>

                <div className="text-xs flex flex-col gap-1 items-start md:items-end mt-2 md:mt-0">
                    <a href={`mailto:${email}`} className="flex items-center gap-2 hover:text-button-hover transition-colors">
                        <Mail size={16}/>
                        {email}
                    </a>
                    <div className="flex items-center gap-2">
                        <MapPin size={16}/>
                        {location}
                    </div>
                </div>
            </div>
        </footer>
    );
};
