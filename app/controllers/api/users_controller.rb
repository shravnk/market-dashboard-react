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

  private

  def user_params
    params.require(:user).permit(
      :id,
      :username,
      :password,
    )
  end

end
