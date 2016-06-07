FactoryGirl.define do
  factory :tagging do
    taggable_id 1
    taggable_type "MyString"
    category nil
  end
end
