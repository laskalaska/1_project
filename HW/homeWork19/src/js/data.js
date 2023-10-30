const BASE_URL = "https://swapi.dev/api";
let planets_url = BASE_URL + '/planets/?page=1';
let people_url = BASE_URL + '/people/?page=1';
let vehicles_url = BASE_URL + '/vehicles/?page=1';


const resultArrays = {
    'planets': [],
    'vehicles': [],
    'people': []
};

const dataObjProp = {
    'planets': ['diameter', 'climate', 'gravity', 'population', 'terrain', 'orbital_period', 'rotation_period', 'surface_water'],
    'people': ['birth_year', 'gender', 'eye_color', 'hair_color', 'height', 'mass', 'skin_color'],
    'vehicles': ['crew', 'vehicle_class', 'cargo_capacity', 'cost_in_credits', 'passengers', 'max_atmosphering_speed', 'manufacturer']
};

const itemListMapping = {
    'planets': '.planetsList',
    'people': '.peopleList',
    'vehicles': '.vehiclesList'
};

const itemActionBtnMapping = {
    'planets': 'planetsActionBtn',
    'people': 'peopleActionBtn',
    'vehicles': 'vehiclesActionBtn',
};