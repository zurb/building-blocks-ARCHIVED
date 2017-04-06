# ZURB Foundation Building Blocks

**Piece together amazing sites faster with Foundation Building Blocks.** ZURB Building Blocks is a pattern library for Foundation UI components. These HTML, CSS, and JS snippets can be plugged into any Foundation project to build faster. Enjoy!

[![devDependency Status](https://david-dm.org/zurb/foundation-zurb-template/dev-status.svg)](https://david-dm.org/zurb/foundation-zurb-template#info=devDependencies)


# How to use a Building Block

Building Blocks are easy to use in your projects whether you’re using a CSS version or the powerful ZURB Stack. Below, we’ve outlined how to get a Building Block into your project in a snap and build faster.

## Copy it

Like a Building Block? You can copy the HTML and CSS/SCSS and JS (if applicable) from the Building Block detail page. You’ll see a responsive preview and any relevant information at the top of the page. Below the preview you’ll find the code for the component.

The HTML, CSS, and JS toggles let you focus on one section at a time if you’d like.

![](https://drive.google.com/a/zurb.com/file/d/0B3omzFyAxfEAQTRyMzRFTnB4UFk/view?usp=drivesdk)

You can copy the the code from each code container using the handy copy button.

![](https://drive.google.com/a/zurb.com/file/d/0B3omzFyAxfEAQ1R1aXJtcGd3Nms/view?usp=drivesdk)

If you are using CSS vs SCSS, you can toggle to the compiled CSS using this handy toggle:

![](https://drive.google.com/a/zurb.com/file/d/0B3omzFyAxfEATnJJUWh1T2U5b0U/view?usp=drivesdk)

If you’re using the CSS version of Foundation, it’s best to add the CSS to your app.css file that is included with the downloaded Foundation CSS project. You can make any style overrides from there.

If you’re using the ZURB Stack Sass version, a custom SCSS partial is the best place to add the Building Block’s SCSS. The JS can be added to `app.js`. But if you’re a fan of optimization, we suggest you use the Foundation CLI install to do all this automatically for you.

## Download a kit
Looking to start with a Building Block kit? Kits are large collections of Building Blocks that are matched to each other for a specific type of Site, App, or use case. To save you time over the copy/paste method of individual Building Blocks, you can download a zip file of the kit. For each Building Block, it will come with:
- Individual HTML files
- Individual CSS files for each
- Individual SCSS files in case you want to manually add them to a Sass project
- Individual JS files (if applicable)

Again, if you’re using the ZURB Stack, the Foundation CLI can do this for you. Find out how below.

## Foundation CLI Install
This is where a powerful workflow like the ZURB Stack really ups your game. You want to add a Building Block to your project to show an interaction or build a page in record time. Imagine if you could add a Building Block or even an entire kit of Building Blocks to your site with a single command. You don’t have to imagine because an update to the Foundation CLI allows you to do just that.

Foundation’s CLI install will:
- Create you a Panini HTML partial with the Building Block’s HTML
- Create you a SCSS partial with the Building Block’s SCSS and also add the `@import` for you in your `app.scss` file.
- Create you an JS file with the Building Block’s JS and link it up in the `config.yml`

Bam! Add your Panini include on your page or layout and you’re ready to rock.

In your terminal, make sure you’re in you ZURB Stack project.

The available commands are:
`foundation blocks list` - List out the names of all the available Building Blocks. It’s a lot!
`foundation blocks install [blockname]` - installs an individual Building Block
`foundation kits list` -  List out the names of all the available Building Block kits.
`foundation kits install [kitname]` - installs all the Building Blocks in the kit

## Dependencies 

Building Blocks are made to drop into any Foundation project and work. Therefore Foundation is a dependency (needs it to work as expected).

Since Foundation’s interactive components are build using jQuery, jQuery is a dependency. Every Foundation download or Install comes with this. jQuery is not required for CSS/SCSS only components or non-js components in Foundation.

Some Building Blocks use icon fonts to make them look nicer or convey intention. You can use the same icon fonts by adding them to your project.
You can download FontAwesome icons here: http://fontawesome.io/

Or add this CDN to the head of your pages or layout:
`<link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet">`

---

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
