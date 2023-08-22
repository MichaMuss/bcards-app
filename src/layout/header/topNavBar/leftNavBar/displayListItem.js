const displayListItem =(item, user) => {

    if (item.userDepKey==null){
        return true;
    }else if (item.userDepKey===""){
        return user && true;
    }else if(user && user[item.userDepKey]===item.userDepValue){
        return true;
    }
    return false;
}

export default displayListItem;