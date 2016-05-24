class User < ActiveRecord::Base

  include Passwordable

  validates :name, presence: true
  validates :password, length: { minimum: 8, allow_nil: true }
  validates :email, presence: true



end
