$(() => {
  console.log("Page is ready");
  //
  //COUNT INSERTED CHARACTERS
  //

  //select element
  const $textArea = $("#message-text");
  // console.log($textArea);
/*
  //setup event handler on input
  $textArea.on("input", function(event) {
    // console.log("You input on textArea.");

    //select what to count
    const usersInput = event.target.value;
    // console.log("usersInput", usersInput);

    //grab number of characters in existing input
    const num = usersInput.length;
    // console.log("num", num);

    //var for counter to start from
    const maxLength = 140;
    const reminder = maxLength - num;

    //select counter
    const $charCounter = $(".new-tweet-counter");

    //creat text node on it
    const $showReminder = $charCounter.text(reminder);
    // console.log($showReminder);

    //change color if tweet pass max num of char
    if (reminder < 0) {
      $showReminder.addClass("max-reached");
    } else {
      $showReminder.removeClass("max-reached");

    }

  });
*/
});
