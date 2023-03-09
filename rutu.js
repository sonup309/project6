//filter
function onfilter(e){
    //converting text lowercas
    const text=e.target.value.toLowerCase();
    //getting list
    const items=item.getElementsByTagName(li);
    //converting items from html collection to array
Array.from(items).forEach(function(item)){
    const itemName=item.firstchild.textContent;
    const description=item.childnodes[1].textContent;
    if(itemName.toLowerCase().indexof(text)!=-1 || description.toLowerCase().indexof(text)!=-1){
        item.style.display='block';
    }
    else{
        item.style.display='none';
    }
}
}