export const decodeHtml = (text) => {
	return text.split(/<[^>]+>/).reduce((acc, item) => {
		if (item.length > 2) {
			acc.push(item);
		}

		return acc;
	}, []);
};
