
function About({ about, image = "https://via.placeholder.com/215" }) {
  return (
    <aside>
      <img src={image} alt="blog logo" />
      <h2>About</h2>
      <p>{about}</p>
    </aside>
  );
}

export default About;