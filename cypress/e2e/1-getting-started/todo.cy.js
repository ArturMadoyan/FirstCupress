
import loginPage    from      "../Page-Objects/loginPage"
import Constants    from      "../Page-Objects/Constants"
import ProductsPage from      "../Page-Objects/ProductsPage"
import CartPage     from      "../Page-Objects/CartPage"

describe('add and remove an item', () => {
  before(() => {
    cy.visit('https://www.saucedemo.com/')
      cy.url().should('eq',Constants.loginPageUrl)
  })

  it('login to the account', () => {
        loginPage.logIn()
        cy.title().should('eq', Constants.loginPageTitle)
        cy.url().should('eq',Constants.homePageUrl)

  })

  it('add an item', () => {
        ProductsPage.clickAddToCartButton()
        ProductsPage.getTheCartBadge().should('have.text', '1')
        ProductsPage.clickOnShoppingCartButton()
        ProductsPage.getLoginErrorMessageText()
            .should('contain.text',Constants.loginErrorMessage)
  })

  it('login again to have access cart', () => {
        loginPage.logIn()
        ProductsPage.clickAddToCartButton()
        ProductsPage.getTheCartBadge().should('have.text', '1')
        ProductsPage.clickOnShoppingCartButton()
        cy.url().should('eq',Constants.cartPageUrl)
    })

  it('can check off an item as completed', () => {
        CartPage.getAddedProduct().should('have.text', Constants.addedProductText)
        CartPage.clickOnRemoveProductButton()
        CartPage.getCartItem().should('not.exist')
  })
})
