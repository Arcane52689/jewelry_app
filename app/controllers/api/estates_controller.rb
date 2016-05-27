require "estate_serializer"
class Api::EstatesController < ApplicationController

  before_action :user_belongs_to_estate

  def show
    @estate = Estate.includes(items: :images).find(params[:id])

    if can_modify_estate
      render json: AdminEstateSerializer.new(@estate)
    else
      render json: EstateSerializer.new(@estate)
    end
  end

end