function AddTodo() {
  return (
    <div class="container text-center">
      <div class="row kg-row">
        <div class="col-6">
          <input type="text" placeholder="Add todo" />
        </div>
        <div class="col-4">
          <input type="date" placeholder="select date" />
        </div>
        <div class="col-2">
          <button type="button" class="btn btn-success kg-button">
            Success
          </button>
        </div>
      </div>
    </div>
  );
}
export default AddTodo;
