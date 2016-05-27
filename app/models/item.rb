class Item < ActiveRecord::Base
  include Imageable
  belongs_to :estate

  validates :name, presence: true



end
