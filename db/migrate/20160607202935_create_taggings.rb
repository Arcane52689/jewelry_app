class CreateTaggings < ActiveRecord::Migration
  def change
    create_table :taggings do |t|
      t.integer :taggable_id, null: false
      t.string :taggable_type, null: false
      t.references :category, index: true, foreign_key: true, null: false

      t.timestamps null: false
    end

    add_index :taggings, [:taggable_id, :taggable_type]
  end
end
