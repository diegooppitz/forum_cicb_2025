window.onload = function () {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const switcher = Boolean(urlParams.get("switcher-off"));

  if (switcher) {
    $(".language-switcher").hide();
    setTimeout(() => {
      $('body').removeClass('block-scroll')
    }, 500);
    AOS.init();
  }
  let docHeight = $(document).height();
  $(".svg_wrapper").height(docHeight);
  const path1 = document.getElementById("motionPath1");
  const path2 = document.getElementById("motionPath2");
  const path3 = document.getElementById("motionPath3");
  const box1 = document.getElementById("scrollingBox1");
  const box2 = document.getElementById("scrollingBox2");
  const box3 = document.getElementById("scrollingBox3");

  // Add scroll event listener
  window.addEventListener("scroll", function () {
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
  const darker = "#fff";
  const lighter = "#85C1C3";
  const scrollPosition = window.scrollY;
  const windowHeight = window.innerHeight;
  const documentHeight = document.body.scrollHeight;

  // Calculate the percentage based on the current scroll position
  const percentage = scrollPosition / (documentHeight - windowHeight);
  //  const percentage = scrollPosition / documentHeight;
  // console.log(percentage)

  // mobile positioning:
  if (window.innerWidth < 1000) {
    if (percentage < 0.1476) {
      scrollingBox1.style.fill = darker;
    }
    if (percentage > 0.1476) {
      scrollingBox1.style.fill = lighter;
    }
    if (percentage < 0.1608) {
      scrollingBox3.style.fill = darker;
    }
    if (percentage > 0.1608) {
      scrollingBox3.style.fill = lighter;
    }
    if (percentage < 0.1952) {
      scrollingBox2.style.fill = darker;
    }
    if (percentage > 0.1952) {
      scrollingBox2.style.fill = lighter;
    }
    if (percentage > 0.4888) {
      scrollingBox3.style.fill = darker;
    }
    if (percentage > 0.5235) {
      scrollingBox1.style.fill = darker;
    }
    if (percentage > 0.5343) {
      scrollingBox2.style.fill = darker;
    }
    if (percentage > 0.8193) {
      scrollingBox1.style.fill = lighter;
    }
    if (percentage > 0.8347) {
      scrollingBox2.style.fill = lighter;
    }
    if (percentage > 0.8621) {
      scrollingBox3.style.fill = lighter;
    }
  }
  //desktop positioning:
  if (window.innerWidth > 1000) {
    if (percentage < 0.1829) {
      scrollingBox3.style.fill = darker;
    }
    if (percentage > 0.1829) {
      scrollingBox3.style.fill = lighter;
    }
    if (percentage < 0.2022) {
      scrollingBox1.style.fill = darker;
    }
    if (percentage > 0.2022) {
      scrollingBox1.style.fill = lighter;
    }
    if (percentage < 0.2438) {
      scrollingBox2.style.fill = darker;
    }
    if (percentage > 0.2438) {
      scrollingBox2.style.fill = lighter;
    }
    if (percentage > 0.5272) {
      scrollingBox3.style.fill = darker;
    }
    if (percentage > 0.5738) {
      scrollingBox2.style.fill = darker;
    }
    if (percentage > 0.5857) {
      scrollingBox1.style.fill = darker;
    }
    if (percentage > 0.7003) {
      scrollingBox3.style.fill = lighter;
    }
    if (percentage > 0.7424) {
      scrollingBox2.style.fill = lighter;
    }
    if (percentage > 0.7523) {
      scrollingBox1.style.fill = lighter;
    }
  }

  // Calculate the position along the path based on the percentage
  const pathLength = path.getTotalLength();
  const point = path.getPointAtLength(percentage * pathLength);

  // Set the box position
  box.setAttribute("transform", `translate(${point.x - 9},${point.y - 9})`);
  AOS.refresh();
}

$('.close-lang').click(function () {
  $('.language-switcher').fadeOut()
  setTimeout(() => {
    $('body').removeClass('block-scroll')
  }, 500);
  AOS.init();
})
