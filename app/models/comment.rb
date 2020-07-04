# == Schema Information
#
# Table name: comments
#
#  id         :bigint           not null, primary key
#  author_id  :integer          not null
#  song_id    :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Comment < ApplicationRecord
  validates :author_id, :song_id, :body, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :song,
    foreign_key: :song_id,
    class_name: :Song
end
