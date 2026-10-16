const Button = ({ name, onClick }) => {
  return (
    <button className="great" onClick={onClick}>
      {name}
    </button>
  );
};

export default Button;
