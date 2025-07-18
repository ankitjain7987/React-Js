function Todoitem({ itemname, itemdate }) {
  return (
    <div class="container ">
      <div class="row kg-row">
        <div class="col-6">{itemname}</div>
        <div class="col-4">{itemdate}</div>
        <div class="col-2">
          <button type="button" class="btn btn-danger kg-button">
            Danger
          </button>
        </div>
      </div>
    </div>
  );
}
export default Todoitem;
