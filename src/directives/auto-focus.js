//自定义全局指令函数2，并导出
const autoFocus = {
    // 当被绑定的元素挂载到 DOM 上时调用
    mounted(el) {
        el.focus();
    }
};

export default autoFocus