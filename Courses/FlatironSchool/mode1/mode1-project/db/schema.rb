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

ActiveRecord::Schema.define(version: 2019_10_01_003257) do

  create_table "ais", force: :cascade do |t|
    t.string "name"
    t.string "specialization"
    t.integer "price"
    t.integer "developer_id"
  end

  create_table "developers", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.integer "capital"
    t.string "user_type"
  end

  create_table "problems", force: :cascade do |t|
    t.string "title"
    t.string "field"
    t.string "status"
    t.integer "user_id"
    t.integer "ai_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.integer "capital"
    t.string "user_type"
  end

end
