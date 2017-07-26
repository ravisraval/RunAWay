class Workout < ApplicationRecord
  validates :user, presence: true
  validates :distance, :duration_seconds,
                        numericality: { greater_than: 0,
                                        allow_nil: true  }
  belongs_to :user
  belongs_to :route, optional: true

end
