import "../styles/Button.css";

const Button = ({className, text, color, onClick}) => {
  return (
    <button className={`Button ${color} ${className}`} onClick={onClick}>
      {text}
    </button>
  );
};

export default Button;