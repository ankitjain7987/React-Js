function CurrentTime() {
  let time = new Date();

  return (
    <h3 className="lead">
      This is the Current time : {time.toLocaleDateString()}-
      {time.toLocaleTimeString()}
    </h3>
  );
}
export default CurrentTime;
