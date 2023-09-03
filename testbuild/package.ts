// 专门打包 utils 指令 hook;
// pnpm install gulp-typescript -D -w
import { dest, parallel, series, src } from "gulp";
import { buildConfig } from "./utils/config";
import path from "path";
import ts from "gulp-typescript";
import { outDir, projectRoot } from "./utils/path";
import { withTaskName } from "./utils";
export const buildPackages = (dirname: string, name: string) => {
  const tasks = Object.entries(buildConfig).map(([module, config]) => {
    const output = path.resolve(dirname, config.output.name);
    return series(
      withTaskName(`build:${dirname}`, () => {
        const tsConfig = path.resolve(projectRoot, "tsconfig.json"); // ts的配置文件路径
        const input = ['**/*.ts,"!gulpfile.ts', "!node_modules"];
        return src(input)
          .pipe(
            ts.createProject(tsConfig, {
              declaration: true, //需要生成配置文件
              strict: true,
              module: config.module,
            })(),
          )
          .pipe(dest(output));
      }),
      withTaskName(`copy:${dirname}`, () => {
        console.log(
          outDir,
          config.output.name,
          path.resolve(outDir, config.output.name, name),
        );

        return src(`${output}/**`).pipe(
          dest(path.resolve(outDir, config.output.name, name)),
        );
      }),
    );
  });

  return parallel(...tasks);
};
