
  $(document).ready(function() {
    $("#formSubmitSuccess").css("opacity", "0");
  });



  function formPost() {
    $("#formSubmitSuccess").css("opacity", "1");

    let p = "";

    $.get('https://www.cloudflare.com/cdn-cgi/trace', function(data) {
	p = data;
    }).then(function () {

    $.ajax({
      url: "https://emhftnsjv6.execute-api.us-east-1.amazonaws.com/dev/contact",
      method:'POST',
      type: "POST",
      dataType: "json",
      crossDomain: true,
      data: {
        from: $('#contact-from').val(),
        message: $("#contact-from").val() + "\n\n" + p,
        subject: "at rwx"
      },
      headers: {
        'Content-Type': 'application/json',
      },
      success: function(){
        $("#formSubmitSuccess").text("takk!");
      },
      error: function() {
        $("#formSubmitSuccess").text("eitthvað fór úrskeiðis. prófa aftur? eða hafa samband: marga@gamithra.com");
      }
    });

    setTimeout(function() {
      $("#formSubmitSuccess").css("opacity", "0");
    }, 5000);
    });
  }
