withdrawButton = document.getElementById('withdraw-btn').addEventListener('click', function(){

    const withdrawField = document.getElementById('withdraw-input');
    const withdrawFieldString = withdrawField.value;
    const nowWithdrawField = parseInt(withdrawFieldString);

    withdrawField.value = '';

    if(isNaN(nowWithdrawField)){
        const wrongInfo = document.getElementById('please-number');
            wrongInfo.classList.remove('invisible');
            return;
    }
    else{
        const wrongInfo = document.getElementById('please-number');
            wrongInfo.classList.add('invisible');
    }
    
    

    
    
    const previousBalance = document.getElementById('balace-total');
    const previousBalanceString = previousBalance.innerText;
    const previousBalanceold = parseInt(previousBalanceString);
    
    
    if(nowWithdrawField > previousBalanceold ){
        const wrongInfo = document.getElementById('wrong');
            wrongInfo.classList.remove('invisible');
            return;
    }
    else{
        const newbalaceTotalNow = previousBalanceold - nowWithdrawField;
previousBalance.innerText = newbalaceTotalNow;
const wrongInfo = document.getElementById('wrong');
            wrongInfo.classList.add('invisible');
    }


    const withdrawPrevious = document.getElementById ('withdraw-text');
    const withdrawpreviousString = withdrawPrevious.innerText;
    const withdrawNowBalance = parseInt(withdrawpreviousString);
    
    const withdrawTotalAmountNow= withdrawNowBalance + nowWithdrawField;
    
    
    withdrawPrevious.innerText = withdrawTotalAmountNow;
    



})