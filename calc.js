document.addEventListener("DOMContentLoaded", () => {
    const productData = [
        {
            image: "images.png",
            productID: "PMS12345",
            productName: "iPhone",
            productPrice: "$2000",
            productDescription: "Smartphone",
        },
        {
            image: "images.png",
            productID: "PMS12346",
            productName: "Samsung Galaxy",
            productPrice: "$1500",
            productDescription: "Smartphone",
        },
    ];

    const productTable = document.querySelector(".productInfo");
    const popup = document.querySelector(".popup");
    const closePopupBtn = document.querySelector(".closeBtn");
    const form = document.querySelector("#myForm");
    const submitBtn = document.querySelector(".submitBtn");
    const newProductBtn = document.querySelector(".addProduct");
    const title = document.querySelector(".title");

    let currentEditingIndex = null;

    // Function to render the product data in the table
    function renderTable() {
        productTable.innerHTML = ''; // Clear the table
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

        // Populate the form with product data
        document.querySelector("#pID").value = product.productID;
        document.querySelector("#pName").value = product.productName;
        document.querySelector("#pPrice").value = parseFloat(product.productPrice.replace('$', ''));
        document.querySelector("#pDes").value = product.productDescription;

        // Update popup for editing
        title.textContent = "Edit Product";
        submitBtn.textContent = "Update Product";

        popup.classList.add("open");
    };

    // Delete product
    window.deleteProduct = (index) => {
        if (confirm("Are you sure you want to delete this product?")) {
            productData.splice(index, 1);
            renderTable();
        }
    };

    // Handle form submission (create or update product)
    submitBtn.addEventListener("click", (e) => {
        e.preventDefault(); // Prevent page reload

        const productID = document.querySelector("#pID").value;
        const productName = document.querySelector("#pName").value;
        const productPrice = "$" + document.querySelector("#pPrice").value;
        const productDescription = document.querySelector("#pDes").value;

        // Update or add product logic
        if (currentEditingIndex !== null) {
            productData[currentEditingIndex] = {
                productID,
                productName,
                productPrice,
                productDescription,
                image: "images.png", // Placeholder image
            };
        } else {
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

        // Reset form and variables
        form.reset();
        currentEditingIndex = null;
        title.textContent = "Fill the Form"; // Reset title
        submitBtn.textContent = "Submit"; // Reset button text
    });

    // Close the popup form when the close button is clicked
    closePopupBtn.addEventListener("click", () => {
        popup.classList.remove("open");
        form.reset();
        currentEditingIndex = null;
        title.textContent = "Fill the Form"; // Reset title
        submitBtn.textContent = "Submit"; // Reset button text
    });

    // Open the form for creating a new product when the New Product button is clicked
    newProductBtn.addEventListener("click", () => {
        popup.classList.add("open");
        form.reset();
        currentEditingIndex = null; // Reset editing index
        title.textContent = "Fill the Form"; // Set title for new product
        submitBtn.textContent = "Submit"; // Set button text for new product
    });

    // Initial render of the table
    renderTable();
});
