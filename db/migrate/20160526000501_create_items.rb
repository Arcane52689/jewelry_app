class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :name, null: false, index: true
      t.text :description
      t.decimal :appraised_value, index: true
      t.boolean :viewable, default: false
      t.timestamps null: false
      t.references :estate, index: true, foreign_key: true, null: false
    end
  end
end
