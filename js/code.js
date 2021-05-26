/*################################
  Készítette: Chen Kevin 9.c
################################*/
/* kapcsolat.html */
function submitFunction() {
  let adressInputlength = document.getElementById('adressArea').value.length;
  let messageInputlength = document.getElementById('messageArea').value.length;
  if (adressInputlength >= 10 && messageInputlength >= 30) {
    window.location.assign('elkuldve.html')
  } else {
    $("#alert").removeClass("hide");
    $("#alert").addClass("show");
  }
}

/* index.html */
if (document.URL.includes("kapcsolat.html")){

} else {
  setTimeout(function() {
    $(".loader-wrapper").fadeOut(500);
  }, 500)
  setTimeout(function() {
    window.location.assign('kezdolap.html');
  }, 1500)
}
