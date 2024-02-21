function caculate(){
    let PRODUCTNAME=Document.querySelector(".p1").value;

    let QUANTITY =Document.querySelector(".q1").value;

    let AMOUNT=Document.querySelector(".a1").value;
    // let output="Name:" + Name +"<br> Email:" +"<br>"

    array=[parseInt(QUANTITY*AMOUNT),]
    let sum=0;
    for(i=0;i<array.length;i++){
    sum=sum+array[i]    
    }
    para.innerHTML=`total=${sum}`
}

function caculate(){
    let product=document.getElementById("sulthan").value;
    let product1=document.getElementById("sulthan1").value;
     let quantity =document.getElementById("basha").value;
     let quantity1 =document.getElementById("basha1").value;
     let amount=document.getElementById("item").value;
     let amount1=document.getElementById("item1").value;

     let button = document.getElementById("calcButton");
    // let output="Name:" + Name +"<br> Email:" +"<br>"

    let gst = parseFloat(document.getElementById("gst").value,10);
    
    let array=[parseInt(quantity*amount),parseInt(quantity1*amount1),]
     let sum=0;
     for(i=0;i<array.length;i++){
     sum=sum+array[i]
     }
     document.getElementById("para").innerHTML=`total=${sum}` ;

    // let totalWithGst = (gst/sum * 100);
}

caculate()

function gst(){
    let product=document.getElementById("sulthan").value;
    let product1=document.getElementById("sulthan1").value;
     let quantity =document.getElementById("basha").value;
     let quantity1 =document.getElementById("basha1").value;
     let amount=document.getElementById("item").value;
     let amount1=document.getElementById("item1").value;
    
    let gst = parseFloat(document.getElementById("gst").value,10);
    // let button = document.getElementById("calcButton");
    
    let total = ((quantity*amount)+(quantity1*amount1));

    let gstPercentage = (gst/total *100);

    let totalwithGst = total + gstPercentage;

    let discount = 0;
    if(total <= 500){
        discount = 50;
    }else if(total >500 && total < 1500){
        discount = 100;
    }else{
        discount = 200;
    }

    let finalAmount = totalwithGst - discount;

    let output = "Product: " + product + "<br><br> Product-1: " + product1 + "<br><br> Quantity: "+ quantity + "<br><br> Quantity-1: " + quantity1 + "<br><br> Total amount: " + total + "<br><br> GST percentage:" + gst + "<br><br> GST amount for billing: " + gstPercentage + "<br><br> Total amount with gst:" + totalwithGst +"<br><br> Discount amount: " + discount +"<br><br> Final amount after discount:" + finalAmount;

    let para = document.getElementById("para")

    para.innerHTML = output;

}
gst();










  
  
 
      




    
