class HomePage
{
getEditBox()
{
   return cy.get(':nth-child(1) > .form-control')
}
getEmailbox()
{
    return cy.get(':nth-child(2) > .form-control')
}
getPwdBox()
{
    return cy.get('#exampleInputPassword1')
}
getCheckMe()
{
    return cy.get('#exampleCheck1')
}
getGender()
{
    return cy.get('#exampleFormControlSelect1')
}
getDateBox()
{
    return cy.get(':nth-child(8) > .form-control')
}
getSubmitbutton()
{
    return cy.get('.btn')
}
getMessage()
{
    return cy.get('strong')
}
}
export default HomePage;