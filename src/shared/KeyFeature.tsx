import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { KeyFeatureProps } from "../../types";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

export default function KeyFeature({ title }: KeyFeatureProps) {
  return (
    <div className="font-regular flex justfy-between items-center gap-2">
      <FontAwesomeIcon icon={faCheck} color="#CB3837" className="text-packship-purple-lite" />
      <span className="text-white text-lg">{title}</span>
    </div>
  );
};
