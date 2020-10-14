## 编译并运行
编译并运行之前需[搭建开发环境](https://reactnative.cn/docs/getting-started.html)：
```shell script
# 安装依赖
yarn

# 运行开发环境
yarn start

# 为生产环境构建代码
yarn build

# 运行storybook
yarn run storybook
```

## App 技术栈
主要技术栈:
- React
- React Router
- Redux & redux-thunk & normalizr

语言：
- Javascript


## Quick Start

程序结构:

```
├── src
│   ├── components
│   ├── i18n
│   ├── utils
│   ├── models
│   ├── navigation
│   ├── screens
│   ├── services
│   ├── theme
│   ├── test
│   ├── app.tsx
├── .storybook
│   ├── main.js
│   ├── preview.js
├── README.md
└── package.json

```

### ./app
react 代码文件夹：

```
app
│── components
│── i18n
├── models
├── navigation
├── screens
├── services
├── theme
├── utils
└── app.tsx
```

* **./components**
组件目录。每个组件都应该是一个文件夹，里面存放`.tsx`文件和一个`*.stories.tsx`文件。复杂组件还应该包含`*.presets.ts`（样式）和`*.props.ts`（属性类型定义）文件。 

* **./i18n**
国际化相关文件.

* **./models**
存放应用模型(models)。每个模型都是一个文件夹，里面包含`mobx-state-tree` 模型文件、test 文件，action和types文件。

* **./navigation**
`react-navigation` navigators 相关文件。定义应用的导航层次结构。

* **./screens**
`screen`相关文件。一个`screen`相当于一个完整的页面，占据大部分屏幕，是导航层次结构的一部分。应包含`.tsx`文件和其他支持文件`*.props.ts` `*.presets.ts`。

* **./services**
任何与外界通信的服务(REST APIs, Push Notifications, etc.)。

* **./theme**
应用设计相关常量 spacing, colors, 和typography。

* **./utils**
通用helper函数和功能性函数

* **app.tsx** 应用入口。


### ./storybook
[Storybook](https://storybook.js.org/docs/react/get-started/introduction) 配置文件

### ./test

Jest config 和 mocks,  [storyshots](https://github.com/storybooks/storybook/tree/master/addons/storyshots) 测试文件，所有组件storybook的快照。
