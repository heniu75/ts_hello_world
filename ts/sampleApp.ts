class SampleApp
{
    element: HTMLElement;
    constructor(element: HTMLElement)
    {
        this.element = element;
        this.element.innerHTML = "Hello World!";
    }
}

window.onload = () =>
{
    var el = document.getElementById('content');
    var student = new SampleApp(el);
}