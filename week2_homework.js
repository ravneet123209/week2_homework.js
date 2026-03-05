//Task 1 - Advanced Login System
let username = "admin"; 
let password = 1234;
let isActive = false;

if(username ==="admin" && password ===1234 && isActive ===true){
    console.log("Login Successful");
}else if(username ==="admin" && password ===1234 && isActive ===false){
    console.log("Account inactive");
}else{
    console.log("Invalid credentials");
}

//Task 2 — Age Access Function

function checkAccess(age, hasID){
    if(age>= 18 && hasID === true){
        console.log("Access granted");
    }
    else{
        console.log("Access denied");
    }
}

checkAccess(20,true);
checkAccess(17,true);
checkAccess(22,false);

//Task 3 — Bank Withdrawal Function

function withdraw(balance, amount){
    if(amount>balance){
        console.log("Insufficient funds");
    }else{
        console.log(balance);
    }
}
withdraw(500, 200);
withdraw(300, 500);

