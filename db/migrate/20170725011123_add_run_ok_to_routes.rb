class AddRunOkToRoutes < ActiveRecord::Migration[5.1]
  def change
    change_table :routes do |t|
      t.remove :biked
      t.boolean :run_ok
      t.boolean :bike_ok
    end
  end
end
