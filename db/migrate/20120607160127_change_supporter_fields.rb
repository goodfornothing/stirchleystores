class ChangeSupporterFields < ActiveRecord::Migration
  def up
    rename_column :supporters, :first_name, :name
    remove_column :supporters, :last_name
  end

  def down
    rename_column :supporters, :name, :first_name
    add_column :supporters, :last_name, :string
  end
end
