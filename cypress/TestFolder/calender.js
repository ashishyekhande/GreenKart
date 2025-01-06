

describe("testing calender", function () {

beforeEach(function(){
    cy.fixture('date').as('data');
})

    it("selecting date in calender", function () {

        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/offers")
        cy.get(".react-date-picker__calendar-button").click()
        cy.get(".react-calendar__navigation__label__labelText").click()
        cy.get(".react-calendar__navigation__label__labelText").click()
        cy.get(".react-calendar__navigation__label__labelText").invoke('text').then(data => {
            cy.contains('span', '2021 – 2030')
        })


        cy.get(".react-calendar__tile").contains(this.data.year).click()
        cy.get("abbr").eq(Number(this.data.month) - 1).click()
        cy.get("abbr").contains(this.data.date).click()

        const listarry = [this.data.month, this.data.date, this.data.year]

        cy.get(".react-date-picker__inputGroup__input").each(($el, index) => {
            cy.wrap($el).invoke('val').should('eq', listarry[index])

        })





    })

})