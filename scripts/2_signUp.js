const Web3 = require('web3');
const { InsuranceContract } = require("../config");


// sign up a customer
const customerName = 'anju';
const customerAge = 25;
const paymentPeriod = 2592000; // 30 days in seconds
const initialPayment = Web3.utils.toWei('0.0001', 'ether');
console.log(initialPayment)

async function signup() {
    await InsuranceContract.methods.signUp(customerName, customerAge, paymentPeriod).send({ from: "0xdb4b14f52bfab4df509710ae339ffb77a95ae337", value: initialPayment }).then((receipt) => {
        console.log('Customer signed up:', receipt);
    })
        .catch((error) => {
            console.error('Error signing up customer:', error);
        });
}
signup()