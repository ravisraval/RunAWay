export const fetchRoutes = (data, success, error) => (
  $.ajax({
    method: 'GET',
    url: '/api/routes',
    data
  })
);

export const fetchRoute = (id, success, error) => (
  $.ajax({
    method: 'GET',
    url: `/api/routes/${id}`
  })
);

export const createRoute = route => (
  $.ajax({
    method: 'POST',
    url: '/api/routes',
    data: {route}
  })
);

export const deleteRoute = (route, success, error) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/routes/${route.id}`,
    success,
    error
  })
);
