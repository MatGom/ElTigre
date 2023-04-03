import { templates, select } from '../settings.js';
import utils from '../utils.js';

class Home {
  constructor() {
    const thisHome = this;

    thisHome.render();
  }

  render() {
    const thisHome = this;

    const generatedHTML = templates.homePage(thisHome.data);
    thisHome.element = utils.createDOMFromHTML(generatedHTML);
    const homeContainer = document.querySelector(select.containerOf.home);
    homeContainer.appendChild(thisHome.element);
  }
}

export default Home;
