import './App.css';
import Profile from "./profile/Profile"
import avatar from "./profile/avatar.jpg"
import Header from "./profile/Header"

function App() {
  const handleName = (me) => {
    alert(me);
  };
  const profile ={
    fullName: "Fatma Gharsallah",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras sagittis venenatis diam, ut placerat sapien malesuada eget. In sodales tortor vitae sapien blandit hendrerit. Nullam molestie risus massa. Curabitur felis sem, bibendum placerat nibh sed, tincidunt pharetra nibh. Duis ut enim porttitor, placerat quam a, accumsan erat. Nam eu augue tortor. Pellentesque mattis felis erat, ac tempus est semper a. Sed tempor ligula nunc, id feugiat dolor ornare sit amet. Suspendisse vitae nisl accumsan, finibus nisl et, vestibulum ipsum. Vestibulum ut congue sem, at suscipit mi.",
    profession: "Full Stack web developer student"  
};
  return (
    <>
      <Header /> 
      <div className="App">
        <img
            style={{padding:'1% 0'}}
            src={avatar}
            alt="avatar"
            width="200px"
            height="200px"
          />
        <Profile profile={profile} handleName={handleName}/>
      </div>
    </>
  );
}

export default App;
