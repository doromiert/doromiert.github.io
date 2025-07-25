<script lang="ts">
    import dor from "$lib/doromiertznak/dor.svg"
    import omi from "$lib/doromiertznak/omi.svg"
    import ert from "$lib/doromiertznak/ert.svg"
    import Icon from "lib/kit/Icon.svelte";
</script>

<div class="separator"><Icon color="var(--comb)" name="Direction-d"/></div>
<section id="com">
    <div class="pageLego">
        <div class="pageLego">
            <Icon name="Chat" size={50} color="var(--comb)"/>
            <h>Find me here</h>
        </div>
    </div>
</section>

<style lang="scss">
    @use '$lib/style/variables.scss' as v;
	@use '$lib/style/colors.scss' as c;

    .pageLego{
        background-color: var(--coma);
        height: calc(100vh - 100px);
        width: 100vw;
        align-items: center;
        display: flex;
        justify-content: center;
        color: var(--comb);
        flex-direction: column;
        gap: 20px;
    }

    h{
        font-size: 1.5rem;
        font-weight: bold;
    }
    
    .separator{
        background-color: var(--coma);
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