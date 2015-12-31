class ChangeDateFormatInTasks < ActiveRecord::Migration
  def change
  	change_column :tasks, :deadline, :string
  end
end
