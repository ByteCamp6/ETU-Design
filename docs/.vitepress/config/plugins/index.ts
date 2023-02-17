import MarkdownIt from 'markdown-it'
import TableContainer from './table'

const markdown: MarkdownIt = MarkdownIt({
  breaks: true
})

export const mdPlugin = (md: MarkdownIt) => {
  md.use(TableContainer)
}