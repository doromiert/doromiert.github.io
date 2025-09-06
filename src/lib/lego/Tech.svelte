<script lang="ts">
	import { onMount } from 'svelte';
	import Icon from '$lib/kit/Icon.svelte';
	import DevicePopup from '$lib/kit/Device.svelte'; // Import the new popup component

	// Define the structure for each device
	interface Device {
		name: string; // First line of markdown
		icon: string; // Second line of markdown
		content: string; // Remaining markdown content
		filename: string; // For unique keying
	}

	// State variables
	let categorizedDevices: { [categoryName: string]: Device[] } = {};
	let loading = true;
	let errorMessage = '';
	let selectedDevice: Device | null = null; // Holds the device for the popup

	const techMarkdownModules = import.meta.glob('../data/tech/**/*.md', { as: 'raw', eager: false });

	onMount(async () => {
		try {
			const tempCategorized: { [categoryName: string]: Device[] } = {};

			for (const modulePath in techMarkdownModules) {
				const relativeToTech = modulePath.replace('../data/tech/', '');
				const parts = relativeToTech.split('/');
				let categoryName: string;
				let filenameWithExt: string;

				if (parts.length > 1) {
					categoryName = parts[0];
					filenameWithExt = parts[parts.length - 1];
				} else {
					categoryName = 'Uncategorized';
					filenameWithExt = parts[0];
				}

				const filename = filenameWithExt.replace(/\.md$/, '');

				// The parent component already loads the content, so we just pass it to the popup
				const rawContent = await techMarkdownModules[modulePath]();

				const lines = rawContent.split('\n');
				const name = lines[0]?.trim() || filename;
				const icon = lines[1]?.trim() || 'DefaultIcon';
				const content = lines.slice(2).join('\n').trim(); // Content is already prepared here

				if (!tempCategorized[categoryName]) {
					tempCategorized[categoryName] = [];
				}

				tempCategorized[categoryName].push({ name, icon, content, filename });
			}

			const sortedCategoryNames = Object.keys(tempCategorized).sort();
			const finalCategorized: typeof categorizedDevices = {};
			for (const category of sortedCategoryNames) {
				tempCategorized[category].sort((a, b) => a.name.localeCompare(b.name));
				finalCategorized[category] = tempCategorized[category];
			}

			categorizedDevices = finalCategorized;
		} catch (e) {
			console.error('Error loading tech markdown files:', e);
			errorMessage = 'Failed to load device information. Please check the console.';
		} finally {
			loading = false;
		}
	});

	$: categories = Object.keys(categorizedDevices);

	// Function to close the popup by resetting the selected device
	function handleClosePopup() {
		selectedDevice = null;
	}
</script>

<DevicePopup device={selectedDevice} on:close={handleClosePopup} />

<div class="separator"><Icon color="var(--techb)" name="Direction-d" /></div>
<section id="tech">
	<div class="pageLego">
		<Icon name="Laptop" size={50} color="var(--libb)" />
		<h>My tech</h>
		(fyi the devices with a ! in front of the name have unfinished articles about them)

		{#if loading}
			<p>Loading devices...</p>
		{:else if errorMessage}
			<p class="error">{errorMessage}</p>
		{:else if categories.length === 0}
			<p>No tech device markdown files found in `../data/tech/`</p>
			<a href="#com">
				<button style="background-color: var(--coma); justify-content: space-between; width: 290px">
					<div
						style="display: flex; gap: 12px; text-decoration: none; font-size: 1rem; align-items: center; color: var(--comb)"
					>
						<Icon name="Chat" color="var(--comb)" />
						Let me know
					</div>
					<Icon name="Direction-r" color="var(--comb)" />
				</button>
			</a>
		{:else}
			{#each categories as categoryName (categoryName)}
				<div class="deviceList">
					<div class="catSep">
						{categoryName}
						<hr />
					</div>
					<div class="devButtons">
						{#each categorizedDevices[categoryName] as device (device.filename)}
							<button on:click={() => (selectedDevice = device)}>
								<div class="a">
									<Icon name={device.icon} color="var(--techa)" />
									{device.name}
								</div>
								<Icon name="Direction-r" color="var(--techa)" />
							</button>
						{/each}
					</div>
				</div>
			{/each}
		{/if}
	</div>
</section>

<style lang="scss">
	/* Your existing styles are fine and do not need changes for this functionality */
	@use '$lib/style/variables.scss' as v;
	@use '$lib/style/colors.scss' as c;

	.devButtons {
		display: flex;
		gap: 10px;
		flex-wrap: wrap;
	}

	.a {
		display: flex;
		align-items: center;
		gap: 12px;
	}

	button {
		background-color: var(--techb);
		max-width: 290px;
		width: 100%;
		justify-content: space-between;
		white-space: nowrap;
		display: flex;
		align-items: center;
		padding: 10px 15px;
		border: none;
		cursor: pointer;
        @media (hover: hover){
            &:hover{
                filter: brightness(150%);
                scale: 1.1;
            }
        }
        &:active{
            filter: brightness(50%);
            scale: 0.9;
            transition: none;
        }
	}

	.catSep {
		width: 100%;
		white-space: nowrap;
		gap: 10px;
		padding-left: 5px;
		padding-right: 5px;
		height: 20px;
		display: flex;
		box-sizing: border-box;
		flex-direction: row;
		align-items: center;
		hr {
			color: var(--libb);
			border: none;
			border-top: 1px solid var(--libb);
			height: 0px;
			flex-grow: 1;
		}
	}

	.deviceList {
		width: 100%;
		display: flex;
		gap: 10px;
		flex-direction: column;
		max-width: 590px;
		@media (max-width: 750px) {
			width: 290px;
		}
	}

	.pageLego {
		background-color: var(--techa);
		width: 100vw;
		align-items: center;
		display: flex;
		justify-content: center;
		color: var(--libb);
		flex-direction: column;
		gap: 20px;
		height: min-content;
		padding: 80px;
		box-sizing: border-box;
	}

	h {
		font-size: 1.5rem;
		font-weight: bold;
	}

	.separator {
		background-color: var(--techa);
		display: flex;
		align-items: center;
		justify-content: center;
		height: 46px;
	}

	.error {
		color: red;
		font-weight: bold;
	}
</style>