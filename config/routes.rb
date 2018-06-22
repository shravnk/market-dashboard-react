Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    post '/users', to: "users#create"
    post '/sessions', to: "sessions#create"
    delete '/sessions', to: "sessions#destroy"
    post '/stocks', to: "users#add_stocks"
  end
end
