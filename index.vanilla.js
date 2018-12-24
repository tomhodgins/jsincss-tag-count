export default (selector, stylesheet) => {
  const tags = document.querySelectorAll(selector)
  const attr = selector.replace(/\W/g, '')
  const result = Array.from(tags)
    .reduce((output, tag, count) => {
      const index = [].indexOf.call(tags, tag)
      output.add.push({tag: tag, count: count})
      output.styles.push(
        stylesheet(index).replace(
          /:self|\$this|\[--self\]/g,
          `[data-index-${attr}="${count}"]`
        )
      )
      return output
    }, {add: [], remove: [], styles: []})
  result.add.forEach(tag => tag.tag.setAttribute(`data-index-${attr}`, tag.count))
  result.remove.forEach(tag => tag.setAttribute(`data-index-${attr}`, ''))
  return result.styles.join('\n')
}
