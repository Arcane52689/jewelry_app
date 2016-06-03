class UserSerializer < ActiveModel::Serializer
  attributes :name, :id, :email

  has_many :administered_estates, serializer: AdminEstateSerializer
  has_many :estates
  has_many :selections
end