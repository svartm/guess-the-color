<script lang="ts">
  import { createEventDispatcher } from "svelte";

  export let currentHex: string;
  export let validatedHex: string;

  let inputEl: HTMLInputElement;
  let buffer = "";

  const HEX_REGEX = /^#[0-9A-F]{6}$/;

  $: if (buffer !== "" && document.activeElement !== inputEl) {
      buffer = currentHex;
  }

  // --- handle each keystroke ---
  function handleInput(e: InputEvent) {
    if (!inputEl) return;

    let cursorPos = inputEl.selectionStart ?? buffer.length;

    // clean and validate input
    buffer = buffer
      .toUpperCase()
      .replace(/#/g, "")
      .replace(/[^0-9A-F]/g, "")
      .slice(0, 6);

    // insert # if needed
    if (buffer.length > 0 && !inputEl.value.startsWith("#")) {
      buffer = "#" + buffer;
      cursorPos++;
    } else if (inputEl.value.startsWith("#")) {
      buffer = "#" + buffer;
      if (cursorPos === 0) cursorPos = 1;
    }

    // update cursor position
    requestAnimationFrame(() => {
      inputEl.setSelectionRange(cursorPos, cursorPos);
    });

    // only update validatedHex if fully valid
    if (/^#[0-9A-F]{6}$/.test(buffer)) {
      validatedHex = buffer;
    }
  }
</script>

<input
  type="text"
  bind:this={inputEl}
  bind:value={buffer}
  maxlength="7"
  placeholder={currentHex}
  class="w-full text-center border px-2 py-1 rounded font-mono"
  style="font-size: 24pt; width: 9ch; height: 1.4em; box-sizing: content-box;"
  on:input={handleInput}
/>

