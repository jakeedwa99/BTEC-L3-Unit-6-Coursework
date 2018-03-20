$("#btn-submit").click(() => {
  if (document.getElementById("txtFirst").value.match(/^[a-zA-Z ]+$/)) {
    $("#alert").html("<div class=\"alert alert-success\"<p>Your message has been sent.</p></div>");
    return;
  }
  if (document.getElementById("txtEmail").value.match(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/)) {
    $("#alert").html("<div class=\"alert alert-success\"<p>Your message has been sent.</p></div>");
    return;
  }
  if (document.getElementById("txtMessage").value.match(/^\w+(?:\s+\w+){0,249}$/)) {
    $("#alert").html("<div class=\"alert alert-success\"<p>Your message has been sent.</p></div>");
    return;
  }
  $("#alert").html("<div class=\"alert alert-danger\"<p>Enter a Valid Name and Email Address.</p><br><p1>Messages are limited to 250 characters</p></div>");
});
