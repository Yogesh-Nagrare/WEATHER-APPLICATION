const on = document.querySelector('button');
on.addEventListener('click',(event)=>{
    const place = document.getElementById('city').value;
    // In this line, the value stored in place (which is the city name entered by the user) is dynamically inserted into the URL using string interpolation (${place}). This URL is used to make a request to the weather API for the weather data of the city that the user typed into the input field.
    // So, place is used as part of the query string in the API URL (q=${place}), and that's how it affects which city's weather data gets fetched
    function Updatetemp(data){
        const element = document.getElementById('weather-result');
        element.innerHTML = `Today's Temperature:` + data.current.temp_c;
    }


const prom = fetch(`http://api.weatherapi.com/v1/current.json?key=cb6538f8a8fc4df1be492634250201&q=${place}&aqi=yes`)
prom
.then(response=>response.json())
.then(data=>Updatetemp(data));
});