var sections = $$_('section');

console.log(sections)

var logScrollEvent = debounce(function(evt) {
  // console.count(evt)
}, 1000)



window.addEventListener('scroll', logScrollEvent);

window.addEventListener('scroll', function(){
  console.log(window.pageXOffset);
})