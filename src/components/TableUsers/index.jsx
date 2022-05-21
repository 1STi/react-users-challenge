import { Link } from 'react-router-dom';

export default function TableUsers({
  detailsName,
  detailsPicture,
  detailsLocation,
  user,
}) {
  return (
    <>
      <tr className="users">
        <td>
          <Link
            to={`/details?name=${detailsName}&picture=${detailsPicture}&city=${detailsPicture}&location=${detailsLocation}&lat=${user.location.coordinates.latitude}&lon=${user.location.coordinates.longitude}`}
          >
            <img src={user.picture.thumbnail} />
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
