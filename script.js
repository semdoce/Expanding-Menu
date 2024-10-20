var state = false;
function expand() {
    var items = document.getElementById('items');
    var toggle = document.getElementById('toggle');
    if (state==false) {
        items.
            style.transform = 'scaleY(1)';
        document.getElementById('toggle').
            style.transform = 'rotate(45deg)';
        state = true;
    } else {
        items.style.transform = 'scaleY(0)';
        toggle.style.transform = 'rotate(0deg)';
        state = false;
    }
    
}