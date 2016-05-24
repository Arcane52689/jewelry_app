FactoryGirl.define do
  factory :user do
    name "MyString"
    password_digest "MyString"
    email "MyString"
    is_admin false
  end
end
