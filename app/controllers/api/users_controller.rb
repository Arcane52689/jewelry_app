class Api::UsersController < ApplicationController


  def show
    @user = User.find(params[:id])
    if current_user.is_admin? || current_user.id == @user.id
      render json: UserSerializer.new(@user)
    else
      render json: UserSerializer.new(current_user)
    end
  end


end