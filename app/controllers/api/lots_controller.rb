require 'lot_serializer'
class Api::LotsController < ApplicationController



  def create
    @lot = Lot.new(lot_params)
    if @lot.save
      render json: LotSerializer.new(@lot)
    else
      render json: {errors: @lot.errors.full_messages}
    end
  end


  def update
    @lot = Lot.find(params[:id])
    if @lot.update(lot_params)
      render json: LotSerializer.new(@lot)
    else
      render json: {errors: @lot.errors.full_messages}
    end
  end



  def lot_params
    params.require(:lot).permit(:estate_id, :name, :viewable)
  end

end