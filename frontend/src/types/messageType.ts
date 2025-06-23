import { ReactNode } from "react";
export default interface MessageType {
    variant?: string;
    children: ReactNode; // ReactNode is a type that can accommodate any kind of JSX content
}
