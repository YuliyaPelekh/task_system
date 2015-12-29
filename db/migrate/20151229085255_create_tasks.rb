class CreateTasks < ActiveRecord::Migration
  def change
    create_table :tasks do |t|
      t.string :name
      t.integer :user_id
      t.boolean :status
      t.datetime :deadline
      t.integer :percent
      t.string :priority

      t.timestamps null: false
    end
  end
end
