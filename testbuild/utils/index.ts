import { spawn } from "child_process";
import { projectRoot } from "./path";

export const withTaskName = (name: String, fn: any) =>
  Object.assign(fn, { displayName: name });

// 在node使用子进程来运行脚本  rf -rf
export const run = async (command: string) => {
  return new Promise((resolve) => {
    const [cmd, ...args] = command.split(" ");
    const app = spawn(cmd, args, {
      cwd: projectRoot,
      stdio: "inherit", // 直接将这个子进程输出
      shell: true,
    });
    app.on("close", resolve);
  });
};
