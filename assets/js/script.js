window.onload = function () {
  var queryString = window.location.search;
  var urlParams = new URLSearchParams(queryString);
  var switcher = Boolean(urlParams.get('switcher-off'));
  if (switcher) {
    $('.language-switcher').hide()
    $('body').removeClass('scroll')
  }
  let docHeight = $(document).height();
  $('.svg_wrapper').height(docHeight)
  let scrollingBox1 = $('#scrollingBox1');
  let scrollingBox2 = $('#scrollingBox2');
  let scrollingBox3 = $('#scrollingBox3');
  const path1 = document.getElementById('motionPath1');
  const path2 = document.getElementById('motionPath2');
  const path3 = document.getElementById('motionPath3');
  const box1 = document.getElementById('scrollingBox1');
  const box2 = document.getElementById('scrollingBox2');
  const box3 = document.getElementById('scrollingBox3');

  // Add scroll event listener
  window.addEventListener('scroll', function () {
    updateBoxPosition(box1, path1);
    updateBoxPosition(box2, path2);
    updateBoxPosition(box3, path3);
  });

  // Initial draw position
  updateBoxPosition(box1, path1);
  updateBoxPosition(box2, path2);
  updateBoxPosition(box3, path3);
};

function updateBoxPosition(box, path) {
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.body.scrollHeight;
  
  // Calculate the percentage based on the current scroll position
  const percentage = scrollPosition / (documentHeight - windowHeight);
  //  const percentage = scrollPosition / documentHeight;
  if (percentage < 0.1866){scrollingBox3.style.fill = '#453966';}
  if (percentage > 0.1866){scrollingBox3.style.fill = '#B398FF';}
  if(percentage < 0.2051){scrollingBox1.style.fill = '#453966';}
  if(percentage > 0.2051){scrollingBox1.style.fill = '#B398FF';}
  if(percentage < 0.2456){scrollingBox2.style.fill = '#453966';}
  if(percentage > 0.2456){scrollingBox2.style.fill = '#B398FF';}
  if(percentage > 0.5163){scrollingBox3.style.fill = '#453966';}
  if(percentage > 0.5656){scrollingBox2.style.fill = '#453966';}
  if(percentage > 0.5755){scrollingBox1.style.fill = '#453966';}
  if(percentage > 0.7015){scrollingBox3.style.fill = '#B398FF';}
  if(percentage > 0.7424){scrollingBox2.style.fill = '#B398FF';}
  if(percentage > 0.7523){scrollingBox1.style.fill = '#B398FF';}
  
  // Calculate the position along the path based on the percentage
  const pathLength = path.getTotalLength();
  const point = path.getPointAtLength(percentage * pathLength);

  // Set the box position and rotation
  box.setAttribute('transform', `translate(${point.x - 15},${point.y - 15})`);
}



$('.close-lang').click(function () {
  $('.language-switcher').fadeOut()
  setTimeout(() => {
    $('body').removeClass('scroll')
  }, 500);
})

// var waypoints = [
//   $('.primary-section').waypoint({
//     handler: function(direction) {
//       console.log('primary-section')
//       scrollingBox1.css('fill', '#453966')
//       scrollingBox2.css('fill', '#453966')
//       scrollingBox3.css('fill', '#453966')
//     }
//   }),
//   $('.section-dois').waypoint({
//     handler: function(direction) {
//       console.log('primary-section')
//       scrollingBox1.css('fill', '#453966')
//       scrollingBox2.css('fill', '#453966')
//       scrollingBox3.css('fill', '#453966')
//     },
//     offset: '361px'
//   }),
//   $('.secondary-section').waypoint({
//     handler: function(direction) {
//       scrollingBox1.css('fill', '#B398FF')
//       scrollingBox2.css('fill', '#B398FF')
//       scrollingBox3.css('fill', '#B398FF')
//     },
//     offset: '245px'
//   })
// ]


var interval,
  body = $('body'),
  details = body.find('.s-4-details'),
  toggledetails = body.find('.toggle-details'),
  tracks = body.find('.s-4-track'),
  autoexecute = true;
toggledetails.on('click', function () {
  var current = $(this);
  toggledetails.removeClass('active');
  details.removeClass('active');
  tracks.removeClass('active');
  $('[data-show="' + current.data('show') + '"]').addClass('active');
});
$('.s-4-details-title-prev').on('click', function () {
  var prev = Number($('.s-4-track.active').data('id')) - 1;
  $('.toggle-details[data-show=info-details-' + (prev === 1 ? 7 : prev) + ']').click();
});
$('.s-4-details-title-next').on('click', function () {
  var next = Number($('.s-4-track.active').data('id')) + 1;
  $('.toggle-details[data-show=info-details-' + (next === 8 ? 2 : next) + ']').click();
});
$('.toggle-details, .s-4-details-title-next, .s-4-details-title-prev').on('mouseenter', function () {
  clearInterval(interval);
  autoexecute = false;
});
$('a[href^="#"]').click(function () {
  var href = $.attr(this, 'href');
  $root.animate({
    scrollTop: $(href).offset().top
  }, 1000, function () {
    window.location.hash = href;
  });
  return false;
});
interval = setInterval(function () {
  if (autoexecute === true) {
    var next = Number($('.s-4-track.active').data('id')) + 1;
    $('.toggle-details[data-show=info-details-' + (next === 8 ? 2 : next) + ']').click();
  }
}, 2000);