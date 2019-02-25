
        
var canvas = document.querySelector('#myCanvas')
setAttributes(canvas, {
    "width": `${window.outerWidth}`,
    "height": `${window.outerHeight}`
})

// helper function
function setAttributes(el, attrs) {
    for(var key in attrs) {
        el.setAttribute(key, attrs[key]);
    }
}

