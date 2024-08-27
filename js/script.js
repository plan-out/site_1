window.addEventListener("load",function(){

	/*main_view*/
	let view = new Swiper('#main_view', {
		wrapperClass:'slider',	//슬라이드를 감싸는 요소의 클래스명
		slideClass:'view',	//슬라이드 요소의 공통된 클래스명
		effect:'fade',	//전환효과 
		loop:true,		//슬라이드가 반복됨.
		autoplay: { 	//자동슬라이드
			delay: 2000,	//2000=2초마다 전환됨.
		},
		pagination: {	//슬라이트 버튼
			el: '.pager',	//버튼영역 요소 지정
			clickable: true,	//클릭시 슬라이드전환 활성화
			bulletActiveClass: 'active', //활성화된 버튼에 부여되는 클래스명
		},
		navigation: { //이전&다음버튼
			nextEl: '.next',
			prevEl: '.prev',
		},
	}); //end:new Swiper()

	/*clone nav*/
	var ul = document.querySelector("#gnb ul");
	var clone_ul = ul.cloneNode(true);//요소를 복제함
		//인수가 없거나, false이면 대상요소만 복제함
		//인수가 true면 대상요소의 하위요소까지 복제함.
	var main_menu = document.getElementById("main_menu");
	main_menu.appendChild(clone_ul);

	var aTag = main_menu.querySelectorAll('a');//배열로 생성
	aTag.forEach((a)=>{
		a.classList.add('icon');
	});  

	/*clone sns*/
	var sns = document.querySelector(".sns").cloneNode(true);
	document.querySelector("footer").prepend(sns);


});//end:window.addEve...


