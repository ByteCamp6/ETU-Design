import Message from "./src/method";
import { withInstallFunction } from "@etu-design/utils";

export const EtuMessage = withInstallFunction(Message, "$message");

export default EtuMessage;
