import { templates, select } from '../settings.js';
import utils from '../utils.js';

class Products {
  constructor() {
    const thisProducts = this;

    thisProducts.render();
  }
  
  render() {
    const thisProducts = this;
    console.log(thisProducts.data);
    
    const generatedHTML = templates.productsPage(thisProducts.data);
    thisProducts.element = utils.createDOMFromHTML(generatedHTML);
    const productsContainer = document.querySelector(select.containerOf.products);
    productsContainer.appendChild(thisProducts.element);
  }
}

export default Products;
