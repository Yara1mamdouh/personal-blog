function SearchBar({ search, setSearch }) {
  return (
    <div className="mb-4">
      <input
        type="text"
        className="form-control form-control-lg"
        placeholder="Search posts..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;