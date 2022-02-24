<script>
  function NewDiscordTab() {
    window.open("https://www.google.co.in/", "_blank");
  }
  function NewTwitterTab() {
    window.open("https://www.google.co.in/", "_blank");
  }
</script>

<div class="flex mt-24 justify-around">
  <button
    on:click={NewDiscordTab}
    type="button"
    class="basis-32 flex-initial  text-white bg-gradient-to-r from-[#B56572] to-[#6B3B43] 
        hover:bg-gradient-to-br shadow-lg font-medium rounded-lg 
        text-md sm:text-xl sm:basis-56  py-5 text-center">Discord</button
  >
  <button
    on:click={NewTwitterTab}
    type="button"
    class="basis-32 flex-initial  text-white bg-gradient-to-r from-[#B56572] to-[#6B3B43] 
        hover:bg-gradient-to-br shadow-lg font-medium rounded-lg 
        text-md sm:text-xl sm:basis-56  py-5 text-cente">Twitter</button
  >
</div>
