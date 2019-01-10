$(document).ready(function() {
    $('#example').DataTable({
        "searching": false,
        responsive: true,
        "language": {
            "paginate": {
              "previous": '<img src="../../assets/img/icon/chevron-pagination-gauche.png">',
              "next": '<img src="../../assets/img/icon/chevron-pagination-droite.png">'
            }
          },
          "columnDefs": [
            { "width": "10%", "targets": 0 },
            { "width": "20%", "targets": 1 },
            { "width": "10%", "targets": 2 },
            { "width": "10%", "targets": 3 },
            { "width": "5%", "targets": 4 },
          ]  
    });
} );