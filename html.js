<script>
    var elem = document.getElementById('los');
    elem.addEventListener('click', chkFormular);

function chkFormular() {

  if (document.Formular.name.value == "") {
    alert("Bitte Ihren Namen eingeben!");
    document.Formular.name.focus();
    return false;
  }
  if (document.Formular.betreff.value == "") {
    alert("Bitte einen Betreff eingeben!");
    document.Formular.betreff.focus();
    return false;
  }
  if (document.Formular.email.value == "") {
    alert("Bitte Ihre E-Mail-Adresse eingeben!");
    document.Formular.email.focus();
    return false;
  }
  if (document.Formular.email.value.indexOf("@") == -1) {
    alert("Keine E-Mail-Adresse!");
    document.Formular.email.focus();
    return false;
}
</script>
