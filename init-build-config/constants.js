var path = require('path');

var homeDir = process.cwd();

module.exports.TEMPLATE_PATH = path.join(homeDir, 'init-build-config/config.template.js');
module.exports.DIST_PATH = path.join(homeDir, 'src/app/settings/build-config.js');
