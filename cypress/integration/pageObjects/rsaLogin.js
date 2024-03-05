class loginPage
{
    getMailBox(){
        return cy.get("[type *= 'email']")
    }
    getPasswordbox(){
        return cy.get("[type *= 'password']")
    }
    getLoginButton(){
        return cy.get("[id *= 'login']")
    }
}
export default loginPage;