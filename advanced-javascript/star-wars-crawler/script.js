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

// async, await
const getFilms = async () => { // function has have async
	// try, catch
	try {
		const data = await fetch("https://swapi.dev/api/films/3/"); // calling the api
		const film = await data.json(); // converting to an object
		console.log(film);
		addToCrawler(film.title, film.opening_crawl) // doing the thing
	} catch (e) { // server error
		console.log(e);
	}
}
getFilms()


// this is promise syntax
fetch("https://swapi.dev/api/films/5/").then((data) => { // call the api
	console.log(data.body);
	return data.json(); // convert that into an object
})
.then((film) => {
	console.log(film);
	addToCrawler(film.title, film.opening_crawl) // do something with that data
})
.catch((error) => { // if there's a server error, do this
	console.log(error);
})

