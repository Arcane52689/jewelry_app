class CreateMemberships < ActiveRecord::Migration
  def change
    create_table :memberships do |t|
      t.references :user, index: true, foreign_key: true, null: false
      t.references :estate, index: true, foreign_key: true, null: false
      t.boolean :is_admin, default: false, null: false

      t.timestamps null: false
    end
  end
end
