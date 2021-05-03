Rails.application.routes.draw do
  root to: "home#index"
  get "refresh", to: "home#refresh"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
