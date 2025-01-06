/// <reference types="cypress" />
Cypress.Commands.add('login',(url,user,pw)=>{
    cy.visit(url)
    cy.get("#username").type(user)
    cy.get("#password").type(pw)
    cy.get("#terms").click()
    cy.get("#signInBtn").click()
})


describe("Ecommerce site for mobile",function(){
it("using custom command",function(){
cy.login("https://rahulshettyacademy.com/loginpagePractise/", "rahulshettyacademy","learning")
   

})

    


})