class Api::WorkoutsController < ApplicationController
  before_action :require_signed_in

  def create
    @workout = Workout.new(parsed_params)
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
    params.require(:workout).permit(:title, :route_id, :notes, :distance, :elevation_change, :biked, :date_time, :hours, :minutes, :seconds)
  end

  def parsed_params
    params = workout_params.except(:hours, :minutes, :seconds)

    hours = workout_params[:hours].to_i
    minutes = workout_params[:minutes].to_i
    seconds = workout_params[:seconds].to_i

    params[:duration_seconds] = (( hours * 60 ) + minutes ) * 60 + seconds

    msep, ssep = "", ""
    msep = "0" if minutes < 10
    ssep = "0" if seconds < 10

    params[:duration_string] = "#{hours}:#{msep}#{minutes}:#{ssep}#{seconds}"

    params
  end
end
