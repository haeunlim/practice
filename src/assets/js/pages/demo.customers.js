/**
 * Theme: Hyper - Responsive Bootstrap 5 Admin Dashboard
 * Author: Coderthemes
 * Module/App: Customers demo page
 */

 $(document).ready(function() {
  "use strict";

  // Default Datatable
  $("#products-datatable").DataTable({
    language: {
      paginate: {
        previous: "<i class='mdi mdi-chevron-left'>",
        next: "<i class='mdi mdi-chevron-right'>"
      },
      info: "총 _TOTAL_ 개의 목록이 있습니다.",
      lengthMenu:
        ""
    },
    // columnDefs: [
    //   { "width": "70px", "targets": -1 },
    //   { "width": "50px", "targets": 0 },
    //   ],
    pageLength: 10,
    select: {
      style: "multi"
    },
    drawCallback: function() {
      $(".dataTables_paginate > .pagination").addClass("pagination-rounded");
      $('#products-datatable_length label').addClass('form-label');


      // Col add & remove
      // var filterDiv = document.querySelector('.dataTables_wrapper .row');
      // filterDiv.querySelectorAll('.col-md-6').forEach(function(element){
      //   element.classList.add('col-sm-6');
      //   element.classList.remove('col-sm-12');
      //   element.classList.remove('col-md-6');
      // });

    }
  });
});
