export const fetchSongs = () => {
  return $.ajax({
    method: "GET",
    url: `/api/songs`
  });
};

export const fetchSong = songId => {
  return $.ajax({
    method: "GET",
    url: `/api/songs/${songId}`
  });
};

export const createSong = songData => {
  return $.ajax({
    method: "POST",
    url: `/api/songs/`,
    data: songData,
    contentType: false,
    processData: false,
  });
};

export const updateSong = (songData, id) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/songs/${id}`,
    data: songData,
    contentType: false,
    processData: false,
  })
}

export const deleteSong = songId => {
  return $.ajax({
    method: "DELETE",
    url: `/api/songs/${songId}`
  });
};
