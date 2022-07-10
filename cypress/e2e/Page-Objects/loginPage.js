
    class LoginPage{


        getUserNameField(){
            return cy.get('[id="user-name"]')
        }
        getPasswordField(){
            return cy.get('[id="password"]')
        }
        getLoginButton(){
            return cy.get('[id="login-button"]')
        }
        logIn(){
            this.getUserNameField().type('standard_user')
            this.getPasswordField().type('secret_sauce')
            this.getLoginButton().click()
        }

    }
    module.exports = new LoginPage()
