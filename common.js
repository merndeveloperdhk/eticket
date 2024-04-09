

//Per ticket price
function perTicketPrice(elementId) {
    const per_ticket_price_string = document.getElementById(elementId);
    const per_ticket_price = parseInt(per_ticket_price_string.innerText);
    return per_ticket_price;
};

//Total price
function totalPrice(elementId, value) {
    const total_price_string = document.getElementById(elementId);
    const totalPriceValue = parseInt(total_price_string.innerText);
    total_price_string.innerText = totalPriceValue + value;
    return total_price_string;

};
//Grand Total price
function grandTotal(elementId) {
    const grandTotalString = document.getElementById(elementId);
    const total_price_string = document.getElementById('total_price');
    const totalPriceValue = parseInt(total_price_string.innerText);
    grandTotalString.innerText = totalPriceValue;
    console.log(grandTotalString);
    return grandTotalString;
}




//seat count
function seatCount(elementId) {
    const seat_count_string = document.getElementById(elementId);
    const seat_count = parseInt(seat_count_string.innerText);
    seat_count_string.innerText = seat_count + 1;
    return seat_count_string;
};


// Seat left
function seatLeft(elementId) {
    const seat_left_String = document.getElementById(elementId);
    const seat_Left = parseInt(seat_left_String.innerText);
    seat_left_String.innerText = seat_Left - 1;
    return seat_left_String;
};

//apply coupon button
function applyCoupon() {
    // apply coupon field
    const apply_coupon_field_string =getElement('apply_coupon_field');
    const apply_coupon_value = apply_coupon_field_string.value;
    console.log(apply_coupon_field_string, apply_coupon_value);
    if (apply_coupon_value === 'NEW15') {
        const total_price_string = getElement('total_price');
        const totalPriceValue = parseInt(total_price_string.innerText);
        const discount = totalPriceValue * 0.10;
        const discountPrice =getElement('total_discount');
        discountPrice.innerText = discount;
        const applyParent = getElement('applyParent');
        applyParent.setAttribute('hidden', true)

        //Grand Total price
        const grand_total_price_string = getElement('grand_total');
        grand_total_price_string.innerText = totalPriceValue - discountPrice.innerText
        console.log(discount);
        console.log(grand_total_price_string);

    } else if (apply_coupon_value === 'Couple20') {
        const total_price_string =getElement('total_price');
        const totalPriceValue = parseInt(total_price_string.innerText);
        const discount = totalPriceValue * 0.20;
        const discountPrice =getElement('total_discount');
        discountPrice.innerText = discount;
        //Grand Total price
        const grand_total_price_string =getElement('grand_total');

        grand_total_price_string.innerText = totalPriceValue - discountPrice.innerText;
        const applyParent = getElement('applyParent');
        applyParent.setAttribute('hidden', true);
    }
    else {
        alert('wrong coupon code')
        console.log('wrong');
        const ticketPrice = perTicketPrice('per_ticket_price')
        totalPrice('total_price', ticketPrice);
        const applyParent = getElement('applyParent')
        applyParent.removeAttribute('hidden', true)


    }
};

//get element
function getElement(elementId){
    const element = document.getElementById(elementId);
    return element;
}



