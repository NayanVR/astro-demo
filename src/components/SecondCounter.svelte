<script>
  let count = 0;

  function increament() {
    count += 1;
  }
</script>

<button on:click={increament} class="px-6 py-3 bg-yellow-400 rounded-md w-fit">
  Counter in svelte: {count}
</button>
