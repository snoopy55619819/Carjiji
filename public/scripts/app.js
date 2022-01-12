// Client facing scripts here
$(() => {
  console.log('jquery ready');

  const $targetDiv = document.getElementById("newDIV");
  const $btn = document.getElementById("show-New");

  const $targetDiv2 = document.getElementById("editDIV");
  const $btn2 = document.getElementById("show-Edit");

  $(function () {
    $( $targetDiv ).hide();
    $( $btn2 ).hide();
  });

  $( $btn ).click(function() {
    $( $btn ).hide();
    $( $btn2 ).show();
    $( $targetDiv ).show( "slow" );
    $( $targetDiv2 ).hide();
  });

  $( $btn2 ).click(function() {
    $( $btn ).show();
    $( $btn2 ).hide();
    $( $targetDiv ).hide();
    $( $targetDiv2 ).show( "slow" );
  });

});
