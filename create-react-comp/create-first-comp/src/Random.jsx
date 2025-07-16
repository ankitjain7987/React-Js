function Random() {
  let random = Math.random() * 100;

  return (
    <h3 style={{ background: "red" }}>
      Random number is : {Math.floor(random)}
    </h3>
  );
}
export default Random;
