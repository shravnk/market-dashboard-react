Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    post '/users', to: "users#create"
  end
end
