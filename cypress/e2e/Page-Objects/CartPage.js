
   class CartPage{

        getCartItem(){
            return cy.get('.cart_item')
        }
        getAddedProduct(){
            return cy.get('[class="inventory_item_name"]')
        }
        getRemoveProductButton(){
            return cy.get('[id="remove-sauce-labs-backpack"]')
        }
        clickOnRemoveProductButton(){
            this.getRemoveProductButton().click()
        }

    }
   module.exports = new CartPage()
