import basketPage from "./BasketPage"
import homepage from "./HomePage"
const hp = new homepage
const b = new basketPage


describe(" Green Kart test suit ", function () {

    beforeEach("site should be open", () => {
        cy.visit(Cypress.env('site'))
    })

    it("To veriy end to end checkout", function () {
        hp.addtokart()
        b.macthTable()
    })





})