import type { Config } from 'tailwindcss'
import { PluginAPI, ThemeConfig } from 'tailwindcss/types/config'
import typographyPlugin from '@tailwindcss/typography'

const config: Config = {
  content: ['./src/{pages,components,app}/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontSize: {
        '5xl': [
          'clamp(0.5rem, 5vw, 8.5rem)',
          {
            fontWeight: 900,
            lineHeight: '1',
            letterSpacing: '0.05em',
          },
        ],
        '4xl': [
          'clamp(2rem, 5vw, 2.5rem)',
          {
            fontWeight: 600,
            lineHeight: '1',
            letterSpacing: '-0.025em',
          },
        ],
        '3xl': [
          'clamp(1.75rem, 5vw, 2rem)',
          {
            fontWeight: 600,
            lineHeight: '1',
            letterSpacing: '-0.025em',
          },
        ],
        '2xl': [
          'clamp(1.5rem, 5vw, 1.75rem)',
          {
            fontWeight: 600,
            lineHeight: '1.1',
            letterSpacing: '-0.025em',
          },
        ],
        xl: [
          'clamp(1.25rem, 5vw, 1.5rem)',
          {
            fontWeight: 600,
            lineHeight: '1.25',
            letterSpacing: '0',
          },
        ],
        lg: [
          'clamp(1.125rem, 5vw, 1.25rem)',
          {
            fontWeight: 600,
            lineHeight: '1.375',
            letterSpacing: '0',
          },
        ],
      },
      typography: (theme: PluginAPI['theme']) => {
        // This could come from ThemeConfig['fontSize'] maybe?
        type FontSize = [string, { lineHeight: string; fontWeight: string; letterSpacing: string }]
        //docsmill.dev/npm/tailwindcss@3.4.1#/.Config.ThemeConfig
        https: function generateHeadingStyles(fontSize: FontSize) {
          return {
            fontSize: fontSize[0],
            lineHeight: fontSize[1].lineHeight,
            fontWeight: fontSize[1].fontWeight,
            letterSpacing: fontSize[1].letterSpacing,
          }
        }
        return {
          DEFAULT: {
            css: {
              '--tw-prose-headings': theme('colors.black'),
              h1: generateHeadingStyles(theme('fontSize.5xl')),
              h2: generateHeadingStyles(theme('fontSize.4xl')),
              h3: generateHeadingStyles(theme('fontSize.3xl')),
              h4: generateHeadingStyles(theme('fontSize.2xl')),
              h5: { color: theme('colors.black'), ...generateHeadingStyles(theme('fontSize.xl')) },
              h6: { color: theme('colors.black'), ...generateHeadingStyles(theme('fontSize.lg')) },
            },
          },
        }
      },
    },
  },
  plugins: [typographyPlugin],
}
export default config
