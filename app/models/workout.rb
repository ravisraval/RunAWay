class Workout < ApplicationRecord
  validates :user, presence: true
  validates :distance, :duration_seconds,
                        numericality: { greater_than: 0,
                                        allow_nil: true  }
  belongs_to :user
  belongs_to :route

  def duration
    hsep = ""
    msep = ""
    ssep = ""
    sec = self.duration_seconds
    hours = sec / 3600
    sec -= hours * 3600
    minutes = sec / 60
    sec -= minutes * 60
    hsep = "0" if hours < 10
    msep = "0" if minutes < 10
    ssep = "0" if sec < 10
    "#{hsep}#{hours}:#{msep}#{minutes}:#{ssep}#{sec}"
  end

end
