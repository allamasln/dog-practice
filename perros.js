// Declarar una función printRandomDogImage que retorne la url de la imagen de un perro aleatorio y la renderice en el dom

// Declara una funcion getAllBreeds que imprima en consola un array de strings con todas las razas de perro.

const endpoint = 'https://dog.ceo/api/breeds/image/random'
const containerElDOM = document.querySelector('.wrapper')

printRandomBeer()

function printRandomBeer() {
	fetch(endpoint)
		.then((res) => res.json())
		.then((data) => {
			if (!data.message) return

			const img = document.createElement('img')

			img.src = data.message

			containerElDOM.appendChild(img)
		})
}
