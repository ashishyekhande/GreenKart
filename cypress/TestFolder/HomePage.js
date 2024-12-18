

class homepage {

    ele_prodname = ".product h4"
    ele_search = "input[type ='search']"
    ele_addtokart="button[type ='button']"
    ele_basket="img[alt='Cart']"
    ele_item_in_basket="p[class='product-name']"

    jsondata = require("../Data/item.json")
    addtokart() {
        this.jsondata.forEach(data => {
            cy.get(this.ele_search).clear().type(data.name)
            cy.wait(1000)
            cy.get(this.ele_addtokart).contains("ADD TO CART").click()
            cy.get(this.ele_basket).click()
            cy.get(this.ele_item_in_basket).contains(data.name).invoke('text').then(proname => {
                expect(data.name).equal(proname)
            })
           
        })
        cy.get(this.ele_basket).click()
        cy.get(this.ele_basket).click()
        cy.wait(2000)
        cy.get(this.ele_addtokart).contains("PROCEED TO CHECKOUT").click()

    }


}

export default homepage