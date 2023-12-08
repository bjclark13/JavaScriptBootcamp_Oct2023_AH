fetch(" https://www.reddit.com/r/aww/.json").then((response)=> {
	return response.json()
})
.then((data) => {
	console.log(data);
})