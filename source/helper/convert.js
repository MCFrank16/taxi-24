/**
 * a helper function to calculate the distance between 2 coordinations in kilometers.
 * can be stackoverflow on:
 * https://stackoverflow.com/questions/18883601/function-to-calculate-distance-between-two-coordinates
 *
 * @param {object} latitude 2 points indicating the latitude.
 * @param {object} longitude 2 points indicating the longitude.
 *
 * @return {response} it will return the distance in kilometers.
 */


const deg2rad = (deg) => deg * (Math.PI / 180);

const getDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371; // Radius of the earth in km
  const dLat = deg2rad(lat2 - lat1);  // deg2rad below
  const dLon = deg2rad(lon2 - lon1);
  const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const d = R * c; // Distance in km
  return d;
};

module.exports = getDistance;
