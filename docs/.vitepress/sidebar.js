const sidebar= {
    // This sidebar gets displayed when user is
    // under `guide` directory.
    '/guide/': [
      {
        text: 'Guide',
        collapsible: true,//是否有折叠
        collapsed: true,//true就是默认加载完成是折叠的
        items: [
          // This shows `/guide/index.md` page.
          { text: 'Index', link: '/guide/' }, // /guide/index.md
          { text: 'One', link: '/guide/one' }, // /guide/one.md
          { text: 'Two', link: '/guide/two' } // /guide/two.md
        ]
      }
    ],

    // This sidebar gets displayed when user is
    // under `config` directory.
    '/config/': [
      {
        text: 'Config',
        items: [
          // This shows `/config/index.md` page.
          { text: 'Index', link: '/config/' }, // /config/index.md
          { text: 'Three', link: '/config/three' }, // /config/three.md
          { text: 'Four', link: '/config/four' } // /config/four.md
        ]
      }
    ]
  }

module.exports=sidebar