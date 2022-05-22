import { Link } from 'react-router-dom';
import { Container } from './styles';

export default function TableUsers({ user }) {
  const detailsName = `${user.name.first} ${user.name.last}`;
  const detailsPicture = user.picture.thumbnail;
  const detailsLocation = `${user.location.city}, ${user.location.state}, ${user.location.country}`;
  return (
    <>
      <Container className="TableUsers">
        <tr>
          <td>
            <Link
              to={`/details?name=${detailsName}&picture=${detailsPicture}&location=${detailsLocation}&lat=${user.location.coordinates.latitude}&lng=${user.location.coordinates.longitude}`}
            >
              <img src={user.picture.thumbnail} />
            </Link>
          </td>
          <td>{detailsName}</td>
          <td>{user.dob.age}</td>
          <td>{user.location.country}</td>
          <td>{user.gender}</td>
        </tr>
      </Container>
    </>
  );
}
