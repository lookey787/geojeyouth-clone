
$(document).ready(function(){
  // header hide
  $(window).scroll(function(event){
// 스크롤 이벤트 발생에 대한 각종 정보들이 있다. 펑션은 익명함수인데 이벤트에 대한 정보를 받아온다.
    let st = $(this).scrollTop();
    console.log(st)
    if(st>386){
      $('.header').addClass('hide')
      $('.mb-bt').addClass('hide')
    }else {
      $('.header').removeClass('hide')
      $('.mb-bt').removeClass('hide')
    }
  })

    // ALL MENU POP-UP
    const all_menu = $('.all-menu')
    const all_menu_wrapper = $('.all-menu-wrapper')
    const all_menu_mask = $('.all-menu-mask')
    const all_menu_close = $('.all-menu-close')
    
    all_menu.click(function(){
        // all_menu_wrapper.classList.add('클래스명')
        all_menu_wrapper.addClass('all-menu-wrapper-active')
        all_menu_mask.addClass('all-menu-mask-active')
    })
    all_menu_close.click(function(){
      all_menu_wrapper.removeClass('all-menu-wrapper-active')
      all_menu_mask.removeClass('all-menu-mask-active')
    })
    // 모바일 메뉴 기능
    // .mb-bt를 저장해서 활용하자
    $('.mb-bt').click(function(e){
      e.preventDefault();
      $('.mb-bt').toggleClass('mb-bt-open')
      // $('this').toggleClass('mb-bt-open') 라고도 씀.
      $('.mb-menu-mask').toggleClass('mb-menu-mask-active')
      $('.mb-nav').toggleClass('mb-nav-open')
      $('.mb-menu>li').height(54)
      // 마지막꺼 안하면 정리안된채로 나옴
    })
    // e는 받아오는 매게변수 공간만 있으면 됨. e꼭 안써도됨. 
    
    // 화면사이즈체크
    $(window).resize(function(){
      let temp = $(window).width();
      // console.log(temp)
      if(temp > 1220) {
        $('.mb-bt').removeClass('mb-bt-open')
      $('.mb-menu-mask').removeClass('mb-menu-mask-active')
      $('.mb-nav').removeClass('mb-nav-open')
      }else {
        $('.all-menu-wrapper').removeClass('all-menu-wrapper-active')
        $('.all-menu-mask').removeClass('all-menu-mask-active')
      }
    })
    // 모바일 메뉴 펼치기 기능
    // 1. 모바일 메뉴 불러오기
    const mb_mainmenu = $('.mb-mainmenu')
    
    // 2. 모바일 서브메뉴 불러오기
    const mb_submenu = $('.mb-submenu')

    // 3. 펼쳐진 서브메뉴의 높이값
    let mb_submenu_height = [];
    // []배열
    
    // 4. 높이값 계산을 실행
    // 배열명.forEach(function(item,index){할일})
    // $.each(배열명, function(index, item){할일})
    // each도 index로 객체를 넘겨줌. 그러나 순서가 다름. 인덱스 아이템(또는 element)
    $.each(mb_submenu, function(index){
      // 각각의 .mb-submenu로 가서
      // li의 개수를 한다.
      let count = $(this).find('li').length;
      // this 는 mb_submenu를 의미
      // console.log(count)
      // 최종결과 저장(51px*count+22) <=51이 5개 있고 패딩값 11 두개 합치면..!
      mb_submenu_height[index]= 51*count+22;
    })
    // console.log(mb_submenu_height)
    let mb_li = $ ('.mb-menu > li')
    $.each(mb_mainmenu,function(index){

      $(this).click(function(e){
        e.preventDefault();
        // mb-mainmenu-open이 있으면 펼치고 없으면 닫기
      $(this).toggleClass('mb-mainmenu-open')
      let active = $(this).hasClass('mb-mainmenu-open')
      if(active) {
        let temp = mb_submenu_height[index]
        // 해당되는 (클릭된)  li>a(depth1)의 ul의 높이값을 temp에 저장
        mb_li.eq(index).height(temp+54)
        // 해당요소의 높이부여 
        // eq은 equal 인데 
        }else {
          // 클릭이 안된경우
          mb_li.eq(index).height(54)
          //index[]은 반복문이라 첫번째것 index[0]이다.
          // (index)는 반복은 아닌데 연동되는 0에 해당되는li, 건드리면되기때문에 eq을 적어줌.
          // eq이나 each 많이씀!
        }      
      })
    })
    // 모바일 메뉴 배경을 클릭시 사라짐
    const mb_menu_mask = $('.mb-menu-mask')
    mb_menu_mask.click(function(){
      // 모바일 버튼 기능 초기화
      $('.mb-bt').removeClass('mb-bt-open')
      $('.mb-menu-mask').removeClass('mb-menu-mask-active')
      $('.mb-nav').removeClass('mb-nav-open')
      $('.mb-menu >li').height(54)
      $('.mb-mainmenu').removeClass('mb-mainmenu-open')
    })

    new Swiper(".sw-visual", {
        autoplay: true,
          // 속성들간에는 ,로!!! ;는 안됨
        loop: true,
        effect: "fade",
        speed:3000,
        // 미니세크 단위라 3초다
        pagination: {
          el: ".swiper-pagination",
          // 이거 이름을 가진 div를 만들어줘야 작동함
          clickable: true,
          
        },
      });
      let sw_banner = new Swiper(".sw-banner", {
        // var라는 변수명은 지금 굳이 쓸필요없어서 지움
        slidesPerView: 2,
        // 초기셋팅
        spaceBetween: 13,
        // 이걸 줘서 너비 뺌
        loop: true,
        autoplay: {
          delay:2000,disableOnInteraction: false,
          // 인터렉션=상호작용 false로해야 건드렸다고 안서도록. ture하면 건드리면 안움직인다.
        },
        breakpoints:{
          1023: {
            slidesPerView:6,
          },
          882: {
            slidesPerView:5,
          },
          676: {
            slidesPerView:4,
          },
          450: {
            slidesPerView:3,
          },
          320: {
            slidesPerView:2,
          }
        },  
        navigation: {
          nextEl: ".banner-forward",
          prevEl: ".banner-back",
        },
    
      });
      const banner_back = $('.banner-back')
      const banner_play = $('.banner-play')
      const banner_forward = $('.banner-forward')
      banner_play.click(function(){
        $(this).toggleClass('banner-play-start');
        let temp = $(this).hasClass('banner-play-start')
        if(temp){
          // 슬라이드 작동안함. .sw-banner를 데려오려면 new Swiper(".sw-banner",...렛으로 변수선언하고 데려오기
          sw_banner.autoplay.stop();
        }else{
          // 슬라이드 작동
          sw_banner.autoplay.start();
        }
      })
      banner_back.click(function(){
        let temp = banner_play.hasClass("banner-play-start")
        if(temp==true){
          banner_play.removeClass("banner-play-start")
          sw_banner.autoplay.start()
        }
        // "banner-play-start"가 있다면 제거라하라!라는 뜻
        // else따로 없으면 안적어줘도됨
      })
      banner_forward.click(function(){
        let temp = banner_play.hasClass("banner-play-start")
        if(temp==true){
          banner_play.removeClass("banner-play-start")
          sw_banner.autoplay.start()
        }
        // "banner-play-start"가 있다면 제거라하라!라는 뜻
        // else따로 없으면 안적어줘도됨
      })
      const go_top = $('.gotop')
      go_top.click(function(){
        $('html, body').animate({
          scrollTop: 0
        },500)
      })
      // gotop속성 아예 이걸로 외워도됨. 스크롤을 0으로 올리는데 .5초 쓰겠다.
})  
// 문서전체는 document쓰면됨.$()는 요소를 불러오는것.선택자 써서 불러오는건 quarySelect.로 불러온다.
// html이 준비가 되면 다음에 할일은 fuction이다. 맨 윗줄을 꼭 써야 jquery가 실행이 된다. 

    