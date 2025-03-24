import flowbite from 'flowbite/plugin';
import forms from '@tailwindcss/forms';
import ttypography from '@tailwindcss/typography';
import ftypography from 'flowbite-typography';
import scrollbar from 'tailwind-scrollbar';

/** @type {import('tailwindcss').Config} */
/** @type {import("eslint").Linter.Config} */
export default {
  content: [
    './src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}',
    './node_modules/flowbite/**/*.js',
    './node_modules/flowbite-react/**/*.js'
  ],
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: '#032050', 100: '#010610', 200: '#010d1f', 300: '#02132f', 400: '#021a3f', 500: '#032050', 600: '#0641a1', 700: '#0963f4', 800: '#5a97f9', 900: '#accbfc' },
        secondary: { DEFAULT: '#2879fe', 100: '#00173b', 200: '#012d76', 300: '#0144b1', 400: '#015beb', 500: '#2879fe', 600: '#5496fe', 700: '#7fb0fe', 800: '#aacaff', 900: '#d4e5ff' },
        warning: { DEFAULT: '#ffb503', 100: '#342400', 200: '#684900', 300: '#9c6d00', 400: '#d09200', 500: '#ffb503', 600: '#ffc337', 700: '#ffd269', 800: '#ffe19b', 900: '#fff0cd' },
        danger: { DEFAULT: '#ff5964', 100: '#440005', 200: '#890009', 300: '#cd000e', 400: '#ff1222', 500: '#ff5964', 600: '#ff7881', 700: '#ff9aa1', 800: '#ffbcc0', 900: '#ffdde0' },
        success: { DEFAULT: '#89b0ae', 100: '#192525', 200: '#324b49', 300: '#4b706e', 400: '#649593', 500: '#89b0ae', 600: '#a0bfbe', 700: '#b7cfce', 800: '#cfdfde', 900: '#e7efef' }
      },
      fontFamily: {
        sans: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji'
        ],
        body: [
          'Inter',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'system-ui',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'Arial',
          'Noto Sans',
          'sans-serif',
          'Apple Color Emoji',
          'Segoe UI Emoji',
          'Segoe UI Symbol',
          'Noto Color Emoji'
        ],
        mono: [
          'ui-monospace',
          'SFMono-Regular',
          'Menlo',
          'Monaco',
          'Consolas',
          'Liberation Mono',
          'Courier New',
          'monospace'
        ]
      },
      transitionProperty: {
        width: 'width'
      },
      textDecoration: ['active'],
      minWidth: {
        kanban: '28rem'
      },
    }
  },
  extends: [
    "plugin:tailwindcss/recommended"
  ],
  plugins: [
    flowbite({ datatables: true }),
    forms,
    ttypography,
    ftypography,
    scrollbar({ nocompatible: true })
  ],
  settings: {
    // ...
    tailwindcss: {
      callees: ["twMerge", "createTheme"],
      classRegex: "^(class(Name)|theme)?$",
    },
  },

  darkMode: 'class'
}
