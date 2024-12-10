// document.addEventListener("DOMContentLoaded", function() {
//     const rightbtn = document.querySelector('.fa-chevron-right');
//     const leftbtn = document.querySelector('.fa-chevron-left');
//     const imgNumber = document.querySelectorAll('.slider-product-one-content-items')
//     let index = 0
//     rightbtn.addEventListener ("click", function(){
//         index = index + 1
//         if(index>imgNumber.length-1){
//             index=0;
//         }
//         document.querySelector(".slider-product-one-content-container-items").style.right= index * 100 + "%"
//     })
//     leftbtn.addEventListener("click", function() {
//         index = index - 1;
//         if (index <= 0) {
//             index = imgNumber.length - 1;
//         }
//         document.querySelector(".slider-product-one-content-container-items").style.right = index * 100 + "%";
//     });
// });

// import React from "react";
// import Slider from "react-slick";

// function SimpleSlider() {
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 2,
//     slidesToScroll: 1
//   };
//   return (
//     <div className="slider-container">
//       <Slider {...settings}>
//         <div>
//           <h3>1</h3>
//         </div>
//         <div>
//           <h3>2</h3>
//         </div>
//         <div>
//           <h3>3</h3>
//         </div>
//         <div>
//           <h3>4</h3>
//         </div>
//         <div>
//           <h3>5</h3>
//         </div>
//         <div>
//           <h3>6</h3>
//         </div>
//       </Slider>
//     </div>
//   );
// }

// export default SimpleSlider;

// window.addEventListener('scroll', function () {
//   const header = document.getElementById('myHeader');
//   if (window.scrollY > 1000) {
//       header.style.position = 'fixed';
//       header.style.top = '0';
//   } else {
//       header.style.position = 'absolute';
//       // header.style.top = '0';
//   }
// });


