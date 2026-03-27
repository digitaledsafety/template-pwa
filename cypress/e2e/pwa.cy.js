describe('PWA Testing', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  it('has correct title', () => {
    cy.title().should('match', /Hello World PWA/);
  });

  it('has a service worker registered', () => {
    cy.window().then((win) => {
      return win.navigator.serviceWorker.getRegistration();
    }).should('exist');
  });

  it('links to manifest.json', () => {
    cy.get('link[rel="manifest"]').should('have.attr', 'href', 'manifest.json');
  });
});
