# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'open-uri'

User.destroy_all
Song.destroy_all

demo_user = User.create(email: "demo@demo.com", password: "password", age: "22", gender: "NA", display_name: "DemoUser")
chvrches = User.create(email: "chvrches@chvrch.es", password: "chvrches", age: "32", gender: "Female", display_name: "CHVRCHES")
the_weeknd = User.create(email: "the@week.nd", password: "123456", age: "30", gender: "Male", display_name: "The Weeknd")
childish_gambino = User.create(email: "donald@glover.com", password: "troybarnes", age: "36", gender: "Male", display_name: "Childish Gambino")
nujabes = User.create(email: "nujabes@gmail.com", password: "restinpeace", age: "36", gender: "Male", display_name: "Nujabes")
porter = User.create(email: "porter@robinson.com", password: "robinson", age: "27", gender: "Male", display_name: "Porter Robinson")
gorillaz = User.create(email: "go@rillaz.com", password: "melancholy", age: "22", gender: "NA", display_name: "Gorillaz")
test_user = User.create(email: "test@test.com", password: "hunter12", age: "25", gender: "NA", display_name: "TestUser")

demo_song1 = Song.create(title: "test", artist_id: demo_user.id, genre: "", description: "test")
demo_song1_song = open("https://vaporwave-seeds.s3.amazonaws.com/test.mp3")
demo_song1.song.attach(io: demo_song1_song, filename: "test.mp3")

demo_song2 = Song.create(title: "Bad Mood", artist_id: demo_user.id, genre: "Lo-Fi", description: "Moow")
demo_song2_photo = open("https://vaporwave-seeds.s3.amazonaws.com/north_pole.jpg")
demo_song2.photo.attach(io: demo_song2_photo, filename: "north_pole.jpg")
demo_song2_song = open("https://vaporwave-seeds.s3.amazonaws.com/satellite.mp3")
demo_song2.song.attach(io: demo_song2_song, filename: "satellite.mp3")

demo_song3 = Song.create(title: "Satellite", artist_id: demo_user.id, genre: "Lo-fi", description: "North Pole")
demo_song3_photo = open("https://vaporwave-seeds.s3.amazonaws.com/moow.jpeg")
demo_song3.photo.attach(io: demo_song3_photo, filename: "moow.jpeg")
demo_song3_song = open("https://vaporwave-seeds.s3.amazonaws.com/bad_mood.mp3")
demo_song3.song.attach(io: demo_song3_song, filename: "bad_mood.mp3")

graves = Song.create(title: "Graves", artist_id: chvrches.id, genre: "Pop", description: "Love is Dead")
graves_photo = open("https://vaporwave-seeds.s3.amazonaws.com/love_is_dead.jpg")
graves.photo.attach(io: graves_photo, filename: "love_is_dead.jpg")
graves_song = open("https://vaporwave-seeds.s3.amazonaws.com/graves.mp3")
graves.song.attach(io: graves_song, filename: "graves.mp3")

mother_we_share = Song.create(title: "The Mother We Share", artist_id: chvrches.id, genre: "Pop", description: "The Bones of What You Believe")
mother_we_share_photo = open("https://vaporwave-seeds.s3.amazonaws.com/chvrches_bones.jpg")
mother_we_share.photo.attach(io: mother_we_share_photo, filename: "chvrches_bones.jpg")
mother_we_share_song = open("https://vaporwave-seeds.s3.amazonaws.com/the_mother_we_share.mp3")
mother_we_share.song.attach(io: mother_we_share_song, filename: "the_mother_we_share.mp3")

nineteen_ten = Song.create(title: "19.10", artist_id: childish_gambino.id, genre: "Pop", description: "3.15.20")
nineteen_ten_photo = open("https://vaporwave-seeds.s3.amazonaws.com/3_15_20.png")
nineteen_ten.photo.attach(io: nineteen_ten_photo, filename: "3_15_20.png")
nineteen_ten_song = open("https://vaporwave-seeds.s3.amazonaws.com/19_10.mp3")
nineteen_ten.song.attach(io: nineteen_ten_song, filename: "19_10.mp3")

in_your_eyes = Song.create(title: "In Your Eyes", artist_id: the_weeknd.id, genre: "Pop", description: "After Hours")
in_your_eyes_photo = open("https://vaporwave-seeds.s3.amazonaws.com/after_hours.jpg")
in_your_eyes.photo.attach(io: in_your_eyes_photo, filename: "after_hours.jpg")
in_your_eyes_song = open("https://vaporwave-seeds.s3.amazonaws.com/in_your_eyes.mp3")
in_your_eyes.song.attach(io: in_your_eyes_song, filename: "in_your_eyes.mp3")

save_your_tears = Song.create(title: "Save Your Tears", artist_id: the_weeknd.id, genre: "Pop", description: "After Hours")
save_your_tears_photo = open("https://vaporwave-seeds.s3.amazonaws.com/after_hours.jpg")
save_your_tears.photo.attach(io: save_your_tears_photo, filename: "after_hours.jpg")
save_your_tears_song = open("https://vaporwave-seeds.s3.amazonaws.com/save_your_tears.mp3")
save_your_tears.song.attach(io: save_your_tears_song, filename: "save_your_tears.mp3")

shelter = Song.create(title: "Shelter", artist_id: porter.id, genre: "EDM", description: "(ft. Madeon)")
shelter_photo = open("https://vaporwave-seeds.s3.amazonaws.com/shelter_cover.jpg")
shelter.photo.attach(io: shelter_photo, filename: "shelter_cover.jpg")
shelter_song = open("https://vaporwave-seeds.s3.amazonaws.com/shelter.mp3")
shelter.song.attach(io: shelter_song, filename: "shelter.mp3")

melancholy_hill = Song.create(title: "Melancholy Hill", artist_id: gorillaz.id, genre: "Alternative", description: "Plastic Beach")
melancholy_hill_photo = open("https://vaporwave-seeds.s3.amazonaws.com/plastic_beach.jpg")
melancholy_hill.photo.attach(io: melancholy_hill_photo, filename: "plastic_beach.jpg")
melancholy_hill_song = open("https://vaporwave-seeds.s3.amazonaws.com/melancholy_hill.mp3")
melancholy_hill.song.attach(io: melancholy_hill_song, filename: "melancholy_hill.mp3")

aruarian_dance = Song.create(title: "Aruarian Dance", artist_id: nujabes.id, genre: "Lo-Fi", description: "Departure")
aruarian_dance_photo = open("https://vaporwave-seeds.s3.amazonaws.com/departure.jpg")
aruarian_dance.photo.attach(io: aruarian_dance_photo, filename: "departure.jpg")
aruarian_dance_song = open("https://vaporwave-seeds.s3.amazonaws.com/aruarian_dance.mp3")
aruarian_dance.song.attach(io: aruarian_dance_song, filename: "aruarian_dance.mp3")
