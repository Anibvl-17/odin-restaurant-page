import './menu.css';
import breakfastImage from '../../img/breakfast.jpg';
import lunchImage from '../../img/lunch.jpg';
import dinnerImage from '../../img/dinner.jpg';

export default function MenuDiv() {
  const container = document.createElement('div');
  container.className = 'menu-section';

  const title = document.createElement('h1');
  title.className = 'menu-title';
  title.textContent = 'Our Menu';

  const menuWrapper = document.createElement('div');
  menuWrapper.className = 'menu-wrapper';

  const breakfast = createMenuItem(
    'Breakfast',
    'Start your day with our delicious breakfast options. From fluffy pancakes to savory omelettes, ' +
      'we have something for every taste.',
    10.99,
    breakfastImage,
    'https://unsplash.com/es/@calumlewis?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
    'Calum Lewis',
    'https://unsplash.com/es/fotos/plato-de-ceramica-azul-y-blanco-con-tortitas-8Nc_oQsc2qQ?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"'
  );

  const lunch = createMenuItem(
    'Lunch',
    'Enjoy a light lunch with our selection of fresh salads, hearty sandwiches, and delicious soups. ' +
      'Perfect for a midday break.',
    16.99,
    lunchImage,
    'https://unsplash.com/es/@bonvivant?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
    'Bon Vivant',
    'https://unsplash.com/es/fotos/plato-de-ramen-qom5MPOER-I?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'
  );

  const dinner = createMenuItem(
    'Dinner',
    'Indulge in a gourmet dinner experience with our exquisite entrees, decadent desserts, and fine wines.',
    8.99,
    dinnerImage,
    'https://unsplash.com/es/@allthestories?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash',
    'Storiès',
    'https://unsplash.com/es/fotos/plato-de-verduras-en-plato-de-ceramica-blanca-v1rUvnVMMkM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash'
  );

  menuWrapper.append(breakfast, lunch, dinner);

  container.append(title, menuWrapper);

  return container;
}

function createMenuItem(name, description, price, photo, photoCredit, photoAuthor, photoLink) {
  const item = document.createElement('div');
  item.className = 'menu-item';

  const itemTitle = document.createElement('h2');
  itemTitle.className = 'item-title';
  itemTitle.textContent = name;

  const itemPhoto = document.createElement('img');
  itemPhoto.src = photo;
  itemPhoto.alt = name;

  const credits = document.createElement('p');
  credits.className = 'photo-credits';
  credits.innerHTML = `Photo by <a href="${photoCredit}">${photoAuthor}</a> on <a href="${photoLink}">Unsplash</a>`;

  const itemDescription = document.createElement('p');
  itemDescription.className = 'item-description';
  itemDescription.textContent = description;

  const itemPrice = document.createElement('p');
  itemPrice.className = 'item-price';
  itemPrice.textContent = '$' + price;

  item.append(itemTitle, itemPhoto, credits, itemDescription, itemPrice);

  return item;
}
  
// lunch: Foto de <a href=""></a> en <a href="https://unsplash.com/es/fotos/plato-de-ramen-qom5MPOER-I?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>
// dinner: Foto de <a href="https://unsplash.com/es/@allthestories?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash"></a> en <a href="https://unsplash.com/es/fotos/plato-de-verduras-en-plato-de-ceramica-blanca-v1rUvnVMMkM?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash">Unsplash</a>