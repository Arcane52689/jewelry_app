class EstateSerializer < ActiveModel::Serializer
  attributes :id, :name, :bene
end

class AdminEstateSerializer < EstateSerializer

  attributes :name, :id, :admin

  has_many :items, serializer: ItemSerializer

  has_many :lots, serializer: LotSerializer
end