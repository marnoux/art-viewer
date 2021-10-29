const mockResponse = {
	artObjects: [
		{
			title: 'Portret van een vrouw, mogelijk Maria Trip',
			principalOrFirstMaker: 'Rembrandt van Rijn',
			longTitle:
				'Portret van een vrouw, mogelijk Maria Trip, Rembrandt van Rijn, 1639',
			webImage: {
				url: 'https://lh3.googleusercontent.com/AyiKhdEWJ7XmtPXQbRg_kWqKn6mCV07bsuUB01hJHjVVP-ZQFmzjTWt7JIWiQFZbb9l5tKFhVOspmco4lMwqwWImfgg=s0',
			},
		},
	],
};

export default {
	get: jest.fn().mockResolvedValue(mockResponse),
};
