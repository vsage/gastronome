class ProducersController < ApplicationController

  before_action :authenticate_user!

  def index
    respond_with Producer.all
  end

  def create
    respond_with Producer.create(post_params)
  end

  def show
    respond_with Producer.find(params[:id])
  end

end
