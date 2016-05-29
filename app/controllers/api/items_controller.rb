class Api::ItemsController < ApplicationController

  def show
    @item = Item.find(params[:id])
    render json: ItemSerializer.new(@item)
  end

  def create
    @item = Item.new(item_params)
    @item.create_image(params[:image])
    if @item.save
      render json: ItemSerializer.new(@item), status: 200
    else
      render json: { errors: @item.errors.full_messages }, status: 422
    end
  end

  def update
    @item = Item.find(params[:id])
    if @item.update(item_params)
      render json: ItemSerializer.new(@item), status: 200
    else
      render json: { errors: @item.errors.full_messages }, status: 422
    end
  end




  def toggle_viewable
    Item.where("id IN (?)", params[:item_ids]).each do |item|
      item.toggle_viewable
    end
    render json: {}, status: 200
  end

  def item_params
    params.require(:item).permit(:estate_id, :name, :description, :appraised_value, :viewable, :lot_id)
  end

end