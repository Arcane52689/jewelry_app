class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image_urls, :thumb

end

class AdminItemSerializer < ItemSerializer
  attributes :id, :name, :description, :appraised_value, :thumb

  has_many :image_urls
end