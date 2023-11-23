import React from "react";

const Searcher = ({
  handleSearch,
  setSearchInput,
  songs,
  setCurSong,
  setPlay,
}) => {
  return (
    <div className="flex flex-col gap-y-5 m-5">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          onChange={(e) => setSearchInput(e.target.value)}
          className="p-2 rounded-md shadow-lg bg-slate-800 text-white opacity-80"
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
              {`${song.name} - ${song.artists[0].name}`}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Searcher;
