# vue-code-demo

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).
 
 # Demo1：自定义公共指令

 ## 1. 使用：
 ```
 v-pinIt:warning.right.top="true"
 ```
 或者
 ```
 v-alertValue="{ message: 'Hello from alertValue directive!' }"
 ```

 具体参数含义可见文档：<https://cn.vuejs.org/guide/reusability/custom-directives.html>

## 2. 定义
见directives 文件夹下的JS文件

## 3. 导出
把所有的自定义指令的定义都在一个文件里导出：directives/index.js文件里

## 4. 注入

在main.js文件里注入，就可以在组件里使用了
