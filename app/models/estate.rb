class Estate < ActiveRecord::Base

  has_many :memberships

  has_many :items

  has_many :members, through: :memberships, as: :user

  def add_beneficiary(user)
    self.memberships.create(user_id: user.id) unless self.memberships.exists?(user_id: user.id)
  end

  def make_admin(user)
    membership = self.memberships.find_by(user_id: user.id)
    membership.is_admin = true
    membership.save
  end

  def is_admin?(user)
    self.memberships.find_by(user_id: user.id).is_admin
  end

  def viewable_items
    items.where(viewable: true)
  end

  def admin
    "admin"
  end

  def bene
    "bene"
  end

end
