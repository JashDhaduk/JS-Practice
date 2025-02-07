// var newProduct = document.querySelector('.addProduct'),
// submitButton = document.querySelector('.submitBtn'),
// title = document.querySelector('.title'),
// popupFooter = document.querySelector('.popupFooter'),
// imgInput = document.querySelector('.img'),
// popupForm = document.querySelector('.popoup')


// let isEdit = false;

// newProduct.addEventListener('click', ()=>{
//     isEdit = false;
//     submitButton.innerHTML = "Submit"
//     title.innerHTML = "Fill the Form"
//     popupFooter.style.display = "block"
//     imgInput.src = 'images.png'
//     popupForm.classList.add('active')
// })

document.addEventListener("DOMContentLoaded", () => {
    const productData = [
        {
            image: "images.png",
            productID: "PMS12345",
            productName: "iPhone",
            productPrice: "$2000",
            productDescription: "Smartphone",
        }
    ];

    const productTable = document.querySelector(".productInfo");
    const popup = document.querySelector(".popup");
    const closePopupBtn = document.querySelector(".closeBtn");
    const form = document.querySelector("#myForm");
    const submitBtn = document.querySelector(".submitBtn");
    const newProductBtn = document.querySelector(".addProduct");

    let currentEditingIndex = null;

    // Function to render the product data in the table
    function renderTable() {
        // Clear the current table content
        productTable.innerHTML = '';

        // Loop through productData and generate table rows dynamically
        productData.forEach((product, index) => {
            const tr = document.createElement("tr");
            tr.classList.add("productRow");

            tr.innerHTML = `
                <td class="tableData_1"><img src="${product.image}" alt="" height="40" width="40"></td>
                <td class="tableData_2">${product.productID}</td>
                <td class="tableData_3">${product.productName}</td>
                <td class="tableData_4">${product.productPrice}</td>
                <td>${product.productDescription}</td>
                <td>
                    <button class="readBtn" onclick="viewProduct(${index})">Read</button>
                    <button class="editBtn" onclick="editProduct(${index})">Edit</button>
                    <button class="deleteBtn" onclick="deleteProduct(${index})">Delete</button>
                </td>
            `;
            productTable.appendChild(tr);
        });
    }

    // View product details
    window.viewProduct = (index) => {
        const product = productData[index];
        alert(`Product Details:
        ID: ${product.productID}
        Name: ${product.productName}
        Price: ${product.productPrice}
        Description: ${product.productDescription}`);
    };

    // Edit product details
    window.editProduct = (index) => {
        const product = productData[index];
        currentEditingIndex = index;

        // Populate the form with the product's current data
        document.querySelector("#pID").value = product.productID;
        document.querySelector("#pName").value = product.productName;
        document.querySelector("#pPrice").value = parseFloat(product.productPrice.replace('$', ''));
        document.querySelector("#pDes").value = product.productDescription;

        popup.classList.add("open");
    };

    // Delete product
    window.deleteProduct = (index) => {
        if (confirm("Are you sure you want to delete this product?")) {
            productData.splice(index, 1);
            renderTable();
        }
    };

    // Handle form submission (either create a new product or update an existing one)
    submitBtn.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent the form from reloading the page

        const productID = document.querySelector("#pID").value;
        const productName = document.querySelector("#pName").value;
        const productPrice = "$" + document.querySelector("#pPrice").value;
        const productDescription = document.querySelector("#pDes").value;

        // If we're editing an existing product
        if (currentEditingIndex !== null) {
            productData[currentEditingIndex] = {
                productID,
                productName,
                productPrice,
                productDescription,
                image: "images.png", // Placeholder image
            };
        } else {
            // If we're adding a new product
            productData.push({
                productID,
                productName,
                productPrice,
                productDescription,
                image: "images.png", // Placeholder image
            });
        }

        // Close the popup and render the updated table
        popup.classList.remove("open");
        renderTable();

        // Clear the form
        form.reset();
        currentEditingIndex = null;
    });

    // Close the popup form when the close button is clicked
    closePopupBtn.addEventListener("click", () => {
        popup.classList.remove("open");
        form.reset();
        currentEditingIndex = null;
    });

    // Open the form for creating a new product when the New Product button is clicked
    newProductBtn.addEventListener("click", () => {
        popup.classList.add("open");
        form.reset();
        currentEditingIndex = null;
    });

    // Initial render of the table
    renderTable();
});




document.addEventListener("DOMContentLoaded", () => {
    const popup = document.querySelector(".popup");
    const closePopupBtn = document.querySelector(".closeBtn");
    const newProductBtn = document.querySelector(".addProduct");
    const submitBtn = document.querySelector(".submitBtn");
    const form = document.querySelector("#myForm");

    let currentEditingIndex = null;

    // Open popup form when "New Product" is clicked
    newProductBtn.addEventListener("click", () => {
        popup.classList.add("open");
        form.reset();
        currentEditingIndex = null; // Reset the editing index
    });

    // Close the popup form when the close button is clicked
    closePopupBtn.addEventListener("click", () => {
        popup.classList.remove("open");
        form.reset();
        currentEditingIndex = null; // Reset the editing index
    });

    // Handle form submission for adding or editing a product
    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();
        const productID = document.querySelector("#pID").value;
        const productName = document.querySelector("#pName").value;
        const productPrice = "$" + document.querySelector("#pPrice").value;
        const productDescription = document.querySelector("#pDes").value;

        // Add or update product logic here
        if (currentEditingIndex !== null) {
            // Edit existing product
            const editedProduct = {
                productID,
                productName,
                productPrice,
                productDescription,
                image: "images.png", // Placeholder image
            };
            productData[currentEditingIndex] = editedProduct;
        } else {
            // Add new product
            const newProduct = {
                productID,
                productName,
                productPrice,
                productDescription,
                image: "images.png", // Placeholder image
            };
            productData.push(newProduct);
        }

        // Re-render table and close the popup
        renderTable();
        popup.classList.remove("open");
    });

    // Render the table (same logic as before)
    renderTable();
});
