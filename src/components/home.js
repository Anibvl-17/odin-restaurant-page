export default function HomeDiv() {
  const container = document.createElement('div');
  container.className = 'home-section';

  const title = document.createElement('h1');
  title.className = 'home-title';
  title.textContent = 'The Tasty Elegance';

  const subtitle = document.createElement('p');
  subtitle.className = 'home-subtitle';
  subtitle.textContent = 'Rustic Charm, Refined Dining';

  const descriptionDiv = document.createElement('div');
  descriptionDiv.className = 'home-description';

  const description1 = document.createElement('p');
  description1.innerHTML = 
    'Nestled in the heart of culinary artistry, <strong>The Rustic Table</strong> offers a dining ' +
    'experience that blends rustic charm with refined elegance. Inspired by the simplicity of ' +
    'nature and the warmth of shared moments, our menu celebrates the finest seasonal ingredients, ' +
    'meticulously crafted into dishes that tell a story.';

  const description2 = document.createElement('p');
  description2.textContent =
    'From the first bite to the last, our cuisine embodies the essence of comfort and ' +
    'sophistication, served in an ambiance designed to soothe the soul. Whether you\'re savoring ' +
    'the delicate sweetness of poached pears or enjoying the crunch of artisanal almonds, each ' +
    'plate is a tribute to the beauty of unpretentious flavors elevated to perfection.';

  const description3 = document.createElement('p');
  description3.innerHTML =
    '<strong>The Rustic Table</strong>, a place where every meal feels like home, and every visit'
    'feels like a celebration.';
  
  descriptionDiv.append(description1, description2, description3);

  const callToAction = document.createElement('button');
  callToAction.className = 'call-to-action';
  callToAction.textContent = 'Book a Table';

  container.append(title, subtitle, descriptionDiv, callToAction)

  return container;
}