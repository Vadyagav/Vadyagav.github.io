const itemClass = '.folder-list-group-item',
      groupClass = '.folder-list-group',
      selected = 'selected',
      items = document.querySelectorAll(itemClass);

for (let i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function (event) {
        event.stopPropagation();
        const target = event.currentTarget,
              childFolder = target.querySelector(groupClass);

        if (childFolder) {
            toggleFolder(childFolder);
        }

        if (!event.shiftKey) {
            removeSeletionsFromItems();
        }

        selectFolder(target);
    });

}

document.addEventListener('click', function () {
   removeSeletionsFromItems();
});

function removeSeletionsFromItems() {
    let selectedItems = document.getElementsByClassName(selected);
    while (selectedItems.length)
        selectedItems[0].classList.remove(selected);
}

function selectFolder(folder) {
    folder.classList.add('selected');
}

function toggleFolder(folder) {
    folder.style.display = (folder.style.display === 'none') ? 'block' : 'none';
}