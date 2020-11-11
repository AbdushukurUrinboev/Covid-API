let isLoading = true;

$(document).ready(function () {
    $.get("https://api.covid19api.com/summary",
        function (data) {
            $("#loading").hide();
            let ratesView = "<table border='1' class = 'container'>";



            let allCountries = ratesView

                +
                "<h3 class = 'corona-title'>Coronavirus World Statistics</h3>"


                +
                "<tr>" +
                "<th class = 'th-bgcolor main-color'>" + "Name" + "</th>" +
                "<th class = 'th-bgcolor main-color'>" + "Cases" + "</th>" +
                "<th class = 'th-bgcolor main-color'>" + "Deaths" + "</th>" +
                "<th class = 'th-bgcolor main-color'>" + "Recovered" + "</th>" +
                "</tr>"

                +
                "<tr>" +
                "<th>" + "World Wide" + "</th>" +
                "<th>" + data.Global.TotalConfirmed + "</th>" +
                "<th>" + data.Global.TotalDeaths + "</th>" +
                "<th>" + data.Global.TotalRecovered + "</th>" +
                "</tr>"



                // Uzbekistan
                +
                "<tr>" +
                "<th class = 'th-bgcolor'>" + data.Countries[179].Country + "</th>" +
                "<td class = 'th-bgcolor'>" + data.Countries[179].TotalConfirmed + "</td>" +
                "<td class = 'th-bgcolor'>" + data.Countries[179].TotalDeaths + "</td>" +
                "<td class = 'th-bgcolor'>" + data.Countries[179].TotalRecovered + "</td>" +
                "</tr>"

                // Russia
                +
                "<tr>" +
                "<th>" + data.Countries[138].Country + "</th>" +
                "<td>" + data.Countries[138].TotalConfirmed + "</td>" +
                "<td>" + data.Countries[138].TotalDeaths + "</td>" +
                "<td>" + data.Countries[138].TotalRecovered + "</td>" +
                "</tr>"

                // USA
                +
                "<tr>" +
                "<th class = 'th-bgcolor'>" + data.Countries[177].Country + "</th>" +
                "<td class = 'th-bgcolor'>" + data.Countries[177].TotalConfirmed + "</td>" +
                "<td class = 'th-bgcolor'>" + data.Countries[177].TotalDeaths + "</td>" +
                "<td class = 'th-bgcolor'>" + data.Countries[177].TotalRecovered + "</td>" +
                "</tr>"

                // UK
                +
                "<tr>" +
                "<th>" + data.Countries[176].Country + "</th>" +
                "<td>" + data.Countries[176].TotalConfirmed + "</td>" +
                "<td>" + data.Countries[176].TotalDeaths + "</td>" +
                "<td>" + data.Countries[176].TotalRecovered + "</td>" +
                "</tr>"

                // India
                +
                "<tr>" +
                "<th class = 'th-bgcolor'>" + data.Countries[76].Country + "</th>" +
                "<td class = 'th-bgcolor'>" + data.Countries[76].TotalConfirmed + "</td>" +
                "<td class = 'th-bgcolor'>" + data.Countries[76].TotalDeaths + "</td>" +
                "<td class = 'th-bgcolor'>" + data.Countries[76].TotalRecovered + "</td>" +
                "</tr>"

                // China
                +
                "<tr>" +
                "<th>" + data.Countries[35].Country + "</th>" +
                "<td>" + data.Countries[35].TotalConfirmed + "</td>" +
                "<td>" + data.Countries[35].TotalDeaths + "</td>" +
                "<td>" + data.Countries[35].TotalRecovered + "</td>" +
                "</tr>"

                // South Korea
                +
                "<tr>" +
                "<th class = 'th-bgcolor'>" + data.Countries[88].Country + "</th>" +
                "<td class = 'th-bgcolor'>" + data.Countries[88].TotalConfirmed + "</td>" +
                "<td class = 'th-bgcolor'>" + data.Countries[88].TotalDeaths + "</td>" +
                "<td class = 'th-bgcolor'>" + data.Countries[88].TotalRecovered + "</td>" +
                "</tr>"

                // Australia 
                +
                "<tr>" +
                "<th>" + data.Countries[8].Country + "</th>" +
                "<td>" + data.Countries[8].TotalConfirmed + "</td>" +
                "<td>" + data.Countries[8].TotalDeaths + "</td>" +
                "<td>" + data.Countries[8].TotalRecovered + "</td>" +
                "</tr>"

                // Brazil   
                +
                "<tr>" +
                "<th class = 'th-bgcolor'>" + data.Countries[23].Country + "</th>" +
                "<td class = 'th-bgcolor'>" + data.Countries[23].TotalConfirmed + "</td>" +
                "<td class = 'th-bgcolor'>" + data.Countries[23].TotalDeaths + "</td>" +
                "<td class = 'th-bgcolor'>" + data.Countries[23].TotalRecovered + "</td>" +
                "</tr>"

                // Canada    
                +
                "<tr>" +
                "<th>" + data.Countries[30].Country + "</th>" +
                "<td>" + data.Countries[30].TotalConfirmed + "</td>" +
                "<td>" + data.Countries[30].TotalDeaths + "</td>" +
                "<td>" + data.Countries[30].TotalRecovered + "</td>" +
                "</tr>"

                +
                "</table>"



            $("#result").append(allCountries);
        }
    );
    $.get("https://api.covid19api.com/summary",
        function (data) {
            $("#loading").hide();
            let ratesViewWorld = "<table class = 'container'>";



            let allCountriesWorld = ratesViewWorld

                +
                "<tr>" +
                "<th>" + data.Global.TotalDeaths + "</th>" +

                "</tr>"


            $("#resultdeath").append(allCountriesWorld);
    });


    $.get("https://api.covid19api.com/summary",
        function (data) {
           
            let ratesViewCases = "<table class = 'container'>";



            let allCountriesCases = ratesViewCases

                +
                "<tr>" +
                "<th>" + data.Global.TotalConfirmed + "</th>" +

                "</tr>"


            $("#resultcases").append(allCountriesCases);
    });

    $.get("https://api.covid19api.com/summary",
    function (data) {
        $("#loading").hide();
        let ratesViewRecovered = "<table class = 'container'>";



        let allCountriesRecovered = ratesViewRecovered

            +
            "<tr>" +
            "<th>" + data.Global.TotalRecovered + "</th>" +

            "</tr>"


        $("#resultrecovered").append(allCountriesRecovered);
});


});