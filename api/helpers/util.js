module.exports = {
    toTitleCase: input => input.length === 0 ? `` :
        input.replace(/\w\S*/g, (txt => txt[0].toUpperCase() + txt.substr(1).toLowerCase())),
};
