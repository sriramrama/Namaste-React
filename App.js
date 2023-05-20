// const heading = React.createElement("h1", {
//     id: "heading", xyz: "abc"
// }, "Hello world from React!");
const parent = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "children1" },
        [React.createElement("h1", {}, "I'm an h1 tag!"), React.createElement("h2", {}, "I'm an h2 tag!")]
    ),
    React.createElement("div", { id: "children2" },
        [React.createElement("h1", {}, "I'm an h1 tag!"), React.createElement("h2", {}, "I'm an h2 tag!")]
    )]
);
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);