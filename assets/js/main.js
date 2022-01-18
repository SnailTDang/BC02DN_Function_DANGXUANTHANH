//ĐIỂM ĐẠI HỌC
const benchmarks = document.querySelector("#benchmarks");
const area = document.querySelector("#area");
const object = document.querySelector("#object");
const scores = document.querySelectorAll(".scores");
const messageScore = document.querySelector(".result-inner");
const resultSubmit = document.querySelector("#daihoc-button");
const exciseInner = document.querySelector("#exercises-box");
const menuExercises = document.querySelectorAll(".exercise");
const readMores = document.querySelectorAll(".summary-title");
const readMorecontents = document.querySelectorAll(".summary-list");

readMores.forEach((e, index) => {
  e.addEventListener("click", () => {
    for (let i = 0; i < readMores.length; i++) {
      if (index == i) {
        readMorecontents[i].classList.toggle("open");
      }
    }
  });
});

function innerResult() {
  let benchmark = Number(benchmarks.value);
  let areaPoint = Number(area.value);
  let objectPoint = Number(object.value);
  var totalScores = 0;
  for (i = 0; i < scores.length; i++) {
    if (Number(scores[i].value) == 0) {
      totalScores = "";
    } else {
      totalScores += Number(scores[i].value);
    }
  }
  if (typeof totalScores !== "number") {
    messageScore.innerText = "Bạn đã rớt, do có ít nhất 1 điểm 0";
  } else {
    totalScores = (totalScores + areaPoint + objectPoint).toFixed(3);
    if (totalScores < benchmark) {
      messageScore.innerText = "Bạn đã RỚT. Tổng điểm :" + " " + totalScores;
    } else {
      messageScore.innerText = "Bạn đã ĐẬU. Tổng điểm :" + " " + totalScores;
    }
  }
}

function numberActive() {
  for (let menuExercise of menuExercises) {
    menuExercise.classList.remove("active");
  }
  this.classList.add("active");
}

resultSubmit.addEventListener("click", innerResult);

//TIỀN CÁP

const userType = document.querySelector("#type-user");
const userId = document.querySelector("#user-id");
const userChannel = document.querySelector(".channels");
const userConnect = document.querySelector(".connect");
const tiencapButton = document.querySelector("#tiencap-button");
const resultTienCap = document.querySelector("#result-tiencap");
const popularFee = 4.5;
const businessFee = 15;
const popularChannel = 7.5;
const businessChannel = 50;
const popularBasic = 20.5;
const first10Connect = 75;
const businessConnect = 5;

function userTypeChange() {
  if (userType.value == 2) {
    userConnect.classList.add("open");
  } else {
    userConnect.classList.remove("open");
  }
}

function tinhtienCap() {
  let tongTien = 0;
  if (userType.value == 0) {
    alert("Chọn loại khách hàng");
  } else {
    if (userType.value == 1) {
      tongTien =
        Number(userChannel.value) * popularChannel + popularBasic + popularFee;
    } else if (userType.value == 2) {
      if (userConnect.value <= 10) {
        tongTien =
          Number(userChannel.value) * businessChannel +
          businessFee +
          first10Connect;
      } else {
        tongTien =
          Number(userChannel.value) * businessChannel +
          businessFee +
          (Number(userConnect.value) - 10) * businessConnect +
          first10Connect;
      }
    }
    console.log(tongTien);
    resultTienCap.innerText =
      "Mã khác hàng:   " +
      userId.value +
      "; " +
      "Tiền cáp: " +
      (tongTien.toFixed(2).toLocaleString() + "$");
  }
}

userType.addEventListener("change", userTypeChange);
tiencapButton.addEventListener("click", tinhtienCap);

const exerciseNumbers = document.querySelectorAll(".exercises-content");
menuExercises.forEach((e, index) => {
  e.addEventListener("click", numberActive);
  e.addEventListener("click", () => {
    for (let i = 0; i < exerciseNumbers.length; i++) {
      if (index == i) {
        exerciseNumbers[i].classList.add("open");
      } else {
        exerciseNumbers[i].classList.remove("open");
      }
    }
  });
});

// TIỀN THUẾ

const userIncome = document.querySelector(".income");
const userName = document.querySelector("#user-name");
const dependentPerson = document.querySelector(".people");
const tienthueButton = document.querySelector("#tienthue-button");
const resultTienThue = document.querySelector("#result-tienthue");
const dependentCost = 1.6e6;
const moneyOffset = 4e6;

function tienThue() {
  let tongThunhap = Number(userIncome.value);
  let depenPerson = Number(dependentPerson.value);
  let chiuThue = tongThunhap - moneyOffset - depenPerson * dependentCost;
  if (chiuThue <= 0) {
    alert("Thu nhập không hợp lệ");
  } else {
    let tienThue = 0;
    if (chiuThue <= 60e6) {
      tienThue = chiuThue * 0.05;
    } else if (chiuThue > 60e6 && chiuThue <= 120e6) {
      tienThue = chiuThue * 0.1;
    } else if (chiuThue > 120e6 && chiuThue <= 210e6) {
      tienThue = chiuThue * 0.15;
    } else if (chiuThue > 210e6 && chiuThue <= 384e6) {
      tienThue = chiuThue * 0.2;
    } else if (chiuThue > 384e6 && chiuThue <= 624e6) {
      tienThue = chiuThue * 0.25;
    } else if (chiuThue > 624e6 && chiuThue <= 960e6) {
      tienThue = chiuThue * 0.3;
    } else if (chiuThue > 960e6) {
      tienThue = chiuThue * 0.35;
    }
    tienThue = tienThue.toLocaleString() + " VNĐ";
    resultTienThue.innerText =
      "Họ tên:  " +
      userName.value +
      ";  " +
      "Tiền thuế thu nhập cá nhân:  " +
      tienThue;
  }
}

tienthueButton.addEventListener("click", tienThue);

//TIỀN ĐIỀN

const userNameElectric = document.querySelector("#user-name2");
const electricNumber = document.querySelector(".electric-number");
const electricButton = document.querySelector("#tiendien-button");
const resultTienDien = document.querySelector("#result-tiendien");
const first50Kwh = 500;
const second50Kwh = 650;
const third50Kwh = 850;
const fourth50Kwh = 1100;
const remainKwh = 1300;
const first50KwhCost = first50Kwh * 50;
const second50KwhCost = second50Kwh * 50;
const third50KwhCost = third50Kwh * 100;
const fourth50KwhCost = fourth50Kwh * 150;

function electricBill() {
  let electricCount = Number(electricNumber.value);
  let electricMoney = 0;
  if (electricCount <= 0) {
    alert("Nhập đúng Kw điện!");
  } else {
    if (electricCount <= 50) {
      electricMoney = electricCount * first50Kwh;
    } else if (electricCount > 50 && electricCount <= 100) {
      electricMoney = first50KwhCost + (electricCount - 50) * second50Kwh;
    } else if (electricCount > 100 && electricCount <= 200) {
      electricMoney =
        first50KwhCost + second50KwhCost + (electricCount - 100) * third50Kwh;
    } else if (electricCount > 200 && electricCount <= 350) {
      electricMoney =
        first50KwhCost +
        second50KwhCost +
        third50KwhCost +
        (electricCount - 200) * fourth50Kwh;
    } else {
      electricMoney =
        first50KwhCost +
        second50KwhCost +
        third50KwhCost +
        fourth50KwhCost +
        (electricCount - 350) * remainKwh;
    }
    electricMoney = electricMoney.toLocaleString() + " VNĐ";
    resultTienDien.innerText =
      "Họ và tên:  " +
      userNameElectric.value +
      ";   " +
      "Tiền điện:   " +
      electricMoney;
  }
}

electricButton.addEventListener("click", electricBill);
electricNumber.addEventListener("keyup", (e) => {
  if (e.key == 13) {
    electricBill;
  }
});
