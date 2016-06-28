var fs = require('fs')
var path = require('path')

var original = fs.readFileSync(path.join(__dirname, 'lyrics.txt')).toString()

const stanzas = original.split('[').map(stanza => `[${stanza}]`)

let markdown = `
# Jonathan Targaryan
## A Game of Thrones parody of "Alexander Hamilton"

 | Original | Parody |
 |----------|--------|
`

markdown += stanzas.map((stanza) => {
  return `| ${stanza} | |\n`
})

fs.writeFileSync(path.join(__dirname, 'README.md'), markdown)

