export type ArtObject = {
	id: string | undefined;
	title: string | undefined;
	longTitle: string | undefined;
	principalOrFirstMaker: string;
	webImage: {
		height: number | undefined;
		width: number | undefined;
		url: string | undefined;
	};
	headerImage: {
		url: string | undefined;
	};
};
