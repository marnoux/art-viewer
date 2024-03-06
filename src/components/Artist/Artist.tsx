/*
	This component was added for a possible extension.
	Instead of hard coding the artist in App.js, the 
	user could select the artist from a list populated 
	with all the artists in the museum.
	
	I have decided to leave in the component but omit 
	it from the final product in order to stick to the
	requirements.
*/

import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal } from 'react';

const Artist = () => {
	var Data = [
			'George Hendrik Breitner',
			'Jan Luyken',
			'Reinier Vinkeles (I)',
			'Marius Bauer',
			'Isaac Israels',
			'Johannes Tavenraat',
			'Daniel Nikolaus Chodowiecki',
			'Aat Veldhoen',
			'Bernard Picart',
			'Vincent Samuel Mentzel',
			'Willem Witsen',
			'anoniem (Monumentenzorg)',
			'Antonio Tempesta',
			'Carel Adolph Lion Cachet',
			'Jacob Houbraken',
			'Rembrandt van Rijn',
			'Simon Fokke',
			'Philips Galle',
			'Romeyn de Hooghe',
			'Richard Nicolaüs Roland Holst',
			'Sébastien Leclerc (I)',
			'Johan Michaël Schmidt Crans',
			'Willem Diepraam',
			'Jozef Israëls',
			'Jan Veth',
			'Wenceslaus Hollar',
			'Crispijn van de Passe (I)',
			'Frans Hogenberg',
			'Jacob de Gheyn (II)',
			'Meissener Porzellan Manufaktur',
			'Johann Sadeler (I)',
			'Stefano della Bella',
			'Jeanne Bieruma Oosting',
			'Adriaen Collaert',
			'Caspar Luyken',
			'Michel Wolgemut',
			'Hendrick Goltzius',
			'Hendrik Spilman',
			'Anton Mauve',
			'Leo Gestel',
			'Reinier Willem Petrus de Vries (1874-1952)',
			'Virgilius Solis',
			'Jacques Callot',
			'Jan van de Velde (II)',
			'Pieter Schenk (I)',
			'Cornelis Vreedenburgh',
			'Gerrit Willem Dijsselhof',
			"Carel Nicolaas Storm van 's-Gravesande",
			'Christoffel van Sichem (II)',
			'diverse vervaardigers',
			'veuve Delpech (Naudet)',
			'Anselmus Boëtius de Boodt',
			'Israël Silvestre',
			'Theo van Hoytema',
			'Johannes of Lucas van Doetechum',
			'August Allebé',
			'Willem Cornelis Rip',
			'Jean Lepautre',
			'Reijer Stolk',
			'Jan Caspar Philips',
			'Abraham Rademaker',
			'Hendrik Doijer',
			'Eva Charlotte Pennink-Boelen',
			'Simon Frisius',
			'Manufactuur Oud-Loosdrecht',
			'Claude Mellan',
			'Crispijn van de Passe (II)',
			'Charles Donker',
			'Hieronymus Wierix',
			'Giorgio Sommer',
			'Pam Georg Rueter',
			'Carel Christiaan Antony Last',
			'Albert Greiner',
			'Jacob Ernst Marcus',
			'Martin Bernigeroth',
			'Giovanni Battista Piranesi',
			'Jan Punt',
			'Boëtius Adamsz. Bolswert',
			'Delizy',
			'Johannes Wierix',
			'Anthonie van den Bos',
			'Antoon Derkinderen',
			'Jacob Matham',
			'Claes Jansz. Visscher (II)',
			'Isaac Weissenbruch',
			'Aegidius Sadeler',
			'Peter Vos',
			'Jan Brandes',
			'Johan Braakensiek',
			'Georg Rueter',
			'Woodbury & Page',
			'Hans Weiditz (II)',
			'Carel Willink',
			'Johannes Immerzeel',
			'Jacques Villon',
			'jonkheer Hendrik Teding van Berkhout (1879-1969)',
			'Maria Vos',
			'Lodewijk Schelfhout',
			'Johannes Josephus Aarts',
			'Joseph Maes',
		].sort(),
		MakeItem = (
			artists:
				| string
				| number
				| boolean
				| ReactElement<any, string | JSXElementConstructor<any>>
				| Iterable<ReactNode>
				| ReactPortal
				| null
				| undefined
		) => {
			return <option key={Math.random()}>{artists}</option>;
		};

	return <select style={{ width: '15rem' }}>{Data.map(MakeItem)}</select>;
};

export default Artist;