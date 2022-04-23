function colorResult(color) {
  if (color > 65) {
    document.getElementById("dayCount").style.color = "green";
  } else if (color <= 65 && color > 50) {
    document.getElementById("dayCount").style.color = "orange";
  } else if (color <= 50) {
    document.getElementById("dayCount").style.color = "red";
    document.getElementById("textFunny").innerHTML =
      "Vui lòng thận trọng. Có thể bạn sẽ nhận được biên bản sự việc khi tiếp nhận sản phẩm này!!!";
    document.getElementById("textFunny").style.color = "red";
  } else {
    document.getElementById("dayCount").style.color = "red";
    document.getElementById("textFunny").innerHTML =
      "Lỗi rồi kìa. Xem lại NSX, HSD đã nhập chưa nè";
    document.getElementById("textFunny").style.color = "red";
  }
}
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
  let results = parseFloat((kqDaysNow / (kqDaysTotal + 1)) * 100).toFixed(2);

  document.getElementById("dayCount").innerHTML = results + "%";
  colorResult(results);
}

function calDateNsx() {
  let getValueNumber = document.getElementById("nsx-number").value;
  let getOptions = document.getElementById("nsx-option");
  let getValueOption = getOptions.value;

  if (getValueOption === "month") {
    let nsx = getValueNumber;
    let hsd = document.getElementById("hsd").value;
    let result = document.getElementById("result").value;

    let date_hsd = new Date(hsd);
    let date_result = new Date(result);

    let kqDaysTotal = nsx * 30;
    let kqTimeNow = date_hsd.getTime() - date_result.getTime();
    let kqDaysNow = kqTimeNow / (1000 * 3600 * 24);
    let results = parseFloat((kqDaysNow / kqDaysTotal) * 100).toFixed(2);

    document.getElementById("dayCount").innerHTML = results + "%";
    colorResult(results);
  } else if (getValueOption === "day") {
    let nsx = getValueNumber;
    let hsd = document.getElementById("hsd").value;
    let result = document.getElementById("result").value;

    let date_hsd = new Date(hsd);
    let date_result = new Date(result);

    let kqDaysTotal = nsx;
    let kqTimeNow = date_hsd.getTime() - date_result.getTime();
    let kqDaysNow = kqTimeNow / (1000 * 3600 * 24);
    let results = parseFloat((kqDaysNow / kqDaysTotal) * 100).toFixed(2);

    document.getElementById("dayCount").innerHTML = results + "%";
    colorResult(results);
  } else if (getValueOption === "week") {
    let nsx = getValueNumber;
    let hsd = document.getElementById("hsd").value;
    let result = document.getElementById("result").value;

    let date_hsd = new Date(hsd);
    let date_result = new Date(result);

    let kqDaysTotal = nsx * 7;
    let kqTimeNow = date_hsd.getTime() - date_result.getTime();
    let kqDaysNow = kqTimeNow / (1000 * 3600 * 24);
    let results = parseFloat((kqDaysNow / kqDaysTotal) * 100).toFixed(2);

    document.getElementById("dayCount").innerHTML = results + "%";
    colorResult(results);
  } else if (getValueOption === "year") {
    let nsx = getValueNumber;
    let hsd = document.getElementById("hsd").value;
    let result = document.getElementById("result").value;

    let date_hsd = new Date(hsd);
    let date_result = new Date(result);

    let kqDaysTotal = nsx * 365;
    let kqTimeNow = date_hsd.getTime() - date_result.getTime();
    let kqDaysNow = kqTimeNow / (1000 * 3600 * 24);
    let results = parseFloat((kqDaysNow / kqDaysTotal) * 100).toFixed(2);

    document.getElementById("dayCount").innerHTML = results + "%";
    colorResult(results);
  }
}

function calDateHsd() {
  let getValueNumber = document.getElementById("hsd-number").value;
  let getOptions = document.getElementById("hsd-option");
  let getValueOption = getOptions.value;

  if (getValueOption === "month") {
    let nsx = document.getElementById("nsx").value;
    let hsd = getValueNumber;
    let result = document.getElementById("result").value;

    let date_nsx = new Date(nsx);
    let date_result = new Date(result);

    let kqDaysTotal = hsd * 30;
    let kqTimeBeforeNow = date_result.getTime() - date_nsx.getTime();
    let kqTimeNow = kqTimeBeforeNow / (1000 * 3600 * 24);
    let kqDaysNow = kqDaysTotal - kqTimeNow - 1;
    let results = parseFloat((kqDaysNow / kqDaysTotal) * 100).toFixed(2);

    document.getElementById("dayCount").innerHTML = results + "%";
    colorResult(results);
  } else if (getValueOption === "day") {
    let nsx = document.getElementById("nsx").value;
    let hsd = getValueNumber;
    let result = document.getElementById("result").value;

    let date_nsx = new Date(nsx);
    let date_result = new Date(result);

    let kqDaysTotal = hsd;
    let kqTimeBeforeNow = date_result.getTime() - date_nsx.getTime();
    let kqTimeNow = kqTimeBeforeNow / (1000 * 3600 * 24);
    let kqDaysNow = kqDaysTotal - kqTimeNow - 1;
    let results = parseFloat((kqDaysNow / kqDaysTotal) * 100).toFixed(2);

    document.getElementById("dayCount").innerHTML = results + "%";
    colorResult(results);
  } else if (getValueOption === "week") {
    let nsx = document.getElementById("nsx").value;
    let hsd = getValueNumber;
    let result = document.getElementById("result").value;

    let date_nsx = new Date(nsx);
    let date_result = new Date(result);

    let kqDaysTotal = hsd * 7;
    let kqTimeBeforeNow = date_result.getTime() - date_nsx.getTime();
    let kqTimeNow = kqTimeBeforeNow / (1000 * 3600 * 24);
    let kqDaysNow = kqDaysTotal - kqTimeNow - 1;
    let results = parseFloat((kqDaysNow / kqDaysTotal) * 100).toFixed(2);

    document.getElementById("dayCount").innerHTML = results + "%";
    colorResult(results);
  } else if (getValueOption === "year") {
    let nsx = document.getElementById("nsx").value;
    let hsd = getValueNumber;
    let result = document.getElementById("result").value;

    let date_nsx = new Date(nsx);
    let date_result = new Date(result);

    let kqDaysTotal = hsd * 365;
    let kqTimeBeforeNow = date_result.getTime() - date_nsx.getTime();
    let kqTimeNow = kqTimeBeforeNow / (1000 * 3600 * 24);
    let kqDaysNow = kqDaysTotal - kqTimeNow - 1;
    let results = parseFloat((kqDaysNow / kqDaysTotal) * 100).toFixed(2);

    document.getElementById("dayCount").innerHTML = results + "%";
    colorResult(results);
  }
}
