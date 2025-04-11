import { useNavigate } from "react-router-dom";
import { useLoginMutation } from "../../application/api/loginApi"
import { LoginRequest, loginSchema } from "../../schema/loginUser.schema"
import Button from "./ui/button";
import { Input } from "./ui/Input";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export const FormLogin = () => {

    const [loginApi, { isLoading, error }] = useLoginMutation()
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginRequest>({
        resolver: zodResolver(loginSchema)
    }
    );

    const onSubmit = async (loginRequest: LoginRequest) => {
        console.log("Login Request", loginRequest)
        try {
            const response = await loginApi({
                email: loginRequest.email,
                password: loginRequest.password
            }).unwrap()

            console.log("Respuesta del Servidor", response)
            navigate("/home")

        } catch (error) {
            console.log("Error en el login", error)
        }
    }

    return (
        <form
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-6 w-full">
            <div className="flex flex-col gap-3">
                <h2 className="font-bold text-center text-2xl">
                    Inicio de Sesion - Egresado
                </h2>
                <p className="block font-semibold text-lg text-center">
                    Inicia sesion para poder registrar una solicitud en la plataforma
                </p>
                <div className="flex flex-col gap-2">
                    <Input
                        label="Correo Electrónico"
                        name="email"
                        type="email"
                        placeholder="example@email.com"
                        error={errors.email?.message}
                        register={register}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <Input
                        label="Contraseña"
                        name="password"
                        type="password"
                        placeholder="*********"
                        error={errors.password?.message}
                        register={register}
                    />
                </div>
                <div className="flex flex-col gap-2">
                    <Button
                        type="submit"
                        label={isLoading ? "Ingresando..." : "Ingresar"} />
                    {error && (
                        <p className="text-red-600 text-center mt-2 bg-red-200 p-2">
                            {"Error al iniciar sesión. Verifique sus credenciales"}
                        </p>
                    )}
                    <span onClick={() => navigate("/registro")}
                        className="px-2 p-2 font-bold text-lg text-center text-primary-red hover:text-button-hover cursor-pointer">
                        ¿No tienes una cuenta aún? ¡Registrate aquí!
                    </span>
                </div>
            </div>
        </form>
    )
}   