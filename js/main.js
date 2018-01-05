$(function () {
    var url = 'https://restcountries.eu/rest/v1/name/';
    var countriesList = $('#countries');
    var countryText = "";
    $('#search').click(searchCountries);

    function searchCountries() {
        var countryName = $("#country-name").val();
        if (!countryName.length) countryName = 'Poland';
        $.ajax({
            url: url + countryName,
            method: 'GET',
            success: showCountriesList,
            error: countriesList.text("Change search parameter")
        });
    }

    function showCountriesList(resp) {
        countriesList.empty();
        resp.forEach(function (item) {
            countryText = '<h2>' + item.name + '</h2>' + '<br/ ><strong>languages: </strong>' + item.languages + ', <strong>capital: </strong>' + item.capital + ', <strong>currencies: </strong>' + item.currencies + ',<strong> population:</strong> ' + item.population + ', <strong>region: </strong>' + item.region;
            $('<li>').html(countryText).appendTo(countriesList);
        })
    }
});
