function tabs() {
	let glazing = document.querySelectorAll('.glazing_block'),
        slickTrack = document.querySelector('.slick-list'),
        content = document.querySelectorAll('.glass');
     function hideContent(a) {
        for (var i = a; i < content.length; i++) {
          content[i].classList.remove('show');
          content[i].classList.add('hide');
        }
      }

   hideContent(1);

   function showContent(b) {
     if (content[b].classList.contains('hide')) {
       content[b].classList.remove('hide');
       content[b].classList.add('show');
     }
   }

   slickTrack.addEventListener('click', function(event) {
      let target = event.target;
      if (target && target.classList.contains('glazing_block')) {
       	for (var i = 0; i < glazing.length; i++) {
            if (target == glazing[i]) {
              hideContent(0);
              showContent(i);
              break;
            }
       	}
      }
 	});
}
module.exports = tabs;