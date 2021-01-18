type ThemeSettings = {
    '--color-text-primary': string;
    '--color-text-secondary': string;
    '--color-cross': string;
    '--color-circle': string;
    '--color-glass': string;
    '--color-background-primary': string;
    '--color-background-secondary': string;
    '--color-line': string;
    '--color-switch': string;
    '--color-switch-background': string;
    '--url-background': string;
};

export const lightTheme: ThemeSettings = {
    '--color-text-primary': '#444444',
    '--color-text-secondary': '#656060',
    '--color-cross': '#e72948',
    '--color-circle': '#2d71e5',
    '--color-glass':
        'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.2) 100%);',
    '--color-background-primary': '#f6f6f6',
    '--color-background-secondary': '#ebebeb',
    '--color-line': '#d1d1d1',
    '--color-switch': '#ffffff',
    '--color-switch-background': '#A09C9C',
    '--url-background': 'var(--background-light)',
};

export const darkTheme: ThemeSettings = {
    '--color-text-primary': '#D6D6D6',
    '--color-text-secondary': '#DCDCDC',
    '--color-cross': '#e72948',
    '--color-circle': '#2d71e5',
    '--color-glass':
        'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.2) 100%);',
    '--color-background-primary': '#2C2C2C',
    '--color-background-secondary': '#6A6A6A',
    '--color-line': '#262626',
    '--color-switch': '#2c2c2c',
    '--color-switch-background': '#2D71E5',
    '--url-background': 'var(--background-dark)',
};
