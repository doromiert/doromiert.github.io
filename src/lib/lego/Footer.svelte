<script lang="ts">
    import dor from "$lib/doromiertznak/dor.svg"
    import omi from "$lib/doromiertznak/omi.svg"
    import ert from "$lib/doromiertznak/ert.svg"
    import Icon from "lib/kit/Icon.svelte";
</script>

<div class="footerLego">
    <div class="msg">
        Made with love by doromiert
        <div style="opacity: 50%">
            Use as you wish but credit me
        </div>
    </div>
    <div class="buttons">
        <a href="buymeacoffee.com/nrdeez">
            <button style="background-color: var(--footerb)">
                <Icon name="Money" color="var(--footera)"/>
            </button>
        </a>
        <a href="github.com/nrdsstuff/doromiert.github.io">
            <button style="background-color: var(--footerb)">
                <Icon name="Github" color="var(--footera)"/>
            </button>
        </a>
    </div>
</div>

<style lang="scss">
    @use '$lib/style/variables.scss' as v;
	@use '$lib/style/colors.scss' as c;
    
    .msg{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .buttons{
        display: flex;
        gap: 10px;
    }

    .footerLego{
        background-color: var(--footera);
        height: min-content;
        width: 100vw;
        align-items: center;
        display: flex;
        justify-content: center;
        padding: 30px;
        box-sizing: border-box;
        color: #ffffff;
        justify-content: space-between;
    }
</style>