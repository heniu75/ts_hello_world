var SampleApp = (function () {
    function SampleApp(element) {
        this.element = element;
        this.element.innerHTML = "Hello World!";
    }
    return SampleApp;
}());
window.onload = function () {
    var el = document.getElementById('content');
    var student = new SampleApp(el);
};
//# sourceMappingURL=app.js.map