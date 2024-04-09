function setElement(elementId, value){
    const table_body = document.getElementById(elementId);
    const ticketPrice = perTicketPrice('per_ticket_price')
    const tableRow = document.createElement('tr');
    const td = document.createElement('td');
    td.innerText = value;
    const td1 = document.createElement('td');
    td1.innerText = 'Economic';
    const td2 = document.createElement('td');
    td2.innerText = ticketPrice;
    tableRow.appendChild(td)
    tableRow.appendChild(td1)
    tableRow.appendChild(td2)
    table_body.appendChild(tableRow);
    //seat count
    const seat_count_string = document.getElementById('seat_count');
    const seat_count = parseInt(seat_count_string.innerText);
    seatCount('seat_count')
// seat left
seatLeft('seat_left', seat_count);
totalPrice('total_price', ticketPrice);
    return table_body;
};

//Per ticket price
function perTicketPrice(elementId){
    const per_ticket_price_string = document.getElementById(elementId);
    const per_ticket_price = parseInt(per_ticket_price_string.innerText);
    return per_ticket_price;
};

//Total price
function totalPrice(elementId, value){
    const total_price_string = document.getElementById(elementId);
    const totalPriceValue = parseInt(total_price_string.innerText);
    total_price_string.innerText = totalPriceValue + value ;
    return total_price_string;
   
};
//Grand Total price
function grandTotal(){
    const grandTotalString = document.getElementById('grand_total');
    const total_price_string = document.getElementById('total_price');
    const totalPriceValue = parseInt(total_price_string.innerText);
    grandTotalString.innerText = totalPriceValue ;
    return grandTotalString;
}

    
   

//seat count
function seatCount(elementId){
    const seat_count_string = document.getElementById(elementId);
    const seat_count = parseInt(seat_count_string.innerText);
    seat_count_string.innerText = seat_count + 1;
    return seat_count_string;
};


// Seat left
function seatLeft(elementId, value){
    const seat_left_String = document.getElementById(elementId);
const seat_Left = parseInt(seat_left_String.innerText);
seat_left_String.innerText = seat_Left - value;
return seat_left_String;
};

//apply coupon button
function applyCoupon(){
// apply coupon field
const apply_coupon_field_string = document.getElementById('apply_coupon_field');
const apply_coupon_value = apply_coupon_field_string.value;
console.log(apply_coupon_field_string,apply_coupon_value);
if(apply_coupon_value === 'NEW15'){
    const total_price_string = document.getElementById('total_price');
    const totalPriceValue = parseInt(total_price_string.innerText);
    const discount = totalPriceValue * 0.10;
    const discountPrice = document.getElementById('total_discount');
    discountPrice.innerText = discount;
    const applyParent = document.getElementById('applyParent')
    applyParent.setAttribute('hidden', true)
    
     //Grand Total price
const grand_total_price_string = document.getElementById('grand_total');
const grand_total_price = parseInt(grand_total_price_string.innerText);
grand_total_price_string.innerText = totalPriceValue - discountPrice.innerText
    console.log(discount);
    console.log(grand_total_price_string);
   
}else if(apply_coupon_value === 'Couple20'){
    const total_price_string = document.getElementById('total_price');
    const totalPriceValue = parseInt(total_price_string.innerText);
    const discount = totalPriceValue * 0.20;
    const discountPrice = document.getElementById('total_discount');
    discountPrice.innerText = discount;
    //Grand Total price
const grand_total_price_string = document.getElementById('grand_total');

grand_total_price_string.innerText = totalPriceValue - discountPrice.innerText;
const applyParent = document.getElementById('applyParent')
    applyParent.setAttribute('hidden', true)
    console.log(discount);
    console.log(grand_total_price_string.innerText);
}
else{
    alert('wrong coupon code')
    console.log('wrong');
 
    
}
};




