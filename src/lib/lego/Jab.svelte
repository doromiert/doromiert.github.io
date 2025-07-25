<script lang="ts">
    import dor from "$lib/doromiertznak/dor.svg"
    import omi from "$lib/doromiertznak/omi.svg"
    import ert from "$lib/doromiertznak/ert.svg"
    import Icon from "lib/kit/Icon.svelte";
    import d from "$lib/assets/D.svg"
</script>

<div class="separator"><Icon color="var(--jabb)" name="Direction-d"/></div>
<section id="jab">
    <div class="pageLego">
        <svg  viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="d">
            <g clip-path="url(#clip0_60_29)">
            <path d="M16 -6.10352e-05V12.7997L12.7998 15.9999H0L3.2002 12.7997H11.2002L12.7998 11.2001V3.20013H0L3.2002 -6.10352e-05H16Z" fill="#5A1E17"/>
            </g>
            <defs>
            <clipPath id="clip0_60_29">
            <rect width="16" height="16" fill="white"/>
            </clipPath>
            </defs>
        </svg>
        <!-- bruh -->
        <div class="whois">
            <h><b>Who am I?</b></h>
            <div class="text">I'm a 
                <div class="hobby">
                    <Icon color="var(--jabb)" name="Paintbrush"/> designer
                </div>
                
                <div style="margin-left: -5px">,</div>
                
                <div class="hobby">
                    <Icon color="var(--jabb)" name="Code"/> developer
                </div>

                <div style="margin-left: -5px">,</div>

                <div class="hobby">
                    <Icon color="var(--jabb)" name="Translate"/> language
                </div>

                and

                <div class="hobby">
                    <Icon color="var(--jabb)" name="Laptop"/> tech enthusiast
                </div>
                
            </div>
            <div class="bruh">
                <div>I live in Warsaw, Poland and speak polish, english, ixni and toki pona.</div>
                <div>(although I’m learning other languages too, for example russian)</div>
            </div>
        </div>
        <div class="cta">
            <a href="#com">
                <button style="background-color: var(--coma); justify-content: space-between; width: 290px">
                    <div style="display: flex; gap: 12px; text-decoration: none; font-size: 1rem; align-items: center; color: var(--comb)">
                        <Icon name="Chat" color="var(--comb)"/>
                        Contact me now
                    </div>
                    <Icon name="Direction-r" color="var(--comb)"/>
                </button>
            </a>
            <a href="#lib">
                <button style="background-color: var(--liba); justify-content: space-between; width: 290px">
                    <div style="display: flex; gap: 12px; text-decoration: none; font-size: 1rem; align-items: center; color: var(--libb)">
                        <Icon name="Library" color="var(--libb)"/>
                        Check out my creations
                    </div>
                    <Icon name="Direction-r" color="var(--libb)"/>
                </button>
            </a>
        </div>
    </div>
</section>

<style lang="scss">
    @use '$lib/style/variables.scss' as v;
	@use '$lib/style/colors.scss' as c;

    button{
        @media (hover: hover){
        &:hover{
            filter: brightness(150%);
            scale: 1.075;
        }
    }
    }

    .cta{
        display: flex;
        gap: 10px;
        @media (max-width: 620px) {
            flex-direction: column;
        }
    }

    .bruh{
        display: flex;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        gap: 4px;
        text-align: center;
    }

    .d{
        height: 50px;
        *{
            fill: var(--jabb);
        }
    }

    .whois{

        color: var(--jabb);
        align-items: center;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }

    h{
        font-size: 1.5rem;
    }

    .hobby{
        display: flex;
        align-items: center;
        gap: 4px;
        font-weight: bold;
    }
    .text{
        flex-wrap: wrap;
        width: calc(100vw - 100px);
        font-size: 1rem;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 4px;
    }

    .pageLego{
        background-color: var(--jaba);
        min-height: calc(100vh - 46px);
        height: min-content;
        padding: 80px;
        box-sizing: border-box;
        width: 100vw;
        align-items: center;
        display: flex;
        justify-content: center;
        flex-direction: column;
        gap: 20px;
        box-sizing: border-box;
    }
    
    .separator{
        background-color: var(--jaba);
        display: flex;
        align-items: center;
        justify-content: center;
        height: 46px;
    }
</style>