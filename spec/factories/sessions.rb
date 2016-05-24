FactoryGirl.define do
  factory :session do
    token "MyString"
    user nil
    browser_info "MyText"
  end
end
