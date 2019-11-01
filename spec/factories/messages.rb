FactoryBot.define do
  factory :message do
    body {Faker::Lorem.sentence}
    image {File.open("#{Rails.root}/public/uploads/message/image/3/IMG_5179.jpg")}
    user
    group
  end
end