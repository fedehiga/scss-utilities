# SCSS Utilities Library

A custom-made SCSS utility library inspired by Tailwind CSS. This library provides a collection of utility classes and mixins to streamline the development of responsive and maintainable styles for your projects.

## Features

- **Utility Classes**: Predefined classes for common CSS properties like margins, paddings, borders, flexbox, and more.
- **Responsive Design**: Built-in support for responsive breakpoints.
- **Customizable**: Easily extend or modify the library using SCSS variables and maps.
- **Lightweight**: Focused on providing only the necessary utilities for your project.
- **Modern CSS**: Includes support for modern CSS features like `gap`, `object-fit`, and more.

## Installation

### 1. Clone the repository

``git clone https://github.com/fedehiga/scss-utilities.git``

### 2. Install dependencies

``npm install``

## Usage

### 1. Import the main SCSS file into your project

```css
@import "scss/utils.scss";
```

Or just link the compiled CSS in your HTML:

```html
<link rel="stylesheet" href="output/utils.css">
```

### 2. Use the predefined utility classes in your HTML or extend them as needed

Example

```html
<div class="container mx-auto p-4 text-left lg:text-center">
  <h1 class="text-xl">Welcome to SCSS Utilities</h1>
  <p class="mt-2">This is an example of using utility classes.</p>
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
│   ├── variables/        # SCSS variables for customization
│   ├── variables.scss    # import all of variables/ sccs files
│   ├── utils.scss        # Main entry point for utilities  
│   ├── properties.scss   # Utility class definitions  
│   ├── engine.scss       # Core mixins and logic  
│   └── config.scss       # Configuration settings  
├── output/  
│   └── utils.css         # Compiled CSS output  
├── gulpfile.babel.js     # Gulp tasks for building and watching  
├── package.json          # Project metadata and dependencies  
└── README.md             # Documentation  

### Customization

#### Variables

You can customize the library by modifying the SCSS variables in the `scss/variables/` directory. For example:

- **Breakpoints**: Update the `$responsive` map in `variables/_sizes.scss`.
- **Spacing**: Adjust the `$spacerCount` in `config.scss` or modify the `$spacer` map in `variables/_spacer.scss`.
- **Colors, Fonts, and more**: Extend or override any variable or map to suit your project's needs.

#### Properties

In `properties.scss`, you can:

- Customize the output name of the classes.
- Define the support of responsive mode for the groups of utilities
- Use *utility_bare* instead of *utility* to strip the prefix from the name, ex: 'block' instead of 'display-block'. In this case, you don't need to specify the `$class` value.
- Set *!important* for a group of utilities.

#### Your own custom classes

You can add your own custom css classes in `utils.scss`

## References

### Display Utilities

- `container` - container with responsive max-width
- `inline`, `inline-block`, `block`, `flex`, `grid`, `inline-flex`, `hidden` - display modes

### Position Utilities

- `static`, `relative`, `absolute`, `fixed`, `sticky` - position modes
- `top-0`, `top-1-2`, `top-full`, `top-auto` - top offsets
- `right-0`, `right-1-2`, `right-full`, `right-auto` - right offsets
- `bottom-0`, `bottom-1-2`, `bottom-full`, `bottom-auto` - bottom offsets
- `left-0`, `left-1-2`, `left-full`, `left-auto` - left offsets

### Background Utilities

- `bg-auto`, `bg-cover`, `bg-contain` - background sizes
- `bg-left`, `bg-right`, `bg-center`, `bg-top`, `bg-bottom` - background position
- `bg-top-left`, `bg-top-right`, `bg-bottom-left`, `bg-bottom-right` - background position (combined)
- `bg-repeat`, `bg-no-repeat`, `bg-repeat-x`, `bg-repeat-y` - background repeat
- `bg-transparent` - background colors

### Z-Index Utilities

- `z-auto`, `z-0`, `z-1`, `z-2`, `z-3`, `z-4`

### List Style Utilities

- `list-none`, `list-disc`, `list-decimal` - List types
- `list-inside`, `list-outside` - List position

### Overflow & Visibility

- `overflow-auto`, `overflow-hidden`
- `visibility-visible`, `visibility-hidden`

### Box Shadow Utilities

- `shadow-default`, `shadow-sm`, `shadow-md`, `shadow-lg`, `shadow-xl`, `shadow-xxl`
- `shadow-inner`, `shadow-none`

### Border Utilities

**Border Style**:

- `border-solid`, `border-none`
- `border-t-solid`, `border-t-none` - Top border
- `border-b-solid`, `border-b-none` - Bottom border
- `border-s-solid`, `border-s-none` - Start (left) border
- `border-e-solid`, `border-e-none` - End (right) border

**Border Width**:

- `border-0`, `border-1`, `border-2`, `border-3`

**Border Radius**:

- `rounded-none`, `rounded-full`, `rounded-circle`
- `rounded-xs`, `rounded-sm`, `rounded-md`, `rounded-lg`, `rounded-xl`, `rounded-2xl`, `rounded-3xl`, `rounded-4xl`

### Size Utilities

**Width**:

- `w-auto`, `w-full`, `w-fit`, `w-min`, `w-max`
- `w-1-4`, `w-1-3`, `w-1-2`, `w-2-3`, `w-3-4`

**Height**:

- `h-auto`, `h-full`, `h-fit`, `h-min`, `h-max`
- `h-vh`, `h-dvh`

**Aspect Ratio**:

- `aspect-square`, `aspect-3-2`, `aspect-2-3`, `aspect-16-9`, `aspect-9-16`

### Object Fit Utilities

- `object-none`, `object-fill`, `object-cover`

### Text Utilities

**Text Alignment** (responsive):

- `text-left`, `text-right`, `text-center`

**Text Decoration**:

- `no-underline`, `underline`, `line-through`

**Text Transform**:

- `lowercase`, `uppercase`, `capitalize`

**Font Size** (responsive):

- `text-xs`, `text-sm`, `text-md`, `text-base`, `text-lg`, `text-xl`
- `text-2xl`, `text-3xl`, `text-4xl`, `text-5xl`, `text-6xl`, `text-7xl`

**Font Style**:

- `font-italic`, `font-normal`

**Font Weight**:

- `font-light`, `font-regular`, `font-medium`, `font-semibold`, `font-bold`, `font-extrabold`

**Font Family**:

- `font-sans`, `font-serif`, `font-mono`

### Line Height Utilities

- `leading-normal`, `leading-none`, `leading-barely`, `leading-tight`, `leading-snug`, `leading-half`, `leading-relaxed`, `leading-loose`

### Whitespace Utilities

- `whitespace-normal`, `whitespace-nowrap`, `whitespace-wrap`, `whitespace-pre`, `whitespace-break-spaces`

### Flexbox Utilities

**Flex Direction** (responsive):

- `flex-row`, `flex-col`, `flex-row-reverse`, `flex-col-reverse`

**Flex Wrap** (responsive):

- `flex-wrap`, `flex-nowrap`, `flex-wrap-reverse`

**Justify Content** (responsive):

- `justify-start`, `justify-end`, `justify-center`, `justify-between`, `justify-around`, `justify-evenly`

**Align Items** (responsive):

- `items-start`, `items-end`, `items-center`, `items-baseline`, `items-stretch`

**Align Content** (responsive):

- `align-content-start`, `align-content-end`, `align-content-center`, `align-content-between`, `align-content-around`, `align-content-stretch`

**Align Self** (responsive):

- `align-self-auto`, `align-self-start`, `align-self-end`, `align-self-center`, `align-self-baseline`, `align-self-stretch`

**Flex Grow** (responsive):

- `grow-0`, `grow-1`, `grow-2`, `grow-auto`

**Flex Order** (responsive):

- `order-0`, `order-1`, `order-2`, `order-first`, `order-last`, `order-none`

**Flex Basis** (responsive):

- `basis-auto`, `basis-full`, `basis-75`, `basis-50`, `basis-33`, `basis-25`

**Flex Break**:

- `flex-break`

### Grid Utilities

**Grid Columns** (responsive):

- `grid-cols-auto`, `grid-cols-0`, `grid-cols-1`, `grid-cols-2`, `grid-cols-3`, `grid-cols-4`, `grid-cols-5`, `grid-cols-6`, `grid-cols-7`, `grid-cols-8`

### Gap Utilities (responsive)

- `gap-auto`, `gap-0` to `gap-16` (increments of 0.25rem)

### Margin Utilities (responsive)

- `m-auto`, `m-0` to `m-16` - All sides
- `mt-auto`, `mt-0` to `mt-16` - Top margin
- `mb-auto`, `mb-0` to `mb-16` - Bottom margin
- `ml-auto`, `ml-0` to `ml-16` - Left margin
- `mr-auto`, `mr-0` to `mr-16` - Right margin
- `mx-auto`, `mx-0` to `mx-16` - Horizontal margins
- `my-auto`, `my-0` to `my-16` - Vertical margins

### Padding Utilities (responsive)

- `p-auto`, `p-0` to `p-16` - All sides
- `pt-auto`, `pt-0` to `pt-16` - Top padding
- `pb-auto`, `pb-0` to `pb-16` - Bottom padding
- `pl-auto`, `pl-0` to `pl-16` - Left padding
- `pr-auto`, `pr-0` to `pr-16` - Right padding
- `px-auto`, `px-0` to `px-16` - Horizontal padding
- `py-auto`, `py-0` to `py-16` - Vertical padding

### Responsive Breakpoints

All utilities support responsive prefixes:

- `sm:` - Small screens (576px and up)
- `md:` - Medium screens (768px and up)
- `lg:` - Large screens (1024px and up)
- `xl:` - Extra large screens (1280px and up)

Example: `sm:flex-col`, `md:text-lg`, `lg:grid-cols-3`, `xl:p-8`
