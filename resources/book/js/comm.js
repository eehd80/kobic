// 230105 추가

// navbar open
const navbar = document.querySelector('#navbar')
const navbarBtn = navbar.querySelector('.all-cate')
const navbarCloseBtn = navbar.querySelector('.cate-close')
const navbarEl = navbar.querySelector('.cate-box')

navbarBtn.addEventListener('click', event => {
  event.stopPropagation()
  if (navbarEl.classList.contains('open')) {
    hideBasket()
  } else {
    showBasket()
  }
})
navbarEl.addEventListener('click', event => {
  event.stopPropagation()
})

window.addEventListener('click', hideBasket)
navbarCloseBtn.addEventListener('click', hideBasket)

function showBasket() {
    navbarEl.classList.add('open')
}
function hideBasket() {
    navbarEl.classList.remove('open')
}

const navItemEl = $('#navbar .list-item')
const navItmBtn = $('#navbar .btn-fold')

navItmBtn.on("click", function () {
    // e.preventDefault();
    if ($(this).parents('.list-item').hasClass("on")) {
        $(this).parents('.list-item').removeClass("on");
    } else {
        navItemEl.removeClass("on");
        $(this).parents('.list-item').addClass("on");
    }
});


// datePicker
$('#dpFrom').datepicker({
    format : 'yy-mm-dd',
    language: 'kr',
    autoclose: true,
    todayHighlight: true
});
$('#dpTo').datepicker({
    format : 'yy-mm-dd',
    language: 'kr',
    autoclose: true,
    todayHighlight: true
});

// filter-finder
const filterList = $('.filter-finder ul li');

filterList.on('click', function(){
    filterList.removeClass('on')
    $(this).toggleClass('on')
})

// snb
const $snbList = $('.snb-list > li'),
        $snbLink = $('.snb-list > li > a');

$snbList.on('click', function(){
    if ($snbList.not($(this)).hasClass('on')) { //다른 3depth 닫기
        $snbList.removeClass('on');
        $(this).addClass('on');
    } else if ($(this).hasClass('on')) { //활성화 시 닫기
        $(this).removeClass('on');
    } else {
        $(this).addClass('on'); // this 열기
    }                        
})

// dialog
const btnServiceCate = document.querySelector('#btnServiceCate'),
            bodyDialog = document.querySelector('#bodyDialog'),
            dialogClose = bodyDialog.querySelector('.btn_dialog_close'),
            dialogDepth1 = bodyDialog.querySelector('.filter_list > li '),
            dialogDepth1Btn = bodyDialog.querySelector('.btn_filter_depth1'),
            dialogDepth1BtnAll = bodyDialog.querySelector('.btn_filter_all');



btnServiceCate.addEventListener('click', () => {
    showDialog()
})

dialogClose.addEventListener('click', () => {
    hideDialog()
})

dialogDepth1BtnAll.addEventListener('click', () => {
    hideDialog()
})

dialogDepth1Btn.addEventListener()

function showDialog() {
    bodyDialog.classList.add('open')
}
function hideDialog() {
    bodyDialog.classList.remove('open')
}
