import { Link } from 'react-router-dom';

export default function TableUsers({ user }) {
  const detailsName = `${user.name.first} ${user.name.last}`;
  const detailsPicture = user.picture.large;
  const detailsLocation = `${user.location.city}, ${user.location.state}, ${user.location.country}`;
  return (
    <>
      <tr>
        <td>
          <Link
            to={`/details?name=${detailsName}&picture=${detailsPicture}&location=${detailsLocation}&lat=${user.location.coordinates.latitude}&lng=${user.location.coordinates.longitude}`}
          >
            <img src={user.picture.medium} />
          </Link>
        </td>
        <td>{detailsName}</td>
        <td>{user.dob.age}</td>
        <td>{user.location.country}</td>
        <td>{user.gender}</td>
      </tr>
    </>
  );
}
