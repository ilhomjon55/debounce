var sections = $__('section');


var logScrollEvent = debounce(function(evt) {
  console.count(evt)
}, 1000)



window.addEventListener('scroll', logScrollEvent);