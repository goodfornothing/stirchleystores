class CreateSupportersTable < ActiveRecord::Migration
  def up
    create_table :supporters do |t|
      t.string :first_name
      t.string :last_name
      t.string :email
    end
  end

  def down
    drop_table :supporters
  end
end
