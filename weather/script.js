


 const convert_to_json = function (convert) {
    return convert.json();
    

}

const handle_old_data = function (data){
    const temp = document.getElementById("jai_temp");
    const max = document.getElementById("max_temp");
    const min = document.getElementById("min_temp");
    const cityname = document.getElementById("jai");
    const desc = document.getElementById("jai_desc");

    const tempValu = data['main']['temp'];
        const tempmaxValue = data['main']['temp_max'];
        const tempminValue = data['main']['temp_min'];
     const  pressureValue = data['main']['pressure'];
        const nameValue = data['name'];
        const descValue = data['weather'][0]['description'];

        temp.innerHTML = `${tempValu}`;
        max.innerHTML= `-${tempmaxValue} &#8451`;
        min.innerHTML= `${tempminValue} &#8451`;
        cityname.innerHTML=nameValue;
        desc.innerHTML= descValue;
        
}




fetch("https://api.openweathermap.org/data/2.5/onecall?lat=26.9124&lon=75.7873&dt=1647113942&appid=f84fe88c811f8adb8710ddbed48712a3")
.then(convert_to_json).
then(handle_old_data);




const button =document.getElementById("btn");
const input = document.getElementById("input_city");
button.addEventListener('click', function(name){

    const convert_to_json = function (convert) {
        return convert.json();
        // console.log(convert.json());
    
    }
    
    const handle_data = function (data) {
        const text = document.getElementById("temprature");
        const max = document.getElementById("max");
        const min = document.getElementById("min");
        const cityname = document.getElementById("cityname");
        const desc = document.getElementById("desc");
        var tempValue = data['main']['temp'];
        var tempmaxValue = data['main']['temp_max'];
        var tempminValue = data['main']['temp_min'];
        var pressureValue = data['main']['pressure'];
        var nameValue = data['name'];
        var descValue = data['weather'][0]['description'];
        text.innerHTML= `${tempValue} &#8451`;
        max.innerHTML= `-${tempmaxValue} &#8451`;
        min.innerHTML= `${tempminValue} &#8451`;
        cityname.innerHTML=nameValue;
        desc.innerHTML= descValue;
       
    }
fetch('https://api.openweathermap.org/data/2.5/weather?q='+input.value+'&units=metric&appid=f84fe88c811f8adb8710ddbed48712a3')
    .then(convert_to_json)
    .then(handle_data);

})

    const convert_tto_json = function (convert) {
        return convert.json();
        // console.log(convert.json())
    }
    
    const handle_newdata = function(res) {
        const temp = document.getElementById("jai_temp");
        const max = document.getElementById("max_temp");
        const min = document.getElementById("min_temp");
        const cityname = document.getElementById("jai");
        const desc = document.getElementById("jai_desc");
        const dat = res.daily[0].dt;
        const sunday2 = res.daily[0].weather[0].icon;
        const sunday = res.daily[0].weather[0].description;
        const sundaytemp= res.daily[0].temp.day;
        const max_temp= res.daily[0].temp.max;
        const min_temp= res.daily[0].temp.min;
        const windspeed = res.daily[0].wind_speed;
        const sundaypressure= res.daily[0].pressure;

        temp.innerHTML = `${sundaytemp}`;
        max.innerHTML= `-${max_temp} &#8451`;
        min.innerHTML= `${min_temp} &#8451`;
        // cityname.innerHTML=nameValue;
        desc.innerHTML= sunday;


        const milliseconds = dat * 1000 // 1575909015000
        
        const dateObject = new Date(milliseconds)
        
        const humanDateFormat = dateObject.toLocaleString() //2019-12-9 10:30:15 
       
    }


   


fetch("https://api.openweathermap.org/data/2.5/onecall?lat=26.9124&lon=75.7873&exclude=hourly,minutely,alerts,current&units=metric&appid=f84fe88c811f8adb8710ddbed48712a3")
.then(convert_tto_json)
.then(handle_newdata);

// const convert_sat_json = function (conver) {
//     return conver.json();
//     // console.log(convert.json())
// }

// const handle_sat_data = function(res) {

// const container1 = document.getElementById('yesterday');
// const sat_date = res.daily[1].dt;
// const sat_icon = res.daily[1].weather[1].icon;
// const sat_des = res.daily[1].weather[1].description;
// const sat_temp= res.daily[1].temp.day;
// const sat_windspeed = res.daily[1].wind_speed;
// const sat_pressure= res.daily[1].pressure;


// const sat_milliseconds = sat_date * 1000 // 1575909015000

// const sat_dateObject = new Date(milliseconds)

// const sat_humanDateFormat = dateObject.toLocaleString() //2019-12-9 10:30:15
 
// container1.innerText = `${sat_icon} <br> ${sat_humanDateFormat} <br>  ${sat_date} <br> Temp-${sat_temp}'C <br> Windspeed ${sat_windspeed}m/sec <br> Pressure-${sat_pressure}`; 

// }

// fetch("https://api.openweathermap.org/data/2.5/onecall?lat=33.44&lon=-94.04&exclude=hourly,minutely,alerts,current&units=metric&appid=f84fe88c811f8adb8710ddbed48712a3")
// .then(convert_sat_json)
// .then(handle_sat_data);
