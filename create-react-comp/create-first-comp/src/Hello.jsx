function Hello() {
  let name = "ankit";

  let fullname = () => {
    let name = "ankit jain";
    return name;
  };

  return (
    <h2>
      hiii react i am {name}, my fullname is {fullname()}
    </h2>
  );
}

export default Hello;
