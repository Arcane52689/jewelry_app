class Item < ActiveRecord::Base
  include Imageable
  belongs_to :estate
  belongs_to :lot
  has_many :selections

  validates :name, presence: true





  def toggle_viewable
    self.viewable = self.viewable ? false : true
    self.save
  end


end
