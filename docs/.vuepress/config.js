module.exports = {
  title: '个人主页', 
  description: '刘冲的博客',
  head: [
      ['link', { rel: 'icon', href: '/img/logo.ico' }],
      ['link', { rel: 'manifest', href: '/manifest.json' }],
  ]
}
module.exports = {
  themeConfig: {
   nav: [
       { text: '主页', link: '/' },
       { text: '博文',
         items: [
           { text: 'Android', link: '/android/' },
           { text: 'ios', link: '/ios/' },
           { text: 'Web', link: '/web/' }
         ] 
       },
       { text: '关于', link: '/about/' },
       { text: 'Github', link: 'https://www.github.com/codeteenager' },
   ],
   sidebar: {
       '/android/': [
                   "",
                   "android1", 
                    ],
           "/ios/":[
                   "",
                   "ios1",
                   ],
           "/web/":[
                   "",
                   "web1",
                        ],
       },
   sidebarDepth: 2,
   lastUpdated: 'Last Updated', 
},
}
module.exports = {
  serviceWorker: true,
}
module.exports = {
  head: [
          ['link', { rel: 'manifest', href: '/manifest.json' }],
          ['link', { rel: 'apple-touch-icon', href: '/img/logo.png' }],
        ]
}
