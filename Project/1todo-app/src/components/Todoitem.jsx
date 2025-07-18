function Todoitem({ createName, createDate }) {
  return (
    <div className="container ">
      <div className="row kg-row">
        <div className="col-6">{createName}</div>
        <div className="col-4">{createDate}</div>
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
