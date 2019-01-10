$(document).ready(function()
{
  $("#tab").pagination({
    items: 5,
    contents: 'contents',
    previous: '<',
    next: '>',
    position: 'bottom',
  });
});