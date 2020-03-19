var html = '';
var length;
  var url = 'https://corona.lmao.ninja/countries';
  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {

        length = data.length;
        
      for (var i = 0; i < length; i++) {
        if (data[i].country == "Bangladesh")
          html +=
          '<div class="col s12 m4 l3"> <div class="card"> <div class="card-content white-text grey darken-1"><span class="card-title truncate">' + data[i].country +
          '</span> <p class=" lime accent-4 black-text">Cases: ' + data[i].cases +
          '</p> <p class=" light-green accent-4 black-text">Today Cases: ' + data[i].todayCases +
          '</p> <p class=" red accent-4 accent-4 white-text">Deaths: ' + data[i].deaths +
          '</p> <p class=" pink accent-3 accent-4 white-text">Today Deaths: ' + data[i].todayDeaths +
          '</p> <p class=" orange darken-3 accent-4 white-text">Critical: ' + data[i].critical +
          '</p> <p class="cyan accent-3 black-text">Recovered: ' + data[i].recovered + '</p> </div> </div> </div>';
      }


      for (var i = 0; i < length; i++) {


        html +=
          '<div class="col s12 m4 l3"> <div class="card"> <div class="card-content white-text grey darken-2"><span class="card-title truncate">' + data[i].country +
          '</span> <p class=" lime accent-4 black-text">Cases: ' + data[i].cases +
          '</p> <p class=" light-green accent-4 black-text">Today Cases: ' + data[i].todayCases +
          '</p> <p class=" red accent-4 accent-4 white-text">Deaths: ' + data[i].deaths +
          '</p> <p class=" pink accent-3 accent-4 white-text">Today Deaths: ' + data[i].todayDeaths +
          '</p> <p class=" orange darken-3 accent-4 white-text">Critical: ' + data[i].critical +
          '</p> <p class="cyan accent-3 black-text">Recovered: ' + data[i].recovered + '</p> </div> </div> </div>';

      }
      document.getElementById("view").innerHTML = html;
    });