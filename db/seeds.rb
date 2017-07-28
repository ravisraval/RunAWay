# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# user
User.delete_all

demo = User.create!(
  username: "Demo User",
  password: guacamole
)

# routes

# dives

Workout.delete_all

Workout.create!(
  title: "San Fransisco Maru Wreck",
  user_id: demo.id,
  route_id: 1,
  notes: "Wreck dive; maintained a steady breathing rate; poor visibility; saw a hammerhead shark",
  start_time: 1471903200,
  end_time: 1471907100,
  start_air_pressure: 1750,
  end_air_pressure: 1100
)


Dive.create!(
  title: "Dos Ojos Cenote",
  user_id: demo.id,
  route_id: 2,
  notes: "Crystal clear water; stunning internal cave structure and submerged stalactites; saw giant cave catfish",
  start_time: 1365095700,
  end_time: 1365100920,
  start_air_pressure: 2250,
  end_air_pressure: 875
)


Dive.create!(
  title: "Richelieu Rock",
  user_id: demo.id,
  route_id: 3,
  notes: "Pristine reef, saw a school of green humphead parrotfish and a seahorse, logged 50th dive",
  start_time: 1365095700,
  end_time: 1365100920,
  start_air_pressure: 2250,
  end_air_pressure: 875
)

Dive.create!(
  title: "2nd visit to the Maru Wreck",
  user_id: demo.id,
  route_id: 1,
  notes: "Investigated further into the wreck this time, saw interesting grafitti; improved but not perfect visibility. Wore an extra thick wetsuit and was still freezing!",
  start_time: 1496607100,
  end_time: 1496611310,
  start_air_pressure: 1910,
  end_air_pressure: 1005
