

export const formatMenuData = (menuData) => {


    //The below block of code is hard-coded as of now. This logic will have to be moved to prisimc
    // soon like how the bottom menu is fetched from prismic

    const topMenu =
        [
            { id: 1, title: "Work With Us", link: { uid: "careers" }, priority: true },
            { id: 2, title: "Rent Gear", link: { url: "https://store.indiahikes.com/rent-gear/" } },
            { id: 3, title: "Visit Store", link: { url: "https://store.indiahikes.com/buy-gear/" } },
            { id: 4, title: "Faqs", link: { uid: "faq" } },
            {
                id: 5, title: `My Profile`, link: { uid: "../../../../user-dashboard/user-upcoming-treks" },
                icon: 'fa fa-user cursor-pointer'
            }
        ]

    // the below menu is fetched from prismic

    const bottomMenu = [];



    menuData.forEach(menuItem => {

        switch (menuItem.slice_type) {
            case "1st_level":
                bottomMenu.push({ title: menuItem.primary.link_text, link: menuItem.primary.nav_link, children: [], level: 1 });
                break;
            case "2nd_level":
                const subMenuItem = { title: menuItem.primary.link_text, link: menuItem.primary.nav_link, level: 2, children: menuItem.items.map(thirdLevel => ({ title: thirdLevel.third_level_link_text, link: thirdLevel.third_level_link, level: 3 })) }
                const lastMenuItem = bottomMenu[bottomMenu.length - 1];
                lastMenuItem.children = [...lastMenuItem.children, subMenuItem]
                break;
        }
    });

    return { topMenu, bottomMenu }

}