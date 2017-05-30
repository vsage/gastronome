Rails.application.routes.draw do
  devise_for :users
  # devise_for :users
  # resources :users

  # root  'static_pages#home'
  root  'static_pages#home'

  resources :producers
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
