$(() => {
    console.log('It works...');
    const openSideNav = () => {
        $('.sideNavbar').css("display", "block");;
    }
    const closeSideNav = () => {
        $('.sideNavbar').css("display", "none");;
    }
    $('.toggleBar').on('click', openSideNav);
    $('.toggleBar').on('click', openSideNav);
})

