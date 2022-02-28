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
    searchResult.textContent ='';
    phones.forEach(phone =>{
        const displyDiv = document.createElement('div');
        displyDiv.classList.add('col');
        displyDiv.innerHTML = `
            <div class="card h-100 w-75 mx-auto p-3 border-0 shadow-lg rounded">
                   <img src="${phone.image}" class="card-img-top" alt="...">
                <div class="card-body">
                   <h6 class="card-title"> Name: ${phone.phone_name}</h6>
                   <h5 class="card-title">Brand: ${phone.brand}</h5>
                   <button onclick = "phoneDetails('${phone.slug}')"  class = "btn bg-color text-white"> Details </button>
                </div>
            </div>
        `;
        searchResult.appendChild(displyDiv);
    });

}
// click details button.....
const phoneDetails = phoneId => {
    const url = ` https://openapi.programming-hero.com/api/phone/${phoneId}`;
    fetch(url)
    .then(res => res.json())
    .then(data => showPhoneDetails(data.data))
}
// showing phone detail in display......
const showPhoneDetails = phone => {
    console.log(phone);
    const phoneDetailsDiv = document.getElementById('phone-details');
    phoneDetailsDiv.textContent = '';
    const detailsDiv = document.createElement('div');
    detailsDiv.classList.add('col');
    detailsDiv.innerHTML = `
    <div class="card h-100 w-75 mx-auto p-3 border-0 shadow-lg rounded">
            <img src="${phone.image}" class="card-img-top" alt="...">
        <div class="card-body">
            <h6 class="card-title"> Name: ${phone.name}</h6>
            <h6 class="card-title"> Release Date: ${phone?.releaseDate}</h6>
            <h6 class="card-title">Brand: ${phone.brand}</h6>
            <p class="card-title">ChipSet: ${phone.mainFeatures.chipSet}</p>
            <p class="card-title">DisplaySize: ${phone.mainFeatures.displaySize}</p>
            <p class="card-title">Memory: ${phone.mainFeatures.memory}</p>
            <p class="card-title">Sensors: ${phone.mainFeatures.sensors[0]}</p>
            <p class="card-title">Bluetooth: ${phone.others.Bluetooth}</p>
            <p class="card-title">GPS: ${phone.others.GPS}</p>
            <p class="card-title">USB: ${phone.others.USB}</p>
            <p class="card-title">WLAN: ${phone.others.WLAN}</p>
            <p class="card-title">NFC: ${phone.others.NFC}</p>
            <p class="card-title">Radio: ${phone.others.Radio}</p>
        </div>
    </div>
    `;
    phoneDetailsDiv.appendChild(detailsDiv);
}
