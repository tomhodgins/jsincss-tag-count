export default (selector, jicStylesheet) => {

  let styles = ''
  let count = 0
  const tags = document.querySelectorAll(selector)

  tags.forEach(tag => {

    const attr = selector.replace(/\W/g, '')
    const index = [].indexOf.call(tags, tag)

    tag.setAttribute(`data-index-${attr}`, count)
    styles += jicStylesheet(index)
                .replace(/:self|\$this/g, `[data-index-${attr}="${count}"]`)
    count++

  })

  return styles

}