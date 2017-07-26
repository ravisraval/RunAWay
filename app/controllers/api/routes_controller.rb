class Api::RoutesController < ApplicationController
  before_action :require_signed_in

  def create
    parsed_params = route_params.except(:hours, :minutes, :seconds)

    @route = Route.new(route_params)
    @route.user_id = current_user.id

    if @route.save
      render "api/routes/show"
    else
      render json: @route.errors.full_messages, status: 422
    end
  end

  def index
    @routes = Route.where(user_id: current_user.id)
    render "api/routes/index"
  end

  def show
    @route = Route.find(params[:id])
    render "api/routes/show"
  end

  def destroy
    @route = Route.find(params[:id])
    if @route.destroy
      render json: {}
    else
      render json: @route.errors.full_messages, status: 422
    end
  end

  def update
    @route = Route.find(params[:id])
    if @route.update(route_params)
      render "api/routes/show"
    else
      render json: @route.errors.full_messages, status: 422
    end
  end

  private
  def route_params
    params.require(:route).permit(:name, :waypoints_text, :notes, :distance, :elevation_change, :bike_ok, :run_ok, :hours, :minutes, :seconds, :travel_mode)
  end
end
