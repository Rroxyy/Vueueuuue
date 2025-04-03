import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://vite.dev/config/
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    // 配置 unplugin-auto-import 插件，按需导入 Naive UI 的 API
    AutoImport({
      imports: [
        'vue',  // 自动导入 Vue 的 API（如 ref, computed, 等）
        {
          'naive-ui': [  // 按需导入 Naive UI 的 API
            'useDialog',
            'useMessage',
            'useNotification',
            'useLoadingBar'
          ]
        }
      ]
    }),
    // 配置 unplugin-vue-components 插件，按需导入 Naive UI 的组件
    Components({
      resolvers: [NaiveUiResolver()]  // 使用 Naive UI 的组件解析器
    })
  ]
})
