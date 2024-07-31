document.getElementById('export').addEventListener('click', function() {
    html2canvas(document.getElementById('card')).then(canvas => {
        let link = document.createElement('a');
        link.href = canvas.toDataURL();
        link.download = 'carte.png';
        link.click();
    });
});
