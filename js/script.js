const searchPhone = () => {
    const phoneDetailsDiv = document.getElementById('phone-details');
    phoneDetailsDiv.textContent = '';
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    const searchTextCase = searchText.toLowerCase();
    // error message..
    const errorMessage = document.getElementById("notify-fail");
    const emptyErrorMessage = document.getElementById("notify-empty");
    const errorSpinner = document.getElementById("spinner");
    // error handle 
    if(searchTextCase === ''){
        errorSpinner.style.display = "block";
        emptyErrorMessage.style.display = "block";
        errorMessage.style.display = "none";
        const searchResult = document.getElementById('search-result');
        searchResult.textContent ='';
    }
    else{
        const url = `https://openapi.programming-hero.com/api/phones?search=${searchTextCase}`;
          fetch(url)
         .then(res => res.json())
         .then(data => showDisply(data.data))
         errorMessage.style.display = "none";
         errorSpinner.style.display = "none";
         emptyErrorMessage.style.display = "none";
    }
    // To Empty Field
    searchField.value = '';
}

// showing disply data
const showDisply = phones => {
    // error hendle 
    const errorMessage = document.getElementById("notify-fail");
    const errorSpinner = document.getElementById("spinner");
    if(phones.length === 0){
        errorMessage.style.display ="block";
        errorSpinner.style.display = "block";
        const searchResult = document.getElementById('search-result');
        searchResult.textContent ='';
    }
    if(phones.length > 20){
               const searchResult = document.getElementById('search-result');
                searchResult.textContent ='';
                const first20 = phones.slice(0,20)
                first20.forEach(phone =>{
                const displyDiv = document.createElement('div');
                displyDiv.classList.add('col');
                displyDiv.innerHTML = `
                <div class="card h-100 w-75 mx-auto p-3 border-0 shadow-lg rounded">
                       <img src="${phone.image}" class="card-img-top" alt="...">
                    <div class="card-body">
                       <h5 class="card-title"> Name: ${phone.phone_name}</h5>
                       <h6 class="card-title">Brand: ${phone.brand}</h6>
                       <button onclick = "phoneDetails('${phone.slug}')"  class = "btn bg-color text-white"> Details </button>
                    </div>
                </div>
            `;
            searchResult.appendChild(displyDiv);
        });
    }
    else{
        const searchResult = document.getElementById('search-result');
        searchResult.textContent ='';
        phones.forEach(phone =>{
        const displyDiv = document.createElement('div');
        displyDiv.classList.add('col');
        displyDiv.innerHTML = `
        <div class="card h-100 w-75 mx-auto p-3 border-0 shadow-lg rounded">
               <img src="${phone?.image}" class="card-img-top" alt="...">
            <div class="card-body">
               <h5 class="card-title"> Name: ${phone?.phone_name}</h5>
               <h6 class="card-title">Brand: ${phone?.brand}</h6>
               <button onclick = "phoneDetails('${phone?.slug}')"  class = "btn bg-color text-white"> Details </button>
            </div>
        </div>
    `;
    searchResult.appendChild(displyDiv);
});

    }
    
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
    if(phone.releaseDate === ''){
        phone.releaseDate = "Release Date is not Found"
    }
    if(typeof phone.others === 'undefined'){
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
            <h6 class="card-title">Brand: ${phone?.brand}</h6>
            <p class="card-title">ChipSet: ${phone?.mainFeatures.chipSet}</p>
            <p class="card-title">DisplaySize: ${phone?.mainFeatures?.displaySize}</p>
            <p class="card-title">Memory: ${phone?.mainFeatures?.memory}</p>
            <p class="card-title">Sensors: ${phone?.mainFeatures?.sensors}</p>
            <h5>Other: not Found</h5>
        </div>
    </div>
    `;
    phoneDetailsDiv.appendChild(detailsDiv);
    }
    else{
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
            <h6 class="card-title">Brand: ${phone?.brand}</h6>
            <p class="card-title">ChipSet: ${phone?.mainFeatures.chipSet}</p>
            <p class="card-title">DisplaySize: ${phone?.mainFeatures?.displaySize}</p>
            <p class="card-title">Memory: ${phone?.mainFeatures?.memory}</p>
            <p class="card-title">Sensors: ${phone?.mainFeatures?.sensors}</p>
            <h5>Other:</h5>
            <p class="card-title">Bluetooth: ${phone?.others?.Bluetooth}</p>
            <p class="card-title">GPS: ${phone?.others?.GPS}</p>
            <p class="card-title">USB: ${phone?.others?.USB}</p>
            <p class="card-title">WLAN: ${phone?.others?.WLAN}</p>
            <p class="card-title">NFC: ${phone?.others?.NFC}</p>
            <p class="card-title">Radio: ${phone?.others?.Radio}</p>
        </div>
    </div>
    `;
    phoneDetailsDiv.appendChild(detailsDiv);
    }
}
