const axios = require('axios');

async function getProductWithImages() {

	let list = []
	const requestOne = axios.get('https://assignment.dwbt.tech/products');
	const requestTwo = axios.get('https://assignment.dwbt.tech/images');

	await axios
		.all([requestOne, requestTwo])
		.then(
			axios.spread((products, productImages) => {
				list = products.data.products.map((element) => {
					return {
						'name': element.name,
						'price': element.price,
						'image': productImages.data.images[element.sku][0].src
					}
				})
			})).catch(errors => {
				console.error(errors);
			})
	return list;

}

exports.getProductWithImages = getProductWithImages;