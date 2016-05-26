class Api::ItemsController < ApplicationController

  def show

  end

  def create
    @item = Item.new(item_params)
    if @item.save
      render json: ItemSerializer.new(@item), status: 200
    else
      render json: { errors: @item.errors.full_messages }, status: 422
    end
  end

  def update

  end






  def item_params
    params.require(:item).permit(:estate_id, :name, :description, :appraised_value, :viewable)
  end

end