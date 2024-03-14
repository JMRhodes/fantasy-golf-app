users
    user_id (int)
    name (string)
    email
    password
    role
    remember_token
    created_at
    updated_at
    token

teams
    team_id (int)
    user_id (int)
    name (string)

players
    player_id (int)
    first_name (string)
    last_name (string)
    salary (int)

team_players [pivot]
    team_id (int)
    player_id (int)

tournaments
    tournament_id (int)
    name (string)
    start_date
    end_date

results
    result_id (int)
    tournament_id (int)
    player_id (int)
    position (int)
    points (int)
