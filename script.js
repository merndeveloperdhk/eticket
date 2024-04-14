

const allBtn = document.getElementsByClassName('seat_no');
for (const btn of allBtn) {
  btn.addEventListener('click', function (e) {
    const selectedBtn = e.target.innerText;
    setElement('tableBody', selectedBtn);
    btn.disabled = true;
    btn.style.backgroundColor = "green";
    btn.style.color = 'white'
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
  tableRow.appendChild(td2);
  table_body.appendChild(tableRow);
  tableRow.classList.add('bg-gray-600', 'text-white')
  //seat count
  seatCount('seat_count')
  // seat left
  seatLeft('seat_left');
  totalPrice('total_price', ticketPrice);
  grandTotal('grand_total')
  return table_body;
};

// next button
function nextBtnClick() {
  const nameField = document.getElementById('name');
  const name = nameField.value;
  const numberField = document.getElementById('number');
  const number = numberField.value;
  const emailField = document.getElementById('email');
  const email = emailField.value;
  console.log(name, number, email);
 
{/* <dialog id="my_modal" class="modal modal-bottom sm:modal-middle">
  <div class="modal-box">
    <h3 class="font-bold text-lg">{name}</h3>
    <p class="py-4">{email}</p>
    <div class="modal-action">
      <form method="dialog">
        <button class="btn">Close</button>
      </form>
    </div>
  </div>
</dialog> */}

}




