import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Cores principais - Azul e Violeta
        background: '#fafafa',
        foreground: '#262626',
        
        // Cores primárias
        primary: {
          DEFAULT: '#6366f1',      // Azul Índigo
          foreground: '#ffffff',
        },
        
        // Cores secundárias
        secondary: {
          DEFAULT: '#8b5cf6',      // Violeta
          foreground: '#ffffff',
        },
        
        // Cores de destaque
        accent: {
          DEFAULT: '#a78bfa',      // Violeta Claro
          foreground: '#262626',
        },
        
        // Cores neutras
        card: '#ffffff',
        'card-foreground': '#262626',
        muted: '#f5f5f5',
        'muted-foreground': '#737373',
        border: '#e5e5e5',
        input: '#f5f5f5',
        ring: '#6366f1',
        
        // Cores de erro
        destructive: '#ef4444',
        'destructive-foreground': '#ffffff',
      },
      borderRadius: {
        lg: '0.625rem',
      },
    }
    ,
  },
  plugins: [],
} satisfies Config;
