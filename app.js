var html = '';

// fetch("https://corona.lmao.ninja/all")
//     .then((response) => {
//       return response.json();
//     })
//     .then((data) => {
//       //html += '<div class="col s12 m4 l3"> <div class="card"> <div class="card-content white-text red darken-1"><span class="card-title truncate">' + 'Total' +'</span> <p></p> <p></p> <p></p> <p></p> <p class=" lime accent-4 black-text">Cases: ' + data.cases +'</p><p class=" red accent-4 accent-4 white-text">Deaths: ' + data.deaths + '</p><p class="cyan accent-3 black-text">Recovered: ' + data.recovered + '</p>  <p></p>  <p></p>  <p></p>  <p></p> </div> </div> </div>';
       
//     });


var length;
  var url = 'https://corona.lmao.ninja/v2/countries?sort=cases';
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {

        length = data.length;
        
      for (var i = 0; i < length; i++) {
        if (data[i].country == "Bangladesh")
          html +=
          '<div class="col s12 m4 l3"> <div class="card"> <div class="card-content white-text grey darken-3"><img  class="center-align" src="'+ data[i].countryInfo.flag+'" alt=""><span class="card-title truncate">' + data[i].country +
          '</span> <p class=" lime accent-4 black-text">Cases: ' + data[i].cases +
          '</p> <p class=" light-green accent-4 black-text">Today Cases: ' + data[i].todayCases +
          '</p> <p class=" red accent-4 accent-4 white-text">Deaths: ' + data[i].deaths +
          '</p> <p class=" pink accent-3 accent-4 white-text">Today Deaths: ' + data[i].todayDeaths +
          '</p> <p class=" orange darken-3 accent-4 white-text">Critical: ' + data[i].critical +
          '</p> <p class="cyan accent-3 black-text">Recovered: ' + data[i].recovered + '</p> </div> </div> </div>';
      }


      for (var i = 0; i < length; i++) {


        html +=
          '<div class="col s12 m4 l3"> <div class="card"> <div class="card-content white-text grey darken-2"><img  class="center-align" src="'+ data[i].countryInfo.flag +'" alt=""><span class="card-title truncate">' + data[i].country +
          '</span> <p class=" lime accent-4 black-text">Cases: ' + data[i].cases +
          '</p> <p class=" light-green accent-4 black-text">Today Cases: ' + data[i].todayCases +
          '</p> <p class=" red accent-4 accent-4 white-text">Deaths: ' + data[i].deaths +
          '</p> <p class=" pink accent-3 accent-4 white-text">Today Deaths: ' + data[i].todayDeaths +
          '</p> <p class=" orange darken-3 accent-4 white-text">Critical: ' + data[i].critical +
          '</p> <p class="cyan accent-3 black-text">Recovered: ' + data[i].recovered + '</p> </div> </div> </div>';

      }
      document.getElementById("view").innerHTML = html;
    });