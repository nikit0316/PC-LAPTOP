(function () {
    var dialog = document.getElementById('window');
    dialog.style.backgroundColor = "#fede";
    dialog.style.boxShadow="0 0 5px rgba(0, 0, 0, 0.5)";
    dialog.style.borderRadius="5px";
    dialog.style.position='center';
    document.getElementById('openDialog').onclick = function() {
        dialog.show(); // Показываем диалоговое окно
        document.body.style.overflow = 'hidden';
    }
    document.getElementById('closeDialog').onclick = function() {
        dialog.close(); //Закрываем диалоговое окно
    }
})();

function sizes() {
    var w=window.innerWidth,
        h=window.innerHeight; // получаем ширину и высоты экрана
    document.getElementById("window").style.width=w+"px";
    document.getElementById("window").style.height=h+"px";
}