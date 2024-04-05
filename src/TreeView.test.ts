import { fireEvent, render, screen } from '@testing-library/svelte';
import userEvent from '@testing-library/user-event';
import { expect, test } from 'vitest';
import TreeView from './TreeView.svelte';

const TREE_MOCK = {
	label: 'USA',
	children: [
		{
			label: 'Florida',
			children: [
				{ label: 'Jacksonville' },
				{
					label: 'Orlando',
					children: [
						{ label: 'Disney World' },
						{ label: 'Universal Studio' },
						{ label: 'Sea World' }
					]
				},
				{ label: 'Miami' }
			]
		},
		{
			label: 'California',
			children: [{ label: 'San Francisco' }, { label: 'Los Angeles' }, { label: 'Sacramento' }]
		}
	]
};

test('TreeView correctly opens nested folders', async () => {
	render(TreeView, { context: new Map([['expansionState', {}]]), props: { tree: TREE_MOCK } });
	const rootItem = screen.getByText('USA');

	expect(rootItem).toBeInTheDocument();

	await fireEvent.click(rootItem);
	const firstLevelFolder = screen.getByText('Florida');
	expect(firstLevelFolder).toBeInTheDocument();
});

test('ThreeView the same as previous', async () => {
	render(TreeView, { context: new Map([['expansionState', {}]]), props: { tree: TREE_MOCK } });

	const rootItem = screen.getByText('USA');

	expect(rootItem).toBeInTheDocument();

	await fireEvent.click(rootItem);

	const firstLevelFolder = screen.getByText('Florida');
	expect(firstLevelFolder).toBeInTheDocument();
});

test('ThreeView the same as previous but with userEvent', async () => {
	const user = userEvent.setup();
	render(TreeView, { context: new Map([['expansionState', {}]]), props: { tree: TREE_MOCK } });

	const rootItem = screen.getByText('USA');

	expect(rootItem).toBeInTheDocument();

	await user.click(rootItem);
	const firstLevelFolder = screen.getByText('Florida');
	expect(firstLevelFolder).toBeInTheDocument();
});
