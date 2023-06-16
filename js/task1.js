    let x = 6;
    let y = 15;
    let z = 4;


    var el1 = document.getElementById("task1_first");
    x += y - x++ * z;
    el1.innerText = "x += y - x++ * z" + x;

    var el2 = document.getElementById("task1_second");
    z = --x - y * 5;
    el2.innerText = "z = --x - y * 5: " + z;

    var el3 = document.getElementById("task1_third");
    y /= x + 5 % z;
    el3.innerText = "y /= x + 5 % z: " + y;

    var el4 = document.getElementById("task1_fourth")
    z = x++ + y * 5;
    el4.innerText = "z = x++ + y * 5: " + z;

    var el5 = document.getElementById("task1_fifth");
    x = y - x++ * z;
    el5.innerText = "x = y - x++ * z: " + x;
