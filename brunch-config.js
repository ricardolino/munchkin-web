module.exports = {
      npm: {
            globals: {
                  Inferno: 'inferno',
                  Component: 'inferno-component'
            }
      },
      files: {
            javascripts: { joinTo: 'app.js' },
            stylesheets: { joinTo: 'app.css' }
      },
      plugins: {
            babel: {
                  presets: ['es2015', 'stage-1'],
                  plugins: ['inferno']
            }
      },
      modules: {
            autoRequire: { 'app.js': ['initialize'] }
      },
      server: {
            hostname: "0.0.0.0"
      }
};