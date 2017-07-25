@routes.each do |route|
  json.set! route.id do
    json.partial! 'api/routes/workout', route: route
  end
end
