import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/UI/dialog';
import { Check, ChevronsUpDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from '@/components/UI/command';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/UI/popover';

import { Button } from '../UI/button';
import { useState } from 'react';
import useArtObjects from '@/data/hooks/useArtObjects';
import { ArtObject } from '@/data/types/types';
import { Input } from '../UI/input';
import { ComboboxDemo } from '../UI/ComboboxDemo';

const frameworks = [
	{
		value: 'next.js',
		label: 'Next.js',
	},
	{
		value: 'sveltekit',
		label: 'SvelteKit',
	},
	{
		value: 'nuxt.js',
		label: 'Nuxt.js',
	},
	{
		value: 'remix',
		label: 'Remix',
	},
	{
		value: 'astro',
		label: 'Astro',
	},
];

const Filters = () => {
	const [filters, setFilters] = useState();
	const [open, setOpen] = useState(false);
	const [value, setValue] = useState('');

	const { data } = useArtObjects();

	console.log(data?.artObjects.map((artObject: ArtObject) => artObject.principalOrFirstMaker));

	return (
		// <Dialog>
		// 	<DialogTrigger>Open</DialogTrigger>
		// 	<DialogContent>
		// 		<DialogHeader>
		// 			<DialogTitle>Filters</DialogTitle>
		// 			<DialogDescription>Here you can filter the paintings by artist or title.</DialogDescription>

		<ComboboxDemo />

		// 			<Button>Apply</Button>
		// 		</DialogHeader>
		// 	</DialogContent>
		// </Dialog>
	);
};

export default Filters;
