class SessionsController < ApplicationController
  skip_before_filter :verify_authenticity_token
  
  def new
  end

  def create
    @user = User.find_by_email(params[:session][:email])
    if @user && @user.authenticate(params[:session][:password])
      session[:user_id] = @user.id
      render json: @user
    else
      render json: @user.errors, status: :unprocessable_entity
    end 
  end 

  def destroy 
    session[:user_id] = nil 
    head :no_content
  end

end