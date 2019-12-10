(function () {
    var dialog = document.getElementById('window');
    dialog.style.backgroundColor = "#fede";
    dialog.style.boxShadow="0 0 5px rgba(0, 0, 0, 0.5)";
    dialog.style.borderRadius="5px";
    dialog.style.position='center';
    document.getElementById('openDialog').onclick = function() {
        dialog.show(); // Показываем диалоговое окно
        document.getElementById('openDialog').disabled=true;
        document.body.style.overflow = 'hidden';
    }
    document.getElementById('closeDialog').onclick = function() {
        dialog.close(); //Закрываем диалоговое окно
        document.getElementById('openDialog').disabled=false;
    }
})();