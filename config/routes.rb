Rails.application.routes.draw do
  root to: "static#home"
  resource :session, only: [:create, :new, :destroy]

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:show]
    resources :estates, only: [:show]
    resources :items, only: [:create]

  end
end
