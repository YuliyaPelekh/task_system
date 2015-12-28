class UsersController < ApplicationController

  def index
    render json: User.all
  end

  def show
    render json: User.find(params[:id])
  end

  def new
  	@user = User.new
  	render json: @user
  end

  def create 
    @user = User.new(user_params) 
    if @user.save 
      session[:user_id] = @user.id
      render json: @user
    else 
      render json: @user.errors, status: :unprocessable_entity
    end 
  end

  private
  def user_params
    params.require(:user).permit(:name, :email, :password)
  end
end
