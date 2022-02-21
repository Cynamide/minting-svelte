<script>
  import img1 from "/images/63.webp";
  import img2 from "/images/64.webp";
  import img3 from "/images/65.webp";
  import img4 from "/images/66.webp";
  import img5 from "/images/67.webp";
  import img6 from "/images/68.webp";
  import img7 from "/images/69.webp";
  import img8 from "/images/70.webp";
  import img9 from "/images/71.webp";
  import img10 from "/images/72.webp";
  import img11 from "/images/73.webp";
  import img12 from "/images/74.webp";
  import img13 from "/images/75.webp";
  import img14 from "/images/76.webp";
  import img15 from "/images/77.webp";
  import img16 from "/images/78.webp";
  import img17 from "/images/79.webp";
  import img18 from "/images/80.webp";
  import img19 from "/images/81.webp";
  import img20 from "/images/82.webp";
  import img21 from "/images/83.webp";
  import img22 from "/images/84.webp";
  import img23 from "/images/85.webp";
  import img24 from "/images/86.webp";
  import img25 from "/images/87.webp";
  import img26 from "/images/88.webp";
  import img27 from "/images/89.webp";
  import img28 from "/images/90.webp";
  import img29 from "/images/91.webp";
  import img30 from "/images/92.webp";
  import img31 from "/images/93.webp";
  import img32 from "/images/94.webp";
  import img33 from "/images/95.webp";

  const imgData1 = [
    { data: img1 },
    { data: img2 },
    { data: img3 },
    { data: img4 },
    { data: img5 },
    { data: img6 },
    { data: img7 },
    { data: img8 },
    { data: img9 },
    { data: img10 },
    { data: img11 },
    { data: img12 },
    { data: img13 },
    { data: img14 },
  ];
  const imgData2 = [
    { data: img15 },
    { data: img16 },
    { data: img17 },
    { data: img18 },
    { data: img19 },
    { data: img20 },
    { data: img21 },
    { data: img22 },
    { data: img23 },
    { data: img24 },
    { data: img25 },
    { data: img26 },
    { data: img27 },
    { data: img28 },
    { data: img29 },
    { data: img30 },
    { data: img31 },
    { data: img32 },
    { data: img33 },
  ];
  let y;
</script>

<svelte:window bind:scrollY={y} />

<div class="h-64 overflow-hidden skew-y-2">
  <div class="relative flex">
    {#each imgData1 as m}
      <img
        class="mx-3 rounded-md h-28 md:h-40 md:mx-5 "
        style="transform: translate( {y < 2 ? y : -y}px,0)"
        src={m.data}
        alt="scrollImage"
      />
    {/each}
  </div>
</div>
<div class=" overflow-hidden skew-y-2">
  <div class="-left-1/2  relative flex ">
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
