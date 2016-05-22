console.log("Hello World!");
var $ = require('jQuery');

$('.hidebtn').click(function(){
  $(this).parent().addClass('hidden');
});
