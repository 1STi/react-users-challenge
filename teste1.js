<div className="users">
        {users.map((user, login) => {
          return (
            <div key={login.uuid}>
              <img src={user.picture.thumbnail} /> &nbsp;
              {user.name.first} &nbsp;
              {user.name.last} &nbsp;
              {user.dob.age} &nbsp;
              {user.location.country} &nbsp;
              {user.gender}
            </div>