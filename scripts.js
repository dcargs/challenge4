$(function() {
  // letters only for name
  $("#studentName").keyup(function(e){
    var str = $.trim( $(this).val() );
    if( str != "" ) {
      var regx = /^[A-Za-z ]+$/;
      if (!regx.test(str)) {
        alert("Letters only please!");
        $(this).val($(this).val().slice(0, -1));
      }
    }
  });

  // letters and numbers for address
  $("#studentAddress").keyup(function(e){
    var str = $.trim( $(this).val() );
    if( str != "" ) {
      var regx = /^[A-Za-z0-9 ]+$/;
      if (!regx.test(str)) {
        alert("Letters and numbers only please!");
        $(this).val($(this).val().slice(0, -1));
      }
    }
  });

  // letters and numbers for academic plan
  $("#studentAcademicPlan").keyup(function(e){
    var str = $.trim( $(this).val() );
    if( str != "" ) {
      var regx = /^[A-Za-z0-9 ]+$/;
      if (!regx.test(str)) {
        alert("Letters and numbers only please!");
        $(this).val($(this).val().slice(0, -1));
      }
    }
  });

  // letters only for level
  $("#studentLevel").keyup(function(e){
    var str = $.trim( $(this).val() );
    if( str != "" ) {
      var regx = /^[A-Za-z ]+$/;
      if (!regx.test(str)) {
        alert("Letters only please!");
        $(this).val($(this).val().slice(0, -1));
      }
    }
  });


});
