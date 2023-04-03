import { templates, select } from '../settings.js';
import utils from '../utils.js';

class Contact {
  constructor() {
    const thisContact = this;

    thisContact.render();
  }

  render() {
    const thisContact = this;

    const generatedHTML = templates.contactPage(thisContact.data);
    thisContact.element = utils.createDOMFromHTML(generatedHTML);
    const contactContainer = document.querySelector(select.containerOf.contact);
    contactContainer.appendChild(thisContact.element);
  }
}

export default Contact;
