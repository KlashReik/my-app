<script lang="ts">
	import { _ } from 'svelte-i18n';
	import TreeView from '../TreeView.svelte';

	const tree = {
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
</script>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>

{$_('sign_in')}

<TreeView {tree} />
