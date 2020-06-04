class Api::SongsController < ApplicationController
  def index
    @user = User.find_by(params[:user_id])
    @songs = @user.songs
    render :index
  end

  def show
    @song = Song.find_by(params[:id])
    render :show
  end

  def create
    @song = Song.new(song_params)

    if @song.save
      render :show
    else
      render json: @song.errors.full_messages, status: 422
    end
  end

  def destroy
    @song = current_user.songs.find_by(params[:id])

    if @song
      @song.destroy
    end
  end

  private
  def song_params
    params.require(:song).permit(:artist_id, :title)
  end
end
