Rails.application.routes.draw do
  root to: "static#home"
  resource :session, only: [:create, :new, :destroy]

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show]


  end
end
