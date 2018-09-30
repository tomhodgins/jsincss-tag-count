module.exports = (selector, stylesheet) => {

  let tags = document.querySelectorAll(selector)

  return Array.from(tags)

    .reduce((styles, tag, count) => {

      const index = [].indexOf.call(tags, tag)
      const attr = selector.replace(/\W/g, '')

      tag.setAttribute(`data-index-${attr}`, count)
      styles += stylesheet(index).replace(
        /:self|\$this/g,
        `[data-index-${attr}="${count}"]`
      )
      return styles

    }, '')

}
