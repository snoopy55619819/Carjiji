// Client facing scripts here
$(() => {
  console.log('jquery ready');

//card-with-details
//card-with-edits
//edit-car-toggle -> button
//edit-car-toggle-cancel -> cancel button

  const $divWithDetails = document.getElementById("card-with-details");
  const $divWithEdits = document.getElementById("card-with-edits");

  const $btnOpenEdit = document.getElementById("edit-car-toggle");
  const $btnCloseEdit = document.getElementById("edit-car-toggle-cancel");

  $(function () {
    $( $divWithEdits ).hide();
  });

  $( $btnOpenEdit ).click(function() {
    $( $btnOpenEdit ).hide();
    $( $btnCloseEdit ).show();
    $( $divWithDetails ).hide();
    $( $divWithEdits ).show( "slow" );
  });

  $( $btnCloseEdit ).click(function() {
    $( $btnCloseEdit ).hide();
    $( $btnOpenEdit ).show();
    $( $divWithEdits ).hide();
    $( $divWithDetails ).show( "slow" );
  });






  // const $targetDiv = document.getElementById("newDIV");
  // const $btn = document.getElementById("show-New");

  // const $targetDiv2 = document.getElementById("editDIV");
  // const $btn2 = document.getElementById("show-Edit");

  // $(function () {
  //   $( $targetDiv ).hide();
  //   $( $btn2 ).hide();
  // });

  // $( $btn ).click(function() {
  //   $( $btn ).hide();
  //   $( $btn2 ).show();
  //   $( $targetDiv ).show( "slow" );
  //   $( $targetDiv2 ).hide();
  // });

  // $( $btn2 ).click(function() {
  //   $( $btn ).show();
  //   $( $btn2 ).hide();
  //   $( $targetDiv ).hide();
  //   $( $targetDiv2 ).show( "slow" );
  // });

});
