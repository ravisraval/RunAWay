class AddElevationChngeToRoutes < ActiveRecord::Migration[5.1]
  def change
    add_column :routes, :elevation_change, :integer
  end
end
