import store from './localStore';

const createBlankGrid = (rows, cols) => {
	let value = [];
	for (let i = 0; i < rows; i++) {
		let temp = [];
		for (let j = 0; j < cols; j++) {
			temp.push({});
		}
		value.push(temp);
	}
	return value;
};

const grid = store('grid', createBlankGrid(6, 5));
export default grid;
