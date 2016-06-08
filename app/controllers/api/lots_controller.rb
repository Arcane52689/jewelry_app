require 'lot_serializer'
class Api::LotsController < ApplicationController

  def show
    @lot = Lot.includes(items: :images).find(params[:id])
    render json: LotSerializer.new(@lot), status: 200
  end

  def create
    @lot = Lot.new(lot_params)
    if @lot.save
      render json: AdminLotSerializer.new(@lot)
    else
      render json: {errors: @lot.errors.full_messages}
    end
  end


  def update
    @lot = Lot.find(params[:id])
    if @lot.update(lot_params)
      render json: AdminLotSerializer.new(@lot)
    else
      render json: {errors: @lot.errors.full_messages}
    end
  end



  def lot_params
    params.require(:lot).permit(:estate_id, :name, :viewable)
  end

end