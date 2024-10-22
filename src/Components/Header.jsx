import profile from "../../src/assets/profile.png";
const Header = () => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-4xl font-bold">Knowledge Cafe</h1>
      <img src={profile}></img>
    </div>
  );
};

export default Header;
