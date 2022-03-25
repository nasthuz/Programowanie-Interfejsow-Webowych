"use strict"

//values to remeber 
var rememberedVal;
var rememberedParent;

// add input to the todo list
const addInput = () => {

	//get value of the input form
	let input = document.getElementById("input").value;

	//input shouldnt be empty
	if(input === ""){
        alert("Please, enter the value!");
        return false;
    };

	//date settings
	const today = new Date();
	let date = document.createTextNode(today.toLocaleDateString());
	let dateTime = document.createElement("P");
	dateTime.append(date);

	let listToDo = document.createElement("LI");
	let data = document.createTextNode(input);
	
	listToDo.append(data, dateTime);

	dateTime.style.display = "none";

	//cancel button settings
	const closeBtn = document.createElement("button");
	closeBtn.textContent = "x";
    closeBtn.className = "btn btn-danger";

	listToDo.append(closeBtn);

   //close function
    closeBtn.addEventListener("click", deleteInput);	
	chooseList(listToDo);
	crossItem();
}

//delete item of the list
function deleteInput() {

	$(".modal").show();
	rememberedParent = $(this).parent().parent();
	rememberedVal = $(this).parent().remove();
	$('#backBtn').prop('disabled', false);
}

$(".btn-danger").each(function(){
	$(this).click(function(){
		deleteInput();
	});
});

//ctrl + z
function back() {
	$(rememberedParent).append(rememberedVal);
	$('#backBtn').prop('disabled', true);
}

//dialog window using modal
$(".btn-yes").on("click", function() {
	rememberedVal.parent().remove();
	$(".modal").hide();
})

$(".btn-no").on("click", function() {
	$(".modal").hide();
})

//shade and cross chosen item
const crossItem = () => {
	const list = document.querySelectorAll('ul');
	for (let i=0; i<list.length; i++) {
		list[i].addEventListener('click', function(ev) {
  		if (ev.target.tagName === 'LI') {
		    ev.target.classList.toggle('checked');

	    	let date = ev.target.querySelector('p');

	    	if (date.style.display === "none") {
				let today= new Date();
            	let dd = String(today.getDate()).padStart(2, '0');
            	let mm = String(today.getMonth() + 1).padStart(2, '0');
            	let yyyy = today.getFullYear();

				today = mm + '.' + dd + '.' + yyyy;

	    		date.innerText = today;
	    		date.style.display = "block";
	   	 	} else {
				date.style.display = "none";
	    	}
	  	}
	}, false);}
}

//choose the name of the list
const chooseList = (listToDo) =>{
	const choice = document.getElementById("listSelect").value;
		
	if (choice === '0') {
	document.getElementById("impList").append(listToDo);
	listToDo.style.display = "block";
	document.getElementById("input").value = "";
	}
	else if (choice === '1') {
	document.getElementById("lessList").append(listToDo);
	listToDo.style.display = "block";
	document.getElementById("input").value = "";
	}
	else if (choice === '2') {
	document.getElementById("tomorList").append(listToDo);
	listToDo.style.display = "block";
	document.getElementById("input").value = "";
	}
}


//roll sections
const sections = () => { 
    let i;
    let section = document.getElementsByClassName("section");

    for (i = 0; i < section.length; i++) {
        section[i].addEventListener("click", function() {
          this.classList.toggle("active");
          let panel = this.nextElementSibling;

          if (panel.style.display === "block") {
            panel.style.display = "none";
          } else {
            panel.style.display = "block";
          } 
        });
      }
}

//search input in list, enables to use case-insensitive
const search = () => {
	let checkCase = document.getElementById("caseIns");
	let inputSearch = document.getElementById("search").value;
	let searchList = document.getElementsByTagName('li');

	for (let i = 0; i < searchList.length; i++) {
		searchList[i].style.display = "none";
		if(checkCase.checked){
			if (searchList[i].textContent.toLowerCase().includes(inputSearch.toLowerCase())) {
				searchList[i].style.display = "block";
			}
		}else {
			if (searchList[i].textContent.includes(inputSearch)) {
				searchList[i].style.display = "block";
			}
		}
	}
}