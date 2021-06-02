$(() => {
    console.log('It works...');
    const openSideNav = () => {
        $('.sideNavbar').css("display", "bock");;
    }
    $('.toggleBar').on('click', openSideNav);
})

