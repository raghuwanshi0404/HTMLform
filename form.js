let form = document.getElementById('formId');

const showBtn = document.getElementById('showInfo');

// console.log(validName)

/*function isValid(){
	if(validName.value.trim() === ""){
		alert('Enter a Valid Name');
		return false;
		
	} else{
		alert('Valid Name');
	}

}*/
form.addEventListener("submit", function (event) {
	event && event.preventDefault() && event.stopPropagation();
	let formData = new FormData(form);
	// console.log(formData);
	let formDataobject = Object.fromEntries(formData);
	// console.log(formDataobject);

	let check = localStorage.getItem('user');
	console.log(check);
	if (check) {
		let oldValue = JSON.parse(check);
		oldValue.push(formDataobject);
		console.log(oldValue)
		localStorage.setItem('user', JSON.stringify(oldValue));
	} else {
		let userArray = [];
		userArray.push(formDataobject);
		 console.log(userArray)
		let json = JSON.stringify(userArray)
		console.log(json)

		localStorage.setItem('user', json);
	}
	showBtn.style.display= "block";


});


// show Info

let display = document.getElementsByClassName('showInfo')
console.log(display[0].innerHTML);
let tableString = `<tr>
							<th class="row">Name</th>
							<th class="row">Number</th>
							<th class="row">Email</th>
							<th class="row">Gender</th>
							<th class="row">Language</th>
							<th class="row">Hobbies</th>
						</tr>`;

showBtn.addEventListener("click", function (event) {
	event.preventDefault();
	if (localStorage.getItem("user")) {
		let showData = JSON.parse(localStorage.getItem('user'));
		for (var i = 0; i < showData.length; i++) {
			console.log(showData[i])
			tableString = tableString + `<tr>
											<td class="row">${showData[i]['full Name']}</td>
											<td class="row">${showData[i]['phone number']}</td>
											<td class="row">${showData[i]['email id']}</td>
											<td class="row">${showData[i]['gender']}</td>
											<td class="row">${showData[i]['language']}</td>
											<td class="row">${showData[i]['hobbies']}</td>
										</tr>`;
		}
		display[0].innerHTML = tableString;
	}
});