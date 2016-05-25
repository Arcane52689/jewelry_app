class CreateEstates < ActiveRecord::Migration
  def change
    create_table :estates do |t|
      t.string :name, null: false

      t.timestamps null: false
    end
  end
end
