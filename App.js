import React from "react";
import ReactDOM from "react-dom/client";

// //single element
// const heading2 = React.createElement("h1", {
//     id: "heading", xyz: "abc"
// }, "Hello world from React!");

// //nested elements using react
// const parent1 = React.createElement("div", { id: "parent" }, [
//     React.createElement("div", { id: "children1" },
//         [React.createElement("h1", {}, "I'm an h1 tag!"), React.createElement("h2", {}, "I'm an h2 tag!")]
//     ),
//     React.createElement("div", { id: "children2" },
//         [React.createElement("h1", {}, "I'm an h1 tag!"), React.createElement("h2", {}, "I'm an h2 tag!")]
//     )]
// );
// console.log(parent1);

// const parent = <h1 id="heading">Hello world from React!</h1>;

// const Heading1 = () => {
//   return <h1 id="heading"> Hello world from React!</h1>;
// };

// //React functional component
// const Title = () => (
//     <div>
//       <h1>Nesting Title component!</h1>
//     </div>
//   );

// const Heading = () => (
//   <div>
//     {Title()}
//     <Title />
//     <h1 id="heading"> Hello world from functional component!</h1>
//   </div>
// );
const Heading = () => {
  return (
    <div className="header">
      <img className="logo" alt="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFo9rJTF1-VqhoC2oaTpS9Zez3zDiuao94cQ&usqp=CAU" />
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

const RestaurantCard = (props) => {
    //const {resName, cuisine, rating, deliveryTime}=props; //destructuring of data
return (
    <div className="res-card" style={{backgroundColor: "#f0f0f0"}}>
        <div className="res-card-info">
        <img className="res-card-logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5YU9CB_OfIg82w52ILPLovJgllHq6pI9ikw&usqp=CAU"/>
        <h4>{props.resName}</h4>
        <h4>{props.cuisine}</h4>
        <h4>{props.rating}</h4>
        <h4>{props.deliveryTime}</h4>
        </div>
    </div>
);
};
const Body = () => {
    return (
        <div className="body">
            <div className="search">search</div>
            <div className="res-container">
                <div className="card">
                    <RestaurantCard resName="Mehfil" cuisine="Biryani,South Indian" rating="Rating-5.0" deliveryTime="60min" />
                    <RestaurantCard resName="Bawarchi" cuisine="Biryani,South Indian" rating="Rating-5.0" deliveryTime="60min"/>
                    <RestaurantCard resName="Bawarchi" cuisine="Biryani,South Indian" rating="Rating-5.0" deliveryTime="60min"/>
                </div>
            </div>
        </div>
    );
};

const Footer = () => {
    return (
        <div>
            <h1>Footer</h1>
        </div>
    );
};
const Applayout = () => {
  return (
    <>
      <Heading />
      <Body />
    </>
  );
};
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Applayout />);
