const searchPhone = () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    const url = `https://openapi.programming-hero.com/api/phones?search=${searchText}`;
    fetch(url)
    .then(res => res.json())
    .then(data => showDisply(data.data))
    // To Empty Field
    searchField.value = '';
}

// showing disply data
const showDisply = phones => {
    const searchResult = document.getElementById('search-result');
    phones.forEach(phone =>{
        console.log(phone);
        const displyDiv = document.createElement('div');
        displyDiv.classList.add('col');
        displyDiv.innerHTML = `
            <div class="card h-100 w-75 mx-auto p-3 border-0 shadow-lg rounded">
                   <img src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                   <h6 class="card-title">${phone.phone_name}</h6>
                   <h5 class="card-title">${phone.brand}</h5>
                   <button class = "btn bg-color text-white"> Details </button>
                </div>
            </div>
        `;
        searchResult.appendChild(displyDiv);
    });

}
