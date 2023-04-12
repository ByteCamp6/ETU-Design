import Message from "./src/method";
import { withInstallFunction } from "@etu-design/utils";

export const EtuMessage = withInstallFunction(Message, "$message");

export * from "./src/message";
export default EtuMessage;
