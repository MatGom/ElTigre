import { settings, select, classNames } from './settings.js';
import Products from './components/Products.js';
import Contact from './components/Contact.js';
import Home from './components/Home.js';

const app = {
  initPages: function () {
    const thisApp = this;
    thisApp.navLinks = document.querySelectorAll(select.nav.links);

    for (let link of thisApp.navLinks) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        const clickedElement = this;
        const id = clickedElement.getAttribute('href').replace('#', '');

        thisApp.activePage(id);
        console.log(id);
      });
    }
  },

  activePage: function (id) {
    const thisApp = this;
    thisApp.pages = document.querySelector(select.containerOf.pages).children;

    for (const page of thisApp.pages) {
      page.classList.remove(classNames.active);
    }
    document.querySelector('#' + id).classList.add(classNames.active);
    window.location.hash = `${id}`;
  },

  initData: function () {
    const thisApp = this;

    const url = settings.db.url + '/' + settings.db.products;
    thisApp.data = {};

    fetch(url)
      .then(rawResponse => {
        return rawResponse.json();
      })
      .then(parsedResponse => {
        thisApp.data.products = parsedResponse;
      });
  },

  initProducts: function () {
    const thisApp = this;

    console.log(thisApp.data.products);

    // for (let productData in thisApp.data.products) {
    //   new Products(thisApp.data.products[productData].id, thisApp.data.products[productData]);
    // }

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
    thisApp.initPages();
    thisApp.initProducts();
    thisApp.initContact();
    thisApp.initHome();
  },
};

app.init();
