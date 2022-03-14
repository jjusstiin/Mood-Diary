let accountList = [
    {
        user:"Justin Lin",
        email:"justinow2000@gmail.com",
        password:"justinow2000"
    },
]; //輸入的資料，填入空物件
let account = {};
let accountNum = 1;
function signUp(){

let userName = document.getElementById("user-name").value;
let emailStr = document.getElementById("user-email").value;
let passwordStr = document.getElementById("user-pass").value;
let repeatPasswordStr = document.getElementById("user-repeatpass").value;
    if(passwordStr == repeatPasswordStr){
        account.user = userName;
        account.email = emailStr; //填入的 email
        account.password = passwordStr; //填入的密碼
        accountNum += 1;
        alert('申請成功');
        console.log(account)
        $('#form-signin').hide();
        $('#form-signup').show();
    }else{
        alert('輸入錯誤');
    }
}

