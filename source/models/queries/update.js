const updateQueries = {
  updateTrack: (id, driverID, location, status, trip, updatedAt) => `
      UPDATE Track SET 
      id = '${id}', DriverID = '${driverID}', location = '${location}', 
      isAvailable = '${status}', onTrip = '${trip}',  updatedAt = '${updatedAt}'
      WHERE DriverID = '${driverID}'
   `
};

module.exports = updateQueries;
