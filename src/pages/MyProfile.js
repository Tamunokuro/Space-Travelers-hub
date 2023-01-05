import React from 'react';
import { useSelector } from 'react-redux';

const MyProfile = () => {
  const rockets = useSelector((state) => state.rockets.allRockets);
  const reservedRockets = rockets.filter((rocket) => rocket.reserved);

  return (
    <div>
      <h3>My Rockets</h3>
      <table>
        <tbody>
          {reservedRockets.length > 0 ? (
            reservedRockets.map((rocket) => (
              <tr key={rocket.id}>
                <td>
                  {rocket.rocket_name}
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td>No reservations</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default MyProfile;
