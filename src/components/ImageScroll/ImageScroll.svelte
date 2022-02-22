<script>
  import { scale } from "svelte/transition";
  const imgData1 = [
    { data: "/images/63.webp" },
    { data: "/images/64.webp" },
    { data: "/images/65.webp" },
    { data: "/images/66.webp" },
    { data: "/images/67.webp" },
    { data: "/images/68.webp" },
    { data: "/images/69.webp" },
    { data: "/images/70.webp" },
    { data: "/images/71.webp" },
    { data: "/images/72.webp" },
    { data: "/images/73.webp" },
    { data: "/images/74.webp" },
    { data: "/images/75.webp" },
    { data: "/images/76.webp" },
  ];
  const imgData2 = [
    { data: "/images/77.webp" },
    { data: "/images/78.webp" },
    { data: "/images/79.webp" },
    { data: "/images/80.webp" },
    { data: "/images/81.webp" },
    { data: "/images/82.webp" },
    { data: "/images/83.webp" },
    { data: "/images/84.webp" },
    { data: "/images/85.webp" },
    { data: "/images/86.webp" },
    { data: "/images/87.webp" },
    { data: "/images/88.webp" },
    { data: "/images/89.webp" },
    { data: "/images/90.webp" },
    { data: "/images/91.webp" },
    { data: "/images/92.webp" },
    { data: "/images/93.webp" },
    { data: "/images/94.webp" },
    { data: "/images/95.webp" },
  ];
  let y;
</script>

<svelte:window bind:scrollY={y} />

<div class="h-64 overflow-hidden skew-y-2">
  <div class="relative flex">
    {#each imgData1 as m}
      <img
        class="mx-3 rounded-md h-28 md:h-40 md:mx-5  "
        style="transform: translate( {y < 2 ? y : -y}px,0)"
        src={m.data}
        alt="scrollImage"
      />
    {/each}
  </div>
</div>
<div class=" overflow-hidden flex skew-y-2">
  <div class="-left-full relative flex ">
    {#each imgData2 as m}
      <img
        class="mx-3 rounded-md h-28 md:h-40 md:mx-5"
        style="transform: translate( {y < 2 ? -y : y}px,0)"
        src={m.data}
        alt="scrollImage"
      />
    {/each}
  </div>
</div>
