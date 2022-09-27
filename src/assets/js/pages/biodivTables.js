! function ($) {
    "use strict";

    // table
    // 하단 paging 이랑 글 갯수 표시 안내 글 
    var language = {
        "emptyTable": "데이터가 없습니다.",
        "infoEmpty": "총 _TOTAL_ 개의 목록이 있습니다.",
        "infoFiltered": "( _MAX_건의 데이터에서 필터링됨 )",
        "zeroRecords": "일치하는 데이터가 없습니다.",
        "loadingRecords": "로딩중입니다.",
        "processing": "잠시만 기다려 주세요.",
        paginate: {
            previous: "<i class='mdi mdi-chevron-left'>",
            next: "<i class='mdi mdi-chevron-right'>",
            first: "<i class='mdi mdi-chevron-double-left'>",
            last: "<i class='mdi mdi-chevron-double-right'>"
        },
        info: "총 _TOTAL_ 개의 목록이 있습니다."
    };
    var columnDefs = [];
    var selectVal = {};

    var ellipsisVal = $('#basic-datatable').attr('data-ellipsis');
    var chkNon = $('#basic-datatable').attr('data-chknon');
    //말줄임 체크박스
    if ((ellipsisVal !== '' || ellipsisVal !== undefined || ellipsisVal !== null) && (chkNon === '' || chkNon === undefined || chkNon === null)) {
        columnDefs = [{
            'orderable': false,
            'checkboxes': true,
            'className': 'select-checkbox',
            'width': 10,
            'targets': 0,
        }, {
            'className': 'subj_col ellipsis',
            'targets': parseInt(ellipsisVal)
        }];
        selectVal = {
            'style': 'multi',
            'selector': 'td:first-child',
        }
        //말줄임만  
    } else if ((ellipsisVal !== '' || ellipsisVal !== undefined || ellipsisVal !== null) && chkNon === 'true') {
        columnDefs = [{
            'className': 'subj_col ellipsis',
            'targets': parseInt(ellipsisVal)
        }];
        selectVal = '';
        //체크박스만 
    } else if ((ellipsisVal === '' || ellipsisVal === undefined || ellipsisVal === null) && chkNon === 'true') {
        columnDefs = [{
            'orderable': false,
            'checkboxes': true,
            'className': 'select-checkbox',
            'width': 10,
            'targets': 0,
        }];
        selectVal = {
            'style': 'multi',
            'selector': 'td:first-child',
        }
        //둘다 없으면
    } else {
        columnDefs = '';
        selectVal = '';
    }


    function drawCallbackF() {
        $(".dataTables_paginate > .pagination").addClass("pagination-rounded");


        // Col add & remove
    //   var filterDiv = document.querySelector('.dataTables_wrapper .row');
    //   filterDiv.classList.add('justify-content-between');
    //   filterDiv.querySelectorAll('.col-md-6').forEach(function(element){
    //     element.classList.add('col-auto');
    //     element.classList.remove('col-sm-12');
    //     element.classList.remove('col-md-6');
    //   });
    //   console.log(filterDiv)
    }

    var table = $('#basic-datatable').DataTable({
        language: language,
        responsive: true,
        columnDefs: columnDefs,
        select: selectVal,
        pagingType: 'full_numbers',
        drawCallback: function () {
            drawCallbackF()
        },
        pageLength: 10,
        order: []

    });
    

// push table
    var pushCol = [{
            'className': 'push-desc',
            'targets': 3,
        },
        {
            'className': 'nowrap',
            'targets': -1,
        },

        {
            'checkboxes': true,
            'className': 'select-checkbox',
            'width': 10,
            'targets': 0,
        }
    ];
    var selectPush = {
        'style': 'multi',
        'selector': 'td:first-child',
    };
    var table2 = $('#push-table1').DataTable({
        language: language,
        columnDefs: pushCol,
        pagingType: 'full_numbers',
        drawCallback: function () {
            drawCallbackF()
        },
        pageLength: 10,
        autoWidth: false,
        order: [],
        select: selectPush,
        columns: [{
                orderable: false,
                width: "6%"
            },
            {
                orderable: false,
                width: "6%"
            },
            {
                orderable: false,
                width: "20%"
            },
            {
                orderable: false,
                width: "42%"
            },
            {
                orderable: false,
                width: "14%"
            },
            {
                orderable: false,
                width: "12%"
            },
        ],

    });
    var table3 = $('#push-table2').DataTable({
        language: language,
        columnDefs: pushCol,
        autoWidth: false,
        select: selectPush,
        pagingType: 'full_numbers',
        drawCallback: function () {
            drawCallbackF()
        },
        pageLength: 10,
        order: [],
        columns: [{
                orderable: false,
                width: "6%"
            },
            {
                orderable: false,
                width: "6%"
            },
            {
                orderable: false,
                width: "20%"
            },
            {
                orderable: false,
                width: "60%"
            },
            {
                orderable: false,
                width: "12%"
            },
        ],

    });

    $('.select-checkbox').children('input').addClass('form-check-input');


$('.chk_all_btn').click(function(){
    console.log("click")
    $('table input[type="checkbox"].form-check-input').prop('checked', true);
});
$('.all_release_btn').click(function(){
    console.log("click")
    $('table input[type="checkbox"].form-check-input').prop('checked', false);
});

}(window.jQuery)