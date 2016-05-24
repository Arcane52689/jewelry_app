class User < ActiveRecord::Base
  include Passwordable

  has_many :sessions

  validates :name, presence: true
  validates :password, length: { minimum: 8, allow_nil: true }
  validates :email, presence: true



end
