export default (selector, jicStylesheet) => {

  let tags = document.querySelectorAll(selector)

  return Array.from(tags)

    .reduce((styles, tag, count) => {

      const attr = selector.replace(/\W/g, '')
      const index = [].indexOf.call(tags, tag)

      tag.setAttribute(`data-index-${attr}`, count)
      styles += jicStylesheet(index).replace(
        /:self|\$this/g,
        `[data-index-${attr}="${count}"]`
      )
      count++

      return styles

    }, '')

}