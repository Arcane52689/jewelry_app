class Lot < ActiveRecord::Base

  has_many :items
  has_many :selections
  belongs_to :estate



  def assign_items(item_ids)
    Item.where("id IN (?)", item_ids).each do |item|
      item.lot_id = self.id
      item.save
    end
  end

end
