var templates = {};

templates.body = function () {
    return [
        '<body>',
        '<div class="container">',
        '<div id="pages" role="page-container">',
        '</div>',
        '</div>',
        '</body>'
    ].join('');
};

templates.home = function () {
    return [
        '<p>',
        '<a href="/page1">Click for page 1</a>',
        '<a href="/page3">Click for page 3</a>',
        '</p>'
    ].join('');
};

templates.page1 = function () {
    return [
        '<p>',
        '<a href="/page2">Click</a>',
        '</p>'
    ].join('');
};

templates.page2 = function () {
    return [
        '<p>',
        '<a href="/">Click</a>',
        '<a href="/page1">Click</a>',
        '</p>'
    ].join('');
};

templates.page3 = function () {
    return [
        '<p>',
        '<a href="/">Click</a>',
        '<a href="/page1">Click</a>',
        '</p>'
    ].join('');
};

module.exports = templates;