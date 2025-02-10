document.addEventListener("DOMContentLoaded", () => {
    // Load product data from localStorage, or use default if empty
    const productData = JSON.parse(localStorage.getItem("productData")) || [
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
    const pagination = document.querySelector(".pagination");
    const pageSize = 7;
    let currentPage = 1;

    let currentEditingIndex = null;

    // Function to save data to localStorage
    function saveToLocalStorage() {
        localStorage.setItem("productData", JSON.stringify(productData));
    }

    // Validation function to check if all fields are filled
    function validateForm() {
        const productID = document.querySelector("#pID").value;
        const productName = document.querySelector("#pName").value;
        const productPrice = document.querySelector("#pPrice").value;
        const productDescription = document.querySelector("#pDes").value;
        const productImage = document.querySelector("#imagePreview").src !== "images.png"; // Check if an image has been uploaded

        if (productID && productName && productPrice && productDescription && productImage) {
            submitBtn.disabled = false;
        } else {
            submitBtn.disabled = true;
        }
    }

    // Add event listeners to validate the form on input
    document.querySelector("#pID").addEventListener("input", validateForm);
    document.querySelector("#pName").addEventListener("input", validateForm);
    document.querySelector("#pPrice").addEventListener("input", validateForm);
    document.querySelector("#pDes").addEventListener("input", validateForm);

    // Render the product table
    function renderTable() {
        productTable.innerHTML = '';

        const startIndex = (currentPage - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        const productsOnPage = productData.slice(startIndex, endIndex);

        productsOnPage.forEach((product, index) => {
            const tr = document.createElement("tr");
            tr.classList.add("productRow");

            tr.innerHTML = `
                <td class="tableData_1"><img src="${product.image}" alt="" height="40" width="40"></td>
                <td class="tableData_2">${product.productID}</td>
                <td class="tableData_3">${product.productName}</td>
                <td class="tableData_4">${product.productPrice}</td>
                <td class="tableData_5">${product.productDescription}</td>
                 <td>
                    <button class="readBtn" onclick="viewProduct(${index})"> <i class="fa-regular fa-eye"></i> </button>
                    <button class="editBtn" onclick="editProduct(${index})"> <i class="fa-regular fa-pen-to-square"></i> </button>
                    <button class="deleteBtn" onclick="deleteProduct(${index})"><i class="fa-regular fa-trash-can"></i></button>
                </td>
            `;
            productTable.appendChild(tr);
        });

        updatePagination();
    }

        function updatePagination() {
        const totalPages = Math.ceil(productData.length / pageSize);
        pagination.innerHTML = '';

        // Create "Previous" button
        const prevButton = document.createElement("button");
        prevButton.textContent = "Prev";
        prevButton.classList.add("pagination-btn", "prev-btn");
        prevButton.disabled = currentPage === 1;
        prevButton.addEventListener("click", () => {
            if (currentPage > 1) {  
                currentPage--;
                renderTable();
            }
        });
        pagination.appendChild(prevButton);

        // Create page number buttons
        for (let i = 1; i <= totalPages; i++) {
            const pageButton = document.createElement("button");
            pageButton.textContent = i;
            pageButton.classList.toggle("active", i === currentPage);
            pageButton.addEventListener("click", () => {
                currentPage = i;
                renderTable();
            });
            pagination.appendChild(pageButton);
        }

        // Create "Next" button
        const nextButton = document.createElement("button");
        nextButton.textContent = "Next";
        nextButton.classList.add("pagination-btn", "next-btn");
        nextButton.disabled = currentPage === totalPages;
        nextButton.addEventListener("click", () => {
            if (currentPage < totalPages) {
                currentPage++;
                renderTable();
            }
        });
        pagination.appendChild(nextButton);
    }

    // View product details
    window.viewProduct = (index) => {
        const product = productData[index];
        currentEditingIndex = index;

        // Set query parameters to route
        window.location.href = `?view=${product.productID}`;
    };

    // Edit product details
    window.editProduct = (index) => {
        const product = productData[index];
        currentEditingIndex = index;

        // Set query parameters to route
        window.location.href = `?edit=${product.productID}`;
    };

    // Handle product view/edit page logic based on query parameter
    function handleRouting() {
        const urlParams = new URLSearchParams(window.location.search);
        const productID = urlParams.get("view") || urlParams.get("edit");

        if (productID) {
            const product = productData.find(p => p.productID === productID);
            if (product) {
                document.querySelector("#pID").value = product.productID;
                document.querySelector("#pName").value = product.productName;
                document.querySelector("#pPrice").value = parseFloat(product.productPrice.replace('$', ''));
                document.querySelector("#pDes").value = product.productDescription;
                document.querySelector("#imagePreview").src = product.image;

                // Enable or disable fields based on action (view/edit)
                if (urlParams.has("view")) {
                    // For view: Disable all fields and submit button
                    document.querySelector("#pID").disabled = true;
                    document.querySelector("#pName").disabled = true;
                    document.querySelector("#pPrice").disabled = true;
                    document.querySelector("#pDes").disabled = true;
                    document.querySelector("#uploadimg").disabled = true;
                    submitBtn.disabled = true;
                } else if (urlParams.has("edit")) {
                    // For edit: Enable fields for editing
                    document.querySelector("#pID").disabled = false;
                    document.querySelector("#pName").disabled = false;
                    document.querySelector("#pPrice").disabled = false;
                    document.querySelector("#pDes").disabled = false;
                    document.querySelector("#uploadimg").disabled = false;
                    submitBtn.disabled = false;
                }

                popup.classList.add("open");
            }
        }
    }

    // Delete product
    window.deleteProduct = (index) => {
        if (confirm("Are you sure you want to delete this product?")) {
            productData.splice(index, 1);
            saveToLocalStorage();
            renderTable();
        }
    };

    // Handle form submission (either create a new product or update an existing one)
    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const productImage = document.querySelector("#imagePreview").src;
        const productID = document.querySelector("#pID").value;
        const productName = document.querySelector("#pName").value;
        const productPrice = document.querySelector("#pPrice").value;
        const productDescription = document.querySelector("#pDes").value;

        if (productID === "" || productName === "" || productPrice === "" || productDescription === "" || productImage === "images.png") {
            alert('Please fill all the fields and upload an image');
            return;
        }

        const formattedProductPrice = "$" + productPrice;

        // If we are editing an existing product, update it
        if (currentEditingIndex !== null) {
            productData[currentEditingIndex] = {
                productID,
                productName,
                productPrice: formattedProductPrice,
                productDescription,
                image: productImage,
            };
        } else {
            // Otherwise, add the new product
            productData.push({
                productID,
                productName,
                productPrice: formattedProductPrice,
                productDescription,
                image: productImage,
            });
        }

        saveToLocalStorage();  // Save changes to localStorage
        popup.classList.remove("open");
        renderTable();

        form.reset();
        currentEditingIndex = null;

        validateForm();
        submitBtn.disabled = true;
    });

    // Close the popup form when the close button is clicked
    closePopupBtn.addEventListener("click", () => {
        popup.classList.remove("open");
        form.reset();
        currentEditingIndex = null;

        document.querySelector("#pID").disabled = false;
        document.querySelector("#pName").disabled = false;
        document.querySelector("#pPrice").disabled = false;
        document.querySelector("#pDes").disabled = false;
        document.querySelector("#imagePreview").src = "images.png"; // Reset image preview
        document.querySelector("#uploadimg").disabled = false; // Enable file upload
    });

    // Open the form for creating a new product when the New Product button is clicked
    newProductBtn.addEventListener("click", () => {
        popup.classList.add("open");
        form.reset();
        currentEditingIndex = null;

        document.querySelector("#imagePreview").src = "images.png";
        document.querySelector("#uploadimg").disabled = false;

        submitBtn.disabled = false;
    });

    // Handle the routing (view/edit) when the page loads
    handleRouting();

    renderTable();  // Render the table initially
});
