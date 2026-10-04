const config = {
  trailingComma: "es5",
  semi: true,
  singleQuote: false,
  tabWidth: 4,
  overrides: [
    {
      files: "**/*.{js,jsx,ts,tsx}",
      options: {
        tabWidth: 2,
        singleQuote: true,
      },
    },
    {
      files: "**/*.css",
      options: {
        tabWidth: 2,
      },
    },
  ],
};

export default config;
