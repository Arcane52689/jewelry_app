class CreateSessions < ActiveRecord::Migration
  def change
    create_table :sessions do |t|
      t.string :token, index: true, unique: true
      t.references :user, index: true, foreign_key: true
      t.text :browser_info
      t.boolean :active, default: true

      t.timestamps null: false
    end
  end
end
