# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180217014426) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "routes", force: :cascade do |t|
    t.text "waypoints_text", null: false
    t.integer "user_id", null: false
    t.string "name", null: false
    t.float "distance", null: false
    t.float "duration", null: false
    t.text "notes"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.boolean "run_ok"
    t.boolean "bike_ok"
    t.integer "elevation_change"
    t.string "travel_mode"
    t.index ["user_id"], name: "index_routes_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["username"], name: "index_users_on_username", unique: true
  end

  create_table "workouts", force: :cascade do |t|
    t.integer "user_id", null: false
    t.integer "route_id"
    t.string "title", null: false
    t.string "notes"
    t.decimal "distance"
    t.integer "elevation_change"
    t.boolean "biked"
    t.datetime "date_time"
    t.integer "duration_seconds"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "duration_string"
    t.index ["route_id"], name: "index_workouts_on_route_id"
    t.index ["user_id"], name: "index_workouts_on_user_id"
  end

end
