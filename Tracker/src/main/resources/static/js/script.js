window.addEventListener('load', function(e) {
	console.log('script.js loaded');
	init();

	function init() {
		document.fossilForm.lookup.addEventListener('click', function(e) {
			e.preventDefault();
			var fossilId = document.fossilForm.fossilId.value;
			if (!isNaN(fossilId) && fossilId > 0) {
				getFossil(fossilId);
			}
		})

	};
});
function postFossil(newFossil) {
	let xhr = new XMLHttpRequest();
	xhr.open("POST", "api/fossils");
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 200) {
				let fossil = JSON.parse(xhr.responseText);
				displayFossil(fossil);
			}
		}
		else {
			//todo
		}

	};
	xhr.setRequestHeader('Content-type', 'application/json');
	xhr.send(JSON.stringify(newFossil));
}
function updateFossil(toBeUpdated) {
	let xhr = new XMLHttpRequest();
	var id = toBeUpdated.id;
	xhr.open("PUT", `api/fossils/${id}`);
	xhr.onreadystatechange = function() {
		if (xhr.readyState === 4) {
			if (xhr.status === 200 || xhr.status === 200) {
				let fossil = JSON.parse(xhr.responseText);
				displayFossil(fossil);
			}
		}
	}
xhr.setRequestHeader('Content-type', 'application/json');
xhr.send(JSON.stringify(newFossil));
	}

function getFossil(fossilId) {
	var xhr = new XMLHttpRequest();
	xhr.open("GET", "api/fossils/" + fossilId);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status < 400) {
			console.log(xhr.responseText);
			var fossil = JSON.parse(xhr.responseText);
			displayFossil(fossil);
		}
		//		if (fossil === null || fossil === undefined){
		//			var dataDiv = document.getElementById('fossilData');
		//			dataDiv.textContent = "Fossil not Found";
		//			
		//		}
	}
	xhr.send();
}

document.newFossil.addFossil.addEventListener("click", function(e) {
	e.preventDefault();
	let form = document.newFossil;
	let newFossil = {
		name: form.name.value,
		description: form.description.value,
		species: form.species.value,
		age: form.age.value,
		country: form.country.value,
		discoveredBy: form.discoveredBy.value,
		discoveredIn: form.discoveredIn.value
	};
	console.log(newFossil);
	postFossil(newFossil);

});
document.newFossil.updateFossil.addEventListener("click", function(e) {
	e.preventDefault();
	let form = document.newFossil;

	let toBeUpdated = {
		id: form.id.value,
		name: form.name.value,
		description: form.description.value,
		species: form.species.value,
		age: form.age.value,
		country: form.country.value,
		discoveredBy: form.discoveredBy.value,
		discoveredIn: form.discoveredIn.value
	};
	updateFossil(toBeUpdated);
});
function displayFossil(fossil) {
	console.log('word');
	var dataDiv = document.getElementById('fossilData');
	var header = document.createElement('h1');
	header.textContent = "Fossil Name: " + fossil.name;
	var header2 = document.createElement('h3');
	header2.textContent = "Fossil Description " + fossil.description;
	var list = document.createElement('ul');
	var species = document.createElement('li');
	species.textContent = "Fossil Species: " + fossil.species;
	var age = document.createElement('li');
	age.textContent = "Fossil Age: " + fossil.age;
	var country = document.createElement('li');
	country.textContent = "Discovered in: " + fossil.country;
	var discoveredBy = document.createElement('li');
	discoveredBy.textContent = "Discovered by: " + fossil.discoveredBy;
	var discoveredIn = document.createElement('li');
	discoveredIn.textContent = "Discovered in: " + fossil.discoveredIn;
	var button = document.createElement("button");
	button.id = "deleteButton";

	button.innerHTML = "Delete Fossil";

	list.appendChild(species);
	list.appendChild(age);
	list.appendChild(country);
	list.appendChild(discoveredBy);
	list.appendChild(discoveredIn);

	dataDiv.appendChild(header);
	dataDiv.appendChild(header2);
	dataDiv.appendChild(list);
	dataDiv.appendChild(button);
	
	
}

function deleteFossil(fossilId) {
	
	let xhr = new XMLHttpRequest();
	xhr.open("DELETE", `api/fossils/${fossilId}`);
	xhr.onreadystatechange = function() {
		if (xhr.readyState == 4 && xhr.status < 400) {
			console.log("COMPLETE WITH NO PROBLEM");
		}
	}
	xhr.send();
}
document.deleteFossilForm.delete.addEventListener("click", function(e){
		e.preventDefault();
		var fossilId = document.deleteFossilForm.deleteFossilId.value;
		if(!isNaN(fossilId) && fossilId >0){
			if(confirm("Are You Sure you Wish to PERMANENTLY delete this fossil?")){
			deleteFossil(fossilId);
			}
		}
});
	
	
	
	


