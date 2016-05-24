class SessionsController < ApplicationController

  def new

  end

  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )
    if @user
      login @user
      redirect_to root_url
    else
      render :new
    end
  end

  def destroy

  end


end