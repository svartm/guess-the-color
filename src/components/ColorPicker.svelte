<script lang="ts">
  import RGBCircles from "./RGBCircles.svelte";
  import HexInput from "./HexInput.svelte";
  import Slider from "./Slider.svelte";

  let newHex = "#FFFFFF"; //  validated string from user input

  // r, g, b are updated from newHex and bound to the sliders
  $: r = parseInt(newHex.slice(1,3), 16);
  $: g = parseInt(newHex.slice(3,5), 16);
  $: b = parseInt(newHex.slice(5,7), 16);

  // currentHex is always derived from r/g/b
  $: currentHex = ("#" + [r, g, b].map(c => c.toString(16).padStart(2,"0")).join("")).toUpperCase();

</script>

<div class="flex flex-col items-center gap-4 p-6 max-w-md mx-auto">
  <!-- RGB circles: pass normalized opacity -->
  <RGBCircles r={r/255} g={g/255} b={b/255} />

  <!-- Hex input: updates newHex, displays currentHex in placeholder or buffer value -->
  <HexInput bind:validatedHex={newHex} currentHex={currentHex} />

  <!-- RGB sliders: bound to r, g, b-->
  <div class="flex flex-col gap-2 w-full">
    <Slider channel="r" bind:value={r} />
    <Slider channel="g" bind:value={g} />
    <Slider channel="b" bind:value={b} />
  </div>

</div>
