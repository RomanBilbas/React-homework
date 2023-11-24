const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

function App() {
  return (
    <>
      <UserInfo />
    </>
  );
}

function UserInfo() {
  const user = {
    name: "Roman Bilbas",
    email: "rebenak006",
    tweets: 1233,
    following: 455,
    followers: 531,
    IsMale: true,
  };
  const userNameStyle = {
    color: user.IsMale ? "blue" : "red",
    backgroundImage: user.IsMale
      ? `url("https://c0.klipartz.com/pngpicture/85/114/gratis-png-avatar-usuario-perfil-masculino-logo-icono-de-perfil.png" )`
      : `url(
          "https://w7.pngwing.com/pngs/924/414/png-transparent-woman-illustration-user-profile-avatar-woman-icon-girl-avatar-face-fashion-girl-heroes.png"
        )`,
  };

  return (
    <article className="userCard" style={userNameStyle}>
      <header className="InfoUser">
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </header>
      <main className="InfoTwits">
        <h3>
          tweets
          <p>{user.tweets}</p>
        </h3>
        <h3>
          following
          <p>{user.following}</p>
        </h3>
        <h3>
          followers
          <p>{user.followers}</p>
        </h3>
      </main>
    </article>
  );
}
