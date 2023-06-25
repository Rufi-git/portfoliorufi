/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    options: {
      defaultExtractor: (content) => {
        // Specify the output file path
        return content.match(/[^<>"'`\s]*[^<>"'`\s:]/g) || [];
      },
    },
  },
  theme: {
    extend: {},
  },
  plugins: [],
};
