<script lang="ts">
    import Icon from "lib/kit/Icon.svelte";
    import d from "$lib/assets/D.svg"
    
</script>

<div class="topBar">
    <a href="#hero">
        <button style="background-color: var(--homea)">
            <img src={d} alt="d"/>
        </button>
    </a>
    <div class="buttonsR">
        <a href="#jab">
            <button style="background-color: var(--jaba)">
                <Icon name="User" color="var(--jabb)"/>
            </button>
        </a>
        <a href="#lib">
            <button style="background-color: var(--liba)">
                <Icon name="Library" color="var(--libb)"/>
            </button>
        </a>
        <a href="#blog">
            <button style="background-color: var(--bloga)">
                <Icon name="Announcement" color="var(--blogb)"/>
            </button>
        </a>
        <a href="#tech">
            <button style="background-color: var(--techa)">
                <Icon name="Laptop" color="var(--techb)"/>
            </button>
        </a>
        <a href="#com">
            <button style="background-color: var(--coma)">
                <Icon name="Chat" color="var(--comb)"/>
            </button>
        </a>
    </div>
</div>

<style lang="scss">
    @use '$lib/style/variables.scss' as v;
	@use '$lib/style/colors.scss' as c;
    
    .topBar{
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        padding: 20px;
        display: flex;
        justify-content: space-between;
        direction: row;
    }

    .buttonsR{
        display: flex;
        gap: 10px;
    }
</style>