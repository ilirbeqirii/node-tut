const featureIndex = require('./my-package/feature');
const libIndex = require('./my-package/lib');
const libBarIndex = require('./my-package/lib/bar');
const featureFooIndex = require('./my-package/feature/foo');
// const package = require('my-package'); per me use qishtut si bare specifier duhet me qene installed, pra me kon ne node_modules folderin
const package = require('./my-package'); // masi sosht ne node_modules folderin pra sosht installed, athere munem me import ne menyren 'folder as module'

console.log(featureIndex.name);
console.log(libIndex.name);
console.log(libBarIndex.name);
console.log(featureFooIndex.name);
console.log(package.name);

// When the "exports" field is defined, all subpaths of the package are encapsulated and no longer available to importers. For example, require('pkg/subpath.js') throws an ERR_PACKAGE_PATH_NOT_EXPORTED error.

// This encapsulation of exports provides more reliable guarantees about package interfaces for tools and when handling semver upgrades for a package. It is not a strong encapsulation since a direct require of any absolute subpath of the package such as require('/path/to/node_modules/pkg/subpath.js') will still load subpath.js.

// this is the reason why this import below works
const featureBarIndex = require('./my-package/feature/bar');
console.log(featureBarIndex.name);
