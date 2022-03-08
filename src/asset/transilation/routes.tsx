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