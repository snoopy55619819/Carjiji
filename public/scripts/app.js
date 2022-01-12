// Client facing scripts here
$(() => {
  console.log('jquery ready');

  //Hide/show edit card script
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

  // Preview/update image for car script
  const $divWithImageInput = document.getElementById("imageInputBox");
  const $divWithImagePreview = document.getElementById("carImagePreview");
  const $divWithCarURLValue = document.getElementById("carURLInputValue");

  $( $divWithImageInput ).change(function() {
    console.log('changed away from url box');
    let imageURL = $( $divWithCarURLValue ).val();
    console.log(typeof imageURL);
    $divWithImagePreview.src = imageURL;
  });

});
