class Item < ActiveRecord::Base
  include Imageable
  belongs_to :estate

  validates :name, presence: true


  def toggle_viewable
    self.viewable = self.viewable ? false : true
    self.save
  end


end
