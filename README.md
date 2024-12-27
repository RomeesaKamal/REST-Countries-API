![HTML](https://img.shields.io/badge/-HTML-orange) ![CSS](https://img.shields.io/badge/-CSS-blue) ![JavaScript](https://img.shields.io/badge/-JavaScript-yellow)

![Design preview for the REST Countries API with color theme switcher coding challenge](./design/desktop-preview.jpg)

#  REST Countries API with color theme switcher solution

The Countries Explorer Project is an interactive web app that showcases detailed information about countries worldwide. Powered by the REST Countries API, users can browse, search, and explore country details like flags, population, capital, region, and more. Featuring responsive design, dark mode, and an intuitive interface, it ensures a seamless user experience. Dive deeper with interactive maps, favorite countries, and data visualization, making this project both engaging and educational! 🌍✨



## Table of contents
  - [Features](#features)
- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Getting Started](#getting-started)
  - [Usage](#usage)
  - [Setup](#setup)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)
  - [Live Demo](#-live-demo)
  - [Contributing](#-contributing)
  - [Show your support](#show-your-support)
  - [Acknowledgments](#acknowledgments)
  - [License](#-license)

## Features

### Core Features

#### Home Page:

- Display a list of all countries with key details (e.g., name, flag, region, and population).
- Implement a search bar to allow users to search for countries by name.
- Add filter options (e.g., filter by region, population range, etc.).
- Country Details Page:

#### Display comprehensive details such as:

- Flag
- Official Name
- Population
- Capital
- Region and Subregion
- Area
- Languages
- Currencies
- Timezones
- Borders (neighboring countries)
- Add an interactive map using a mapping library like Leaflet.js.

#### Routing:

- Use query parameters or dynamic routing to open a detailed page for the selected country (e.g., /country.html?name=Switzerland).
- Enhanced User Experience

#### Responsive Design:

- Ensure the project looks good on all devices (desktop, tablet, mobile).
- Use CSS Flexbox or Grid for layout.

#### Dark Mode:

- Add a toggle switch to switch between light and dark themes.

#### Back Button:

- Provide a button to navigate back to the home page from the country details page.
- API and Data Handling

#### Error Handling:

##### Show user-friendly error messages if:
- The API fails to load.
- A country is not found.
- Include a loading spinner while fetching data.

#### Pagination or Infinite Scroll:

- If there are many countries, implement pagination or infinite scroll to improve performance.
- Visual and Interactive Features

#### Interactive Map Integration:

- Add an interactive map to the country details page using Leaflet.js or Google Maps API, pinpointing the country's location.

#### Flag Viewer:

- Allow users to click on the flag to view it in full-screen.


## Overview

### The challenge

Users should be able to:

- See all countries from the API on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode *(optional)*

### Getting Started

To get a local copy up and running follow these simple steps.

Prerequisites
VIsual Studio Code.
A Web Browser (preferably Brave)

### Setup

Clone the GitHub Repository

- git clone "https://github.com/RomeesaKamal/REST-Countries--API-.git"

### Usage

Start your server by clicking Go Live

### Links

- Solution URL: [Solution URL here](https://github.com/RomeesaKamal/REST-Countries--API-)
- Live Site URL: [Live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Styled Components](https://styled-components.com/) - For styles


### What I learned

#### API Integration:

- Fetching and handling data from a public API using fetch() or similar tools.
- Managing asynchronous operations with .then() and async/await.

#### DOM Manipulation:

- Dynamically creating and appending elements like country cards to the DOM.
- Updating content dynamically based on user interactions.

#### Routing and Navigation:

- Passing data through query parameters (e.g., /country.html?name=Switzerland) for dynamic page updates.

#### Responsive Web Design:

- Using CSS techniques (e.g., Flexbox or Grid) to create layouts that adapt to different screen sizes.

#### User Interface Design:

- Designing interactive features like search bars, filters, and back buttons for a smooth user experience.
- Implementing themes like dark mode for accessibility.

#### Error Handling:

- Managing potential API errors and showing user-friendly messages.
- Adding loading indicators for better UX during data fetching.

#### Optimization Techniques:

- Optimizing API calls to improve performance.
- Caching data using localStorage or similar methods.

#### JavaScript Skills:

- Strengthening core concepts like loops, conditionals, and event handling.
- Learning modular code practices for better scalability.

#### Advanced Features:

- Implementing interactive elements like maps or data visualizations with libraries.
- Enhancing functionality with comparison tools or favorite lists.

#### Problem-Solving:

- Debugging and troubleshooting challenges throughout the project.
- Thinking creatively to add features and improve usability.


### Continued development

#### 1. Enhance User Experience

- **Add Animations**: Use CSS or libraries like GSAP to animate country cards, page transitions, or map interactions.
- Offline Access: Implement a Service Worker to cache API responses and make the app accessible offline.
- **Customizable Themes**: Expand dark mode to include more themes (e.g., light, sepia).
- **Accessibility Improvements**: Ensure compliance with WCAG standards, including keyboard navigation and screen reader support.

#### 2. Expand Functionality

- **Favorites List**: Allow users to save their favorite countries locally using localStorage or IndexedDB.
- **Country Comparison**: Let users select multiple countries to compare side by side.
Data Visualizations: Use libraries like Chart.js or D3.js to display population growth, GDP, or other stats.
- **Multilingual Support**: Add support for UI translation and localized data display.
- **Weather Integration**: Fetch and display current weather data for the selected country’s capital using an API like OpenWeatherMap.

#### 3. Improve Performance

- **Debounced Search**: Optimize the search bar with debouncing to avoid excessive API calls.
- **API Caching**: Cache API responses for faster subsequent loads and reduced network usage.
- **Lazy Loading**: Lazy load images (flags) for faster initial page loads.
- **Pagination**: If displaying all countries is slow, implement pagination or infinite scrolling.

#### 4. Introduce Advanced Features

- **Interactive Map**: Add an interactive map on the details page to show the country’s exact location using Leaflet.js or Google Maps API.
- **News Integration**: Show recent news or events related to the selected country using a news API like NewsAPI.
- **Historical Data**: Fetch historical data (population, GDP, etc.) for detailed insights.
- **Events Calendar**: Show upcoming holidays or significant events for each country.

#### 5. Modularize Code

- **Refactor Code**: Organize your codebase into smaller, reusable functions or modules. Consider using a framework like React or Vue for scalability.
- **Use Version Control**: Start using Git and host your code on GitHub to track changes and collaborate.

#### 6. Deploy and Share

- **Deployment**: Host your project on platforms like Netlify, Vercel, or GitHub Pages for live access.
- **Custom Domain**: Link a custom domain to your project for a professional touch.
- **SEO Optimization:** Add meta tags, keywords, and descriptions for better search engine ranking.

#### 7. Seek Feedback
- Share your project with friends, mentors, or on developer forums like Reddit, Hashnode, or Dev.to.
- Incorporate feedback to improve features, fix bugs, or optimize usability.

#### 8. Learn and Implement New Tech

- **Frontend Frameworks:** Consider migrating to React, Vue, or Svelte for better scalability and advanced features.
- **Backend Integration:** Create a custom backend with Node.js or Python to handle advanced features like user authentication or storing favorites on a server.
- **Database Integration:** Use a database like MongoDB or Firebase to store and manage additional data.

## 🌎 Live Demo:

- [Live Demo Link](romeesakamal.github.io/Recipe-website/)

## Author

### 👤 **Romeesa Kamal**

- GitHub: [@kamalromeesa](https://github.com/RomeesaKamal/)
- Fronted Mentor: [@Romeesakamal](https://www.frontendmentor.io/profile/RomeesaKamal)
- Linkedin: [@Romeesakamal](https://www.linkedin.com/in/romeesa-kamal-7864b8342/)


## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the issues page.

## Show your support

Give a ⭐️ if you like this project!

## Acknowledgments

- Thanks to the [Mujeeb ur Rehman](https://github.com/Mujeeb4582/) for the great curriculum.
- Thanks to the Code Reviewer(s) for the insightful feedback.


## 📝 License

This project is MIT licensed.

_NOTE: we recommend using the [MIT license](https://choosealicense.com/licenses/mit/) - you can set it up quickly by [using templates available on GitHub](https://docs.github.com/en/communities/setting-up-your-project-for-healthy-contributions/adding-a-license-to-a-repository). You can also use [any other license](https://choosealicense.com/licenses/) if you wish._


