let array =[];
var MyHashSet = function() {
    MyHashSet.prototype.add (1); // set = [1]
    MyHashSet.prototype.add (2); // set = [1, 2]
    MyHashSet.prototype.contains (1); // trả về True
    MyHashSet.prototype.contains (3); // trả về False, (không tìm thấy)
    MyHashSet.prototype.add (2); // set = [1, 2]
    MyHashSet.prototype.contains (2); // trả về True
    MyHashSet.prototype.remove (2); // set = [1]
    MyHashSet.prototype.contains (2); // trả về False, (đã bị xóa)
};

MyHashSet.prototype.add = function(key) {
    array.push(key);
};
MyHashSet.prototype.remove = function(key) {    
    var i = array.length;
    for (i = array.length -1 ; i >= 0; i--){
        if(array[i]=== key)
        {
            array.splice(i,1);
        }
    }
};
MyHashSet.prototype.contains = function(key) {
    if(array.indexOf(key) >= 0 )
    {
        console.log("true")
    }
    else
    {
        console.log("false")
    }
};
MyHashSet();
console.log(array);