javascript: void ((f) => {
  let script = document.createElement('script')
  script.src = '//code.jquery.com/jquery-3.6.0.min.js'
  script.onload = () => {
    let $ = jQuery.noConflict(true)
    f($)
  }
  document.body.appendChild(script)
})(($, undefined) => {
  let paths = $(
    'div[role="listitem"] div[role="link"], div[role="listitem"] div[role="button"]'
  )
  let hiddens = $('div[class="a-v-T"]')
  let count = 0
  let path_web = ''
  let path_win = ''
  let text = ''
  for (let i = 0; i < paths.length; i++) {
    if ($(paths[i]).text()) {
      if (path_web) path_web += ' > '
      path_web += $(paths[i]).text()
    } else {
      count++
      if (count == 1) {
        for (let j = 0; j < hiddens.length; j++) {
          if (path_web) path_web += ' > '
          path_web += $(hiddens[j]).text()
        }
      }
    }
  }
  path_win = path_web.replace(/ > /g, '\\').replace(/^/, 'G:\\共有ドライブ\\')
  text += path_web
  text += '\n' + location.href
  text += '\n' + path_win
  navigator.clipboard.writeText(text)
  alert(text)
})
