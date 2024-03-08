const endpoint = 'https://api.punkapi.com/v2/beers/random'
const containerElDOM = document.querySelector('.wrapper')

printRandomBeer()

function printRandomBeer() {
	fetch(endpoint)
		.then((res) => res.json())
		.then((data) => {
			if (!data[0].image_url) return

			const img = document.createElement('img')

			img.src = data[0].image_url
			img.alt = data[0].name

			containerElDOM.appendChild(img)
		})
}
