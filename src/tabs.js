const tabs = () => {
    const tabs = document.querySelectorAll('.service-header-tab');
    const contents = document.querySelectorAll('.service-tab');

    if (!tabs.length || !contents.length) return;

    const hideTabs = () => {
        contents.forEach((content) => {
            content.style.display = 'none';
        });

        tabs.forEach((tab) => {
            tab.classList.remove('active');
        });
    };

    const showTab = (index) => {
        hideTabs();

        tabs[index].classList.add('active');
        contents[index].style.display = 'flex';
    };

    tabs.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            showTab(index);
        });
    });

    showTab(0);
};

export default tabs;