  $(() => {
    console.log('addCarPreview.js is ready');
    // Preview/update image for car script
    const $divWithImageInput = document.getElementById("addCarURLInputSection");
    const $divWithImagePreview = document.getElementById("addCarImagePreview");
    const $divWithCarURLValue = document.getElementById("addCarURLInputValue");
    // console.log($divWithImageInput);


    $($divWithImageInput).change(function () {
      console.log("changed away from url box");
      let imageURL = $($divWithCarURLValue).val();
      // console.log(typeof imageURL);
      $divWithImagePreview.src = imageURL;
    });


  })
