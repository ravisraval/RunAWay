class EnsureATravel < ActiveModel::Validator
  def validate(route)
    if !route.run_ok && !route.bike_ok
      record.errors[:base] << "Please designate at least one acceptable travel mode."
    end
  end

class Route < ApplicationRecord
  include ActiveModel::Validations
  validates_with EnsureATravel
  validates :distance, :duration, :name, :waypoints_text, presence: true;
  validates :name, uniqueness: true

  has_many :workouts
  belongs_to :user
end
