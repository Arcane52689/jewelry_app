class Api::ItemsController < ApplicationController

  def show
    @item = Item.find(params[:id])
    render json: ItemSerializer.new(@item)
  end

  def create
    @item = Item.new(item_params)
    @item.create_image(params[:image])
    byebug
    if @item.save
      render json: ItemSerializer.new(@item), status: 200
    else
      render json: { errors: @item.errors.full_messages }, status: 422
    end
  end

  def update
    @item = Item.find(params[:id])
    @item.create_image(params[:image])
    if @item.save
      render json: ItemSerializer.new(@item), status: 200
    else
      render json: { errors: @item.errors.full_messages }, status: 422
    end
  end






  def item_params
    params.require(:item).permit(:estate_id, :name, :description, :appraised_value, :viewable)
  end

end