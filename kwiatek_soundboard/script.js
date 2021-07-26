$(function () {
    window.onload = (e) => {
        window.addEventListener('message', (event) => {
            var item = event.data;
            if (item !== undefined && item.type === "ui") {
                if (item.display === true) {
                    menu - expand(true);
                } else {
                    menu - expand(false);
                }
            }
        });
    };
});

$("#toggle").click(function () {
    $.post("http://kwiatek_soundboard/wybor", JSON.stringify({
        wybor: "zamknij"
    }))
})

$("#mlotek").click(function () {
    $.post("http://kwiatek_soundboard/wybor", JSON.stringify({
        wybor: "mlotek"
    }))
})

$("#odkurzacz").click(function () {
    $.post("http://kwiatek_soundboard/wybor", JSON.stringify({
        wybor: "odkurzacz"
    }))
})

$("#scierka").click(function () {
    $.post("http://kwiatek_soundboard/wybor", JSON.stringify({
        wybor: "scierka"
    }))
})

$("#wiertarka").click(function () {
    $.post("http://kwiatek_soundboard/wybor", JSON.stringify({
        wybor: "wiertarka"
    }))
})

$("#wiertarka2").click(function () {
    $.post("http://kwiatek_soundboard/wybor", JSON.stringify({
        wybor: "wiertarka2"
    }))
})

$("#klucz").click(function () {
    $.post("http://kwiatek_soundboard/wybor", JSON.stringify({
        wybor: "klucz"
    }))
})

$("#klucz2").click(function () {
    $.post("http://kwiatek_soundboard/wybor", JSON.stringify({
        wybor: "klucz2"
    }))
})

$("#szlifierka").click(function () {
    $.post("http://kwiatek_soundboard/wybor", JSON.stringify({
        wybor: "szlifierka"
    }))
})

$("#dzwiekoff").click(function () {
    $.post("http://kwiatek_soundboard/wybor", JSON.stringify({
        wybor: "dzwiekoff"
    }))
})

function expand(i) {
    if (i == true) {
        document.getElementById("toggle").style.transform = "scale(3)";
        document.getElementById("menu").style.transform = "scale(3)";
        document.getElementById("submenu").style.transform = "scale(3)";
        document.getElementById("plus").style.transform = "rotate(45deg)";
        setTimeout(function () {
            document.getElementById("mlotek").style.transform = "scale(6)";
            document.getElementById("odkurzacz").style.transform = "scale(6)";
            document.getElementById("scierka").style.transform = "scale(6)";
            document.getElementById("wiertarka").style.transform = "scale(6)";
            document.getElementById("wiertarka2").style.transform = "scale(6)";
            document.getElementById("klucz").style.transform = "scale(6)";
            document.getElementById("klucz2").style.transform = "scale(6)";
            document.getElementById("szlifierka").style.transform = "scale(6)";
            document.getElementById("dzwiekoff").style.transform = "scale(6)";
        }, 400)
    }
    else {
        document.getElementById("mlotek").style.transform = "scale(0)";
        document.getElementById("odkurzacz").style.transform = "scale(0)";
        document.getElementById("scierka").style.transform = "scale(0)";
        document.getElementById("wiertarka").style.transform = "scale(0)";
        document.getElementById("wiertarka2").style.transform = "scale(0)";
        document.getElementById("klucz").style.transform = "scale(0)";
        document.getElementById("klucz2").style.transform = "scale(0)";
        document.getElementById("szlifierka").style.transform = "scale(0)";
        document.getElementById("dzwiekoff").style.transform = "scale(0)";
        setTimeout(function () {
            document.getElementById("menu").style.transform = "scale(0)";
            document.getElementById("submenu").style.transform = "scale(0)";
            document.getElementById("toggle").style.transform = "scale(0)";
            document.getElementById("plus").style.transform = "rotate(0deg)";
        }, 300)
    }
}