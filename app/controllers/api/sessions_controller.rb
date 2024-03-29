class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:email],
      params[:user][:password]
    )

    if @user
      login(@user)
      render "/api/users/show"
    else
      render json: ["This password is incorrect."], status: 404
    end
  end

  def destroy
    if current_user
      logout
      render json: {}
    else
      render json: ["You must be logged in"], status: 401
    end
  end
end