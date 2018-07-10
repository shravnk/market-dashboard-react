class User < ApplicationRecord
  has_many :userstocks
  has_many :stocks, through: :userstocks
  has_secure_password

  def stocks_with_votes
    self.stocks.select('stocks.*, userstocks.upvotes as upvotes')
  end

end
