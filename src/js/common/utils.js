const getId = (id) => {
    const dom = document.getElementById(id);
    dom && dom.setAttribute('id', dom.id + '_' + (Math.floor(Math.random() * 1000000)));

    return dom;
}

export { getId };