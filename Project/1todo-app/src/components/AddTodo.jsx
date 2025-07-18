function AddTodo() {
  return (
    <div className="container text-center">
      <div className="row kg-row">
        <div className="col-6">
          <input type="text" placeholder="Add todo" />
        </div>
        <div className="col-4">
          <input type="date" placeholder="select date" />
        </div>
        <div className="col-2">
          <button type="button" className="btn btn-success kg-button">
            Success
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
