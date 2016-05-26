class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session

  helper_method :current_user, :logged_in?

  def current_user
    @current_user ||= Session.find_user_by_token(session[:session_token])
    return @current_user
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    session_token = user.sessions.create.token
    session[:session_token] = session_token
    session[:user_id] = user.id
  end


  def user_belongs_to_estate
    current_user.memberships.exists?(estate_id: params[:id])
  end

  def can_modify_estate
    current_user.can_modify_estate(params[:id])
  end

end
