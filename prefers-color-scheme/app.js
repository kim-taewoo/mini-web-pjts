var theme = 'light';
if (localStorage.getItem('theme')) {
  if (localStorage.getItem('theme') === 'dark') {
    theme = 'dark';
  }
} else if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
  theme = 'dark';
}

// var theme;
function theme_apply() {
  'use strict';
  if (theme === 'light') {
    document.getElementById('theme_readout').innerHTML = 'Dark';
    document.documentElement.setAttribute('data-theme', 'light');
    localStorage.setItem('theme', 'light');
  } else {
    document.getElementById('theme_readout').innerHTML = 'Light';
    document.documentElement.setAttribute('data-theme', 'dark');
    localStorage.setItem('theme', 'dark');
  }
}
theme_apply();
function theme_switch() {
  'use strict';
  if (theme === 'light') {
    theme = 'dark';
  } else {
    theme = 'light';
  }
  theme_apply();
}
var theme_OS = window.matchMedia('(prefers-color-scheme: light)');
theme_OS.addEventListener('change', function (e) {
  'use strict';
  if (e.matches) {
    theme = 'light';
  } else {
    theme = 'dark';
  }
  theme_apply();
});








// const darkModeMediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
// darkModeMediaQuery.addListener((e) => {
//   const darkModeOn = e.matches;
//   console.log(`Dark mode is ${darkModeOn ? '🌒 on' : '☀️ off'}.`);
// });

// console.log(darkModeMediaQuery);