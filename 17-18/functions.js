function toggle(className) {
	var divsToHide = document.getElementsByClassName(className);
	for (var i = 0; i < divsToHide.length; i++) {
		divsToHide[i].style.display = divsToHide[i].style.display == "none" ? "table-cell"
				: "none";
	}
}

function hideThree() {
    var table = document.getElementsByTagName('table');
    if (table[0].rows[1].cells.length < 69) {
        for (var i = 0; i < table[0].rows.length; i++) {
            table[0].rows[i].cells[3].style.display = 'none';
        }
    }
}

function nextPage(page) {
	switch (page) {
		case 'PRO_MEN': return 'HARD_MEN';
		case 'HARD_MEN': return 'EASY_MEN';
		case 'EASY_MEN': return 'HARD_WOMEN';
		case 'HARD_WOMEN': return 'EASY_WOMEN'; 
		case 'EASY_WOMEN': return 'VETERAN_MEN'; 
		case 'VETERAN_MEN': return 'VETERAN_WOMEN';
		case 'VETERAN_WOMEN': return 'JUNIOR_MEN';
		case 'JUNIOR_MEN': return 'JUNIOR_WOMEN';
		case 'JUNIOR_WOMEN': return 'PRO_MEN'; 
	}
}

function go() {
	window.location.href += '?go=aye';
}


toggle("colorful2");
hideThree();

setTimeout(function(){
	if(window.location.search) {}
		var prefix = window.location.href.substring(0, location.href.lastIndexOf('/'));
		var sufix = window.location.href.substring(window.location.href.lastIndexOf('/') + 1, window.location.href.lastIndexOf('.'));
		window.location.href = prefix + '/' + nextPage(sufix) + '.html?go=aye';
	}
},10000);
