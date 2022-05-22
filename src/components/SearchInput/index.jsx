export default function SearchInput() {
  return (
    <input
      type="text"
      placeholder="Search users..."
      onChange={(event) =>
        setSearchValue(event.target.value)
      }
      value={searchValue}
    />
  );
}
