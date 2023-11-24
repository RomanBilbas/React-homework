const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);

function App() {
  const userMe = {
    name: "Roman Bilbas",
    email: "rebenak006",
    tweets: 1233,
    following: 455,
    followers: 531,
    isMale: true,
  };

  return (
    <>
      <UserInfo user={userMe} />
    </>
  );
}

function UserInfo(props) {
  const { user } = props;
  const userNameStyle = {
    color: user.IsMale ? "blue" : "red",
    backgroundImage: user.isMale
      ? `url("https://w7.pngwing.com/pngs/1012/700/png-transparent-user-male-icon-business-user-s-face-head-gender-symbol.png" )`
      : `url(
          "https://cdn-icons-png.flaticon.com/512/4515/4515630.png"
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
