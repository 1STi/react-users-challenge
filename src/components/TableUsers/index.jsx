import { Link } from 'react-router-dom';

export default function TableUsers(props) {
  console.log(renderUsers.user.detailsName);
  return (
    <>
      <tr className="users" key={user.login.uuid}>
        <td>
          <Link
            to={`/details?name=${detailsName}&picture=${detailsPicture}&city=${detailsPicture}&location=${detailsLocation}&lat=${user.location.coordinates.latitude}&lon=${user.location.coordinates.longitude}`}
          >
            <img src={user.picture.thumbnail} />
          </Link>
        </td>
        <td>
          {user.name.first} {user.name.last}
        </td>
        <td>{user.dob.age}</td>
        <td>{user.location.country}</td>
        <td>{user.gender}</td>
      </tr>
    </>
  );
}
