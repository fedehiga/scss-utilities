# SCSS Utilities Library

A custom-made SCSS utility library inspired by Tailwind CSS. This library provides a collection of utility classes and mixins to streamline the development of responsive and maintainable styles for your projects.

## Features

- **Utility Classes**: Predefined classes for common CSS properties like margins, paddings, borders, flexbox, and more.
- **Responsive Design**: Built-in support for responsive breakpoints.
- **Customizable**: Easily extend or modify the library using SCSS variables and maps.
- **Lightweight**: Focused on providing only the necessary utilities for your project.
- **Modern CSS**: Includes support for modern CSS features like `gap`, `object-fit`, and more.

## Installation

1) Clone the repository

``git clone https://github.com/fedehiga/scss-utilities.git``

2) Install dependencies

``npm install``

## Usage

1) Import the main SCSS file into your project:

```css
@import "scss/utils.scss";
```

Or just link the compiled CSS in your HTML:

```html
<link rel="stylesheet" href="output/utils.css">
```

2) Use the predefined utility classes in your HTML or extend them as needed.

Example

```html
<div class="container mx-auto p-4">
  <h1 class="text-center text-xl">Welcome to SCSS Utilities</h1>
  <p class="text-left mt-2">This is an example of using utility classes.</p>
</div>
```

## Development

### Commands

**Development Mode**: Automatically compiles SCSS files and watches for changes.

``npm run dev``

**Build for Production**: Compiles and minifies SCSS files for production.

``npm run build``

### File Structure

scss-utils/  
├── scss/  
│   ├── variables/       # SCSS variables for customization  
│   ├── utils.scss      # Main entry point for utilities  
│   ├── properties.scss   # Utility class definitions  
│   ├── engine.scss  # Core mixins and logic  
│   └── config.scss # Configuration settings  
├── output/  
│   └── utils.css  # Compiled CSS output  
├── gulpfile.babel.js   # Gulp tasks for building and watching  
├── package.json # Project metadata and dependencies  
└── README.md # Documentation  

### Customization

You can customize the library by modifying the SCSS variables in the scss/variables/ directory. For example:

- **Breakpoints**: Update the `$responsive` map in `variables/_sizes.scss`.
- **Spacing**: Adjust the `$spacerCount` in `config.scss` or modify the `$spacer` map in `variables/_spacer.scss`.
- **Colors, Fonts, and more**: Extend or override any variable or map to suit your project's needs.
