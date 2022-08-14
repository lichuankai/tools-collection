module.export = {
  "presets": [
    "@babel/preset-env",
    "@babel/preset-react",
    "@babel/preset-typescript"
  ],
  "plugins": [
    [
      "import",
      {
        "libraryName": "star",
        "libraryDirectory": "src/components",
        "style": true,
        "customName": function (name) {
        //   if (!map[name]) {
        //     console.log(name);
        // }
        return `star/src${map[name]}`;          
        },
      },
      "star"
    ],
    [
      "@babel/plugin-transform-runtime",
      {
        "regenerator": true
      }
    ]
  ],
  "ignore": [
    "node_modules/**"
  ]
}