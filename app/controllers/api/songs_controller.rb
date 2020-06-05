class Api::SongsController < ApplicationController
  def index
    @songs = Song.all
    render :index
  end

  def show
    @song = Song.find(params[:id])
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
    @song = current_user.songs.find(params[:id])

    if @song
      @song.destroy
    end
  end

  private
  def song_params
    params.require(:song).permit(:artist_id, :title)
  end
end
