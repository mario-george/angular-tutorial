npm i -D tailwindcss postcss autoprefixer

npx tailwindcss init -p

add ./src/\*\*_/\*_.{html,ts}
to content array

add directives of tailwind in src/styles.css

@tailwind base;

@tailwind components;

@tailwind utilities;
