module Imageable
  extend ActiveSupport::Concern

  included do
    has_many :images, as: :imageable
  end

  def create_image(image)
    self.images.new(picture: image)
  end

end