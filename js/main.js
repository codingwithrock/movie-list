

//! Getting The Country Parent Section
var parentSection = document.getElementById('country-section');



// const all Country Name API
const urlCountry = "https://restcountries.com/v3.1/all";





callingAllCountryList = async () => {



	try {
		document.getElementById('modal').style.display = 'none';
		document.getElementById('footer').style.display = 'none';
		progressBar('30%')
		const response = await fetch(urlCountry)
		progressBar('60%');
		const country = await response.json();
		progressBar('80%');
		countryList(country);
		progressBar('100%');
		
	}
	catch (error) {
		console.log(error);
	}
}

// ! Display Progress Bar Start
const progressBar = (progress) => {
	document.getElementById('progress-bar').style.width = progress;
}
// ! Display Progress Bar End

	







// *Show ALL Button Are False
var showAll = 'notShow';

// !Show all button start
document.getElementById('show-all-btn').addEventListener('click', (event) => {
	showAll = 'show';
	console.log('working');
	parentSection.innerHTML = ``;

	event.target.style.display = 'none';

	callingAllCountryList();

})
// !Show all button End




// Getting The Value Of Top Country Movie Movie List...
countryList = (countryList) => {


	if (showAll != 'show') {
		var countrySlice = countryList.slice(0, 6);
		document.getElementById('show-all-btn').style.display = 'block';
		document.getElementById('footer').style.display = 'block';
	}


	else {
		var countrySlice = countryList;
	}









	countrySlice.forEach(country => {





		// !Creating Card Div For Parent Section.
		const div = document.createElement('div');



		// ! Adding Calls List...
		div.classList.add('p-6', 'max-w-sm', 'bg-white', 'rounded-lg', 'border', 'border-gray-200', 'shadow-md', 'dark:bg-gray-800', 'dark:border-gray-700', 'flex', 'space-x-12', 'items-center');




		div.innerHTML = ` <div>

			<h2 class= "mb-2 text-xl font-bold tracking-tight text-gray-900 dark:text-white">TOP 
			UNIVERSITY</h2>

			<a href="#">
			<h5 class="mb-2 text-xl font-bold tracking-tight text-blue-400 dark:text-white">${country.name.common}</h5>
			</a>


			<button onclick= "callingAllUniversityList('${country.name.common}')" class="inline-flex items-center py-2 px-3 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
			Read more
			<svg aria-hidden="true" class="ml-2 -mr-1 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
			</button>
			</div>

			<div >
			<img width="150px" class="h-20" src="${country.flags.svg}" alt="">
			</div>


			
			`





		// appending Child div into Parent Section...
		parentSection.appendChild(div);





		// !Creating Div With Country INFO End


	});
};



// !Calling Country List
callingAllCountryList();








