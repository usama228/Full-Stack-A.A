
const ERROR = {
    SYSTEM_ERROR: "System error. Please try again later!"
};
const PAGE_LIMIT = 12;
const baseUrl = "http://localhost:5000/api/";
const PAKISTAN_ID = 167;
const APP_SETTINGS = {
    API_PATH: {
        AVATAR: {
            uploadImage: baseUrl + 'images/avatar'
        },
        LOOKUPS: {
            getCountries: baseUrl + 'countries',
            getCountryStates: baseUrl + 'countries/{:countryId}/states',
            getStateCities: baseUrl + 'countries/{:countryId}/states/{:stateId}/cities'
        },
        USER: {
            login: baseUrl + "users/login",
            getAllUsers: baseUrl + 'users/user',
            getUser: baseUrl + 'users/user',
            addUser: baseUrl + 'users/user',
            removeUser: baseUrl + 'users/user',
            updateUser: baseUrl + 'users/user'
        },
        PRODUCTS: {
            getAllProducts: baseUrl + 'product',
            getProduct: baseUrl + 'product',
            addProduct: baseUrl + 'product',
            removeProduct: baseUrl + 'product',
            updateProduct: baseUrl + 'product'
        },
        CATEGORIES: {
            getAllCategories: baseUrl + 'category',
            getCategory: baseUrl + 'category',
            addCategory: baseUrl + 'category',
            removeCategory: baseUrl + 'category',
            updateCategory: baseUrl + 'category',
            getAllChildCategories: baseUrl + 'sub-category'
        },
        PROJECTS: {
            getAllProjects: baseUrl + 'project',
            getProject: baseUrl + 'project',
            addProject: baseUrl + 'project',
            removeProject: baseUrl + 'project',
            updateProject: baseUrl + 'project'
        }





    }
};

const ROLE = [

    {
        id: 'superAdmin',
        value: "Super Admin"
    },
    {
        id: 'shop',
        value: "Shop"
    },
    {
        id: 'installer',
        value: "Installer"
    }
]
const USER_ROLE_LIST = {
    SHOP: 'shop',
    SUPERADMIN: 'superAdmin',
    INSTALLER: 'installer'
}
const STATUS = [
    {
        title: 'Active',
        id: 'active'
    },
    {
        title: 'In-Active',
        id: 'inactive'
    },

]
const ALERT_TYPES = {
    WARNING: "warn",
    SUCCESS: 'success',
    INFO: 'info',
    ERROR: 'error',

}
export { ALERT_TYPES, ERROR, PAKISTAN_ID, USER_ROLE_LIST, STATUS, ROLE, APP_SETTINGS, PAGE_LIMIT }