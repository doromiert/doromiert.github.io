<script lang="ts">
    import { createEventDispatcher } from 'svelte';
    import SvelteMarkdown from 'svelte-markdown';
    import Icon from '$lib/kit/Icon.svelte';
    import { fly } from 'svelte/transition'; // Import fly transition
    import { quintOut } from 'svelte/easing'; // Optional: for a smoother easing effect

    // The component receives a 'device' object or null.
    // When it's not null, the modal is shown.
    export let device: { name: string; icon: string; content: string } | null = null;

    const dispatch = createEventDispatcher();

    function closeModal() {
        dispatch('close');
    }

    // Close modal on Escape key press
    function handleKeydown(event: KeyboardEvent) {
        if (event.key === 'Escape') {
            closeModal();
        }
    }
</script>

<svelte:window on:keydown={handleKeydown} />

{#if device}
    <div
        class="modal-content"
        in:fly={{ x: '100%', duration: 400, easing: quintOut }}
        out:fly={{ x: '100%', duration: 300, easing: quintOut }}
    >
        <div class="modal-header">
            <button on:click={closeModal}>
                <Icon name="X" color="var(--techa)"/>
            </button>
            <div class="title">
                <Icon name={device.icon} size={24} color="var(--techb)" />
                <h2>{device.name}</h2>
            </div>
            <button class="close-button" on:click={closeModal}>
                <Icon name="Cross" size={20} color="var(--techb)" />
            </button>
        </div>

        <div class="modal-body">
            <div class="md">
                <SvelteMarkdown source={device.content} />
            </div>
        </div>
    </div>
{/if}

<style lang="scss">

    button{
        background-color: var(--techb);
    }

    .modal-content {
        position: fixed;
        top: 0;
        bottom: 0;
        right: 0; /* Align to the right edge */
        background-color: var(--techa);
        color: var(--libb);
        padding: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 100vw;
        height: 100vh;
        z-index: 2137;
        box-sizing: border-box;
    }

    .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding-bottom: 15px;
        // border-bottom: 1px solid var(--libb);

        .title {
            display: flex;
            align-items: center;
            gap: 12px;
        }

        h2 {
            margin: 0;
            font-size: 1.5rem;
        }
    }

    .close-button {
        background: none;
        border: none;
        cursor: pointer;
        padding: 5px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: background-color 0.2s;

        &:hover {
            background-color: rgba(255, 255, 255, 0.1);
        }
    }

    .md{
        max-width: 800px;
    }

    .modal-body {
        overflow-y: scroll;
        box-sizing: border-box;
        // Basic styling for markdown output
        align-items: center;
        display: flex;
        flex-direction: column;
        padding: 60px;
        padding-top: 0;
        line-height: 1.3;
        width: 100%;
        :global(p) {
            line-height: 1.8;
        }
        :global(a) {
            color: var(--comb);
            text-decoration: none;
            &:hover {
                text-decoration: underline;
            }
        }
        :global(ul),
        :global(ol) {
            padding-left: 20px;
        }
        :global(code) {
            background-color: var(--techb);
            padding: 2px 5px;
            border-radius: 4px;
            font-family: monospace;
        }
        :global(img) {
            max-width: 25%;
            height: auto; /* Maintain aspect ratio */
            border-radius: 6px; /* Optional: adds a nice touch */
            display: block; /* Removes extra space below the image */
        }
    }
</style>