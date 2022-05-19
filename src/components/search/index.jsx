export default function Search() {
  return (
    <input
      type="text"
      placeholder="Search..."
      onChange={(event) => {
        setSearch(event.target.value);
      }}
    />
  );
}
