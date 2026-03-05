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

//Task 4 — Grade Evaluator Function

function getGrade(score){
    if(score>=90){
        console.log("A");
    }else if(score >= 80 && score <=89 ){
        console.log("B");
    }else if(score >= 70 && score <=79){
        console.log("C");
    }else{
        console.log("Fail");
    }
}

getGrade(95);
getGrade(82);
getGrade(74);
getGrade(60);



//Bonus (Optional)

function isEven(number){
    if (number % 2 ===0){
        console.log(`${number} is even `);
    }else{
        console.log(`${number} is odd `);
    }
}
isEven(10);
isEven(15);