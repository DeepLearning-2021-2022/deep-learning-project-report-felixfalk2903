module.exports = {
  title: 'Project AI Programming',
  description: 'Report for the AI programming project',
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Opleiding', link: 'https://www.vives.be/nl/opleidingen/industriële-wetenschappen-en-technologie/bachelor-elektronica-ict' },
      { text: 'Licentie', link: '/LICENSE.md' },
    ],
    sidebar: [
      ['/', 'Home'],
      ['/probleemstelling/', 'Probleemstelling'],
      ['/doelstelling/', 'Doelstelling'],
      ['/analyse/', 'Analyse'],
      ['/uitwerking/', 'Uitwerking'],
      ['/uitbreiding/', 'Uitbreiding'],
      ['/conclusie/', 'Conclusie'],
      ['/bibliografie/', 'Bibliografie']
    ],
    repo: 'https://github.com/ai-programming-21/report-template',
    docsDir: 'docs',
    docsBranch: 'master'
  },
  markdown: {
    lineNumbers: true,
  },
  serviceWorker: true,
  plugins: [
    ['vuepress-plugin-zooming', {
      // selector for images that you want to be zoomable
      // default: '.content img'
      selector: 'img',

      // make images zoomable with delay after entering a page
      // default: 500
      // delay: 1000,

      // options of zooming
      // default: {}
      options: {
        bgColor: 'black',
        zIndex: 10000,
      },
    }],
  ],
}
