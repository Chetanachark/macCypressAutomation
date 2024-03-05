class HomePage
{
    getLogo()
    {
        return cy.get(".logo")
    }
    getAddedBanner(){
        return cy.get('.ng-trigger')
    }
    getCartButton(){
        return cy.get(".btn-custom").eq(2)
    }
    
}
export default HomePage;