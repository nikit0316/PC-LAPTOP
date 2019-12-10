function generate_table() {
    var body = document.getElementsByTagName("body")[0];
    var tbl = document.createElement("table");
    var tblBody = document.createElement("tbody");
    tbl.style.borderSpacing="0px 0px";

    for (var i = 1; i <= 5; i++) {
        var row = document.createElement("tr");

        for (var j = 1; j <= 5 ; j++) {
            var cell = document.createElement("td");
            var cellText = document.createTextNode(j + ":" + i);
            cell.appendChild(cellText);
            row.appendChild(cell);
            if (j===1 || j===5 || i===1 || i===5)
                cell.style.backgroundColor='red';
        }
        tblBody.appendChild(row);
    }
    tbl.appendChild(tblBody);
    body.appendChild(tbl);
    tbl.setAttribute("border", "1");
}
generate_table();