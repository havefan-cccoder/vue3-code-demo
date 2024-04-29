import { createVNode, render } from "vue";
//import popupTemplate from 'xxx';
export function signPopup(content) {
    // console.log(content);
    //方法1：不推荐。一点一点的创建模版
    let popup = createVNode('div', {
        class: 'pop-cover'
    },[
        createVNode('div', {
            class: 'pop-content'
        },content)
    ])

    // 方法2：引入模版。模版在单独的文件里写好，HTML和CSS
    // let popup = createVNode(popupTemplate);

    // console.log(popup);
    render(popup,document.body)
} 