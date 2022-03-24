export default function Form() {
  return (
    <form className="add text-center my-4">
      <label className="text-light">Add new todo...</label>
      <input type="text" name="add" className="form-control m-auto" />
    </form>
  );
}
