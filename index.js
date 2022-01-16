var customerName = "bob";
function upperCaseCustomerName() {
    window.customerName= "BOB";
}

function setBestCustomer() {
    window.bestCustomer= "not bob"
}

function overwriteBestCustomer() {
    window.bestCustomer= "maybe bob"
}

const leastFavoriteCustomer = "bob";
function changeLeastFavoriteCustomer() {
    return leastFavoriteCustomer = "jim"
}