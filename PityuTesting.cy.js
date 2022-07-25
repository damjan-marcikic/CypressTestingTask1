/// <reference types="cypress" />


describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('https://pityu.com/')
    
  })
 
  it('The user can click on the About link', () => {
    cy.contains('About').click();
  })

  it('The user can click on the Features link', () => {
    cy.contains('FEATURES').click();
  })

  it('The user can click on the Manual link', () => {
    cy.contains('MANUAL').click();
  }) 

  it('The user can click on the Contact link', () => {
    cy.contains('Contact').click();
  })
  it('The user can click on the Download link',  () => {
    cy.contains('MANUAL').click()
    cy.get('.container > .btn').click({force: true})
  })
  it('The user can click on first the Email contanct link',  () => {
    cy.get('[href="mailto:info@pityu.com"]').click({force: true})
  })
  it('The user can click on second the Email contanct link',  () => {
  
    cy.get('[href="mailto:sales@pityu.com"]').click({force: true})
  })

  it('The user can click on the gallery picture',  () => {
    cy.get(':nth-child(1) > a > .img-fluid').click({force: true})
    for(let n=0; n<=19; n++)
  {
    cy.get('#next-button > svg').click();
  }
  })

  it('Checking if the "Ultimate Features" section is displayed',  () => {
  
    cy.get('.row > :nth-child(1) > .mx-auto').should('be.visible');
  })
  it('Checking if the "Ultimate Features" section is displayed',  () => {
  
    cy.get(':nth-child(2) > .row > :nth-child(2)').should('be.visible');
  })
  it('Checking if the "Ultimate Features" section is displayed',  () => {
  
    cy.get(':nth-child(2) > .row > :nth-child(3)').should('be.visible');
  })
  it('Checking if the "Ultimate Features" section is displayed',  () => {
  
    cy.get(':nth-child(2) > .row > :nth-child(4)').should('be.visible');
    console.log('still works')
  }) 

  it('Checking if all the images are displayed in the Gallery',  () => {

    for(let x=1;x<20;x++)
    {
      let s1 =":nth-child("
      let s2 =") > a > .img-fluid"
      let s =s1+x+s2;

      cy.get(s).should('be.visible')
    }
    console.log('still works')
    
  //note to self: Make this test case more reusable
  })

 
  })

