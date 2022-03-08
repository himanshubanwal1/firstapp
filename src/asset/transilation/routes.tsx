<<<<<<< HEAD
const routes={
    root:{
        Name:'Root',
        onboarding:{
            Name:'Onboarding',
            login:{
                Name:'Login'
            },
            postDetail:{
                Name:'postDetail'
            }
=======
const routes = {
    root: {
        Name: 'Root',
        onboarding: {
            Name: 'Onboarding',
            login: {
                Name: 'Login'
            },
            imageDetail: {
                Name: 'Image Detail'
            },
>>>>>>> b67657092d1700912d836a6049ef86d0dbddf7d2
        },
        dashboard: {
            Name: 'Dashboard',
            tabs: {
                Name: 'DashboardTabs',
                image: {
                    Name: 'ImageTab'
                },
                post: {
                    Name: "postTab"
                },
                settings: {
                    Name: "settingTab"
                },
                user: {
                    Name: "userTab"
                }

            }
        }
    }
};
export default routes;