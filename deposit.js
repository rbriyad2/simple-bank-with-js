document.getElementById('enter-deposit').addEventListener('click', function(){
    const depositNewAmount = document.getElementById('deposit-input');
    const depositFieldString = depositNewAmount.value;
    const depositField = parseInt(depositFieldString);
    
    depositNewAmount.value ='';
    
    if(isNaN(depositField)){
      const wrongInfo = document.getElementById('please-number');
          wrongInfo.classList.remove('invisible');
       
          return;
  }
  else{
      const wrongInfo = document.getElementById('please-number');
          wrongInfo.classList.add('invisible');
  }
  

    const oldNewDepositElement = document.getElementById('deposit-old-new-amount');
    const OldAmountsString = oldNewDepositElement.innerText;
    const oldNewDeposit = parseInt(OldAmountsString);

    const totalDepositAmount = depositField + oldNewDeposit;
  oldNewDepositElement.innerText = totalDepositAmount;

    console.log(totalDepositAmount)

    const previousBlance = document.getElementById('balace-total');
    const oldBalanceString = previousBlance.innerText;
    const oldBalanceAmount =  parseInt(oldBalanceString);
const nowBlanceTotal = depositField + oldBalanceAmount;

previousBlance.innerText = nowBlanceTotal;


})