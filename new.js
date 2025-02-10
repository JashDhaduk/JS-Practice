// Select the necessary elements
const newProductBtn = document.querySelector('.addProduct');
const popup = document.querySelector('.popup');
const closeBtn = document.querySelector('.closeBtn');
const submitBtn = document.querySelector('.submitBtn');

// Open the popup when "New Product" button is clicked
newProductBtn.addEventListener('click', () => {
    popup.classList.add('open');
});

// Close the popup when the close button is clicked
closeBtn.addEventListener('click', () => {
    popup.classList.remove('open');
});

// Handle form submission
submitBtn.addEventListener('click', (event) => {
    event.preventDefault(); // Prevent the form from submitting the default way
    const productID = document.getElementById('pID').value;
    const productName = document.getElementById('pName').value;
    const productPrice = document.getElementById('pPrice').value;
    const productDescription = document.getElementById('pDes').value;

    // You can add validation or data handling here

    // After submission, you can clear the form and close the popup
    document.getElementById('myForm').reset();
    popup.classList.remove('open');

    // Optionally, you can display the product in the table (this part is an example)
    const tableBody = document.querySelector('.productInfo');
    const newRow = document.createElement('tr');
    newRow.innerHTML = `
        <td><img src="images.png" alt="" height="40" width="40"></td>
        <td>${productID}</td>
        <td>${productName}</td>
        <td>$${productPrice}</td>
        <td>${productDescription}</td>
    `;
    tableBody.appendChild(newRow);
});
