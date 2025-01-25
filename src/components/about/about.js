import './about.css';

export default function AboutDiv() {
  const container = document.createElement('div');
  container.className = 'about-section';

  const title = document.createElement('h1');
  title.className = 'about-title';
  title.textContent = 'About The Rustic Table';

  const description = document.createElement('p');
  description.className = 'about-description';
  description.textContent = 
    'The Rustic Table is a restaurant that serves delicious food in a cozy and welcoming environment. ' +
    'We use fresh and locally sourced ingredients to create dishes that will satisfy your cravings. ' +
    'Our menu includes a variety of options for breakfast, lunch, and dinner. ' +
    'We also offer catering services for special events. ' +
    'One of our goals is to support local farmers and businesses, so we strive to use their products ' +
    'in our recipes whenever possible. Our restaurant aims to be a place where you can enjoy ' +
    'great food in a peaceful and friendly atmosphere. The colors and decor of our dining area ' +
    'are inspired by nature, creating a warm and inviting space for you to relax and enjoy your meal.';
  
  const disclaimerTitle = document.createElement('h2');
  disclaimerTitle.className = 'about-disclaimer-title';
  disclaimerTitle.textContent = 'Disclaimer';

  const disclaimer = document.createElement('p');
  disclaimer.className = 'about-disclaimer';
  disclaimer.innerHTML = 
    'This is a fictional restaurant created for the purpose of ' +
    '<a href="https://www.theodinproject.com/lessons/node-path-javascript-restaurant-page">this</a> ' +
    'project. The information provided on this website is not real: the menu items, prices, ' +
    'and other details are purely fictional and do not represent an actual business. ' +
    'The images used in this project are from Unsplash and are used for illustrative purposes only. ' +
    'Below you can find the link to the Unsplash profile of the photographer who took the ' +
    'background image. The logo of the restaurant is also fictional.';
  
  const contact = document.createElement('p');
  contact.className = 'about-contact';
  contact.innerHTML = 
    'If you are interested in this project, check out the ' +
    '<a href="https://www.github.com/Anibvl-17/odin-restaurant-page">GitHub Repo</a>!';

  container.append(title, description, disclaimerTitle, disclaimer, contact);

  return container;
}