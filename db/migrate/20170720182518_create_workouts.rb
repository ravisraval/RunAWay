class CreateWorkouts < ActiveRecord::Migration[5.1]
  def change
    create_table :workouts do |t|
      t.integer :user_id, null:false
      t.integer :route_id
      t.string :title
      t.string :notes
      t.decimal :distance
      t.integer :elevation_change
      t.boolean :biked
      t.datetime :date_time
      t.integer :duration_seconds
      t.timestamps
    end
    add_index :workouts, :user_id
    add_index :workouts, :route_id
  end
end
