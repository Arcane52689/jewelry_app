# require 'lot_serializer'

class EstateSerializer < ActiveModel::Serializer
  attributes :id, :name, :bene, :viewable_lots

  # has_many :viewable_lots, serializer: LotSerializer
end

class AdminEstateSerializer < ActiveModel::Serializer

  attributes :name, :id, :admin

  has_many :items, serializer: ItemSerializer

  has_many :lots, serializer: LotSerializer
end