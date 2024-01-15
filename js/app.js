// Do Not Show API key on your js File. 

const fullUrl = 'https://api.openweathermap.org/data/2.5/weather?q=dhaka&appid=c7bfa6af8c25e888318166aff84da03c';

const API_KEY   = 'c7bfa6af8c25e888318166aff84da03c';

const loadTemperature = (city) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;
         fetch(url)
        .then(res => res.json())
        .then(data => displayDataLoad(data));
        // console.log(data);
    
}

const displayDataLoad = (data) => {
    // console.log(data);

    setInnerTextByID('temperature', data.main.temp);
    setInnerTextByID('condition', data.weather[0].main);
    setInnerTextByID('discription', data.weather[0].description)
    
    
}

const setInnerTextByID = (id, text) => {
    const temperature = document.getElementById(id);
    temperature.innerText = text;
}

document.getElementById('btn-search').addEventListener('click', function(){
    const searchField = document.getElementById('search-field');
    const city = searchField.value ;

    //set city 
   if(city === ''){
    return
   }
   else{
    document.getElementById('city').innerText = city;

    loadTemperature(city);
   }
})

loadTemperature('dhaka');
