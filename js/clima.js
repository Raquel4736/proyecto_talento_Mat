document.getElementById("searchButton").addEventListener("click", async () => {
    const url = 'https://open-weather13.p.rapidapi.com/city/buenosAires/SP';
    const options = {
        method: 'GET',
        headers: {
            'x-rapidapi-key': 'e47776c353mshdef74afd7e3a313p182509jsne696f63bf9ed',
            'x-rapidapi-host': 'open-weather13.p.rapidapi.com'
        }
    };
    
    try {
        const response = await fetch(url, options);
        const result = await response.text();
        const weatherData = JSON.parse(result);

        document.getElementById("cityName").textContent = weatherData.name;
        document.getElementById("temperature").textContent = `${weatherData.main.temp - 273.15}°C`;
    } catch (error) {
        console.error(error);
    } 

    });
