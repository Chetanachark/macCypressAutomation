class login
{
getEmailBox()
{
    return cy.get("[type='email']")
}
getPasswardBox()
{
    return cy.get("[type='password']")
}
getLoginButton()
{
    return cy.get("[name ='login']")
}
}
export default login;