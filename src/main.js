import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// 引入vue路由
import VueRouter from 'vue-router';
//引入路由器
import router from '@/router/index';
// 引入仓库
import store from '@/store/index';
Vue.use(ElementUI);
Vue.config.productionTip = false;
//引入emo表情
import emoji from 'node-emoji';
Vue.prototype.emoji = emoji
// 使用路由组件
Vue.use(VueRouter);
new Vue({
    render: (h) => h(App),
    router: router, //配置路由
    store: store,
    beforeCreate() {
        Vue.prototype.$bus = this; //安装全局事件总线，$bus就是当前应用的vm
    },
}).$mount('#app');
