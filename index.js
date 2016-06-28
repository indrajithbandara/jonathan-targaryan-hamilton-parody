var fs = require('fs')
var path = require('path')

var original = fs.readFileSync(path.join(__dirname, 'lyrics.txt')).toString()

const stanzas = original.split('[').map(stanza => `[${stanza}]`)

let markdown = `
 | Original | Parody |
 |----------|--------|
`

markdown += stanzas.map((stanza) => {
  return `| ${stanza} | |`
})

console.log(markdown)


