// Goal
//
// Call https://swapi.dev/api/films/
// this will return information about each star wars films


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