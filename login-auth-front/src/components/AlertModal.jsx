import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle, faCheckCircle, faTimes } from "@fortawesome/free-solid-svg-icons";

const AlertModal = ({ type = "error", message, onClose }) => {
  const bgColor = type === "error" ? "bg-red-100 border-red-500" : "bg-green-100 border-green-500";
  const textColor = type === "error" ? "text-red-700" : "text-green-700";
  const icon = type === "error" ? faExclamationTriangle : faCheckCircle;

  return (
    <div className={`border-l-4 ${bgColor} p-4 rounded-md shadow-md flex items-center justify-between mb-4`}>
      <div className="flex items-center gap-2">
        <FontAwesomeIcon icon={icon} className={textColor} />
        <span className={`font-medium ${textColor}`}>{message}</span>
      </div>
      <button onClick={onClose} className="ml-4">
        <FontAwesomeIcon icon={faTimes} className={textColor} />
      </button>
    </div>
  );
};

export default AlertModal;