import {cardGenerator} from './cards.js';

// Page Index
let index = 1;

// Pages
const firstPagination = document.getElementById("firstPage");
const secondPagination = document.getElementById("secondPage");
const thirdPagination = document.getElementById("thirdPage");
const fourthPagination = document.getElementById("fourthPage");

// Previos and Next button
const nextPagination = document.getElementById("nextPage");
const previousPagination = document.getElementById("previousPage");

const previousLi = document.getElementById("previousLi");
const nextLi = document.getElementById("nextLi");

// Where the products are
const productsArea = document.getElementById("productsArea");

// Index verification
const indexVer = (index) => {

	if(index == 1){

		previousLi.classList.add("disabled");
		previousPagination.classList.remove("text-body");

	}else if(index == 3){

		nextLi.classList.add("disabled");
		nextPagination.classList.remove("text-body");

	}else{

		previousLi.classList.remove("disabled");
		previousPagination.classList.add("text-body");

	};

};

indexVer(index);

// First page
firstPagination.addEventListener("click", () => {
	
	index = 1;

	cardGenerator(productsArea, "shirts");
	indexVer(index);
	
});

// Second page
secondPagination.addEventListener("click", () => {
	
	index = 2;

	cardGenerator(productsArea, "technology");
	indexVer(index);

});

// Third page
thirdPagination.addEventListener("click", () => {


	index = 3;

	cardGenerator(productsArea, "pants");
	indexVer(index);

});

// Pagination
nextPagination.addEventListener("click", () => {

	if(index == 1){

		cardGenerator(productsArea, "technology");
		index++;
		indexVer(index);

	}else if(index == 2){

		index++;
		cardGenerator(productsArea, "pants");
		indexVer(index);

	};

});

previousPagination.addEventListener("click", () => {

	if(index == 2){

		cardGenerator(productsArea, "shirts");
		index--;
		indexVer(index);

	}else if(index == 3){

		cardGenerator(productsArea, "technology");
		index--;
		indexVer(index);

	};

});