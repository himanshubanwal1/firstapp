
const routes = {
    root: {
        Name: 'Root',
        onboarding: {
            Name: 'Onboarding',
            login: {
                Name: 'Login'
            },
            imageDetail: {
                Name: 'ImageDetail'
            },
            postDetail:{
                Name:'PostDetail'
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
                    Name: "PostTab"
                },
                settings: {
                    Name: "SettingsTab"
                },
                user: {
                    Name: "UserTab"
                }

            }
        }
    }
}
export default routes;