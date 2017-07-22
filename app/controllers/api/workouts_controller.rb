class Api::WorkoutsController < ApplicationController
  before_action :require_signed_in

  def create
    @workout = Workout.new(workout_params)
    @workout.user_id = current_user.id

    if @workout.save
      render "api/workouts/show"
    else
      render json: @workout.errors.full_messages, status: 422
    end
  end

  def index
    @workouts = Workout.where(user_id: current_user.id)
    render "api/workouts/index"
  end

  def show
    @workout = Workout.find(params[:id])
    render "api/workouts/show"
  end

  def destroy
    @workout = Workout.find(params[:id])
    if @workout.destroy
      render json: {}
    else
      render json: @workout.errors.full_messages, status: 422
    end
  end

  private
  def workout_params
    params.require(:workout).permit(:title, :route_id, :notes, :distance, :elevation_change, :biked, :date_time, :duration_seconds)
  end
end
