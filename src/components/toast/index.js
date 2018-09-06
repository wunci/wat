import Toast from './src/main'

const install = (Vue)=>{
    Vue.prototype.$toast = Toast
}

export default install