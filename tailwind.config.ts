import type { Config } from "tailwindcss";

export default {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		colors: {
  			'white': '#FFF',
  			'black': '#000',
  			'pr-green-60': '#CAFF33',
  			'pr-green-65': '#D1FF4C',
  			'pr-green-70': '#D8FF66',
  			'pr-green-80': '#E5FF99',
  			'pr-green-90': '#F2FFCC',
  			'pr-green-95': '#F8FFE5',
  			'pr-green-97': '#FBFFF0',
  			'pr-green-99': '#FEFFFA',
  			'white-shade-90': '#E4E4E7',
  			'white-shade-95': '#F1F1F3',
  			'white-shade-97': '#F7F7F8',
  			'white-shade-99': '#FCFCFD',
  			'grey-shade-10': '#191919',
  			'grey-shade-11': '#1C1C1C',
  			'grey-shade-15': '#262626',
  			'grey-shade-20': '#333333',
  			'grey-shade-30': '#4C4C4D',
  			'grey-shade-35': '#59595A',
  			'grey-shade-40': '#656567',
  			'grey-shade-60': '#98989A',
  			'grey-shade-70': '#B3B3B3',
  			'grey-shade-75': '#BFBFBF',
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
		keyframes: {
			"caret-blink": {
				"0%,70%,100%": { opacity: "1" },
				"20%,50%": { opacity: "0" },
			},
		},
		animation: {
			"caret-blink": "caret-blink 1.25s ease-out infinite",
		},
  	}
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
