var idtimeCompteur = 0
function DisplayTimer(dueDate) {
  var delais = 1
  var CompteurAffiche = document.getElementById("Compteur")
  var html =
    '<span style="color: #fff; font-size:0.8em"><strong><span>[j]D </span></strong><span>[h]h [m]m [s]s </span></span>'
  var htmlafter = ""

  var date1 = Date.now()
  var date2 = new Date(dueDate)
  var nbsec = (date2.getTime() - date1) / 1000
  var nbsecj = 24 * 3600
  var stopcpt = false
  if (nbsec <= 0) {
    nbsec = -nbsec
    if (htmlafter != "") {
      html = htmlafter
    } else {
      stopcpt = true
    }
  }
  var j = Math.floor(nbsec / nbsecj)
  var h = Math.floor((nbsec - j * nbsecj) / 3600)
  var m = Math.floor((nbsec - (j * nbsecj + h * 3600)) / 60)
  var s = Math.floor(nbsec - (j * nbsecj + h * 3600 + m * 60))
  if (stopcpt == true) {
    j = 0
    h = 0
    m = 0
    s = 0
  }
  console.log(j, h, m, s)
  var html = html.replace("[j]", j)
  var html = html.replace("[h]", h)
  var html = html.replace("[m]", m)
  var html = html.replace("[s]", s)
  if (CompteurAffiche != null) {
    CompteurAffiche.innerHTML = html
  }
  if (stopcpt == false) {
    idtimeCompteur = setTimeout(DisplayTimer, 1 * 1000, dueDate)
  }
}
