class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image_urls, :thumb, :viewable

end

class AdminItemSerializer < ItemSerializer
  attributes :id, :name, :description, :appraised_value, :thumb, :viewable
end