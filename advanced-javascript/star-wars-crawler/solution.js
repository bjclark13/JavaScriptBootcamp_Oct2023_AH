// Goal
//
// Call https://swapi.dev/api/films/
// this will return information about each star wars films
const films = fetch('https://swapi.dev/api/films/1'); // the pager
// console.log(films);

// when the data returns
films // this is the promise
	.then(response => {
		// first then
		// then means when the API finishes downloading
		console.log(response);

		return response.json(); // converts into javascript object with the data requested
	})
	.then(data => {
		// second then, after we get the javascript object
		console.log(data);

		addToCrawler(data.title, data.opening_crawl)
	});

function addToCrawler(title, text) {
	const div = document.createElement('div');
		const h2 = document.createElement('h2');

		// setting the text of the h2 to the results from the api
		h2.innerText = title;
		div.append(h2);

		// adding the opening crawl
		const crawl = document.createElement('p');
		crawl.innerText = text;
		div.append(crawl);

		document.querySelector('main').append(div); // add div to the end of the main
}