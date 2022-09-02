function sendMoney(){
    var enterName = document.getElementById("enterName").value;
    var enterAmount = parseInt(document.getElementById("enterAmount").value);
 var enterSName = document.getElementById("enterSName").value;
  var findSenderbillAccount = enterSName + "billBalance";
    var enterSAmount =parseInt(document.getElementById(findSenderbillAccount).innerHTML);
    if (enterAmount > enterSAmount) {
       alert("Insufficient Balance.")
    }
 else {
       var findUserbillAccount = enterName + "billBalance";
      
       var finalAmount = parseInt(document.getElementById(findUserbillAccount).innerHTML) + enterAmount;
       var myAccountBalance = parseInt(document.getElementById(findSenderbillAccount).innerHTML) - enterAmount;
       document.getElementById(findSenderbillAccount).innerHTML = myAccountBalance;
       document.getElementById(findUserbillAccount).innerHTML = finalAmount;
       alert(`Successful Transaction !!  
       $${enterAmount} is sent to ${enterName}@email.com.`)
 
       
       var createPTag = document.createElement("li");
       var textNode = document.createTextNode(`Rs ${enterAmount} is sent from the sender with Email-id ${enterSName}@email.com
  to recepient with Email-id ${enterName}@email.com on ${Date()}.`);
       createPTag.appendChild(textNode);
       var element = document.getElementById("transaction-history-body");
       element.insertBefore(createPTag, element.firstChild);
    }
 }