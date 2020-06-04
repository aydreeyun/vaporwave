class Api::SongsController < ApplicationController
  def index
    @songs = Song.all
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

  def update
    @song = Song.find_by(params[:id])

    if @song.artist_id === current_user.id && @song.update(song_params)
      render :show
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
