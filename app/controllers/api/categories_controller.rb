class Api::CategoriesController < ApplicationController

  def create
    @category = Category.new(category_params)
    if @category.save
      render json: CategorySerializer.new(@category), status: 200
    else
      render json: {errors: @category.errors.full_messages}
    end
  end

  def index
    @categories = Category.all
    render json: @categories, each_serializer: CategorySerializer
  end



  def category_params
    params.require(:category).permit(:name)
  end


end