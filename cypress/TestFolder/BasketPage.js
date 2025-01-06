import homepage from "./HomePage"


class basketPage extends homepage {
    ele_prodname =".product-name"
    ele_promocode=".promoCode"
    ele_promobutton=".promoBtn"
    ele_info =".promoInfo"
    ele_button ="button"
    ele_checkbox=".chkAgree"

    macthTable() {
        this.jsondata.forEach(data => {
            cy.get(this.ele_prodname).contains(data.name).invoke('text').then(nameintable => {
                expect(data.name).equal(nameintable)
            })
        })


        cy.get(this.ele_promocode).type('asdaaas')
        cy.get(this.ele_promobutton).click()
        cy.wait(3000)
        cy.get(this.ele_info).invoke("text").then(data => {
            expect("Invalid code ..!").equal(data)
        })
        cy.wait(2000)
        cy.get(this.ele_button).contains("Place Order").click()
        cy.get('select').select('India')
        cy.get(this.ele_checkbox).click()
        cy.get(this.ele_button).contains('Proceed').click()
       
    }

}
export default basketPage