class Item < ActiveRecord::Base
  belongs_to :estate

  validates :name, presence: true
end
