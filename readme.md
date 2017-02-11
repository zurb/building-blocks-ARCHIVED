# ZURB Foundation Building Blocks

**Piece together amazing sites faster with Foundation Building Blocks.** ZURB Building Blocks is a pattern library for Foundation UI components. These HTML, CSS, and JS snippets can be plugged into any Foundation project to build faster. Enjoy!

[![devDependency Status](https://david-dm.org/zurb/foundation-zurb-template/dev-status.svg)](https://david-dm.org/zurb/foundation-zurb-template#info=devDependencies)

**Please open all issues with this template on the main [Foundation for Sites](https://github.com/zurb/foundation-sites/issues) repo.**

This is the official ZURB Template for use with [Foundation for Sites](http://foundation.zurb.com/sites). We use this template at ZURB to deliver static code to our clients. It has a Gulp-powered build system with these features:

- Handlebars HTML templates with Panini
- Sass compilation and prefixing
- JavaScript concatenation
- Built-in BrowserSync server
- For production builds:
  - CSS compression
  - JavaScript compression
  - Image compression

## Installation

To use this template, your computer needs:

- [NodeJS](https://nodejs.org/en/) (0.12 or greater)
- [Git](https://git-scm.com/)

### Manual Setup

To manually set up the template, first download it with Git:

```bash
git clone https://github.com/zurb/building-blocks.git
```

Then open the folder in your command line, and install the needed dependencies:

```bash
cd building-blocks
npm i
bower i
```

Finally, run `npm start` to start the project and watch for changes. It will open in your browser at:

```
http://localhost:8000
```

To deploy, run `npm run deploy`.
