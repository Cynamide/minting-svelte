<script>
  import * as animateScroll from "svelte-scrollto";
</script>

<nav class="border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
    <div class="flex">
      <a class="h-12 sm:h-18 px-5" href="https://www.google.co.in/"
        ><img src="discord.svg" alt="discord" /></a
      >
      <a class="h-12 sm:h-18 px-5" href="https://www.google.co.in/">
        <img src="twitter.svg" alt="twitter" />
      </a>
    </div>
    <button class="flex" />
    <div class="flex md:pt-0 md:order-2">
      <button
        type="button"
        class="text-white bg-gradient-to-r from-pink-500 to-yellow-500 font-medium w-30 h-10 rounded-lg text-xs lg:text-sm lg:h-10 px-5  text-center mr-3 md:mr-0"
        on:click={() =>
          animateScroll.scrollTo({ element: "#mint-card", duration: 1000 })}
      >
        Mint Now!
      </button>
    </div>
  </div>
</nav>
