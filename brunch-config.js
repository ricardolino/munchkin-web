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
      conventions: {
        ignored: () => false, // override defaults for no ignored files
        assets: /fonts\//     // vendor/jquery/files/jq.img
      },
      plugins: {
            babel: {
                  presets: ['es2015', 'stage-1'],
                  plugins: ['inferno']
            }
      },
      modules: {
            autoRequire: { 'app.js': ['initialize'] }
      }
};