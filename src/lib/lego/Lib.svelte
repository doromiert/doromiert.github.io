<script lang="ts">
    import dor from "$lib/doromiertznak/dor.svg"
    import omi from "$lib/doromiertznak/omi.svg"
    import ert from "$lib/doromiertznak/ert.svg"
    import Icon from "lib/kit/Icon.svelte";
    import { viewport } from "../../actions/observer";
    let isAtTop = false;
    function handleIntersection(event: any) {
        isAtTop = event.detail.isIntersecting;
        console.log(`Element is at top of viewport: ${isAtTop}`);
    }
</script>

<svelte:head>
    {#if isAtTop}
        <meta name="theme-color" content="#2E7700" />
    {/if}
</svelte:head>

<div class="separator"><Icon color="var(--libb)" name="Direction-d"/></div>
<section id="lib"
use:viewport
    on:intersect={handleIntersection}
    class:active={isAtTop}  
>
    <div class="pageLego">
        <Icon name="Library" size={50} color="var(--libb)"/>
        <h>My creations</h>
    </div>
</section>

<style lang="scss">
    @use '$lib/style/variables.scss' as v;
	@use '$lib/style/colors.scss' as c;

    .pageLego{
        background-color: var(--liba);
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

    h{
        font-size: 1.5rem;
        font-weight: bold;
    }
    
    .separator{
        background-color: var(--liba);
        display: flex;
        align-items: center;
        justify-content: center;
        height: 46px;
    }

</style>