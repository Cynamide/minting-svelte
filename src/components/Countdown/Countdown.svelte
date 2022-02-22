<script>
  import { createEventDispatcher } from "svelte";
  import { onMount, onDestroy, afterUpdate } from "svelte";
  import { candyMachineState, userState } from "../../lib/store";

  $: completed = false;
  let timer = null;
  $: countDownDate = new Date(
    $candyMachineState?.state.goLiveDate?.toNumber() * 1000
  ).getTime();
  let now = new Date().getTime();

  onMount(() => {
    timer = setInterval(() => {
      now = now + 1000;
    }, 1000);
  });

  $: distance = countDownDate - now;
  $: days = Math.floor(distance / (1000 * 60 * 60 * 24));
  $: hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  $: minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  $: seconds = Math.floor((distance % (1000 * 60)) / 1000);

  $: {
    if (distance < 0) {
      completed = true;
      clearInterval(timer);
      timer = null;
    }
  }

  onDestroy(() => {
    if (timer) {
      clearInterval(timer);
    }
  });
</script>

<div class="min-w-screen flex items-center justify-center px-5 py-5">
  {#if !completed}
    <div class=" text-yellow-100">
      <h1 class="text-3xl text-center mb-3 font-concert-one text-[#6B3B43]">
        Sale will start soon...
      </h1>
      <div
        class=" mt-12 text-6xl text-center flex w-full items-center justify-center"
      >
        <div class="text-2xl mr-1 font-concert-one text-[#6B3B43]">in</div>
        <div
          class="w-24 mx-1 p-2 bg-white drop-shadow-md text-[#6B3B43] rounded-lg"
        >
          <div class="font-mono leading-none">{days}</div>
          <div class="font-mono uppercase text-sm leading-none">Days</div>
        </div>
        <div
          class="w-24 mx-1 p-2 bg-white drop-shadow-md text-[#6B3B43] rounded-lg"
        >
          <div class="font-mono leading-none">{hours}</div>
          <div class="font-mono uppercase text-sm leading-none">Hours</div>
        </div>
        <div
          class="w-24 mx-1 p-2 bg-white drop-shadow-md text-[#6B3B43] rounded-lg"
        >
          <div class="font-mono leading-none">{minutes}</div>
          <div class="font-mono uppercase text-sm leading-none">Minutes</div>
        </div>
        <div
          class="w-24 mx-1 p-2 bg-white drop-shadow-md text-[#6B3B43] rounded-lg"
        >
          <div class="font-mono leading-none">{seconds}</div>
          <div class="font-mono uppercase text-sm leading-none">Seconds</div>
        </div>
      </div>
    </div>
  {:else}
    <h1 class="text-2xl text-center mb-3 font-concert-one text-[#6B3B43]">
      The wait is over!
    </h1>
  {/if}
</div>
