
    class ProductsPage{
        getTheProduct(){
           return cy.get('[id="add-to-cart-sauce-labs-backpack"]')
        }
        getTheCartBadge(){
            return cy.get('[class="shopping_cart_badge"]')
        }
        shoppingCartButton(){
            return cy.get('[class="shopping_cart_link"]')
        }
        getLoginErrorMessageText(){
            return cy.get('h3')
        }
        clickAddToCartButton(){
            this.getTheProduct().click()
        }
        clickOnShoppingCartButton(){
            this.shoppingCartButton().click()
        }
    }
    module.exports = new ProductsPage()
