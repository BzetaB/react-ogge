import { FormLogin } from "../components/LoginForm"

export const Login = () => {
    return (
        <div className="w-full max-w-7xl mx-auto px-4 py-8 md:py-12">
            <div className="flex flex-col md:flex-row gap-8 mb-8">
                <div className="w-full md:w-1/2 p-6 md:p-8 rounded-3xl shadow-md flex flex-col gap-4 overflow-hidden">
                    <div className="p-4">
                        <h2 className="text-4xl font-bold mb-4">
                            Oficina de Grados y Gestion del Egresado - EUPG - UNFV
                        </h2>
                    </div>
                    <div className="p-4 rounded-md flex-grow">
                        <p className="text-xl text-justify">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio omnis, assumenda minima adipisci quidem odio perspiciatis eveniet doloremque deserunt eligendi suscipit, blanditiis, repellendus temporibus veritatis modi corrupti nihil eum itaque!
                        </p>
                    </div>
                </div>
                <div className="w-full md:w-1/2 p-6 md:p-8 rounded-3xl shadow-md flex flex-col justify-center">
                    <FormLogin />
                </div>
            </div>
        </div>
    )
}