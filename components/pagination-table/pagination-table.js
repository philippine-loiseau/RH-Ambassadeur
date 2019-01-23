$(document).ready(function() {
    $('#example').DataTable({
        "searching": false,
        responsive: true,
        "language": {
            "paginate": {
              "previous": '<img src="../assets/img/icon/chevron-pagination-gauche.png">',
              "next": '<img src="../assets/img/icon/chevron-pagination-droite.png">'
            }
          },
          "columnDefs": [
            { "width": "10%", "targets": 0 },
            { "width": "15%", "targets": 1 },
            { "width": "10%", "targets": 2 },
            { "width": "20%", "targets": 3 },
            { "width": "5%", "targets": 4 },
            { "width": "15%", "targets": 5 },
            { "width": "10%", "targets": 6 },
            { "width": "20%", "targets": 7 },
          ]  
    });
} );


$(document).ready(function() {
  $('#ambassador').DataTable({
      "searching": false,
      responsive: true,
      "language": {
          "paginate": {
            "previous": '<img src="../assets/img/icon/chevron-pagination-gauche.png">',
            "next": '<img src="../assets/img/icon/chevron-pagination-droite.png">'
          }
        },
        "columnDefs": [
          { "width": "10%", "targets": 0 },
          { "width": "10%", "targets": 1 },
          { "width": "10%", "targets": 2 },
          { "width": "5%", "targets": 3 },
          { "width": "1%", "targets": 4 },
          { "width": "5%", "targets": 5 },
          { "width": "5%", "targets": 6 },
          { "width": "1%", "targets": 7 },
          { "width": "10%", "targets": 8 },
        ]  
  });
} );


$(document).ready(function() {
  $('#candidate').DataTable({
      "searching": false,
      responsive: true,
      "language": {
          "paginate": {
            "previous": '<img src="../assets/img/icon/chevron-pagination-gauche.png">',
            "next": '<img src="../assets/img/icon/chevron-pagination-droite.png">'
          }
        },
        "columnDefs": [
          { "width": "10%", "targets": 0 },
          { "width": "20%", "targets": 1 },
          { "width": "20%", "targets": 2 },
          { "width": "10%", "targets": 3 },
          { "width": "10%", "targets": 4 },
          { "width": "10%", "targets": 5 },
          { "width": "10%", "targets": 6 }
        ]  
  });
} );