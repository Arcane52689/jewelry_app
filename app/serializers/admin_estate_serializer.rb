class AdminEstateSerializer < ActiveModel::Serializer

  attributes :name, :id, :admin

  has_many :items, serializer: ItemSerializer

  has_many :lots, serializer: LotSerializer
end