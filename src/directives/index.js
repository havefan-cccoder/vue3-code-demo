//将所有的指令都导入到这，放在directives中，然后导出一个install方法
import alertValue from './alert-value.js'
import autoFocus from './auto-focus.js'
import pinIt from './pin-it.js'

const directives = {
    alertValue,
    autoFocus,
    pinIt
}

//如果想要换成小写等改名的话，就得这么写了
// const directives = {
//     'alertvalue': alertValue,
//     'autofocus': autoFocus,
//     'pinit': pinIt
// }

export default {
    install(app) {
        Object.keys(directives).forEach((key) => {
            console.log(key,1);
            app.directive(key, directives[key])
        })
    }
}