/*main-img script*/

let currentNum = 0;
let totalNum = imgSet.childElementCount; //새로 코드를 사용할때마다 일일히 숫자를 바꾸지않아도 가능

console.log(totalNum);
let imgInit = function () {
  if (currentNum != 0) {
    //currentNum이 0이 아닐때만 실행
    $("#img" + currentNum).fadeIn();
  }
};

setInterval(function () {
  imgInit();
  if (currentNum == totalNum) {
    //만약에 currentNum이 4이면
    currentNum = 1; //1로 다시 되돌아가고
  } else {
    currentNum++; //4가 아닐때만 ++을 한다
  }

  $("#img" + currentNum).fadeOut();

  let clear = setInterval(function () {
    //clear라는 이름에 setInterval함수 부여
    document
      .getElementById("imgSet")
      .prepend(document.getElementById("img" + currentNum)); //imgSet에 prepend - 이미지 1이 마지막 장이 됐을 때 다시 맨 앞으로 옮겨준다
    clearInterval(clear); //clear해주지않으면 1초마다 계속 실행된다
  }, 1000); //1000은 1초 뒤에 동작을 실행하라는 의미
}, 3000);

// const mySwiperb = new Swiper('.swiper-container-b', {
//   effect: "fade",
//   spaceBetween: 30,
//   centeredSlides: true,
//   pagination: {
//       el: '.swiper-pagination',
//       clickable: true,
//       renderBullet: function (index, className) {
//           return `<span class="${className}" style="margin-top: 10px;"></span>`;
//       },
//   },
//   navigation: {
//       nextEl: '.swiper-button-next',
//       prevEl: '.swiper-button-prev'
//   },
//   autoplay: {
//       delay: 2000,
//       disableOnInteraction: true // 쓸어 넘기거나 버튼 클릭 시 자동 슬라이드 정지.
//   },
//   loop: true
// })

// const swiperContainer = document.querySelector('.swiper-container')

// // 데스크톱에서는 포커스가 빠진 경우 자동 슬라이드 재생.
// swiperContainer.addEventListener('focusout', () => {
//   setTimeout(() => {
//       if (swiperContainer.querySelector(':focus') === null) {
//           console.log('focusout, startAutoplay')
//           mySwiperb.autoplay.start()
//       }
//   }, 100)
// })

// // 모바일에서는 화면을 움직이면 자동 슬라이드 기능 재생.
// document.addEventListener('touchmove', () => {
//   console.log('touchmove, startAutoplay')
//   mySwiper.autoplay.start()
// })

// const playButton = document.getElementById("playButton");
// let autoplayEnabled = true;

// playButton.addEventListener("click", () => {
//     if (autoplayEnabled) {
//         mySwiper.autoplay.stop();
//     } else {
//         mySwiper.autoplay.start();
//     }
//     playButton.classList.toggle("playing");
//     autoplayEnabled = !autoplayEnabled;
// });

//==========================================================================================================================

//video script
const video = document.querySelector("#my-video video");
const container2 = document.getElementById("swiper-container1");

video.addEventListener("ended", () => {
  setTimeout(() => {
    container2.scrollIntoView({ behavior: "smooth", block: "start" });
  }, 500);
});

//==========================================================================================================================
var swiper = new Swiper(".mySwiper", {
  spaceBetween: 30, //슬라이드간의 간격설정
  pagination: {
    el: ".swiper-pagination", //페이징요소의 위치 지정
    clickable: true, //페이징 요소를 클릭가능하도록 설정
  },
});

//swiper-slide-두번째

var mySwiper = new Swiper("#swiper-container2", {
  speed: 800,
  effect: "fade",
  loop: false,
  direction: "vertical",
  slidesPerView: 1,
  mousewheel: true,
  pagination: {
    el: ".swiper-container-pagination",
    clickable: true,
  },
  on: {
    init: function () {
      playVideoOnSlide(this.activeIndex); // 초기 슬라이드에서 비디오 재생
    },
    slideChange: function () {
      playVideoOnSlide(this.activeIndex); // 슬라이드 변경 시 비디오 재생
    },
    slideNextTransitionStart: function () {
      pauseVideoOnSlide(this.previousIndex); // 이전 슬라이드에서 비디오 일시 정지
    },
    slidePrevTransitionStart: function () {
      pauseVideoOnSlide(this.previousIndex); // 이전 슬라이드에서 비디오 일시 정지
    }
  }
});

function playVideoOnSlide(index) {
  var videos = document.querySelectorAll('#swiper-container2 .swiper-slide video');

  videos.forEach(function (video) {
    video.pause();
  });

  var activeVideo = videos[index];
  activeVideo.play();
}

function pauseVideoOnSlide(index) {
  var videos = document.querySelectorAll('#swiper-container2 .swiper-slide video');

  var prevVideo = videos[index];
  prevVideo.pause();
}




//==========================================================================================================================

// container11 script

//==========================================================================================================================

const interview = document.querySelector(".container-6-swiper-content"); //모션을 줄 텍스트 요소를 선택해서 가져온다.
//const 변수이름 = 문서에서.불러온다("요소이름");
const rotateKeyframes5 = [
  //회전 및 투명도 변화를 위한 키프레임을 정의한다. const 키프레임변수 =[]
  { opacity: 0, transform: "translateY(140px)" }, //{}안에 변화시킬 css를 정의한다.
  { opacity: 1, transform: "translateY(0)" },
];
//키프레임의 애니메이션 속성을 설정한다.
const rotateAnimationOptions5 = {
  duration: 800, //애니메이션 지속 시간(밀리초)
  fill: "forwards", //애니메이션 종료 후 상태를 그 유지하도록 설정한다.
  easing: "cubic-bezier(0.4, 0.0, 0.2, 1)", //모션 박자를 ease-in-out을 사용한다.
};
//Intersection Obsever 콜백 함수를 사용한다.
const intersectionCallback8 = (entries, observer8) => {
  const entry = entries[0]; //첫번째 entry만 사용한다.(한번만 작동한다고 가정한다.)
  if (entry.isIntersecting) {
    setTimeout(() => {
      interview.animate(rotateKeyframes5, rotateAnimationOptions5); //키프레임 애니메이션을 시작한다.
    }, 200); //4.7초 후에 애니메이션을 시작한다(인자값을 줌)
    observer8.unobserve(entry.target); //애니메이션을 한번만 작동하도록 Intersection Obsever을 해제한다.
  }
};
//Intersection Obsever 생성 및 옵션을 설정한다.
const observer8 = new IntersectionObserver(intersectionCallback8, {
  root: null, //뷰포트를 루트로 설정한다.
  rootMargin: "0px", //뷰포트와의 간격을 설정한다. 즉 컨테이너가 화면에 딱 맞춰 위치했을 때 애니메이션을 시작하도록 설정한다.
  threshold: 0.5, //텍스트의 컨테이너 50%이상이 뷰포트안에 들어오면 콜백이 호출된다.
});
observer8.observe(document.querySelector("#container6")); //텍스트 컨테이너 요소의 감시를 시작한다.

//container7 h태그요소 스크롤에 따라 나타나게 하기

// const texth = document.querySelector(".container7-h-1"); // 회전 및 투명도 변화를 적용할 이미지 요소 선택
// //키프레임 정의
// const rotateKeyframes = [{ opacity: 0 }, { opacity: 1 }, { opacity: 0 }];
// const rotateAnimationOptions = {
//   duration: 4500,
//   fill: "forwards",
// };
// const intersectionCallback = (entries, observer) => {
//   const entry = entries[0];
//   if (entry.isIntersecting) {
//     setTimeout(() => {
//       texth.animate(rotateKeyframes, rotateAnimationOptions);
//     }, 200);

//     setTimeout(() => {
//       texth.style.opacity = "0";
//     }, 1500);

//     observer.unobserve(entry.target);
//   }
// };
// const observer = new IntersectionObserver(intersectionCallback, {
//   root: null,
//   rootMargin: "0px",
//   threshold: 0.5,
// });
// observer.observe(document.querySelector("#container7"));

const circle = document.querySelector(".container-5-circle-2"); //모션을 줄 텍스트 요소를 선택해서 가져온다.
//const 변수이름 = 문서에서.불러온다("요소이름");
const rotateKeyframes4 = [
  //회전 및 투명도 변화를 위한 키프레임을 정의한다. const 키프레임변수 =[]
  { opacity: 0, transform: "translateX(0)" }, //{}안에 변화시킬 css를 정의한다.
  { opacity: 1, transform: "translateX(300px)" },
];
//키프레임의 애니메이션 속성을 설정한다.
const rotateAnimationOptions4 = {
  duration: 1300, //애니메이션 지속 시간(밀리초)
  fill: "forwards", //애니메이션 종료 후 상태를 그 유지하도록 설정한다.
  easing: "cubic-bezier(0.4, 0.0, 0.2, 0.9)",
};
//Intersection Obsever 콜백 함수를 사용한다.
const intersectionCallback4 = (entries, observer4) => {
  const entry = entries[0]; //첫번째 entry만 사용한다.(한번만 작동한다고 가정한다.)
  if (entry.isIntersecting) {
    setTimeout(() => {
      circle.animate(rotateKeyframes4, rotateAnimationOptions4); //키프레임 애니메이션을 시작한다.
    }, 100); //4.7초 후에 애니메이션을 시작한다(인자값을 줌)
    observer4.unobserve(entry.target); //애니메이션을 한번만 작동하도록 Intersection Obsever을 해제한다.
  }
};
//Intersection Obsever 생성 및 옵션을 설정한다.
const observer4 = new IntersectionObserver(intersectionCallback4, {
  root: null, //뷰포트를 루트로 설정한다.
  rootMargin: "0px", //뷰포트와의 간격을 설정한다. 즉 컨테이너가 화면에 딱 맞춰 위치했을 때 애니메이션을 시작하도록 설정한다.
  threshold: 0.5, //텍스트의 컨테이너 50%이상이 뷰포트안에 들어오면 콜백이 호출된다.
});
observer4.observe(document.querySelector("#container5")); //텍스트 컨테이너 요소의 감시를 시작한다.

//---------------------------------------------------------------------------------
//두번째 h

const texth2 = document.querySelector(".container7-h-2"); //모션을 줄 텍스트 요소를 선택해서 가져온다.
//const 변수이름 = 문서에서.불러온다("요소이름");
const rotateKeyframes2 = [
  //회전 및 투명도 변화를 위한 키프레임을 정의한다. const 키프레임변수 =[]
  { opacity: 0, transform: "translateY(70px)" }, //{}안에 변화시킬 css를 정의한다.
  { opacity: 1, transform: "translateY(0)" },
];
//키프레임의 애니메이션 속성을 설정한다.
const rotateAnimationOptions2 = {
  duration: 700, //애니메이션 지속 시간(밀리초)
  fill: "forwards", //애니메이션 종료 후 상태를 그 유지하도록 설정한다.
  easing: "ease-in-out", //모션 박자를 ease-in-out을 사용한다.
};
//Intersection Obsever 콜백 함수를 사용한다.
const intersectionCallback2 = (entries, observer2) => {
  const entry = entries[0]; //첫번째 entry만 사용한다.(한번만 작동한다고 가정한다.)
  if (entry.isIntersecting) {
    setTimeout(() => {
      texth2.animate(rotateKeyframes2, rotateAnimationOptions2); //키프레임 애니메이션을 시작한다.
    }, 500); //4.7초 후에 애니메이션을 시작한다(인자값을 줌)
    observer2.unobserve(entry.target); //애니메이션을 한번만 작동하도록 Intersection Obsever을 해제한다.
  }
};
//Intersection Obsever 생성 및 옵션을 설정한다.
const observer2 = new IntersectionObserver(intersectionCallback2, {
  root: null, //뷰포트를 루트로 설정한다.
  rootMargin: "0px", //뷰포트와의 간격을 설정한다. 즉 컨테이너가 화면에 딱 맞춰 위치했을 때 애니메이션을 시작하도록 설정한다.
  threshold: 0.5, //텍스트의 컨테이너 50%이상이 뷰포트안에 들어오면 콜백이 호출된다.
});
observer2.observe(document.querySelector("#container7")); //텍스트 컨테이너 요소의 감시를 시작한다.

// const textsp2=document.querySelector(".container7-sp");

// const underlineKeyframes = [
//   { textDecoration: "none" },
//   { textDecoration: "underline" },
// ];

// const underlineAnimationOptions = {
//   duration: 500,
//   fill: "forwards",
//   easing: "ease-in-out",
// };

// const intersectionCallback4 = (entries, observer4) => {
//   const entry = entries[0];
//   if (entry.isIntersecting) {
//     setTimeout(() => {
//       textsp2.animate(underlineKeyframes, underlineAnimationOptions);
//     }, 4700);
//     observer4.unobserve(entry.target);
//   }
// }

// const observer4 = new IntersectionObserver(intersectionCallback4, {
//   root: null,
//   rootMargin: "0px",
//   threshold: 0.5,
// });

// observer4.observe(document.querySelector("#container7"));

//-------------------------------------------------------------

const image = document.querySelector(".left-img");

const imagemovekeyframe = [
  { opacity: "0", transform: "translatey(15%)" },
  { opacity: "1", transform: "translatey(0%)" },
];

const imagemovekeyframeOptions = {
  duration: 500,
  fill: "forwards",
  easing: "ease-in-out",
};

const additionalFrames = [
  { opacity: "0.25", transform: "translateY(15%)" },
  { opacity: "0.5", transform: "translateY(10%)" },
  { opacity: "0.75", transform: "translateY(5%)" },
];

// 보간(interpolation)을 적용한 키프레임 배열 생성
const interpolatedFrames = [...imagemovekeyframe, ...additionalFrames];

const intersectionCallback6 = (entries, observer6) => {
  const entry = entries[0];
  if (entry.isIntersecting) {
    setTimeout(() => {
      image.animate(imagemovekeyframe, imagemovekeyframeOptions);
    }, 1500);
    observer6.unobserve(entry.target);
  }
};

const observer6 = new IntersectionObserver(intersectionCallback6, {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
});

observer6.observe(document.querySelector("#container9"));

const image2 = document.querySelector(".right-img");

const imagemovekeyframe2 = [
  { opacity: "0", transform: "translatey(15%)" },
  { opacity: "1", transform: "translatey(0%)" },
];

const imagemovekeyframeOptions2 = {
  duration: 500,
  fill: "forwards",
  easing: "ease-in-out",
};

const additionalFrames2 = [
  { opacity: "0.25", transform: "translateY(15%)" },
  { opacity: "0.5", transform: "translateY(10%)" },
  { opacity: "0.75", transform: "translateY(5%)" },
];

// 보간(interpolation)을 적용한 키프레임 배열 생성
const interpolatedFrames2 = [...imagemovekeyframe2, ...additionalFrames2];

const intersectionCallback7 = (entries, observer7) => {
  const entry = entries[0];
  if (entry.isIntersecting) {
    setTimeout(() => {
      image2.animate(imagemovekeyframe2, imagemovekeyframeOptions2);
    }, 1700);
    observer7.unobserve(entry.target);
  }
};

const observer7 = new IntersectionObserver(intersectionCallback7, {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
});

observer7.observe(document.querySelector("#container9"));
//--------------------------------------------------------------------------------
//container-9-sp라는 클래스값을 가진 모든 요소에 대한 애니메이션 적용하기.

const textspList = document.querySelectorAll(".container9-sp"); //container-9-sp라는 클래스를 가진 모든 요소를 선택하여 가져온다.

// 키프레임 정의
const rotateKeyframes3 = [
  { opacity: 0 }, // 투명도가 0이고, 아래로 이동한 상태
  { opacity: 1 },
];
//애니메이션의 옵션을 설정한다
const rotateAnimationOptions3 = {
  duration: 1000, //애니메이션 지속 시간
  fill: "forwards", //애니메이션이 완료된 후 상태 유지
  easing: "ease-in-out", //애니메이션의 이징 함수
};
//Intersection Observer 콜백 함수
const intersectionCallback3 = (entries, observer3) => {
  const entry = entries[0]; //첫번째 entry만 사용한다.
  if (entry.isIntersecting) {
    //요소가 뷰포트에 진입한 경우
    setTimeout(() => {
      textspList.forEach((textsp, index) => {
        //선언한 변수를 순회하며 각 요소에 애니메이션을 적용한다.
        const delay = index * 1000; // 요소마다 2초씩 지연 시간을 적용합니다. (변경 가능)
        setTimeout(() => {
          textsp.animate(rotateKeyframes3, rotateAnimationOptions3); //애니메이션 적용
        }, delay); //textlist 변수는 container-9-sp를 통해 선택된 클래스 요소를 나타내며 이 textlist에 포함된 각 요소들을 textsp라는 변수를 통해 순회하며 애니메이션을 적용한다
      });
    }, 200);

    observer3.unobserve(entry.target); //한번만 작동하도록 Intersection Observer을 해제한다
  }
};
//Intersection Observer 설정
const observer3 = new IntersectionObserver(intersectionCallback3, {
  root: null, //root 엘리먼트는 viewport
  rootMargin: "0px", //rootMargin 없음
  threshold: 0.5, //뷰포트의 50% 이상이 보이면 콜백호출
});
observer3.observe(document.querySelector("#container9"));

//--------------------------------------------------------------------------------
// const container4 = document.querySelector("#container4");
// const circleElements = container4.querySelectorAll(".circle-");

// // 키프레임 정의
// const rotateKeyframes4 = [
//   { opacity: 0 },
//   { opacity: 1 }
// ];
// const rotateAnimationOptions4 = {
//   duration: 9000,
//   fill: "forwards",
//   easing: "ease-in-out"
// };

// const intersectionCallback4 = (entries, observer4) => {
//   const entry = entries[0];
//   if (entry.isIntersecting) {
//     console.log("#container4 is in the viewport");
//     setTimeout(() => {
//       circleElements.forEach((circle, index) => {
//         const delay = index * 2000;
//         setTimeout(() => {
//           circle.animate(rotateKeyframes4, rotateAnimationOptions4);
//         }, delay);
//       });
//     }, 200);

//     observer4.unobserve(entry.target);
//   }
// };

// const observer4 = new IntersectionObserver(intersectionCallback4, {
//   root: null,
//   rootMargin: "0px",
//   threshold: 0.5
// });

// observer4.observe(container4);

// 요소와 관련된 정보를 배열로 정의
const elements = [
  {
    selector: ".circle-1",
    delay: 200,
  },
  {
    selector: ".circle-2",
    delay: 400,
  },
  {
    selector: ".circle-3",
    delay: 600,
  },
  {
    selector: ".circle-4",
    delay: 800,
  },
];

// 반복문을 사용하여 요소 처리
elements.forEach((element, index) => {
  const circle = document.querySelector(element.selector);

  // 키프레임 정의
  const rotateKeyframes = [{ opacity: 0 }, { opacity: 1 }];
  const rotateAnimationOptions = {
    duration: 1000,
    fill: "forwards",
  };

  // Intersection Observer 콜백 함수 정의
  const intersectionCallback = (entries, observer) => {
    const entry = entries[0];
    if (entry.isIntersecting) {
      setTimeout(() => {
        circle.animate(rotateKeyframes, rotateAnimationOptions);
      }, element.delay);

      observer.unobserve(entry.target);
    }
  };

  // Intersection Observer 생성 및 등록
  const observer = new IntersectionObserver(intersectionCallback, {
    root: null,
    rootMargin: "0px",
    threshold: 0.5,
  });
  observer.observe(document.querySelector("#container4"));
});

//-------------------------------------------------------------------------

//숫자 카운트

const counter = ($counter, max) => {
  let now = max;

  const handle = setInterval(() => {
    $counter.innerHTML = Math.ceil(max - now).toLocaleString(); // 쉼표 포맷팅

    // 목표수치에 도달하면 정지
    if (now < 1) {
      clearInterval(handle); // setInterval 정지
    }

    // 증가되는 값이 계속하여 작아짐
    const step = now / 10;

    // 값을 적용시키면서 다음 차례에 영향을 끼침
    now -= step;
  }, 20);
};

window.addEventListener("DOMContentLoaded", () => {
  const $counter = document.querySelector("#container4 .count"); // 카운트를 표시할 요소 선택
  const max = 2644700; // 카운트의 최대값
  const startValue = 2644690; // 카운트 시작값
  let isCounting = false; // 카운팅 중인지 여부를 저장하는 변수

  const intersectionCallback = (entries, observer) => {
    const entry = entries[0];
    if (entry.isIntersecting && !isCounting) {
      isCounting = true; // 카운팅 시작
      counter($counter, max); // 카운트 함수 호출
      observer.unobserve(entry.target); // IntersectionObserver 정지
    }
  };

  const observer = new IntersectionObserver(intersectionCallback, {
    root: null,
    rootMargin: "0px",
    threshold: 0, // threshold 값을 0으로 설정하여 요소가 화면에 보이는 순간에 콜백 함수가 실행되도록 함
  });

  observer.observe(document.querySelector(".survey-text")); // 관찰 대상 요소 설정

  // 시작값으로 초기화
  $counter.innerHTML = startValue.toLocaleString(); // 초기값 표시 (쉼표 포맷팅)
});

//-----------------------------------------------------------

("use strict");
const content = "99.8%";
const text = document.querySelector(".container5-typing");
let index = 0;
let intervalId = null;

function typing() {
  text.textContent += content[index++];
  if (index >= content.length) {
    clearInterval(intervalId); // setInterval 정지
  }
}

function performTyping() {
  intervalId = setInterval(typing, 110); // 타이핑 속도를 빠르게 (간격을 100ms로 설정)
}

const intersectionCallback5 = (entries, observer5) => {
  const entry = entries[0];
  if (entry.isIntersecting) {
    observer5.unobserve(entry.target);
    setTimeout(performTyping, 1000); // 3초 후에 타이핑 기능 수행
  }
};

const observer5 = new IntersectionObserver(intersectionCallback5, {
  root: null,
  rootMargin: "0px",
  threshold: 0,
});

observer5.observe(document.querySelector(".container-5-circles"));

/*----------------------------------------------------------------------------*/
/*두번째 타이핑 - 남들과의 다음이/ 고통이 되지않도록*/

("use strict");
const typingtxt1 = "남들과의 다름이";
const text1 = document.querySelector(".regular-span");
let index1 = 0;
let intervalId1 = null;

function typingNext() {
  text1.textContent += typingtxt1[index1++];
  if (index1 >= typingtxt1.length) {
    clearInterval(intervalId1); // setInterval 정지
  }
}

function performTypingNext() {
  intervalId1 = setInterval(typingNext, 100); // 타이핑 속도를 빠르게 (간격을 100ms로 설정)
}

const intersectionCallback9 = (entries, observer9) => {
  const entry = entries[0];
  if (entry.isIntersecting) {
    observer9.unobserve(entry.target);
    setTimeout(performTypingNext, 500); // 3초 후에 타이핑 기능 수행
  }
};

const observer9 = new IntersectionObserver(intersectionCallback9, {
  root: null,
  rootMargin: "0px",
  threshold: 0,
});

observer9.observe(document.querySelector("#container15"));

/*----------------------------------------------------------------------------*/
/*세번째 타이핑 - 고통이 되지 않도록*/

("use strict");
const typingtxt2 = "고통이 되지 않도록";
const text2 = document.querySelector(".extra-span");
let index2 = 0;
let intervalId2 = null;

function typingExtra() {
  text2.textContent += typingtxt2[index2++];
  if (index2 >= typingtxt2.length) {
    clearInterval(intervalId2); // setInterval 정지
  }
}

function performTypingExtra() {
  intervalId2 = setInterval(typingExtra, 100); // 타이핑 속도를 빠르게 (간격을 100ms로 설정)
}

const intersectionCallback10 = (entries, observer10) => {
  const entry = entries[0];
  if (entry.isIntersecting) {
    observer10.unobserve(entry.target);
    setTimeout(performTypingExtra, 1400); // 3초 후에 타이
  }
};

const observer10 = new IntersectionObserver(intersectionCallback10, {
  root: null,
  rootMargin: "0px",
  threshold: 0,
});

observer10.observe(document.querySelector("#container15"));

//--------------------------------------------------------------------------------

const textcolor = document.querySelectorAll(".span-color");

const colorKeyframes = [{ color: "black" }, { color: "#58CCB5" }];

const colorAnimationOptions = {
  duration: 1300,
  fill: "forwards",
  easing: "cubic-bezier(0.4, 0.0, 0.2, 0.9)",
};

const intersectionCallback11 = (entries, observer11) => {
  const entry = entries[0];
  if (entry.isIntersecting) {
    setTimeout(() => {
      textcolor.forEach((element) => {
        element.animate(colorKeyframes, colorAnimationOptions);
      });
    }, 100);
    observer11.unobserve(entry.target);
  }
};

const observer11 = new IntersectionObserver(intersectionCallback11, {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
});

textcolor.forEach((element) => {
  observer11.observe(element);
});

observer11.observe(document.querySelector("#container13")); //텍스트 컨테이너 요소의 감시를 시작한다.

//--------------------------------------------------------------------------------
// Intersection Observer 생성
// const observer12 = new IntersectionObserver((entries) => {
//   entries.forEach((entry) => {
//     // 컨테이너가 화면에 보이면 비디오 재생
//     if (entry.isIntersecting) {
//       const video = entry.target.querySelector(".img2");
//       video.play();
//     }
//   });
// });

// // 컨테이너 요소를 관찰
// const container = document.querySelector(".circle2");
// observer12.observe(container);

// const video2 = document.querySelector(".img2");
// const container12 = document.querySelector(".circle2");

// // 비디오가 재생되고 있는지 여부를 확인하는 변수
// let isPlaying = false;

// // 페이지 스크롤 이벤트 리스너 등록
// window.addEventListener("scroll", handleScroll);

// // 스크롤 이벤트 핸들러
// function handleScroll() {
//   // 컨테이너의 위치와 화면의 높이 계산
//   const container12Top = container12.getBoundingClientRect().top;
//   const windowHeight = window.innerHeight;

//   // 컨테이너가 화면에 보이면 비디오 재생
//   if (container12Top < windowHeight) {
//     // 비디오가 재생 중이지 않을 때만 재생 시작
//     if (!isPlaying) {
//       video2.currentTime = 0; // 비디오를 처음으로 되감기
//       video2.play();
//       isPlaying = true;
//     }
//   } else {
//     video2.pause();
//     isPlaying = false;
//   }
// }
