# Changelog

All notable changes to this project will be documented in this file.

## [2.0.0] - 2025-12-03

### 🎉 Major Release - Complete Modernization

#### Added
- ✨ **Vanilla JavaScript version** - Zero dependencies, pure ES6+
- 🔌 Optional jQuery plugin wrapper for backward compatibility
- 📦 Modern build system with Rollup
- 🧪 ESLint configuration for code quality
- 🔄 Babel configuration for ES5 transpilation
- 📚 Comprehensive documentation updates
- 🌟 New example files (modern vanilla JS)
- 🚀 GitHub Actions CI/CD (replaces Travis CI)
- 🎯 Module exports for ES modules and CommonJS
- 🛠️ `destroy()` method for cleanup
- 📝 Detailed migration guide

#### Fixed
- 🐛 Chrome browser scrollbar jumping issue (#38)
- 🔧 Linear scroll breaking on browser zoom/resize (#37)
- ⚡ Event parameter bug in `speedUp`/`speedDown`/`updateConfig` (#29)
- 🎨 Better margin calculation for smooth scrolling (#5)

#### Changed
- 🔨 Complete rewrite in ES6+ class syntax
- 📦 Updated package.json with modern dependencies
- 🗑️ Removed Grunt (replaced with Rollup + npm scripts)
- 📖 Comprehensive README update
- 🎨 Improved code organization and maintainability
- ⚡ Better performance with modern JavaScript features

#### Deprecated
- ⚠️ Grunt-based build system (use `npm run build` instead)
- ⚠️ Old jQuery-only approach (vanilla JS recommended)

#### Breaking Changes
- 📌 Main entry point changed from `jquery.scrollbox.js` to `scrollbox.js`
- 📌 Package version bumped to 2.0.0
- 📌 Requires Node.js >= 14.0.0 for development
- 📌 jQuery is now optional (not required for vanilla JS version)

### Migration Notes

**For jQuery users:**
- Minimal changes required
- Include `jquery.scrollbox.js` instead of the main file
- All existing APIs remain compatible

**For new projects:**
- Use the new `scrollbox.js` with vanilla JavaScript
- No jQuery dependency needed
- Modern, cleaner API with ES6 classes

## [1.4.2] - Previous releases

See git history for older changes.
