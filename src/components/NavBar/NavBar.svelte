<script>
  import * as animateScroll from "svelte-scrollto";
  import Button from "../Button.svelte";
</script>

<nav class="border-gray-200 px-2 sm:px-4 py-2.5 rounded ">
  <div class="container flex flex-wrap justify-between items-center mx-auto">
    <button class="flex">
      <img class="h-6 sm:h-10 px-5" src="logo.svg" alt="logo" />
    </button>
    <div class="flex md:pt-0 md:order-2">
      <button
        type="button"
        class="text-white bg-gradient-to-r from-pink-500 to-yellow-500 font-medium w-30 h-8 rounded-lg text-xs lg:text-sm lg:h-10 px-5  text-center mr-3 md:mr-0"
        on:click={() =>
          animateScroll.scrollTo({ element: "#mint-card", duration: 1000 })}
      >
        Mint Now!
      </button>
      <button
        data-collapse-toggle="mobile-menu-4"
        type="button"
        class="inline-flex items-center  text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
        aria-controls="mobile-menu-4"
        aria-expanded="false"
      >
        <span class="sr-only">Open main menu</span>
        <svg
          class="w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          />
        </svg>
        <svg
          class="hidden w-6 h-6"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>
    <div
      class="hidden justify-between items-center w-full md:flex md:w-auto md:order-1"
      id="mobile-menu-4"
    >
      <ul
        class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium"
      >
        <li>
          <button
            href="#"
            class="block py-2 pr-4 pl-3 text-[#6B3B43] font-semibold bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0   text-base"
            aria-current="page"
          >
            About Us
          </button>
        </li>
        <li>
          <button
            href="#"
            class="block py-2 pr-4 pl-3 text-[#6B3B43] font-semibold border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  text-base"
          >
            Mint
          </button>
        </li>
        <li>
          <button
            href="#"
            class="block py-2 pr-4 pl-3 text-[#6B3B43] font-semibold border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0  text-base"
          >
            Roadmap
          </button>
        </li>
      </ul>
    </div>
  </div>
</nav>
