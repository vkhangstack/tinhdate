function calDate() {
  let nsx = document.getElementById("nsx").value;
  let hsd = document.getElementById("hsd").value;
  let result = document.getElementById("result").value;

  let date_nsx = new Date(nsx);
  let date_hsd = new Date(hsd);
  let date_result = new Date(result);

  let kqTimeTotal = date_hsd.getTime() - date_nsx.getTime();
  let kqDaysTotal = kqTimeTotal / (1000 * 3600 * 24);
  let kqTimeNow = date_hsd.getTime() - date_result.getTime();
  let kqDaysNow = kqTimeNow / (1000 * 3600 * 24);
  let results = parseFloat((kqDaysNow / kqDaysTotal) * 100).toFixed(2);

  document.getElementById("dayCount").innerHTML = results + "%";

  if (results > 65) {
    document.getElementById("dayCount").style.color = "green";
  } else if (results <= 65 && results >= 50) {
    document.getElementById("dayCount").style.color = "orange";
  } else {
    document.getElementById("dayCount").style.color = "red";
  }
}
