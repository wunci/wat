import Main from './dialog.vue';
import Vue from 'vue';
const D = Vue.extend(Main);
let instance
const Dialog = (options) => {
    
    options.callback = (action) => {
        instance[action === 'confirm' ? 'resolve' : 'reject'](action);
    };
    instance = new D({
        data: options
    });
    let $el = instance.$mount().$el
    instance.show = true
    document.body.appendChild($el);
    return new Promise((resolve,reject)=>{
        Object.assign(instance, {
            resolve,
            reject,
            ...options
        });
    })
}
Dialog.alert = (options) => {
    if(typeof options === 'string'){
        options = {
            content: options
        }
    }
    options.showCancel = false
    return Dialog(options)
}
Dialog.confirm = (options) => {
    if(typeof options === 'string'){
        options = {
            content: options
        }
    }
    options.showCancel = true
    return Dialog(options)
}
Dialog.close = () => {
    instance.show = false
}
export default Dialog;