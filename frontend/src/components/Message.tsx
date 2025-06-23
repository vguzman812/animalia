import { Alert } from "react-bootstrap";
import type MessageType from "../types/messageType";

const Message = ({ variant, children }: MessageType) => {
    return <Alert variant={variant}>{children}</Alert>;
};

Message.defaultProps = {
    variant: "info",
};
export default Message;
