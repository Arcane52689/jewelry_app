# encoding: UTF-8
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

ActiveRecord::Schema.define(version: 20160607202935) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "categories", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "categories", ["name"], name: "index_categories_on_name", using: :btree

  create_table "estates", force: :cascade do |t|
    t.string   "name",       null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "images", force: :cascade do |t|
    t.string   "imageable_type",       null: false
    t.integer  "imageable_id",         null: false
    t.datetime "created_at",           null: false
    t.datetime "updated_at",           null: false
    t.string   "picture_file_name"
    t.string   "picture_content_type"
    t.integer  "picture_file_size"
    t.datetime "picture_updated_at"
  end

  add_index "images", ["imageable_type", "imageable_id"], name: "index_images_on_imageable_type_and_imageable_id", using: :btree

  create_table "items", force: :cascade do |t|
    t.string   "name",                            null: false
    t.text     "description"
    t.decimal  "appraised_value"
    t.boolean  "viewable",        default: false
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
    t.integer  "estate_id",                       null: false
    t.integer  "lot_id"
  end

  add_index "items", ["appraised_value"], name: "index_items_on_appraised_value", using: :btree
  add_index "items", ["estate_id"], name: "index_items_on_estate_id", using: :btree
  add_index "items", ["name"], name: "index_items_on_name", using: :btree

  create_table "lots", force: :cascade do |t|
    t.string   "name",                       null: false
    t.boolean  "viewable",   default: false
    t.integer  "estate_id",                  null: false
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
  end

  add_index "lots", ["estate_id"], name: "index_lots_on_estate_id", using: :btree

  create_table "memberships", force: :cascade do |t|
    t.integer  "user_id",                    null: false
    t.integer  "estate_id",                  null: false
    t.boolean  "is_admin",   default: false, null: false
    t.datetime "created_at",                 null: false
    t.datetime "updated_at",                 null: false
  end

  add_index "memberships", ["estate_id"], name: "index_memberships_on_estate_id", using: :btree
  add_index "memberships", ["user_id"], name: "index_memberships_on_user_id", using: :btree

  create_table "selections", force: :cascade do |t|
    t.integer  "user_id",    null: false
    t.integer  "item_id"
    t.integer  "lot_id",     null: false
    t.integer  "value",      null: false
    t.text     "reason"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_index "selections", ["item_id"], name: "index_selections_on_item_id", using: :btree
  add_index "selections", ["lot_id"], name: "index_selections_on_lot_id", using: :btree
  add_index "selections", ["user_id", "item_id"], name: "index_selections_on_user_id_and_item_id", unique: true, using: :btree
  add_index "selections", ["user_id"], name: "index_selections_on_user_id", using: :btree

  create_table "sessions", force: :cascade do |t|
    t.string   "token"
    t.integer  "user_id"
    t.text     "browser_info"
    t.boolean  "active",       default: true
    t.datetime "created_at",                  null: false
    t.datetime "updated_at",                  null: false
  end

  add_index "sessions", ["token"], name: "index_sessions_on_token", using: :btree
  add_index "sessions", ["user_id"], name: "index_sessions_on_user_id", using: :btree

  create_table "taggings", force: :cascade do |t|
    t.integer  "taggable_id",   null: false
    t.string   "taggable_type", null: false
    t.integer  "category_id",   null: false
    t.datetime "created_at",    null: false
    t.datetime "updated_at",    null: false
  end

  add_index "taggings", ["category_id"], name: "index_taggings_on_category_id", using: :btree
  add_index "taggings", ["taggable_id", "taggable_type"], name: "index_taggings_on_taggable_id_and_taggable_type", using: :btree

  create_table "users", force: :cascade do |t|
    t.string   "name",                            null: false
    t.string   "password_digest",                 null: false
    t.string   "email",                           null: false
    t.boolean  "is_admin",        default: false
    t.datetime "created_at",                      null: false
    t.datetime "updated_at",                      null: false
  end

  add_index "users", ["email"], name: "index_users_on_email", using: :btree
  add_index "users", ["name"], name: "index_users_on_name", using: :btree

  add_foreign_key "items", "estates"
  add_foreign_key "lots", "estates"
  add_foreign_key "memberships", "estates"
  add_foreign_key "memberships", "users"
  add_foreign_key "selections", "items"
  add_foreign_key "selections", "lots"
  add_foreign_key "selections", "users"
  add_foreign_key "sessions", "users"
  add_foreign_key "taggings", "categories"
end
