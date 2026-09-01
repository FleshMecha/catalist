const KEY_THEME = 'theme';

export function isDarkTheme() {
    return localStorage.getItem(KEY_THEME) === 'dark';
}

export function switchTheme() {
    localStorage.setItem(KEY_THEME, isDarkTheme() ? 'light' : 'dark');
    applyTheme();
}

export function applyTheme() {
    document.documentElement.classList.toggle('ion-palette-dark', isDarkTheme());
}