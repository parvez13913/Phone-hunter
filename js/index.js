const loadPhone = () => {
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
const showDisply = phone => {
    console.log(phone);
}
