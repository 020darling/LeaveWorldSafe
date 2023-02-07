window.onload = function () {

    swal("警告⚠", "本頁面僅供學習研究用途，與香港政府發佈的2019新型冠狀病毒防疫軟件安心出行沒有任何關係，也沒有得到香港政府的認可，請勿使用本網頁進入香港政府所規管599F表列處所，如因此引發任何問題，本人均不會負責！", "warning");

    //讀取是否有緩存地名
    let locname = document.querySelector(".lo");
    if (localStorage.getItem("ETLOCA") == null) {
        locname.innerHTML = "等待輸入地點";
    } else {
        locname.innerHTML = localStorage.getItem("ETLOCA");
    }


    //輸入/更換地名
    locname.onclick = function () {
        let a = prompt("你想入邊?");
        if (a == "" || a == null) {
            locname.innerHTML = "非法輸入值";
        } else {
            localStorage.setItem("ETLOCA", a);
            let b = localStorage.getItem("ETLOCA");
            locname.innerHTML = b;
        }


    }

    //創建時間對象

    let DateAndTime = new Date();

    //獲取時間顯示元素
    let etyr = document.querySelector("#yr");
    let etmo = document.querySelector("#mo");
    let etda = document.querySelector("#dtt");
    let ethr = document.querySelector("#hr");
    let etmi = document.querySelector("#mi");

    //獲取當前時間
    let year = DateAndTime.getFullYear();
    let month = DateAndTime.getMonth();
    let day = DateAndTime.getDate();
    let hr = DateAndTime.getHours();
    let min = DateAndTime.getMinutes();

    //刪除小時/分鐘/日期沒有0
    if (hr < 10) {
        hr = "0" + hr;
    }
    if (min < 10) {
        min = "0" + min;
    }
    
    if (month < 10) {
        month = "0" + month;
    }
    if (day < 10) {
        day = "0" + day;
    }



    //判斷是否有緩存的進入時間/顯示時間
    if (localStorage.getItem("HaveDate") != null) {
        etyr.innerHTML = localStorage.getItem("yrr");
        etmo.innerHTML = localStorage.getItem("moo");
        etda.innerHTML = localStorage.getItem("dayy");
        ethr.innerHTML = localStorage.getItem("hrr");
        etmi.innerHTML = localStorage.getItem("mii");

    } else {
        localStorage.setItem("HaveDate", true);
        localStorage.setItem("yrr", year);
        localStorage.setItem("moo", month);
        localStorage.setItem("dayy", day);
        localStorage.setItem("hrr", hr);
        localStorage.setItem("mii", min);

        etyr.innerHTML = localStorage.getItem("yrr");
        etmo.innerHTML = localStorage.getItem("moo");
        etda.innerHTML = localStorage.getItem("dayy");
        ethr.innerHTML = localStorage.getItem("hrr");
        etmi.innerHTML = localStorage.getItem("mii");
    }

    //離場按鈕時間計算
    let tkhr = document.querySelector("#tkhr");
    let tkmi = document.querySelector("#tkmi");
    let tkss = document.querySelector("#tkss");
    let stadspeed = null;
    
    
    function tmcal() {
        if(localStorage.time == null) {       //判斷是否存有時間
            localStorage.setItem("time" , 0)
            localStorage.time++;
        }else {
            localStorage.time++;

        }

        let seest = Math.floor(localStorage.time / 3600);
        let miist = Math.floor((localStorage.time - (seest * 3600)) / 60);
        let hrrst = localStorage.time % 60;

        if (seest < 10) {
            seest = "0" + seest;
        }
        if (miist < 10) {
            miist = "0" + miist;
        }
        if (hrrst < 10) {
            hrrst = "0" + hrrst;
        }

        tkhr.innerHTML = seest;
        tkmi.innerHTML = miist;
        tkss.innerHTML = hrrst;


    }
    if (stadspeed) {
        return;
    }

    stadspeed = setInterval(tmcal, 1000);

    //清除緩存
    var btnof = document.querySelector(".LeaBTN");
    btnof.onclick = function () {
        localStorage.clear();
        locname.innerHTML = "緩存已經清除";
    }


}
