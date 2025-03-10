module.exports = {
    content: [
      // Add all the paths where Tailwind CSS should scan for class names.
      "./src/**/*.{js,ts,jsx,tsx}", // This covers all files inside src
      './index.html', // Make sure your HTML files are also included
    ],
    theme: {
      extend: {
        colors: {
          // You can extend colors here if you need custom ones
          blue: {
            500: '#3B82F6', // Tailwind's default blue color
            600: '#2563EB', // Darker blue for hover effect
          },
        },
      },
    },
    plugins: [],
  }
  