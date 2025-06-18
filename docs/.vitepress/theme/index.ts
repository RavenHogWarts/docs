/* .vitepress/theme/index.ts */
import DefaultTheme from 'vitepress/theme'
import { useData, useRoute } from 'vitepress';
import { h, toRefs, onMounted, watch, nextTick } from 'vue'
import * as LucideIcons from 'lucide-vue-next';
import MyLayout from "./components/MyLayout.vue"
import HomeUnderline from "./components/HomeUnderline.vue"
import NotFound from "./components/NotFound.vue"
import LucideIcon from "./components/LucideIcon.vue"
import giscusTalk from 'vitepress-plugin-comment-with-giscus';
import mediumZoom from 'medium-zoom';
import './styles/index.css'
import 'virtual:group-icons.css' //代码组样式 //



export default {
    extends: DefaultTheme,
    enhanceApp({app}) { 
        // 注册全局组件
        app.component('HomeUnderline' , HomeUnderline)
        app.component('LucideIcon', LucideIcon)
        
        // 将图标对象挂载到全局属性上
        app.config.globalProperties.$lucideIcons = LucideIcons
    },
    Layout() { 
        return h(MyLayout) 
    },
    NotFound() {
        return h(NotFound)
    },
    setup() {
        // 获取前言和路由
        const { frontmatter } = toRefs(useData());
        const route = useRoute();
        
        // 评论组件 - https://giscus.app/
        giscusTalk({
            repo: 'RavenHogWarts/docs',
            repoId: 'R_kgDON4xplA',
            category: 'Announcements', // 默认: `General`
            categoryId: 'DIC_kwDON4xplM4Cm7FF',
            mapping: 'pathname', // 默认: `pathname`
            inputPosition: 'bottom', // 默认: `top`
            lang: 'zh-CN', // 默认: `zh-CN`
            // i18n 国际化设置（注意：该配置会覆盖 lang 设置的默认语言）
            // 配置为一个对象，里面为键值对组：
            // [你的 i18n 配置名称]: [对应 Giscus 中的语言包名称]
            locales: {
                'zh-CN': 'zh-CN',
                'zh-Hans': 'zh-CN',
                'en-US': 'en'
            },
            homePageShowComment: false, // 首页是否显示评论区，默认为否
            lightTheme: 'light', // 默认: `light`
            darkTheme: 'transparent_dark', // 默认: `transparent_dark`
            // ...
        }, {
            frontmatter, route
        },
            // 是否全部页面启动评论区。
            // 默认为 true，表示启用，此参数可忽略；
            // 如果为 false，表示不启用。
            // 可以在页面使用 `comment: true` 前言单独启用
            true
        );

        const initZoom = () => {
            // mediumZoom('[data-zoomable]', { background: 'var(--vp-c-bg)' }); // 默认
            mediumZoom('.main img', { background: 'var(--vp-c-bg)' }); // 不显式添加{data-zoomable}的情况下为所有图像启用此功能
        };
        onMounted(() => {
            initZoom();
        });
        watch(
            () => route.path,
            () => nextTick(() => initZoom())
        );
    },
}