class ChangeWorkoutTitleNullFalse < ActiveRecord::Migration[5.1]
  def change
    change_column_null :workouts, :title, false
  end
end
