import React from "react";

const Searcher = ({
  searchInput,
  handleSearch,
  setSearchInput,
  songs,
  setCurSong,
  setPlay,
}) => {
  const handleSearchSubmit = (e) => {
    e.preventDefault();
    handleSearch(searchInput);
  };
  return (
    <div className="flex flex-col gap-y-5 m-5">
      <form onSubmit={handleSearchSubmit}>
        <input
          type="text"
          onChange={(e) => setSearchInput(e.target.value)}
          className="p-2 rounded-md shadow-lg bg-transparent text-white opacity-80 placeholder-white focus:outline-none"
          placeholder="Search song..."
        />
      </form>
      <div className=" flex flex-col gap-3 text-white w-[464px] h-[428px]">
        {songs.map((song) => (
          <div key={song.uri} className="group rounded-md flex gap-x-5">
            <img
              src={song.album.images[0].url}
              alt="album-img"
              className="object-cover h-8 w-8 rounded-md opacity-50 group-hover:opacity-100"
              onClick={() => {
                setCurSong(song.uri);
                setPlay(true);
              }}
            />
            <div className="flex justify-center items-center opacity-50 group-hover:opacity-100">
              <span className="font-semibold pr-1">{song.name}</span>
              {" - " + song.artists[0].name}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Searcher;
