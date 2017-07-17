*Component Hierarchy*

AuthFormContainer
- AuthForm

WelcomeContainer
- Welcome

HomeContainer
- Home
- NavBar

DashboardContainer
- Profile
- Stats
- Workouts
- Routes

WorkoutIndexContainer
- WorkoutIndexItem
- WorkoutItemDetail

RouteIndexContainer
- RouteIndexItem
- RouteItemDetail

ProfileContainer
- Profile

StatsContainer
- Stats

NewWorkoutContainer
- NewWorkout

NewRouteContainer
- NewRoute



Routes

Path	                                         Component

"/landing"	                               "WelcomeContainer"
"/sign-up"	                               "AuthFormContainer"
"/sign-in"	                               "AuthFormContainer"
"/dashboard"                               "DashboardContainer"
"/workouts"	                               "WorkoutIndexContainer"
"/workouts/:workoutId"	                   "WorkoutItemDetail"
"/routes"	                                 "RoutesIndexContainer"
"/routes/:routeId"	                       "RouteItemDetail"
"/stats"	                                 "StatsContainer"
"/profile"	                               "ProfileContainer"
"/new-route"	                             "NewRouteContainer"
"/new-workout"	                           "NewWorkoutContainer"
