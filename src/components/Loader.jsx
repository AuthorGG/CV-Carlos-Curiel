import "../assets/css/styles.css";
import { ClipLoader } from "react-spinners";

export default function Loader() {
  return (
    <div className="loader-container">
      <ClipLoader color="#ff0080" size={70} />
    </div>
  );
}
