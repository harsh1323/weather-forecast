//Complete the Weather API Backend part using openweathermap api

var api = 'b4b2e0f7ca15eafbe4c8c3a160a41f18';
var cityname = document.getElementById("city");
var date = document.getElementById("date");
var temp = document.getElementById("temp");
var weather = document.getElementById("weather");
var hltemp = document.getElementById("hi-low");
let getWeather =()=>{
    var weekdays = ['Sunday','Monday','Tuesday','Wesnesday','Thrusday','Friday','Saturday','Sunday'];
    var months =['January','Febuary','March','April','May','June','July','August','September','October','November','December'];
    var city = document.getElementById("search-box").value;
    var url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api}`;
    axios.get(url)
    .then(res=>{
        let data = res.data;
        cityname.innerHTML = data.name;
        data.main.temp = Math.round(data.main.temp - 273);
        temp.innerHTML = data.main.temp + '°c';

        var curDate = new Date();
        var cday = curDate.getDay();
        var weekname = weekdays[cday];
        var cdate = curDate.getDate();
        var curmonth = curDate.getMonth();
        var cmonth = months[curmonth];
        var cyear = curDate.getFullYear();

        date.innerHTML = weekname + ' '+cdate+' '+cmonth+' '+cyear;

        weather.innerHTML = data.weather[0].main;

        hltemp.innerHTML = Math.floor(data.main.temp_max-273) + '°c ' + '/ ' + Math.floor(data.main.temp_min-273) + '°c';
    }).catch(error=>{
        console.log(error);
    })
   
}



