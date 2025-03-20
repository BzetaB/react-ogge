interface Props {
    label: string;
    className?: string;
    disabled?: boolean;
    type?: "button" | "submit";
    onClick?: () => void;
}

const Button = ({
    label,
    className,
    disabled = false,
    type = "submit",
    onClick
}: Props) => {
    return (
            <button
                type={type}
                disabled={disabled}
                onClick={onClick}
                className={
                    `py-2 px-4 font-semibold rounded-md 
                    ${disabled ? "opacity-50 cursor-not-allowed" : 
                        "bg-primary-red hover:bg-button-hover border border- hover:border-transparent text-white"}
                    ${className}`}>
                {label}
            </button>
    );
};

export default Button;