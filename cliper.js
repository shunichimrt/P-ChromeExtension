javascript: void ((f) => {
  let script = document.createElement('script')
  script.src = '//code.jquery.com/jquery-3.6.0.min.js'
  script.onload = () => {
    let $ = jQuery.noConflict(true)
    f($)
  }
  document.body.appendChild(script)
})(($, undefined) => {
  var text = "hello"
  navigator.clipboard.writeText(text)
  alert(text)
})
