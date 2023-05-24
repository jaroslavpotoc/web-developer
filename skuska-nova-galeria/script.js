function filterSelection(filter) {
    var columns = document.getElementsByClassName("column");

    for (var i = 0; i < columns.length; i++) {
        var column = columns[i];
        var images = column.getElementsByTagName("img");
        var showColumn = false;

        for (var j = 0; j < images.length; j++) {
            var image = images[j];

            if (image.classList.contains(filter)) {
                showColumn = true;
                break;
            }
        }

        if (showColumn) {
            column.style.display = "block";
        } else {
            column.style.display = "none";
        }
    }

    // Update active filter button
    var buttons = document.getElementsByClassName("filter-button");

    for (var k = 0; k < buttons.length; k++) {
        buttons[k].classList.remove("active");
    }

    var activeButton = document.querySelector('button[data-filter="' + filter + '"]');
    activeButton.classList.add("active");
}

// Show specific images by default (e.g., "city")
filterSelection("city");
