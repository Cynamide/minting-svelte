const config = {
  content: [
    "./src/**/*.{html,js,svelte,ts}",
    "./node_modules/flowbite/**/*.{html,js,svelte,ts}",
  ],

  theme: {
    extend: {
      fontFamily: {
        "concert-one": ['"Concert One"', "cursive"],
      },
    },
  },

  plugins: [require("flowbite/plugin")],
};

module.exports = config;
