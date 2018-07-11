require 'pry'
class Api::UsersController < ApplicationController

  def create
     @user = User.new(user_params)
     if @user.save
       render json: @user, status: :created
       return
     else
       render json: @user.errors, status: :unprocessable_entity
     end
   end

   def add_stocks
     @user = User.find_by(username: params[:user][:username])
     @stock = Stock.find_or_create_by(symbol: params[:stock][:symbol])
     if @user && @stock
       @user.stocks << @stock
       render json: @user.stocks, status: :created
     else
       render json: @user.stocks, status: :unprocessable_entity
     end
   end

   def upvote
     user = User.find_by(username: params[:user][:username])
     stock = Stock.find_or_create_by(symbol: params[:stock][:symbol])
     @userstock = Userstock.where(user_id: user.id, stock_id: stock.id).first
     if @userstock
       @userstock.increment!(:upvotes)
       render json: @userstock, status: :created, include: :stock
     else
       render json: @userstock, status: :unprocessable_entity
     end
   end


  private

  def user_params
    params.require(:user).permit(
      :id,
      :username,
      :password,
    )
  end

end
