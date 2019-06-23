window.addEventListener('load', ()=>{
    let long;
    let lat;
    

    if(navigator.geolocation){
        navigator.geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;

            const proxy = `https://cors-anywhere.herokuapp.com/`
            const api = `${proxy}https://api.darksky.net/forecast/9ae0278c0798329d427de469113bfa3d/${lat},${long}`;

            fetch(api)
            .then(response => {
                return response.json()
            })
            .then(data => {
                console.log(data);
                const{temperature, summary} = data.currently;
            })
        });

        
    }
});