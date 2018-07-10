class Userstocks < ActiveRecord::Migration[5.2]
  def change
    create_table :userstocks do |t|
      t.belongs_to :user, index: true
      t.belongs_to :stock, index: true
      t.integer :upvotes
      t.timestamps
    end
  end
end
