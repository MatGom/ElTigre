import { settings, select, classNames } from './settings.js';
import Products from './components/Products.js';
import Contact from './components/Contact.js';
import Home from './components/Home.js';

const app = {
  initPages: function () {
    const thisApp = this;
    thisApp.pages = document.querySelector(select.containerOf.pages).children;
    console.log(thisApp.pages);
    thisApp.navLinks = document.querySelectorAll(select.nav.links);
    console.log(thisApp.navLinks);

    for (let link of thisApp.navLinks) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const clickedElement = this;
        const id = clickedElement.getAttribute('href').replace('#', '');

        thisApp.activePage(id);
      });
    }
  },

  activePage: function (id) {
    for (const page of document.querySelectorAll(select.containerOf.pages)) {
      console.log(document.querySelectorAll(select.containerOf.pages));
      console.log(page);
      page.classList.remove(classNames.active);
    }
    document.querySelector('#' + id).classList.add(classNames.active);
    window.location.hash = `#/${id}`;
  },

  initData: function () {
    const url = settings.db.url + '/' + settings.db.products;
    this.data = {};
    fetch(url)
      .then(rawResponse => {
        return rawResponse.json();
      })
      .then(parsedResponse => {
        this.data.products = parsedResponse;
      });
  },

  initProducts: function () {
    const thisApp = this;
    const productsPage = document.querySelector(select.templateOf.productsPage);
    thisApp.products = new Products(productsPage);
  },

  initHome: function () {
    const thisApp = this;
    const homePage = document.querySelector(select.templateOf.homePage);
    thisApp.home = new Home(homePage);
  },

  initContact: function () {
    const thisApp = this;
    const contactPage = document.querySelector(select.templateOf.contactPage);
    thisApp.contact = new Contact(contactPage);
  },

  init: function () {
    const thisApp = this;

    thisApp.initData();
    thisApp.initProducts();
    thisApp.initContact();
    thisApp.initHome();
    thisApp.initPages();
  },
};

app.init();
