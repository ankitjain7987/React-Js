function Todoitem({ addName, addDate }) {
  return (
    <div className="container ">
      <div className="row kg-row">
        <div className="col-6">{addName}</div>
        <div className="col-4">{addDate}</div>
        <div className="col-2">
          <button type="button" className="btn btn-danger kg-button">
            Danger
          </button>
        </div>
      </div>
    </div>
  );
}
export default Todoitem;
