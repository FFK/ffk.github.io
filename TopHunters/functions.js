var go = true;

function switchEdition(category) {
	go = false;
	main.pick(category);
}

var main = 
(function() {
	
var counter = 0;
const categories = [
    ".b9-11",
    ".b12-13",
    ".b14-15",
    ".g9-11",
    ".g12-13",
    ".g14-15"
          ];
const names = [
    "Chłopcy 9 - 11",
    "Chłopcy 12 - 13",
    "Chłopcy 14 - 15",
    "Dziewczynki 9 - 11",
    "Dziewczynki 12 - 13",
    "Dziewczynki 14 - 15"    
];

function hideAll () {
    var all = document.querySelector("tbody");
    for (var i = 0; i < all.rows.length; i++) {
        all.rows[i].classList = all.rows[i].classList[0];
        all.rows[i].classList += " hidden";
    }
}

function show(el) {
    let title = document.querySelector('.category h1');
	let catTabs = document.querySelectorAll('.category-tabs div');
    let elements = document.querySelectorAll(el);
   
    hideAll();
        
    title.innerHTML = names[counter];
	catTabs.forEach(function(el) {
		el.classList = 'categoryButton';
	});
	catTabs[counter].classList = 'active categoryButton';
	
    elements.forEach(function(item,index) {
        item.classList.value = item.classList[0];
        item.cells[0].innerHTML = index+1;
        if (index % 2 == 0) {
            item.classList.value += ' even';
        } else {
            item.classList.value += ' odd';
        }
    });
    
    counter++;
}

function diag() {
    let people = document.querySelector("tbody");
    console.log("Łącznie uczestników: " + people.rows.length);
    console.log("======================");
    for (let i = 0; i < names.length; i++) {
        let group = document.querySelectorAll(categories[i]);
        console.log(names[i] + ":  " + group.length);
    }
}

function pick(category) {
	counter = category;
	show(categories[category]);
}

show(categories[0]);

setInterval(function() {
	if (go) {
		if (counter == 6) {
			location.reload();
		} else {			
			show(categories[counter]);
		}		
	}
},15000);

return {
	diag: diag,
	pick: pick
}

})();


