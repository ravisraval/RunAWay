class RenameWaypointsToWaypointsText < ActiveRecord::Migration[5.1]
  def change
    rename_column :routes, :waypoints, :waypoints_text
  end
end
