class ApplicationController < ActionController::Base
  # protect_from_forgery with: :exception # TODO: deal with this
  helper_method :current_user, :require_sign_in

  def current_user
    @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def logged_in?
    !!current_user
  end

  def login(user)
    user.reset_session_token!
    session[:session_token] = user.session_token
    @current_user = user
  end

  def logout
    current_user.reset_session_token!
    session[:session_token] = nil
    @current_user = nil
  end


  def require_sign_in
    redirect_to new_session_url unless @current_user
  end
end
