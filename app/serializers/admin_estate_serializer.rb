class AdminEstateSerializer < ActiveModel::Serializer

  attributes :name, :id, :admin

  has_many :items

end