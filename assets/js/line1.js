window.onload = function () {  
    const docHeight = 4000;
    $(".svg_wrapper").height(docHeight);
    
    const square1 = document.querySelectorAll(".square1");
    const square2 = document.querySelectorAll(".square2");
    const square4 = document.querySelectorAll(".square4");
    const square5 = document.querySelectorAll(".square5");
  
    const path1 = document.querySelector(".path1");
    const path2 = document.querySelector(".path2");
    const path4 = document.querySelector(".path4");
    const path5 = document.querySelector(".path5");
  
    if (!path1 || !path2 || !path4 || !path5) {
      console.error("Um ou mais caminhos não foram encontrados no DOM.");
      return;
    }
  
    const pathLengths = {
      path1: path1.getTotalLength(),
      path2: path2.getTotalLength(),
      path4: path4.getTotalLength(),
      path5: path5.getTotalLength(),
    };
  
    /**
     *
     * @param {NodeList} square - square SVG
     * @param {SVGPathElement} path - SVG path
     * @param {number} pathLength - line path length
     */
    const updateSquarePosition = (square, path, pathLength) => {  
      console.log("scrollHeight", document.body.scrollHeight)
      console.log("innerHeight", window.innerHeight)
      console.log("scrollY", window)

      const scrollPercent =
        window.scrollY / (document.body.scrollHeight - window.innerHeight);
  
      square.forEach((item) => {
        const offset = scrollPercent * pathLength;
        const point = path.getPointAtLength(offset % pathLength);
  
        item.setAttribute("x", point.x - 5);
        item.setAttribute("y", point.y - 5);
      });
    }
  
    const updatePosition = () => {
      updateSquarePosition(square1, path1, pathLengths.path1);
      updateSquarePosition(square2, path2, pathLengths.path2);
      updateSquarePosition(square4, path4, pathLengths.path4);
      updateSquarePosition(square5, path5, pathLengths.path5);
    }
  
    window.addEventListener("scroll", updatePosition);
  
    updatePosition();
  };
  
//   <svg class="linha-1" width="324" height="642" viewBox="0 0 324 642" fill="none">
//   <g opacity="0.1">
//       <!-- paths -->
//       <path class="path1"
//           d="M163.453 323.598C162.223 414.308 88.2781 487.468 -2.76489 487.468C-93.8079 487.468 -168.997 413.071 -168.997 321.3C-168.997 229.53 -94.5716 155.133 -2.76489 155.133C89.0418 155.133 156.721 222.97 163.015 308.994"
//           stroke="#476262" stroke-width="1.5" stroke-miterlimit="10" />
//       <path class="path2" 
//           d="M-2.87097 525.221C109.959 525.221 201.426 433.79 201.426 321.004C201.426 208.218 109.959 116.786 -2.87097 116.786C-115.701 116.786 -207.168 208.218 -207.168 321.004C-207.168 433.79 -115.701 525.221 -2.87097 525.221Z"
//           stroke="#476262" stroke-width="1.5" stroke-miterlimit="10" />
//       <path class="path"
//           d="M-2.87099 564.571C131.7 564.571 240.792 455.522 240.792 321.004C240.792 186.485 131.7 77.4358 -2.87099 77.4358C-137.442 77.4358 -246.534 186.485 -246.534 321.004C-246.534 455.522 -137.442 564.571 -2.87099 564.571Z"
//           stroke="#476262" stroke-width="1.5" stroke-miterlimit="10" />
//       <path class="path4"
//           d="M-2.87091 603.922C153.442 603.922 280.158 477.255 280.158 321.004C280.158 164.752 153.442 38.0853 -2.87091 38.0853C-159.183 38.0853 -285.9 164.752 -285.9 321.004C-285.9 477.255 -159.183 603.922 -2.87091 603.922Z"
//           stroke="#476262" stroke-width="1.5" stroke-miterlimit="10" />
//       <path class="path5"
//           d="M-2.87091 641.477C174.191 641.477 317.728 497.996 317.728 321.004C317.728 144.011 174.191 0.530144 -2.87091 0.530144C-179.933 0.530144 -323.47 144.011 -323.47 321.004C-323.47 497.996 -179.933 641.477 -2.87091 641.477Z"
//           stroke="#476262" stroke-width="1.5" stroke-miterlimit="10" />
//   </g>

//   <!-- squares-->
//   <rect class="square1 square" width="10" height="10" fill="#85C1C3" />
//   <rect class="square2 square" width="10" height="10" fill="#ECF8F9" />
//   <rect class="square4 square" width="10" height="10" fill="#85C1C3" />
//   <rect class="square5 square" width="10" height="10" fill="#ECF8F9" />
// </svg>