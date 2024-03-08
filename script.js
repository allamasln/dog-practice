const endpoint = 'https://api.punkapi.com/v2/beers/random'
const containerElDOM = document.querySelector('.wrapper')

printRandomBeer()

getIngredients()

function getIngredients() {
	fetch(endpoint)
		.then((res) => res.json())
		.then(([beer]) => {
			const ingredients = []

			for (const ingredient in beer.ingredients) {
				ingredients.push(ingredient)
			}

			console.log(ingredients)
		})
}

function printRandomBeer() {
	fetch(endpoint)
		.then((res) => res.json())
		.then(([beer]) => {
			if (!beer.image_url) return

			const img = createImage(beer.image_url)

			containerElDOM.appendChild(img)
		})
}

function createImage(url) {
	const img = document.createElement('img')
	img.src = url

	return img
}
