import { faCalendarAlt } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format, parseISO } from "date-fns";

export default function Date({ dateString }: { dateString: string }): JSX.Element {
    const date = parseISO(dateString);
    return (
        <span>
            <FontAwesomeIcon className="mr-2" icon={faCalendarAlt} fixedWidth size="sm" />
            <time dateTime={dateString}>{format(date, "do LLLL, yyyy")}</time>
        </span>
    );
}
