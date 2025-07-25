<script lang="ts">
    import dor from "$lib/doromiertznak/dor.svg"
    import omi from "$lib/doromiertznak/omi.svg"
    import ert from "$lib/doromiertznak/ert.svg"
    import Icon from "lib/kit/Icon.svelte";
</script>

<div class="separator"><Icon color="var(--comb)" name="Direction-d"/></div>
<section id="com">
    <div class="pageLego">
        <Icon name="Chat" size={50} color="var(--comb)"/>
        <h>Find me here</h>
        <div class="comButtons">
            <a href="https://discord.com/users/786127059020808192">
                <button>
                    <div class="a">
                        <Icon name="Discord" color="var(--coma)"/>
                        Discord
                    </div>
                    <Icon name="Direction-r" color="var(--coma)"/>
                </button>
            </a>
            <a href="mailto:doromiert@gmail.com">
                <button>
                    <div class="a">
                        <Icon name="Mail" color="var(--coma)"/>
                        Email
                    </div>
                    <Icon name="Direction-r" color="var(--coma)"/>
                </button>
            </a>
            <a href="https://x.com/doromiert">
                <button>
                    <div class="a">
                        <Icon name="Xitter" color="var(--coma)"/>
                        Twitter
                    </div>
                    <Icon name="Direction-r" color="var(--coma)"/>
                </button>
            </a>
            <a href="https://github.com/nrdsstuff">
                <button>
                    <div class="a">
                        <Icon name="Github" color="var(--coma)"/>
                        Github
                    </div>
                    <Icon name="Direction-r" color="var(--coma)"/>
                </button>
            </a>
            <a href="https://www.last.fm/user/NRDeez">
                <button>
                    <div class="a">
                        <Icon name="Music" color="var(--coma)"/>
                        Last.fm
                    </div>
                    <Icon name="Direction-r" color="var(--coma)"/>
                </button>
            </a>
        </div>
    </div>
</section>

<style lang="scss">
    @use '$lib/style/variables.scss' as v;
	@use '$lib/style/colors.scss' as c;

    .comButtons{
        display: flex;
        gap: 10px;
        max-width: 250px;
        width: 100%;
        flex-direction: column;
    }

    .a{
        display: flex;
        flex-direction: row;
        gap: 12px;

    }

    button{
        width: 100%;
        color: var(--coma);
        background-color: var(--comb);
        justify-content: space-between;

        &:hover{
            scale: 1.1;
        }
    }

    .pageLego{
        background-color: var(--coma);
        min-height: calc(100vh - 100px);
        height: min-content;
        padding: 80px;
        box-sizing: border-box;
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
</style>