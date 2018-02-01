function toggle(className) {
	var divsToHide = document.getElementsByClassName(className);
	for (var i = 0; i < divsToHide.length; i++) {
		divsToHide[i].style.display = divsToHide[i].style.display == "none" ? "table-cell"
				: "none";
	}
}