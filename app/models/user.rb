class User < ActiveRecord::Base
  include Passwordable

  has_many :sessions

  has_many :memberships
  has_many :estates, through: :memberships, as: :estate

  validates :name, presence: true
  validates :password, length: { minimum: 8, allow_nil: true }
  validates :email, presence: true



  def is_admin?
    self.is_admin
  end

  def administered_estates
    self.memberships.includes(:estate).where(is_admin: true).map(&:estate)
  end

  def can_modify_estate(estate_id)
    membership = self.memberships.find_by(estate_id: estate_id)
    membership && membership.is_admin
  end


end
