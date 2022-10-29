'use strict';

$(function(){
  // 대구시 운영서비스 slide
  const slideBox = document.querySelector('.service-menu-wrap');
  const slideItem = document.querySelectorAll('.service-menu-wrap > ul');
  const prevBtn = document.querySelector('.page-btn.left');
  const nextBtn = document.querySelector('.page-btn.right');
  const playPauseBtn = document.querySelector('.service-pause.btn i');

  let counter = 1;
  const size = 25;
  slideBox.style.transform = 'translateX(' + -size * counter + '%)';

  // slide 오른쪽으로 이동
  function moveSlide(){
      if (counter >= slideItem.length - 1) return;
      slideBox.style.transition = "transform 0.4s ease-in-out";
      counter++;
      slideBox.style.transform = "translateX(" + -size * counter + "%)";
      if (slideItem[counter].id === "first-clone") {
      };
  };

  // 3.5초마다 자동으로 오른쪽으로 이동
  let autoSlide = setInterval(moveSlide, 3500);

  // next 버튼 클릭시 오른쪽으로 이동
  nextBtn.addEventListener("click", function(){
      clearInterval(autoSlide);
      moveSlide();
  });

  // prev 버튼 클릭시 왼쪽으로 이동
  prevBtn.addEventListener("click", () => {
      clearInterval(autoSlide);
      if (counter <= 0) return;
      slideBox.style.transition = "transform 0.4s ease-in-out";
      counter--;
      slideBox.style.transform = "translateX(" + -size * counter + "%)";
      if (slideItem[counter].id === "last-clone") {
      };
  });

  // play, pause 버튼 클릭시 작동
  playPauseBtn.addEventListener('click', function(){
      if(this.className == 'fa-solid fa-pause'){
          this.className = 'fa-solid fa-play';
          clearInterval(autoSlide);
      }else{
          clearInterval(autoSlide);
          this.className = 'fa-solid fa-pause';
          autoSlide = setInterval(moveSlide, 3500);
      }
  });

  // 4번에서 1번, 1번에서 4번 이미지로 자연스럽게 넘어가기
  slideBox.addEventListener("transitionend", function () {
      if (slideItem[counter].id === "last-clone") {
        slideBox.style.transition = "none";
        counter = slideItem.length - 2;
        slideBox.style.transform = "translateX(" + -size * counter + "%)";
      }
      if (slideItem[counter].id === "first-clone") {
          slideBox.style.transition = "none";
          counter = slideItem.length - counter;
          slideBox.style.transform = "translateX(" + -size * counter + "%)";
      }
  });

});
