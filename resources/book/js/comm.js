// 230105 추가

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
