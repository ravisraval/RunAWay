class AddDuraionStringToWorkout < ActiveRecord::Migration[5.1]
  def change
    add_column :workouts, :duration_string, :string
  end
end
