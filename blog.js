document.getElementById('blogForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    var title = document.getElementById('title').value;
    var description = document.getElementById('description').value;
    
    var photoUpload = document.getElementById('photoUpload');
    var photoFiles = photoUpload.files;
    
    var blogPost = '<!DOCTYPE html><html><head><title>' + title + 
    '</title><style>body { font-family: Arial, sans-serif; margin: 0; padding: 20px; } h1 { font-size: 24px; margin-bottom: 10px; } p { font-size: 16px; margin-bottom: 20px; } .gallery { display: flex; flex-wrap: wrap; } .gallery img { width: 200px; height: 150px; object-fit: cover; margin: 5px; }</style></head><body><h1>' 
    + title + '</h1><p>' 
    + description + '</p><div class="gallery">';
    
    for (var i = 0; i < photoFiles.length; i++) {
        var photoURL = URL.createObjectURL(photoFiles[i]);
        blogPost += '<img src="' + photoURL + '" alt="Image ' + (i+1) + '">';
    }
    
    blogPost += '</div></body></html>';
    
    var newWindow = window.open();
    newWindow.document.open();
    newWindow.document.write(blogPost);
    newWindow.document.close();
});
