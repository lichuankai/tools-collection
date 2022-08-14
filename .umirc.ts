import { defineConfig } from 'dumi';

export default defineConfig({
  title: 'Site Name',
  mode: 'site',
  navs: [
    {
      title: '快速上手',
      path: '/guide'
    },
    {
      title: '组件',
      path: '/src'
    },
    {
      title: 'Github',
      path: 'https://github.com/'
    }
  ],
  menus: {
      '/guide': [
        {
          title: '菜单项',
          children: [
            'guide/index.md',
            'guide/sample.md',
            'guide/help.md'
          ]
        }
      ],
      '/src': [
        {
          title: '基础组件',
          children: [
            'src/index.md',
            'src/button.md'
          ]
        }
      ]
    }
  // more config: https://d.umijs.org/config
});
