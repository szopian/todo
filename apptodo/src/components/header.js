export default function Header() {
  return (
    <header className="text-center text-light my-4">
      <h1 className="mb-4">apptodo</h1>
      <form className="search">
        <input
          type="text"
          name="search"
          placeholder="serach todos"
          className="form-control m-auto"
        />
      </form>
    </header>
  );
}
