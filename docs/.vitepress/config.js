// const nav=[
//     {text:"css",link:'/css/flex'}
// ]
const nav=require('./nav')
const sidebar=require('./sidebar')
export default {
  title: "KlPalace",
  base:'',//如果部署到gitee page后面的仓库名称
  markdown: {
    theme: 'material-palenight',
    lineNumbers: true     //是否显示代码每行的序号
  },
  themeConfig: {
    outline:[2,3],//右边的标题链接显示几级
    outlineTitle: '标题',//右边的标题on this page
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
      
      {
        icon: {
          svg: '<svg role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Dribbble</title><path d="M12...6.38z"/></svg>'
        },
        link: '...'
      }
    ],//

    logo: '/my-logo.svg',

    nav,  
    sidebar,  
    footer: {//脚步信息
      message: 'Released under the MIT License.',
      copyright: 'Copyright © 2022-present Luke xiao'
    }                                                                                                                                                            
  },
};
