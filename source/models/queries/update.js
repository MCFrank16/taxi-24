const updateQueries = {
  updateTrack: (id, driverID, location, status, trip, updatedAt) => `
      UPDATE Track SET 
      id = '${id}', DriverID = '${driverID}', location = '${location}', 
      isAvailable = '${status}', onTrip = '${trip}',  updatedAt = '${updatedAt}'
      WHERE DriverID = '${driverID}'
   `,
  updateDriverStatus: (status, onTrip, driverID) => `
      UPDATE Track SET isAvailable = '${status}', onTrip = '${onTrip}' WHERE DriverID = '${driverID}'
   `,
  completeTrip: (id, total) => `
      UPDATE Trips SET status = 'completed', amount = '${total}' WHERE id = '${id}'
  `
};

module.exports = updateQueries;
