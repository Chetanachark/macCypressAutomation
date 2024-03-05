class cartPage
{
    getCartItems()
    {
        return cy.get(".cartWrap h3")
    }
    getEachcartItemPrice()
    {
        return cy.get(".prodTotal.cartSection")
    }
    getTotalCartPrice(){
       return cy.get("li:nth-child(2) span:nth-child(2)")
    }
    getCheckOutButton()
    {
        return cy.get("li [type = 'button']")
    }
}
export default cartPage;