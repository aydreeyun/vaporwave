# == Schema Information
#
# Table name: songs
#
#  id          :bigint           not null, primary key
#  artist_id   :integer          not null
#  title       :string           not null
#  genre       :string
#  description :text
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#
class Song < ApplicationRecord
  validates :artist_id, :title, presence: true

  belongs_to :artist,
    foreign_key: :artist_id,
    class_name: :User

  has_one_attached :photo
  has_one_attached :song
end
