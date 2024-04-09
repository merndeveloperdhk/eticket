/* function getSeatDetails(){
    const btnA = document.getElementById('a1')
    const btnAText = btnA.innerText;
    //Per ticket price
const per_ticket_price_string = document.getElementById('per_ticket_price');
const per_ticket_price = parseInt(per_ticket_price_string.innerText);
    const price_string = document.getElementById('price');
const price = parseInt(price_string) ;
const table_body = document.getElementById('tableBody')
    const tableRow = document.createElement('tr');
    const td = document.createElement('td');
    td.innerText = btnAText;
    const td1 = document.createElement('td');
    td1.innerText = 'Economy';
    const td2 = document.createElement('td');
    td2.innerText = per_ticket_price * 1;
    table_body.appendChild(tableRow)
    tableRow.appendChild(td)
    tableRow.appendChild(td1)
    tableRow.appendChild(td2);
    const total_price_string = document.getElementById('total_price');
    const totalPriceValue = parseInt(total_price_string.innerText);
total_price_string.innerText = totalPriceValue + per_ticket_price 
console.log(total_price);
let count = 0;
const seatCount = document.getElementById('seat_count');
seatCount.innerText = count + 1

} */

const allBtn = document.getElementsByClassName('seat_no');
for(const btn of allBtn){
  btn.addEventListener('click', function(e){
    const selectedBtn = e.target.innerText;
    setElement('tableBody', selectedBtn);
    // btn.setAttribute('disabled', true);
    btn.classList.add('bg-green-500', true);
  })
  
};

function setElement(elementId, value) {
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
  seatCount('seat_count')
  // seat left
  seatLeft('seat_left');
  totalPrice('total_price', ticketPrice);
  grandTotal('grand_total')
  return table_body;
};

// next button
function nextBtnClick(){
  const nameField = document.getElementById('name');
  const name = nameField.value ;
  console.log(typeof name);
  const numberField = document.getElementById('number');
  const number = numberField.value;
  const emailField = document.getElementById('email');
  const email = emailField.value;
  console.log(name, number, email);

 }




