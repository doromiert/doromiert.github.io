<script lang="ts">
    import dor from "$lib/doromiertznak/dor.svg"
    import omi from "$lib/doromiertznak/omi.svg"
    import ert from "$lib/doromiertznak/ert.svg"
</script>

<section id="hero">
    <div class="pageLego">
        <div class="doromiertZnak">
            <img src={dor} alt="dor">
            <img src={omi} alt="omi">
            <img src={ert} alt="ert">
        </div>
        <div class="definition">
            <h><b>doromiert</b> /dor-om-iert/</h>
            <p>Noun. The one that creates.</p>
        </div>
    </div>
</section>

<style lang="scss">
    @use '$lib/style/variables.scss' as v;
	@use '$lib/style/colors.scss' as c;

    .pageLego{
        background-color: c.$blux-1;
        min-height: calc(100vh - 46px);
        height: min-content;
        padding: 80px;
        box-sizing: border-box;
        width: 100vw;
        align-items: center;
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 1.5rem;
    }

    .definition{

        color: var(--homeb);
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    h{
        font-size: 1.5rem;
    }
    p{
        font-size: 1rem;
    }

    .doromiertZnak{
        display: flex;
        gap: 10px;
        @media (max-width: 620px) {
            flex-direction: column;
        }

        *{
            user-select: none;
        }
        transition: 0.25s;
    }
</style>