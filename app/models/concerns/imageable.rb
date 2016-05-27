module Imageable
  extend ActiveSupport::Concern

  included do
    has_many :images, as: :imageable
  end

  def create_image(image)
    self.images.new(picture: image)
  end

  def image_urls
    self.images.map(&:url)
  end

  def thumb
    if self.images.any?
      self.images.first.picture.url
    else
      "missing.png"
    end
  end
end