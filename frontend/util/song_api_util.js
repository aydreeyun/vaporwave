export const fetchSongs = userId => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${userId}/songs`
  });
};

export const fetchSong = songId => {
  return $.ajax({
    method: "GET",
    url: `/api/songs/${songId}`
  });
};

export const createSong = song => {
  return $.ajax({
    method: "POST",
    url: `/api/songs/`,
    data: { song }
  });
};

export const deleteSong = songId => {
  return $.ajax({
    method: "DELETE",
    url: `/api/songs/${songId}`
  });
};
