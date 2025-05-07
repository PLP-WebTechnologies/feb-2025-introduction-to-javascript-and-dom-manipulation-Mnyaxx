// Change text and style dynamically
function changeContent() {
    const description = document.getElementById('description');
    description.textContent = "You've just changed the content and styling!";
    description.style.color = 'white';
    description.style.backgroundColor = 'teal';
    description.style.padding = '10px';
    description.style.borderRadius = '8px';
  }
  
  // Add a new list item
  function addItem() {
    const ul = document.getElementById('item-list');
    const newItem = document.createElement('li');
    newItem.textContent = `Item ${ul.children.length + 1}`;
    ul.appendChild(newItem);
  }
  
  // Remove the last list item
  function removeItem() {
    const ul = document.getElementById('item-list');
    if (ul.children.length > 0) {
      ul.removeChild(ul.lastElementChild);
    }
  }
  