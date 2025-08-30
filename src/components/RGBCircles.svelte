<script lang="ts">
  export let r = 1;
  export let g = 1;
  export let b = 1;
</script>

<div class="color-display relative bg-black w-[300px] h-[300px]">
  <div class="circle-r-250-150" style="opacity: {r}"></div>
  <div class="circle-g-250-270" style="opacity: {g}"></div>
  <div class="circle-b-250-30" style="opacity: {b}"></div>
</div>

