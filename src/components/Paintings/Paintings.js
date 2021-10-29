import React from 'react';
import CardList from '../Card/CardList';

// const artObjects = [
// 	{
// 		links: {
// 			self: 'http://www.rijksmuseum.nl/api/nl/collection/BK-16676',
// 			web: 'http://www.rijksmuseum.nl/nl/collectie/BK-16676',
// 		},
// 		id: 'nl-BK-16676',
// 		objectNumber: 'BK-16676',
// 		title: 'Bureau',
// 		hasImage: true,
// 		principalOrFirstMaker: 'Abraham Roentgen',
// 		longTitle: 'Bureau, Abraham Roentgen, ca. 1758 - ca. 1760',
// 		showImage: true,
// 		permitDownload: true,
// 		webImage: {
// 			guid: '6fdcd710-d31d-4de3-8ae6-d8687067ef74',
// 			offsetPercentageX: 0,
// 			offsetPercentageY: 0,
// 			width: 3000,
// 			height: 2779,
// 			url: 'https://lh4.ggpht.com/FeheHnW8-KOx-prHRCvly8ReF9WKysmPJDEd99EEVDViH1DvYytyDpkjnkeyqqj85WNbrkXFaoFe0jBKB9DdNJApLQ=s0',
// 		},
// 		headerImage: {
// 			guid: 'deee4f1f-802b-4289-9367-d8926101690c',
// 			offsetPercentageX: 0,
// 			offsetPercentageY: 0,
// 			width: 1920,
// 			height: 460,
// 			url: 'https://lh4.ggpht.com/1alZFw9qSNw6T81R-SqFeWNurK1J5edyh6SWunRdQC5V63vGjphJp1bcu_Gy9lMAnJEcpturH7jsGZV-7uUKnj1HHz0=s0',
// 		},
// 		productionPlaces: ['Neuwied'],
// 	},
// 	{
// 		links: {
// 			self: 'http://www.rijksmuseum.nl/api/nl/collection/SK-C-1368',
// 			web: 'http://www.rijksmuseum.nl/nl/collectie/SK-C-1368',
// 		},
// 		id: 'nl-SK-C-1368',
// 		objectNumber: 'SK-C-1368',
// 		title: 'Portretten van Giuliano en Francesco Giamberti da Sangallo',
// 		hasImage: true,
// 		principalOrFirstMaker: 'Piero di Cosimo',
// 		longTitle:
// 			'Portretten van Giuliano en Francesco Giamberti da Sangallo, Piero di Cosimo, 1482 - 1485',
// 		showImage: true,
// 		permitDownload: true,
// 		webImage: {
// 			guid: '15563bd2-2fde-4b91-9984-ba6c6b166277',
// 			offsetPercentageX: 0,
// 			offsetPercentageY: 0,
// 			width: 2143,
// 			height: 1520,
// 			url: 'https://lh3.googleusercontent.com/N2m90mImdcoLacUybb_rxcktTwtr0LFhtuzxbSE9elIhElF6jpWngx96_uZ0L1TGNof5pNt4n_Ygb4KYlPTpA9o6788=s0',
// 		},
// 		headerImage: {
// 			guid: '76249f29-b230-41ac-aa38-1dcb8476b614',
// 			offsetPercentageX: 0,
// 			offsetPercentageY: 0,
// 			width: 1920,
// 			height: 460,
// 			url: 'https://lh3.googleusercontent.com/F0vBT6rGd8T1kb6oMdGZKHaGIZCHg3-CbL24iyZodWm55-GKptRyXg4BB-cf3FvS634hwjR30RwoHdQZ9YuSexM8QxA=s0',
// 		},
// 		productionPlaces: ['Florence'],
// 	},
// 	{
// 		links: {
// 			self: 'http://www.rijksmuseum.nl/api/nl/collection/SK-C-597',
// 			web: 'http://www.rijksmuseum.nl/nl/collectie/SK-C-597',
// 		},
// 		id: 'nl-SK-C-597',
// 		objectNumber: 'SK-C-597',
// 		title: 'Portret van een vrouw, mogelijk Maria Trip',
// 		hasImage: true,
// 		principalOrFirstMaker: 'Rembrandt van Rijn',
// 		longTitle:
// 			'Portret van een vrouw, mogelijk Maria Trip, Rembrandt van Rijn, 1639',
// 		showImage: true,
// 		permitDownload: true,
// 		webImage: {
// 			guid: '165d03bb-95e8-4447-a911-865f1bd201d6',
// 			offsetPercentageX: 0,
// 			offsetPercentageY: 0,
// 			width: 2031,
// 			height: 2676,
// 			url: 'https://lh3.googleusercontent.com/AyiKhdEWJ7XmtPXQbRg_kWqKn6mCV07bsuUB01hJHjVVP-ZQFmzjTWt7JIWiQFZbb9l5tKFhVOspmco4lMwqwWImfgg=s0',
// 		},
// 		headerImage: {
// 			guid: 'f0270e59-baca-4429-ba00-d6c37b9ad00f',
// 			offsetPercentageX: 0,
// 			offsetPercentageY: 0,
// 			width: 1920,
// 			height: 460,
// 			url: 'https://lh3.googleusercontent.com/MonorlaCKkTjeFrTBQyCb7kfmq8K--aWrThge7MsTItJxO_cw-8WbwgmTm0jTt-qfaFfnwa1qNEnsGYVHMPmCGmb0Pje=s0',
// 		},
// 		productionPlaces: [],
// 	},
// 	{
// 		links: {
// 			self: 'http://www.rijksmuseum.nl/api/nl/collection/SK-C-217',
// 			web: 'http://www.rijksmuseum.nl/nl/collectie/SK-C-217',
// 		},
// 		id: 'nl-SK-C-217',
// 		objectNumber: 'SK-C-217',
// 		title: 'Interieur van de Sint-Odulphuskerk in Assendelft',
// 		hasImage: true,
// 		principalOrFirstMaker: 'Pieter Jansz. Saenredam',
// 		longTitle:
// 			'Interieur van de Sint-Odulphuskerk in Assendelft, Pieter Jansz. Saenredam, 1649',
// 		showImage: true,
// 		permitDownload: true,
// 		webImage: {
// 			guid: 'f79764d2-9c38-4cc2-a181-db68b6e10806',
// 			offsetPercentageX: 0,
// 			offsetPercentageY: 0,
// 			width: 2500,
// 			height: 1645,
// 			url: 'https://lh3.googleusercontent.com/m_IGl3fefTuaP0r83Yt9yPJR47_LCZfKLlVaMg0jHYwzJCfioMVE5SD8utgPvH_p2SADgqnAprLVEjBueJL8bZznfcp0n6AgCNPwZUPUjA=s0',
// 		},
// 		headerImage: {
// 			guid: 'f4f3220c-9803-4d7d-8877-90c5c7eca187',
// 			offsetPercentageX: 0,
// 			offsetPercentageY: 0,
// 			width: 1920,
// 			height: 460,
// 			url: 'https://lh3.googleusercontent.com/mCKwAEomRIRsAVTbtssHq2_GFnOawmO_mNyzlDU8cfbQRQ6Lc7-pDEstXzIrq_taCLfYNU6ND-KG_BG17vkFQfTYw-vT0VOKZ4h0nQIy=s0',
// 		},
// 		productionPlaces: [],
// 	},
// 	{
// 		links: {
// 			self: 'http://www.rijksmuseum.nl/api/nl/collection/SK-C-211',
// 			web: 'http://www.rijksmuseum.nl/nl/collectie/SK-C-211',
// 		},
// 		id: 'nl-SK-C-211',
// 		objectNumber: 'SK-C-211',
// 		title: 'De molen bij Wijk bij Duurstede',
// 		hasImage: true,
// 		principalOrFirstMaker: 'Jacob Isaacksz van Ruisdael',
// 		longTitle:
// 			'De molen bij Wijk bij Duurstede, Jacob Isaacksz van Ruisdael, ca. 1668 - ca. 1670',
// 		showImage: true,
// 		permitDownload: true,
// 		webImage: {
// 			guid: 'bbb79014-8ebd-4922-ad48-fd4ee8c61bd2',
// 			offsetPercentageX: 0,
// 			offsetPercentageY: 0,
// 			width: 2880,
// 			height: 2376,
// 			url: 'https://lh3.googleusercontent.com/3EDrQy1jW6akN2k8eAeCECHJ1FmvM1f2pb9a-de51ErcQcghh7cbpzFIh-QYdcGfpi3FjxH1AP6C_FvPNR-I9n8I4No=s0',
// 		},
// 		headerImage: {
// 			guid: 'a47bcb3d-ce7e-42f4-a7b9-e9f6efcc397d',
// 			offsetPercentageX: 0,
// 			offsetPercentageY: 0,
// 			width: 1920,
// 			height: 460,
// 			url: 'https://lh3.googleusercontent.com/9JwJBbWxRi8Bhvjm3IDfWNr_u-NbZ3ReOXWJ-WKRHgONrACjGDxQi4I4scIvqVOaPTEyfA0HqPRwaAlmauq0EKlc9wY=s0',
// 		},
// 		productionPlaces: [],
// 	},
// 	{
// 		links: {
// 			self: 'http://www.rijksmuseum.nl/api/nl/collection/SK-C-216',
// 			web: 'http://www.rijksmuseum.nl/nl/collectie/SK-C-216',
// 		},
// 		id: 'nl-SK-C-216',
// 		objectNumber: 'SK-C-216',
// 		title: 'Isaak en Rebekka, bekend als ‘Het Joodse bruidje’',
// 		hasImage: true,
// 		principalOrFirstMaker: 'Rembrandt van Rijn',
// 		longTitle:
// 			'Isaak en Rebekka, bekend als ‘Het Joodse bruidje’, Rembrandt van Rijn, ca. 1665 - ca. 1669',
// 		showImage: true,
// 		permitDownload: true,
// 		webImage: {
// 			guid: '2fe159d5-619a-46d3-b3d2-9412e6f6bdd8',
// 			offsetPercentageX: 0,
// 			offsetPercentageY: 0,
// 			width: 2500,
// 			height: 1817,
// 			url: 'https://lh3.googleusercontent.com/mAyAjvYjIeAIlByhJx1Huctgeb58y7519XYP38oL1FXarhVlcXW7kxuwayOCFdnwtOp6B6F0HJmmws-Ceo5b_pNSSQs=s0',
// 		},
// 		headerImage: {
// 			guid: '10911bfe-4e23-4c3a-95f7-515609f4d711',
// 			offsetPercentageX: 0,
// 			offsetPercentageY: 0,
// 			width: 1925,
// 			height: 461,
// 			url: 'https://lh3.googleusercontent.com/0fTHP4xUsJZbQjzIHYtgHr1gRWBXjm9udaZT4ah35J_LyNzga-SyI0h61klse9sJqn53eUfuVIWZvP8IhW0jN4v91SM=s0',
// 		},
// 		productionPlaces: [],
// 	},
// 	{
// 		links: {
// 			self: 'http://www.rijksmuseum.nl/api/nl/collection/SK-C-1367',
// 			web: 'http://www.rijksmuseum.nl/nl/collectie/SK-C-1367',
// 		},
// 		id: 'nl-SK-C-1367',
// 		objectNumber: 'SK-C-1367',
// 		title: 'Portretten van Giuliano en Francesco Giamberti da Sangallo',
// 		hasImage: true,
// 		principalOrFirstMaker: 'Piero di Cosimo',
// 		longTitle:
// 			'Portretten van Giuliano en Francesco Giamberti da Sangallo, Piero di Cosimo, 1482 - 1485',
// 		showImage: true,
// 		permitDownload: true,
// 		webImage: {
// 			guid: '277544ba-1a56-4492-84ee-3206ac4f24be',
// 			offsetPercentageX: 0,
// 			offsetPercentageY: 0,
// 			width: 2143,
// 			height: 1520,
// 			url: 'https://lh3.googleusercontent.com/x9NFmu-RbZ_9M5BK_hOzQRdVj4pu7p--y_IYwDK46lDPzQtTIO9AlBV_ObgQiY7GeWE0ZfNjMSyrCWgnwL4MCasQZQ=s0',
// 		},
// 		headerImage: {
// 			guid: '7fb8102f-3c26-4150-92a0-bdc5a67f123a',
// 			offsetPercentageX: 0,
// 			offsetPercentageY: 0,
// 			width: 1920,
// 			height: 460,
// 			url: 'https://lh3.googleusercontent.com/hHPZI5KMVFhS-tuGtcoo-WR0VMACT_7iypmXi9gCY2Gwg0BIK6irZN5GCihU7dcTskM1rEFIKs26M6S1W_oEzun0iR0I=s0',
// 		},
// 		productionPlaces: ['Florence'],
// 	},
// 	{
// 		links: {
// 			self: 'http://www.rijksmuseum.nl/api/nl/collection/SK-A-372',
// 			web: 'http://www.rijksmuseum.nl/nl/collectie/SK-A-372',
// 		},
// 		id: 'nl-SK-A-372',
// 		objectNumber: 'SK-A-372',
// 		title: 'Maria Magdalena',
// 		hasImage: true,
// 		principalOrFirstMaker: 'Jan van Scorel',
// 		longTitle: 'Maria Magdalena, Jan van Scorel, ca. 1530',
// 		showImage: true,
// 		permitDownload: true,
// 		webImage: {
// 			guid: 'f1cda91e-4d37-4056-8979-028c4cd3da49',
// 			offsetPercentageX: 0,
// 			offsetPercentageY: 0,
// 			width: 2833,
// 			height: 2465,
// 			url: 'https://lh3.googleusercontent.com/moxL3z7zz5j_5gQCgvRGcmLD-RDhVgZvA2NGREYgkLTkYUbGa4Ts-57UaQ4ilN38xWX6w_gb_eU6hkMZcC-wfMg5NQ=s0',
// 		},
// 		headerImage: {
// 			guid: '6a9a1b0d-f2c2-45b0-8df4-e908a6af5eee',
// 			offsetPercentageX: 0,
// 			offsetPercentageY: 0,
// 			width: 1920,
// 			height: 460,
// 			url: 'https://lh3.googleusercontent.com/krUs6F8pg2YHqhNKOR1MiQs1lemgNlfErNtQdZBP4Jc7Re3-e6ae-CPlRFIpPf269-j-ze8sa_08bImIoebjCySGawM=s0',
// 		},
// 		productionPlaces: ['? Haarlem'],
// 	},
// 	{
// 		links: {
// 			self: 'http://www.rijksmuseum.nl/api/nl/collection/SK-A-2815',
// 			web: 'http://www.rijksmuseum.nl/nl/collectie/SK-A-2815',
// 		},
// 		id: 'nl-SK-A-2815',
// 		objectNumber: 'SK-A-2815',
// 		title: 'De zeven werken van barmhartigheid',
// 		hasImage: true,
// 		principalOrFirstMaker: 'Meester van Alkmaar',
// 		longTitle: 'De zeven werken van barmhartigheid, Meester van Alkmaar, 1504',
// 		showImage: true,
// 		permitDownload: true,
// 		webImage: {
// 			guid: 'dbb93884-cd17-4c10-a32e-2fb0aa9bdce5',
// 			offsetPercentageX: 0,
// 			offsetPercentageY: 0,
// 			width: 2500,
// 			height: 635,
// 			url: 'https://lh3.googleusercontent.com/PKiHHjb5ov-6RQm4WjTmQL7gQsiqz-jTgy6aJoUfXFPB-FPJF2XMcgjdpf0rMfPtQoePma2oYkAiN83RDwlyU34phg=s0',
// 		},
// 		headerImage: {
// 			guid: '8b08174c-b8f1-4a40-a8f8-20d98d426183',
// 			offsetPercentageX: 0,
// 			offsetPercentageY: 0,
// 			width: 1920,
// 			height: 460,
// 			url: 'https://lh3.googleusercontent.com/lEPMS16z9Y8aEsbUYI-zE-rTFqKa8AE63loPpzSkZWFFJ8RSxA7BKvgGsn3yOvC6udiX61dF4_smw3SG0-yfksfQ8YDs=s0',
// 		},
// 		productionPlaces: [],
// 	},
// 	{
// 		links: {
// 			self: 'http://www.rijksmuseum.nl/api/nl/collection/SK-A-3262',
// 			web: 'http://www.rijksmuseum.nl/nl/collectie/SK-A-3262',
// 		},
// 		id: 'nl-SK-A-3262',
// 		objectNumber: 'SK-A-3262',
// 		title: 'Zelfportret',
// 		hasImage: true,
// 		principalOrFirstMaker: 'Vincent van Gogh',
// 		longTitle: 'Zelfportret, Vincent van Gogh, 1887',
// 		showImage: true,
// 		permitDownload: true,
// 		webImage: {
// 			guid: 'b9d83b68-40b3-42cf-8d5e-959201ddf4bf',
// 			offsetPercentageX: 0,
// 			offsetPercentageY: 0,
// 			width: 2034,
// 			height: 2562,
// 			url: 'https://lh3.googleusercontent.com/Ckjq-HkB2XhEsbuMsei0MR5fLTODfkcXY8qQTG-XLHVxE0jLO9DnSYaVE8n1kCrcm9AMKzoWB2w03LrY0v7eoj5hYw=s0',
// 		},
// 		headerImage: {
// 			guid: '87fe6026-45a1-41d2-a126-9e330eda65a9',
// 			offsetPercentageX: 0,
// 			offsetPercentageY: 0,
// 			width: 1920,
// 			height: 460,
// 			url: 'https://lh3.googleusercontent.com/R_c2Y-3aFaNIts1RjQbymqwVLGBpibpSg5kq4YqWVtIP6wEG3YYMQX-5kgTfj2ccooBGQz3HQH-xMH_3srmpFiRqbw=s0',
// 		},
// 		productionPlaces: [],
// 	},
// ];

const Paintings = (props) => {
	// if (props.artObjects.length > 0) {
	// 	return (
	// 		<div className='container mt-5'>
	// 			<h1 className='text-center'>No paintings found for artist</h1>
	// 		</div>
	// 	);
	// }

	const post = props.artObjects;
	console.log(post.length);

	return (
		<div className='container mt-2'>
			<h1 className='text-center'>{props.selectedArtist}</h1>
			{/* <CardList items={post} /> */}
		</div>
	);
};

export default Paintings;
