mixin('count', ['selector', 'stylesheet'],
  prelude('  let tags = document.querySelectorAll(selector)\n\n',
    returnValue('Array.from(tags)',
      reduceFunc(
        prelude('      const index = [].indexOf.call(tags, tag)\n',
          createAttribute(['selector'],
            addAttribute('tag', 'index',
              addStylesheet('stylesheet(index)', 'index'))))))))
