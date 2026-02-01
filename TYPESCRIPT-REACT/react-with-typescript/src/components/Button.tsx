interface MyButtonProps {
    title: string
    disabled: boolean
}

const Button = ({ title, disabled }: MyButtonProps) => {
    return (
        <div style={{
            width: "300px",
            height: "100px",
            backgroundColor: "black",
            color: "white",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center"
        }}>
            <button disabled={disabled}>{title}</button>
        </div>
    )
}

export default Button