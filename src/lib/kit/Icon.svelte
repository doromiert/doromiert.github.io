<script lang="ts">
	let { name = 'NegZero', size = 16, color = "#ffffff" } = $props();
</script>

<svg style="width: {size}px; height: {size}px; flex-shrink: 0; --c: {color}">
	<use xlink:href="#svg--{name.replaceAll('/', '-')}" />
</svg>

<style lang="scss">
    @use '$lib/style/variables.scss' as v;
	@use '$lib/style/colors.scss' as c;
    /* Targets all SVG strokes that are explicitly #fff and recolors them using --c */
    svg *[stroke="#fff"]{
        stroke: var(--c) !important;
    }
    svg *[fill="#fff"]{
        fill: var(--c) !important;
    }

    svg:has(use){
        *[fill="#fff"]{
            fill: var(--c) !important;
        }
    }
</style>