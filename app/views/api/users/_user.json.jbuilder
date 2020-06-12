json.extract! user, :id, :email, :display_name, :age, :gender
json.photoUrl url_for(user.photo) if user.photo.attached?
