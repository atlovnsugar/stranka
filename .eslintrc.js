// .eslintrc.js
module.exports = {
  // Použije se standardní konfigurace CRA
  extends: ['react-app', 'react-app/jest'],
  // Přepíše nebo přidá vlastní pravidla
  rules: {
    // Zakáže chybu kvůli nepoužitým proměnným
    'no-unused-vars': 'off',
    // Alternativně, pokud chcete zachovat nějaké kontroly, můžete místo 'off' použít:
    // 'no-unused-vars': ['warn', { "argsIgnorePattern": "^_" }] // Varování místo chyby, ignoruje argumenty začínající _
  }
};