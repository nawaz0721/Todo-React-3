function Button({ text, onClick }) {
  return (
    <div className="button">
      <button
        className="btn btn-primary btn mx-3 px-4 bg-purple-600 p-2 text-black rounded font-medium"
        onClick={onClick}
      >
        {text}
      </button>
    </div>
  );
}

export default Button;
