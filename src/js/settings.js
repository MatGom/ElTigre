export const select = {
  templateOf: {
    productsPage: '#template-products-page',
    homePage: '#template-home-page',
    contactPage: '#template-contact-page',
  },
  containerOf: {
    pages: '#home, #products, #contact',
    home: '#home-wrapper',
    products: '#products-list',
    contact: '#contact-wrapper',
  },
  nav: {
    links: '.nav-option',
  },
};

export const classNames = {
  active: 'active',
};

export const settings = {
  db: {
    url: '//' + window.location.hostname + (window.location.hostname == 'localhost' ? ':3131' : ''),
    products: 'products',
  },
};

export const templates = {
  productsPage: Handlebars.compile(document.querySelector(select.templateOf.productsPage).innerHTML),
  homePage: Handlebars.compile(document.querySelector(select.templateOf.homePage).innerHTML),
  contactPage: Handlebars.compile(document.querySelector(select.templateOf.contactPage).innerHTML),
};
