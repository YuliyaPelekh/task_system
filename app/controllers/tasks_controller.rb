class TasksController < ApplicationController
  before_action :set_task, only: [:show, :edit, :update, :destroy]

  def index   
    render json: Task.all
  end

  def show
   render json: @task 
  end

  def new
  	@task = Task.new(:user_id => params[:user_id])
    render json: @task
  end

  def create
    @task = Task.new(task_params) 
    if @task.save 
      render json: @task
    else 
      render json: @task.errors, status: :unprocessable_entity
    end 
  end

  def edit
  end

  def update
    if @task.update(task_params)
      render json: @task
    else
      render json: @task.errors, status: :unprocessable_entity
    end
  end

  def destroy
    @task.destroy
    head :no_content
  end

  private

    def set_task
      @task = Task.find(params[:id])
    end

    def task_params
      params.require(:task).permit(:name, :user_id, :status, :deadline, :percent, :priority)
    end
end