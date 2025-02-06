import "../styles/Button.css";

const Button = ({className, text, color}) => {
  return (
    <button className={`Button ${color} ${className}`}>
      {text}
    </button>
  );
};

export default Button;
