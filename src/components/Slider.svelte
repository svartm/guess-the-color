<script lang="ts">
  export let channel: "r" | "g" | "b";
  export let value: number;

  const colors: Record<string, string> = {
    r: "#FF0000",
    g: "#00FF00",
    b: "#0000FF",
  };
</script>

<div class="flex flex-col gap-1 w-full">
  <label>{channel.toUpperCase()}: {value.toString(16).padStart(2,'0').toUpperCase()}</label>
  <input
    type="range"
    min="0"
    max="255"
    bind:value
    class={"slider-" + channel}
    style={`accent-color: ${colors[channel]}; width: 100%`}
  />
</div>
