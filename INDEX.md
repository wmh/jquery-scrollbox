# ScrollBox v2.0 - File Index & Navigation Guide

Welcome to the modernized ScrollBox repository! This document helps you navigate all the files.

## 📚 Start Here

| Document | Purpose | Read Time |
|----------|---------|-----------|
| **[QUICK_START.md](QUICK_START.md)** | Get started in 5 minutes | ⏱️ 5 min |
| **[README.md](README.md)** | Full documentation | ⏱️ 10 min |
| **[example-modern.html](example-modern.html)** | Live examples | 🎨 Interactive |

## 📖 Documentation

### For New Users
1. **[QUICK_START.md](QUICK_START.md)** - Installation & basic usage
2. **[README.md](README.md)** - Complete API documentation
3. **[example-modern.html](example-modern.html)** - Working examples

### For Existing Users (Upgrading from v1)
1. **[UPGRADE_SUMMARY.md](UPGRADE_SUMMARY.md)** - What's new in v2.0
2. **[CHANGELOG.md](CHANGELOG.md)** - Detailed version history
3. **[ISSUES_RESOLVED.md](ISSUES_RESOLVED.md)** - Bug fixes explained

### For Contributors
1. **[CONTRIBUTING.md](CONTRIBUTING.md)** - How to contribute
2. **[README.md](README.md)** - API reference

## 🔧 Source Files

### Modern Version (Recommended)
- **[scrollbox.js](scrollbox.js)** - Vanilla JavaScript ES6+ version (10KB)
- **[scrollbox.d.ts](scrollbox.d.ts)** - TypeScript type definitions

### Legacy Version (jQuery)
- **[jquery.scrollbox.js](jquery.scrollbox.js)** - jQuery plugin version
- **[jquery.scrollbox.min.js](jquery.scrollbox.min.js)** - Minified jQuery version

## ⚙️ Configuration Files

### Build System
- **[package.json](package.json)** - NPM configuration & dependencies
- **[rollup.config.js](rollup.config.js)** - Rollup bundler configuration
- **[.babelrc](.babelrc)** - Babel transpiler settings
- **[.eslintrc.json](.eslintrc.json)** - ESLint code quality rules

### Legacy Build (Can be removed)
- **[Gruntfile.js](Gruntfile.js)** - Old Grunt configuration (deprecated)

### CI/CD
- **[.github/workflows/ci.yml](.github/workflows/ci.yml)** - GitHub Actions workflow
- **[.travis.yml](.travis.yml)** - Old Travis CI config (deprecated)

## 📁 Directory Structure

```
jquery-scrollbox/
├── 📚 Documentation
│   ├── INDEX.md                 (this file)
│   ├── README.md               (main documentation)
│   ├── QUICK_START.md          (getting started)
│   ├── CHANGELOG.md            (version history)
│   ├── UPGRADE_SUMMARY.md      (v1 → v2 guide)
│   ├── ISSUES_RESOLVED.md      (bug fixes)
│   └── CONTRIBUTING.md         (contribution guide)
│
├── 🔧 Source Code
│   ├── scrollbox.js            (modern vanilla JS)
│   ├── scrollbox.d.ts          (TypeScript definitions)
│   ├── jquery.scrollbox.js     (jQuery version)
│   └── jquery.scrollbox.min.js (minified jQuery)
│
├── 🎨 Examples
│   ├── example-modern.html     (modern examples)
│   └── demos/                  (legacy demos)
│
├── ⚙️ Configuration
│   ├── package.json            (npm config)
│   ├── rollup.config.js        (bundler)
│   ├── .babelrc               (transpiler)
│   ├── .eslintrc.json         (linter)
│   └── .github/workflows/      (CI/CD)
│
└── 📄 Legal
    └── LICENSE                 (MIT License)
```

## 🎯 Quick Access by Task

### I want to...

#### Use ScrollBox in my project
→ Read [QUICK_START.md](QUICK_START.md)

#### See working examples
→ Open [example-modern.html](example-modern.html) in a browser

#### Learn the full API
→ Read [README.md](README.md)

#### Upgrade from v1.x
→ Read [UPGRADE_SUMMARY.md](UPGRADE_SUMMARY.md)

#### Know what bugs were fixed
→ Read [ISSUES_RESOLVED.md](ISSUES_RESOLVED.md)

#### Contribute to the project
→ Read [CONTRIBUTING.md](CONTRIBUTING.md)

#### Use with TypeScript
→ Import [scrollbox.d.ts](scrollbox.d.ts) (auto-loaded by TypeScript)

#### Build from source
→ Run `npm install && npm run build`

#### Understand version changes
→ Read [CHANGELOG.md](CHANGELOG.md)

## 🆕 What's New in v2.0?

### Major Changes
- ✅ Vanilla JavaScript (no jQuery required)
- ✅ Modern ES6+ class syntax
- ✅ TypeScript support
- ✅ Modern build system (Rollup + Babel)
- ✅ GitHub Actions CI/CD
- ✅ Bug fixes for issues #5, #29, #37, #38

### New Files
- `scrollbox.js` - Modern vanilla JS version
- `scrollbox.d.ts` - TypeScript definitions
- `example-modern.html` - Modern examples
- All documentation files

### Updated Files
- `README.md` - Completely rewritten
- `package.json` - Modern dependencies

See [CHANGELOG.md](CHANGELOG.md) for complete details.

## 📊 File Statistics

| Category | Files | Size |
|----------|-------|------|
| Documentation | 7 | ~25KB |
| Source Code | 4 | ~28KB |
| Configuration | 5 | ~3KB |
| Examples | 2 | ~15KB |
| **Total** | **18** | **~71KB** |

## 🔗 External Links

- [GitHub Repository](https://github.com/wmh/scrollbox)
- [NPM Package](https://www.npmjs.com/package/jquery-scrollbox)
- [Demo Site](http://wmh.github.io/scrollbox/)
- [Issues](https://github.com/wmh/scrollbox/issues)

## 💡 Tips

1. **New project?** Start with `scrollbox.js` (vanilla JS)
2. **Legacy project?** Keep using `jquery.scrollbox.js`
3. **TypeScript?** Types are automatically detected
4. **Contributing?** Read [CONTRIBUTING.md](CONTRIBUTING.md) first
5. **Stuck?** Open an issue on GitHub

## 📝 Version Information

- **Current Version**: 2.0.0
- **Release Date**: December 3, 2025
- **License**: MIT
- **Author**: Hunter Wu

---

**Need help?** Open an issue or read the documentation!
