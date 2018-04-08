const Hashids = require(`hashids`);

module.exports = (arr, label) => {
	const hashids = new Hashids();
	const x = parseInt(label, 10);
	let digits = [9, 9, x];
	let obj = {};
	// const array = arr;
	// const matrix = [];

	const result = arr.map((arr, index) => {
		digits.push(index);
		if (typeof arr === `object`) {
			let i = 0;

			Object.keys(arr).forEach((key) => {
				let x = ``;

				digits.push(i);
				x = `_${key}Id`;
				arr[x] = hashids.encode(digits);
				digits = digits.slice(0, 6);
				// console.log(digits);
				i += 1;
			});

			return arr;
		}
		obj = {
			value : arr,
			id    : hashids.encode(digits),
		};
		digits = digits.slice(0, 5);

		return obj;

		// matrix.push(digits);
	});

	return result;
};
