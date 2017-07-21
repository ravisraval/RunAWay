@workouts.each do |work|
  json.set! work.id do
    json.partial! 'api/workouts/workout', workout: work
  end
end
