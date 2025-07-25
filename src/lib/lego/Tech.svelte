<script lang="ts">
    import dor from "$lib/doromiertznak/dor.svg"
    import omi from "$lib/doromiertznak/omi.svg"
    import ert from "$lib/doromiertznak/ert.svg"
    import Icon from "lib/kit/Icon.svelte";
</script>

<div class="separator"><Icon color="var(--techb)" name="Direction-d"/></div>
<section id="tech">
    <div class="pageLego">
        <Icon name="Laptop" size={50} color="var(--libb)"/>
        <h>My tech</h>
    </div>
</section>

<style lang="scss">
    @use '$lib/style/variables.scss' as v;
	@use '$lib/style/colors.scss' as c;

    .pageLego{
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

    h{
        font-size: 1.5rem;
        font-weight: bold;
    }
    
    .separator{
        background-color: var(--techa);
        display: flex;
        align-items: center;
        justify-content: center;
        height: 46px;
    }

    .doromiertZnak{
        display: flex;
        gap: 10px;
        @media (max-width: 620px) {
            flex-direction: column;
        }
    }
</style>