class AddTravelModeToRoutes < ActiveRecord::Migration[5.1]
  def change
    add_column :routes, :travel_mode, :string
  end
end
