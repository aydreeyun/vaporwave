export const fetchSongComments = songId => {
  return $.ajax({
    method: "GET",
    url: `/api/songs/${songId}/comments`
  });
};

export const fetchUserComments = userId => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${userId}/comments`
  });
};

export const createComment = comment => {
  return $.ajax({
    method: "POST",
    url: `/api/comments`,
    data: { comment }
  });
};

export const deleteComment = commentId => {
  return $.ajax({
    method: "DELETE",
    url: `/api/comments/${commentId}`
  });
};