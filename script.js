    // Show content for the first box by default
    showContent('content1');


    function showContent(contentId) {
      // Hide all content elements
      var contentElements = document.querySelectorAll('.content');
      contentElements.forEach(function (element) {
        element.style.display = 'none';
      });

      // Show the selected content element
      var selectedContent = document.getElementById(contentId);
      selectedContent.style.display = 'block';
    }


var main = document.querySelector("#main")
var crsr = document.querySelector(".cursor")
var left=document.querySelector(".left")

main.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
})
left.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+"px"
    crsr.style.top = dets.y+"px"
})



var accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach(function(item) {
    item.addEventListener('click', function() {
        // Toggle the active class for styling
        this.classList.toggle('active');

        // Toggle the visibility of the associated content
        var content = this.nextElementSibling;
        if (content.style.display === 'block') {
            content.style.display = 'none';
        } else {
            content.style.display = 'block';
        }
    });
});

// btn script
let btn = document.querySelector('a');
btn.addEventListener('mousemove', e => {
    let rect = e.target.getBoundingClientRect();
    let x = e.clientX * 3 - rect.left;
    btn.style.setProperty('--x', x + 'deg'); 
});