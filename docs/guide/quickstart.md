# 快速开始

## 环境支持

Etu Design 可以在支持 ES2018 和 ResizeObserver 的浏览器上运行
| Edge | Firefox | Chrome | Safari |
| :-------- | :----- | :----- | :----- |
| >=79 | >=78 | >=64 | >=12 |

## 版本

Etu Design 有望进一步开发迭代

## 使用包管理器

我们建议您使用包管理器（如 `NPM`、`Yarn` 或 `pnpm`）安装 `Etu Design`，然后您就可以使用打包工具，例如 `Vite` 或 `webpack`

```sh
# 选择一个你喜欢的包管理器

# NPM
$ npm install etu-design --save

# Yarn
$ yarn add etu-design

# pnpm
$ pnpm install etu-design
```

如果您的网络环境不好，建议使用相关镜像服务 `cnpm` 或 中国 `NPM` 镜像。

## 完整引入

如果你对打包后的文件大小不是很在乎，那么使用完整导入会更方便。

```typescript
// main.ts
import { createApp } from "vue";
import ETU from "etu-design";
import "etu-design/theme-chalk/index.css";
import App from "./App.vue";

const app = createApp(App);

app.use(ETU as any);
app.mount("#app");
```
