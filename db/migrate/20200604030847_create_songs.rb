class CreateSongs < ActiveRecord::Migration[5.2]
  def change
    create_table :songs do |t|
      t.integer :artist_id, null: false, index: { unique: true }
      t.string :title, null: false
      t.string :genre
      t.text :description

      t.timestamps
    end
  end
end
