function toggle(className) {
	var divsToHide = document.getElementsByClassName(className);
    for (var i = 0; i < divsToHide.length; i++) {
        divsToHide[i].style.display = divsToHide[i].style.display == "none" ? "table-cell"
				: "none";
    }
}


function compare() {
    var table = document.getElementsByTagName('table');
    
    if (table[0].rows[1].cells.length < 48) {
        for (var i = 0; i < table[0].rows.length; i++) {
            table[0].rows[i].cells[3].style.display = 'none';
}
}
}

function hideModal() {
    var modal = document.querySelector('.modal');
    setTimeout(function() {
        modal.style.display = 'none';
    }, 5);
}




