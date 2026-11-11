# Sky Hawk – School Management System

A responsive landing page for **Sky Hawk**, a cloud-based school management system. The page presents the platform's features and services to schools, teachers, students and parents. It is built with plain HTML, CSS and JavaScript, with no frameworks or build tools.

## Features

- **Responsive design** – works on desktop, tablet and mobile screens
- **Mobile navigation** – hamburger menu with a close button
- **Hero section** – headline, call-to-action buttons and floating statistics cards
- **Features section** – six core capabilities: student, teacher, attendance, fee, examination and academic report management
- **About section** – school image, award card and key statistics
- **Services section** – six detailed modules with checklists
- **Testimonials slider** – previous and next arrows and clickable dots
- **Contact form** – name, email, subject and message with built-in validation
- **Footer** – quick links, modules, social icons and a newsletter form

## Technologies Used

- HTML5
- CSS3 (Flexbox, Grid, CSS variables, media queries)
- JavaScript (vanilla)
- [Google Fonts](https://fonts.google.com/) – Poppins

## Project Structure

```
School-Management/
├── index.html           # Main page (all sections)
├── css/
│   └── style.css        # All styles and responsive rules
├── js/
│   └── main.js          # Mobile menu, testimonials slider, form messages
└── assets/
    └── images/
        ├── hero-students.jpg
        ├── about school.jpg
        └── logo.svg
```

## Getting Started

No installation is needed.

1. Clone the repository:
   ```bash
   git clone https://github.com/ahmadmush72-pixel/School-Management.git
   ```
2. Open the project folder:
   ```bash
   cd School-Management
   ```
3. Open `index.html` in your browser. You can also use the Live Server extension in VS Code.

## Responsive Breakpoints

| Screen size | Layout |
|-------------|--------|
| Above 992px | 3-column cards, full navigation bar |
| Up to 992px | 2-column cards |
| Up to 868px | Hamburger menu, stacked hero and about sections |
| Up to 600px | 1-column cards, smaller headings and spacing |
| Up to 480px | Stacked buttons and compact layout for small phones |

## Notes

- The contact form and newsletter form are front-end only. They show a thank-you message but don't send data anywhere, because there is no backend yet.
- The contact details, testimonials and statistics are sample content for demonstration.

## Future Improvements

- Login and Register pages
- Admin, teacher and parent dashboards
- Backend and database integration (for example Node.js and MongoDB)
- Working contact form with email delivery

## Author

**Mushtaq Ahmad**
BS Information Technology student, University of Swat
GitHub: [@ahmadmush72-pixel](https://github.com/ahmadmush72-pixel)

## License

This project was created for learning and portfolio purposes.
