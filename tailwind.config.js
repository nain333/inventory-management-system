// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ['./src/views/*.html'],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }

/** @type {import('tailwindcss').Config} */
module.exports = {
  // Updated to include .ejs files and check subdirectories
  content: ["./src/views/**/*.{html,ejs}"],
  theme: {
    extend: {},
  },
  plugins: [],
};
