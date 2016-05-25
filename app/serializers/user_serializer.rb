class UserSerializer < ActiveModel::Serializer
  attributes :name, :id, :email

  has_many :administered_estates
end