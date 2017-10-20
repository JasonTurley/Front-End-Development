const TAX_RATE = 0.9;
const PHONE_PRICE = 84.99;
const ACCESSORY_PRICE = 19.99;
const SPENDING_THRESHOLD = 200;

var total = 0;

var bank_account_balance = prompt("Hi! Please enter your current bank acount balance.");

// Verify that user entered a number
if (isNaN(bank_account_balance)) {
   
    alert("Error! Expected a number input. Instead saw " + bank_account_balance);
}

// Helper function to calculate tax
function calculateTax(amount) {
    amount = amount + (amount * TAX_RATE);
} 

// Helper function to format price to two decimal places
function formatPrice(amount) {
    return amount.toFixed(2);      
}

// Determines whether or not the user can afford the purchase
function purchasePhones() {
    while(total < bank_account_balance) {
        total += PHONE_PRICE;

        if (total < SPENDING_THRESHOLD)
            total += ACCESSORY_PRICE;     
        
        bank_account_balance -= total;          // deduct current total from bank account balance 
    }
    calculateTax(total);         
    
    console.log("Purchase total = $" + formatPrice(total));

    var result = "";
    (bank_account_balance < total) ? result = "You can afford this purchase" : result = "You cannot afford this purchase";

     console.log(result);
}

purchasePhones();