# Emile Wong's Portfolio Website

A professional portfolio website showcasing web development projects and skills, built with Bootstrap 5 and Sass.

<img src="./images/screen.png" alt="Portfolio Website Screenshot" />

## Features

- Modern, responsive design with dark/light contrast
- Full-height hero section with typewriter effect
- About section with profile information
- Skills展示与进度条可视化
- Project gallery with Lightbox modals
- Font Awesome icons integration
- Customizable Sass variables
- Mobile-friendly navigation

## Technologies Used

- HTML5
- CSS3/Sass
- JavaScript
- Bootstrap 5
- Font Awesome
- Lightbox.js

## Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/en/) (v14 or higher)
- npm (usually comes with Node.js)

### Installation

1. Clone this repository
```bash
git clone https://github.com/yourusername/portfolio-website.git
cd portfolio-website
```

2. Install dependencies
```bash
npm install
```

3. Build CSS from Sass
```bash
npm run sass:build
```

4. Run development server with Sass watch
```bash
npm run sass:watch
```

5. Open `index.html` in your browser

## Customization

### Changing Colors
Modify the color variables in <mcfile name="bootstrap.scss" path="scss/bootstrap.scss"></mcfile>:
```scss
// Colors series 1
$primary: #cc005f;
$secondary: #990047;
$dark:#000;
$light: #f4f4f4;
```

### Adding Projects
1. Add project images to the <mcfolder name="images" path="images/"></mcfolder> directory
2. Update the project section in <mcfile name="index.html" path="index.html"></mcfile>

### Updating Personal Information
Edit the following sections in <mcfile name="index.html" path="index.html"></mcfile>:
- Header section (name and title)
- About section
- Profile information
- Contact details

## Deployment

To deploy this website to GitHub Pages:

1. Create a `gh-pages` branch
2. Push all files to the branch
3. In your repository settings, set GitHub Pages source to the `gh-pages` branch

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgments

- Bootstrap 5 documentation
- Font Awesome icons
- Lightbox.js library
- Traversy Media for initial template inspiration
