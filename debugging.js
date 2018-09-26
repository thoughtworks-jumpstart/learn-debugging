const places = [];

const coordinator = {
  addPlace: (city, country) => {
    const id = places.length + 1;
    let numType = 'odd';
    if(id % 2 === 0){
      numType = 'even';
    }

    places.push({
      id, city, country, numType
    })
  }
}
coordinator.addPlace('Yishun', 'Singapore');

console.log(places);