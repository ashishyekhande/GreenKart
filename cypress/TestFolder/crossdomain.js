/// <reference types="cypress" />



describe("Testing basics" ,function(){

    

it("testing domains " , function (){

    cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
    cy.get("#opentab").then(ele=>{
        const e = ele.prop('href')
        cy.visit(e)
        cy.origin(e,function(){
        cy.log(cy.title())
               
        })
    } )
    


})



})