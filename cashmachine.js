const cashWithdrawal = (amount, accnum, pin) => {
    console.log(`Attempting to withdraw £${amount} from account ${accnum}`);   
    if (checkPin(pin) && checkBalance(amount)) {
        console.log("Cash withdrawal approved");
    } else if (!checkPin(pin) && checkBalance(amount)) {
        console.log("Cash withdrawal declined - PIN incorrect");
    } else if (checkPin(pin) && !checkBalance(amount)) {
        let diff = amount - balance;
        console.log(`Cash withdrawal declined - you're £${diff} short!!`);
    }

}    

const checkPin = (pin) => {
    if (pin == correctPin) {
        return true;
    } else {
        return false;
    }
}

const checkBalance = (amount) => {
    if (balance >= amount) {
        return true;
    } else {
        return false;
    }
}
   
   const balance = 350;
   const correctPin = 12345;

   cashWithdrawal(300, 50449921, 12345);  /* should be ok */
   cashWithdrawal(400, 50449921, 12345);  /* request too high */
   cashWithdrawal(300, 50449921, 12346);  /* PIN incorrec† */
