class Api::SelectionsController < ApplicationController


  def create
    @selection = current_user.selections.new(selection_params)
    if @selection.save
      render json: SelectionSerializer.new(@selection)
    else
      render json: { errors: @selection.errors.full_messages }
    end
  end


  def update
    @selection = current_user.selections.find(params[:id])
    if @selection.update(selection_params)
      render json: SelectionSerializer.new(@selection)
    else
      render json: { errors: @selection.errors.full_messages }
    end
  end


  def selection_params
    params.require(:selection).permit(:item_id, :value, :reason, :lot_id)
  end

end