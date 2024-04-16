const Search = () => {
    return (
      <div className="search-item">
        <input
          type="text"
          className="search"
          placeholder="Your Food is a click away"
          value={searchText}
          onChange={(e) => setSearch}
        />
        <button className="btn">Search</button>
      </div>
    );
  };

  export default Search;