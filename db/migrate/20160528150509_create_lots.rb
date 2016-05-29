class CreateLots < ActiveRecord::Migration
  def change
    create_table :lots do |t|
      t.string :name, null: false
      t.boolean :viewable, default: false
      t.references :estate, index: true, foreign_key: true, null: false


      t.timestamps null: false
    end

    add_column :items, :lot_id, :integer, index: true
  end
end
