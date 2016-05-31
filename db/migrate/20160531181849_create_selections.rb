class CreateSelections < ActiveRecord::Migration
  def change
    create_table :selections do |t|
      t.references :user, index: true, foreign_key: true, null: false
      t.references :item, index: true, foreign_key: true, null: false
      t.integer :value, null: false
      t.text :reason
      t.timestamps null: false
    end
    add_index :selections, [:user_id, :item_id], unique: true
  end
end
