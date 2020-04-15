function imagePath (description){
    if (description=== "few clouds") {
       return '/images/cloud-sun.png' ;
    } else if (description === 'scattered clouds') {
       return '/images/cloud-sun.png';
    } else if (description === 'overcast clouds') {
        return '/images/overcast-clouds.png';
    } else if (description === 'broken clouds') {
        return '/images/cloud-sun.png' ;
    } else if (description === "light rain") {
        return '/images/light-rain.png' ;
    } else if (description === 'clear sky') {
        return'/images/sun.png' ;
    } else if (description === 'light snow') {
        return'/images/light-snow.png';
    } else if (description === 'moderate rain') {
        return '/images/moderate-rain.png';
    }else if(description === 'light intensity shower rain'){
        return '/images/moderate-rain.png';
    }else if(description === 'mist'){
        return'/images/mist.png';
    }
}

export default imagePath;