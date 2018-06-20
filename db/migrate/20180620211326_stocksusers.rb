class Stocksusers < ActiveRecord::Migration[5.2]
  def change
    create_join_table :stocks, :users do |t|
      t.index :stock_id
      t.index :user_id
    end
  end
end
