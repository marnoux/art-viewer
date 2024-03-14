export type ArtObject = {
	id: string | undefined;
	title: string | undefined;
	longTitle: string | undefined;
	principalOrFirstMaker: string;
	headerImage: {
		url: string | undefined;
		guid: string | undefined;
	};
	webImage: {
		height: number | undefined;
		width: number | undefined;
		url: string | undefined;
	};
};
