module.exports = function (hbs) {
    hbs.registerHelper('pf:if', function (a, type, b, opts) {
        switch (type) {
            case 'is': {
                if (a == b) {
                    return opts.fn(this);
                } else {
                    return opts.inverse(this);
                }
            }
            case '!is': {
                if (a !== b) {
                    return opts.fn(this);
                } else {
                    return opts.inverse(this);
                }
            }
        }
    });
    hbs.registerHelper('pf:dateTimeFormat', function (a, b) {
        return b;
    });
    hbs.registerHelper('pf:dateFormat', function (a, b) {
        return b;
    });
    hbs.registerHelper('pf:img', function (a) {
        return a;
    });
    hbs.registerHelper("log", function (something) {
        console.log(something);
    });
};
