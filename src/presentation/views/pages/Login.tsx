import { Input } from "../../components/ui/Input";
import { useForm } from "react-hook-form";
import { LoginFormValues, loginSchema } from "../../../schema/login.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "../../components/ui/button";

export const Login = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm<LoginFormValues>({
        resolver: zodResolver(loginSchema)
    }
    );

    const onSubmit = handleSubmit(data => {
        const result = loginSchema.safeParse(data)

        if (!result.success) {
            console.log("Errores en la validacion", result.error.format());
            return;
        }

        alert("Logeado correctamente");
        console.log(data);
        reset();
    })


    return (
        <form
            className="flex flex-col gap-6 md:flex-row max-w-6xl mx-auto"
            onSubmit={onSubmit}>
            <section className="flex flex-col gap-3 flex-1">
                <h2 className="font-semibold">Oficina de Grados</h2>
                <h2 className="font-semibold">Que solicitudes puedo enviar?</h2>
                <div className='flex flex-col gap-4'>
                </div>
            </section>
            <section className="flex flex-col gap-4 flex-1 bg-background border-2 border-primary-red p-4 rounded-xl self-start">
                <h2 className="font-bold text-center text-xl">
                    Inicio de Sesion - Egresado
                    <span className="block font-normal text-sm">
                        Inicia sesion para poder registrar una solicitud
                    </span>
                </h2>
                <div className="flex flex-col gap-2 px-5">
                    <Input
                        label="Correo Electrónico"
                        name="email"
                        type="email"
                        placeholder="example@email.com"
                        error={errors.email?.message}
                        register={register}
                    />
                </div>
                <div className="flex flex-col gap-2 px-5">
                    <Input
                        label="Contraseña"
                        name="password"
                        type="password"
                        placeholder="***************"
                        error={errors.password?.message}
                        register={register}
                    />
                </div>
                <div className="flex flex-col gap-2 px-5">
                    <Button
                        type="submit"
                        label="Ingresar" />
                    <Button
                        label="Registrate" 
                        type="button"/>
                </div>
            </section>
        </form>
    )
}