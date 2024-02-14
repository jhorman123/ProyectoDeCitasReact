const error = ({mensaje}) => {
  return (
    <div className="bg-red-800 text-white text-center p-2 uppercase font-bold mb-3 rounded-md">
      <p>{mensaje}</p>
    </div>
  );
};

export default error;
