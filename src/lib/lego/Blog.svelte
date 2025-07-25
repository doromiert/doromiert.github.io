<script lang="ts">
    import dor from "$lib/doromiertznak/dor.svg"
    import omi from "$lib/doromiertznak/omi.svg"
    import ert from "$lib/doromiertznak/ert.svg"
    import Icon from "lib/kit/Icon.svelte";
</script>

<div class="separator"><Icon color="var(--blogb)" name="Direction-d"/></div>
<section id="blog">
    <div class="pageLego">
        <Icon name="Announcement" size={50} color="var(--blogb)"/>
        <h>Blog</h>
    </div>
</section>

<style lang="scss">
    @use '$lib/style/variables.scss' as v;
	@use '$lib/style/colors.scss' as c;

    .pageLego{
        background-color: var(--bloga);
        height: calc(100vh - 46px);
        width: 100vw;
        align-items: center;
        display: flex;
        justify-content: center;
        color: var(--blogb);
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
        background-color: var(--bloga);
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