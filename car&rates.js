const btns = document.querySelectorAll('.btn');
const storeProducts = document.querySelectorAll('.car-products');
for (i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', (e) => {
        e.preventDefault()

        const filter = e.target.dataset.filter;
        console.log(filter);

        storeProducts.forEach((product) => {
            if (filter === 'all') {
                product.style.display = "block";
            }
            else {
                if (product.classList.contains(filter)) {
                    product.style.display = "block";
                }
                else {
                    product.style.display = "none";
                }
            }
        });
    });
}

// Search Filter
const search = document.getElementById('search');
const productName = document.querySelectorAll('.car-product-detail h2');
search.addEventListener('keyup', filterproduct);

function filterproduct(e) {
    const text = e.target.value.toLowerCase();
    productName.forEach((product) => {
        const item = product.firstChild.textContent;
        if (item.toLocaleLowerCase().indexOf(text) != -1) {
            product.parentElement.parentElement.style.display = "block";
        }
        else {
            product.parentElement.parentElement.style.display = "none";
        }
    });
}

/*----------Set min date for pick up and return----------*/

var currentDateTime = new Date();
var year = currentDateTime.getFullYear();
var month = (currentDateTime.getMonth() + 1);
var date = (currentDateTime.getDate() + 1);

if(date < 10) {
    date = '0' + date;
}

if(month <10) {
    month = '0' + month;
}

var dateTomorrow = year + "-" + month + "-" + date;
var pickupElem = document.querySelector("#pickup-date");
var returnElem = document.querySelector("#return-date");

pickupElem.setAttribute("min", dateTomorrow);

pickupElem.onchange = function() {
    returnElem.setAttribute("min", this.value);
}

/*opening and closing booking form */

function openForm() {
    document.getElementById("booking").style.display = "block";
}

function closeForm() {
    document.getElementById("booking").style.display = "none";
}

/*----------Submit alert box---------- */

function bookBtn() {
    alert("Booking is confirm");
}

