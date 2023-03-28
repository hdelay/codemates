window.onload = function(){
    
    // 메뉴 슬라이드 버튼
    const menu_btn = document.querySelector('.allmenu_btn');
    const menu_btn_close = document.querySelector('.allmenu_close');
    const body = document.querySelector('body');

    menu_btn.addEventListener('click', function(e) {
        e.preventDefault();
        body.classList.add('mo_open');
        body.style.overflow = 'hidden';
    });
    menu_btn_close.addEventListener('click', function(e) {
        e.preventDefault();
        body.classList.remove('mo_open');
        body.style.overflow = '';
    });
    $(window).resize(function(){
        if($(window).width() > 768){
            body.classList.remove('mo_open');
            body.style.overflow = '';
        }
    });
    
    // datepicker
    $(".datepicker_day").datepicker({
        dateFormat: 'yy-mm-dd',
        prevText: '이전 달',
        nextText: '다음 달',
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true,
        yearSuffix: '년',
        showOn: "both",
        changeMonth: true,
        changeYear: true,
        yearRange: 'c-100:c+15',
		// maxDate: "d",
        buttonImage: "../images/ico/ico_datepicker_img.png",
        buttonImageOnly: true,
        buttonText: "날짜선택"
    });

    $(".datepicker_start").datepicker({
        dateFormat: 'yy-mm-dd',
        prevText: '이전 달',
        nextText: '다음 달',
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true,
        yearSuffix: '년',
        showOn: "both",
        changeMonth: true,
        changeYear: true,
        yearRange: 'c-100:c+15',
        buttonImage: "../images/ico/ico_datepicker_img.png",
        buttonImageOnly: true,
        buttonText: "날짜선택"
    });
    $(".datepicker_end").datepicker({
        dateFormat: 'yy-mm-dd',
        prevText: '이전 달',
        nextText: '다음 달',
        monthNames: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        monthNamesShort: ['1월', '2월', '3월', '4월', '5월', '6월', '7월', '8월', '9월', '10월', '11월', '12월'],
        dayNames: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesShort: ['일', '월', '화', '수', '목', '금', '토'],
        dayNamesMin: ['일', '월', '화', '수', '목', '금', '토'],
        showMonthAfterYear: true,
        yearSuffix: '년',
        showOn: "both",
        changeMonth: true,
        changeYear: true,
        yearRange: 'c-100:c+15',
        buttonImage: "../images/ico/ico_datepicker_img.png",
        buttonImageOnly: true,
        buttonText: "날짜선택"
    });
    $('.datepicker_end').datepicker("option", "onClose", function ( selectedDate ) {
        $(".datepicker_start").datepicker( "option", "maxDate", selectedDate );
    });
    $('.datepicker_start').datepicker("option", "onClose", function ( selectedDate ) {
        $(".datepicker_end").datepicker( "option", "minDate", selectedDate );
    });


    // 팝업
    let target = document.querySelectorAll('.pop_open');
    let btnPopClose = document.querySelectorAll('.pop_close');
    let targetID;

    // 팝업 열기
    for(let i = 0; i < target.length; i++){
        target[i].addEventListener('click', function(){
            targetID = this.getAttribute('data-target');
            document.querySelector(targetID).style.display = 'flex';
            body.style.overflow = 'hidden';
        });
    }
    
    // 팝업 닫기
    for(let j = 0; j < btnPopClose.length; j++){
        btnPopClose[j].addEventListener('click', function(){
            this.parentNode.parentNode.parentNode.parentNode.parentNode.style.display = 'none';
            body.style.overflow = '';
        });
    }

    // 서브 nav
    $('.sub_layout.registration .nav dl dt h2 a').on('click', function(e){
        e.preventDefault();
        $(this).parent().parent().parent().toggleClass('on');
    });

    // 로그인 패스워드 보기
    const login_pw_eyebtn = document.querySelector('.ico_eye');
    if(login_pw_eyebtn){
        login_pw_eyebtn.addEventListener('click', function() {
            const previnp = this.previousSibling.previousSibling;
            if(previnp.getAttribute('type') === 'password'){
                previnp.setAttribute('type', 'text');
                this.classList.add('on')
            } else {
                previnp.setAttribute('type', 'password');
                this.classList.remove('on')
            }
        });
    }
    
    // 파일업로드
    const file_inp_g = document.querySelectorAll('.file_inp');
    for(i = 0; i < file_inp_g.length; i++){
        // const file_inp = document.querySelector('.file_inp');
        const file_inp = file_inp_g[i];
        file_inp.addEventListener('change', function(){
            let fileList;
            for(i = 0; i < file_inp.files.length; i++){
                fileList = file_inp.files[i].name;
            }
            const file_txt = file_inp.nextSibling.nextSibling;
            file_txt.value = fileList;
            
            let file_name = '<li><span>' + fileList + '</span><button>삭제</button></li>';
            $('.file_list ul').append(file_name);
            $('.form_box_group.file_group .file_list ul li button').on('click', function(){
                $(this).parent().remove();
            });
        });
    }

    // 탭
    $('.tab_group .tab_btn > ul > li > a').on('click', function(e){
        e.preventDefault();
        var on_tab = $(this).attr("rel")

        // 탭 컨텐츠 숨기기
        $(this).parent().siblings().removeClass('on');
        $(this).parent().parent().parent().siblings().children("div").removeClass('on');

        // 클릭이벤트
        $(this).parent().addClass('on');
        $("." + on_tab).addClass('on');
    });

    //숫자 카운트 애니메이션
    $('.count').each(function () {
        const $this = $(this),
            countTo = $this.attr('data-count');
        $({
            countNum: $this.text()
        }).animate({
            countNum: countTo
        }, {
            duration: 1600,
            easing: 'linear',
            step: function () {
                $this.text(Math.floor(this.countNum));
            },
            complete: function () {
                $this.text(this.countNum.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ','));
                //3자리 마다 콤마 표시 적용
            }
        });
    });

}

// 로딩 open
function loading_open(){
    const loading_g = document.querySelector('body').insertAdjacentHTML('afterend',
        `<div class="loading_box">
            <div class="loading"></div>
            <div class="loading-text">loading</div>
        </div>`
    );
}
// 로딩 close
function loading_close(){
    const close_true = document.querySelector('.loading_box');
    if(close_true){
        close_true.remove();
    }
}
