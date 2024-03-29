json.extract! song, :id, :artist_id, :title, :genre, :description, :created_at
json.photoUrl url_for(song.photo) if song.photo.attached?
json.songUrl url_for(song.song) if song.song.attached?