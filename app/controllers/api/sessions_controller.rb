class Api::SessionsController < ApplicationController

  def create
    if @user = User.find_by(username: params[:username])
      if @user.authenticate(params[:password])
        session[:user_id] = @user.id
        render json: @user, status: 200
      else
        render json: { message: "Incorrect password"}, status: 401
      end
    else
      render json:{ message: "Username not found"}, status: 401
    end
    end
  end

  def destroy
    session.delete("user_id")
    render json:{ message: "You have been logged out"}, status: 200
  end
