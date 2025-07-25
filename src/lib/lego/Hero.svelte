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
        <div class="beta">beta edition!</div>
    </div>
</section>

<style lang="scss">
    @use '$lib/style/variables.scss' as v;
	@use '$lib/style/colors.scss' as c;
    @import url('https://fonts.googleapis.com/css2?family=Comic+Neue:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap');
    
    .beta{
        font-size: 72px;
        position: absolute;
        bottom: 400px;
        right: 500px;
        color: #ff0000;
        rotate: -20deg;
        font-family: "Comic Neue";
        font-weight: bold;
        animation: gay 6s ease-in-out;
    }
    @keyframes gay {
            0% {
                transform: rotate(-10deg);
                color: #ff0000; /* Red */
            }
            16% {
                color: #ff7f00; /* Orange */
            }
            33% {
                transform: rotate(-20deg);
                color: #ffff00; /* Yellow */
            }
            50% {
                color: #00ff00; /* Green */
            }
            66% {
                transform: rotate(-10deg);
                color: #0000ff; /* Blue */
            }
            83% {
                color: #4b0082; /* Indigo */
            }
            100% {
                transform: rotate(-20deg);
                color: #9400d3; /* Violet */
            }
        }

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
        transition: 0.25s;
        @media (max-width: 620px) {
            flex-direction: column;
        }
        *{
            user-select: none;
        }
    }
</style>