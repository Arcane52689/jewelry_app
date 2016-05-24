Rails.application.routes.draw do
  root to: "static#home"
  resource :session, only: [:create, :new, :destroy]
end
