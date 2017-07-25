class CreateRoutes < ActiveRecord::Migration[5.1]
  def change
    create_table :routes do |t|
      t.text :waypoints, null:false
      t.integer :user_id, null:false
      t.string :name, null:false
      t.float :distance, null:false
      t.float :duration, null:false
      t.boolean :biked, null:false
      t.text :notes

      t.timestamps
    end
    add_index :routes, :user_id
  end
end
