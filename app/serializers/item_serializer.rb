class ItemSerializer < ActiveModel::Serializer
  attributes :id, :name, :description, :image_urls, :thumb, :viewable, :lot_id

end

class AdminItemSerializer < ItemSerializer
  attributes :id, :name, :description, :appraised_value, :thumb, :viewable, :lot_id
end