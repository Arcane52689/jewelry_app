class LotSerializer < ActiveModel::Serializer
  attributes :id, :name, :estate_id, :viewable

  has_many :items, serializer: ItemSerializer


end
