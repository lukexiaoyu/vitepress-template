const nav = [
  { text: "css", link: "/css/css" },
  { text: "guide", link: "/guide/" },
  {//下拉菜单
    text: "html",
    items: [
      { text: "标签", link: "/html/biaoqian" },
      { text: "dom", link: "/html/dom" },
    ],
  },
  {//分组菜单
    text: 'Dropdown Menu',
    items: [
      {
        // Title for the section.
        text: 'Section A Title',
        items: [
          { text: 'Section A Item A', link: '...' },
          { text: 'Section B Item B', link: '...' }
        ]
      }
    ]
  },
];
module.exports = nav;
