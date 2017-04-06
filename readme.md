# ZURB Foundation Building Blocks

**Piece together amazing sites faster with Foundation Building Blocks.** ZURB Building Blocks is a pattern library for Foundation UI components. These HTML, CSS, and JS snippets can be plugged into any Foundation project to build faster. Enjoy!

[![devDependency Status](https://david-dm.org/zurb/foundation-zurb-template/dev-status.svg)](https://david-dm.org/zurb/foundation-zurb-template#info=devDependencies)

# What is a Building Block?
Building Blocks are coded UI components designed to be dropped into Foundation projects. Many Building Blocks are based on tried and true patterns that we’ve used in our client projects over the last five years using Foundation.

### Building Blocks are:
- Code that works in any Foundation project (matching version)
- Lightly styled components
- Easy to extend or customize
- Common solutions to layout or component challenges that are not core to the Framework

### A Building Block is NOT:
- A template 
- A theme
- A place to dump code
- Overly stylized

We want these to be code you can add to your website to solve common patterns, build faster, and integrate with your existing styles.

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

# How to Submit a Building Block

**So you want to build a Building Block? Well fear not! You can get in on the action too and get your work featured! We’ve put together a simple guide to submitting a Building Block. Once it’s submitted, we’ll promote your awesomeness to the greater Foundation community because you rock!**

## What Do I Need to Submit A Building Block?
The Building Blocks site is open source just like Foundation, meaning anyone can contribute to it. It’s built on the same Node based build system the ZURB Stack is built on. Submissions are made through GitHub, with pull requests.

### You’ll need:
A sweet Building Block
A GitHub account

### Your computer needs:
NodeJS (6.10.1)
You can clone or download the repo from here: https://github.com/zurb/building-blocks

Using your terminal, change directory into the `building-blocks` project and run
1. `npm install`
then
2. `bower install`

Once the install is complete, in the project directory, you can start the project and have it watch for changes. Run:
`npm start`

This will start the build system and watch for changes. When you save a change, the browser preview will refresh automatically. That’s it for setup!

## Submitting your Building Block
There are just a few simple files needed to submit your Building Block.

- **HTML**: Every Building Block will need an HTML file to demonstrate the uniqueness of the component or layout.
- **SCSS**: You’ll add your custom styles in a SCSS file. You only need your additional styles as Foundation is already being imported for you.
- **JS**: If your component uses custom JavaScript/jQuery you’ll create a JS file and add it there. Again, Foundation JS and jQuery are already included, so only your addition JS is needed if you used any.
- **Image**: A preview image of your Building Block. This will help people get excited about the awesome work you do! See suggestions for great preview images. The should be in a .png format.
- **yml**: You’ll want to describe your Building Block and submit your name. A Yaml file uses a .yml file extension and is where the Building Block name, description, tags and more are stored.

You’ll find the `building-blocks` folder in the root directory of the Building Blocks project. This is where all the Building Blocks that get displayed on the site live.

### Step 1:
Create a branch from which to submit your Building Block from. This will allow you to submit a Pull Request when you’re done so that the Foundation team can review it, offer suggestions and merge it in.
In your terminal, checkout a new branch
`git checkout -b your-branch-name`
### Step 2:
Create a new folder in the Building Blocks folder. Name it the name of your Building Block.
The name should contain the component or type of component it is. For example a card should have Card in the name or a sidebar layout should have Sidebar in the name.

Example: article-card
All your files in the folder will have the same root name
- article-card
- - article-card.html
- - article-card.scss
- - article-card.js
- - article-card.png
- - article-card.yml

### Step 3:
In your Building Block component folder, create your `.html`, `.scss`, `.js` and `.yml` pages.
1. Create a HTML file
- Example: article-card.html
- Paste in your HTML
- Save
2. Create an SCSS file
- Example: article-card.scss
- Paste in your SCSS or CSS
- Save
3. Create an JS file (if applicable)
- Example: article-card.js
- Paste in your JS
- Save
4. Create an YML file 
- Example: article-card.yml
- Add in your Building Block information
- Save
	
Here is a .yml file template you can use:

```
name: 'Short title description'
tags:
  - media
  - blog
  - card
  - animation
category: container
description: Longer description about Building Block, settings, use cases, classes to modify or additional important info.
versions:
  - 6.3.1
  - 6.3.0
author:
  name: Your name
containerClass: container-padded row medium-5 large-3 column
```

5. Add your image to your component’s folder
- Example: article-card.png
- Add the image to the `article-card` folder for this example

**That’s it!**

You can preview your new Building Block on the homepage or go directly to it.
Example URL: http://localhost:8000/building-block/article-card/article-card.html

Looking good? 

### Step 4:
Now it’s time to submit your Building Block. Make sure to add and commit your work. The submit your Pull Request.

## Review Process
Once you submit your Building Block pull request, a member of the Foundation team will review it to add it in. 

Thing we’ll be looking for:
- An image
- The Building Block meets class naming guidelines
- The Building Block works well on all screen sizes
- The .yml file has the proper tags and description.

We'll comment on a the code through GitHub to ask for changes or to let you know it's been added in.

## Container Classes
In order to make sure the Building Block preview is presented well, you can specify container classes to align the content. Here is breakdown of these classes:

### Helper classes: 
- container-padded: adds 1rem top-padding above your Building Block to space it down from the top of the container. Most components will use this. You may leave it out for a component that should be flush with the top like a navigation.
- align-center: this will align a Building Block or columns horizontally in the center of the page.
- text-center: This is useful to align buttons horizontally in the center.

### Grid classes:
You can also use grid classes to constrain the width of your Building Block. This helps keep the markup of the Building Block clean of extraneous markup.
- Example: `containerClass: container-padded row medium-5 large-3 column`

## Submitting a Good Preview Image
More content coming soon...

## Class Naming
More content coming soon...

## Tags
Tags are important for many reasons. They not only tell people about the Building Blocks, but they also help people find others like it. Additionally, the tags are used to match a Building Block to a corresponding docs page to show example of the component in use.

To make it easy, we put together a list of tags to use. You'll find the tag list here: https://docs.google.com/spreadsheets/d/1O9l0PejBSVZypbdtXrzSjHuwn8JJPoQLHxmtlET-O6s/edit?usp=sharing

Some simple rules to follow:
- **Tag the Foundation component** used in this building block. It will then link up to the docs pages for that component.
- **Lowercase** is important so that the tags all match.
- **Keep it relevant.** Many tags are good if they help describe a Building Block. Too many can be misleading. If only a couple tags match, that’s better than adding tags that don’t apply or relate.

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
