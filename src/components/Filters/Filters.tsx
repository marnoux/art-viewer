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
import { ComboBox } from '../UI/Combobox';

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

	return <ComboBox items={frameworks} title="Framework" />;
};

export default Filters;
