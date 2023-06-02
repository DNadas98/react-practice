import ClipLoader from "react-spinners/ClipLoader";

function LoadingSpinner() {
  return (
    <div className="loader">
      <ClipLoader color={"rgb(47, 79, 79)"} size={50} />
    </div>
  );
}

export default LoadingSpinner;
