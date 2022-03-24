import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

export default function TodoList() {
  return (
    <ul className="list-group todos mx-auto text-light">
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <span>Cert JS Developer I</span>
        <FontAwesomeIcon icon={faTrash} className="delete" />
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <span>Superbadge Lightning Web Components</span>
        <FontAwesomeIcon icon={faTrash} className="delete" />
      </li>
      <li className="list-group-item d-flex justify-content-between align-items-center">
        <span>Hunt for job :)</span>
        <FontAwesomeIcon icon={faTrash} className="delete" />
      </li>
    </ul>
  );
}
