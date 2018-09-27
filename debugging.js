const places = [];

module.exports = {
  places,

  addPlace: (city, country) => {
    const id = ++places.length;
    let numType = 'odd';
    if(id % 2){
      numType = 'even';
    }

    places.push({
      id, city, country, numType
    })
  }
}

//addPlace('Yishun', 'Singapore');
//console.log(places);