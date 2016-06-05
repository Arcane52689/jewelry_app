Rails.application.routes.draw do
  root to: "static#home"
  resource :session, only: [:create, :new, :destroy]

  namespace :api, defaults: {format: :json} do
    put 'items/toggle_viewable', to: "items#toggle_viewable"

    resources :users, only: [:show]
    resources :estates, only: [:show]
    resources :items, only: [:create, :show, :update]
    resources :lots, only: [:create, :update, :show]
    resources :selections, only: [:create, :update]

  end

end
