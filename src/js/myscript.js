console.log('Welcome to HackerU-JustCode Assignment');
$(document).ready(function() {
    getRemoteData();
});
function getRemoteData() {

    function displayData(data){
        idTag = document.querySelector('.id')
        countryTag = document.querySelector('.country')
        continentTag = document.querySelector('.continent')
        capitalTag = document.querySelector('.capital')
        modifiedTag = document.querySelector('.modified')
        data.map(item => {
            idTag.appendChild(document.createElement('p'))
            idTag.lastChild.innerHTML += item.id
            countryTag.appendChild(document.createElement('p'))
            countryTag.lastChild.innerHTML += item.countryName
            continentTag.appendChild(document.createElement('p'))
            continentTag.lastChild.innerHTML += item.continent
            capitalTag.appendChild(document.createElement('p'))
            capitalTag.lastChild.innerHTML += item.capital
            modifiedTag.appendChild(document.createElement('p'))
            modifiedTag.lastChild.innerHTML += item.modifiedOn

        })
    }
    const URL = 'https://www.justcode.com/dataservice/api/country/list';
    $.ajax({
        url: URL,
        type: 'GET',
        dataType: 'json',
        success: function(data) {
            displayData(data);
        }
    });
    
}