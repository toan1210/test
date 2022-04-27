var mergeKLists = function(lists) {
    let array = [];
    for(let i =0 ; i< lists.length;i++)
    {
        for(let j = 0; j <lists[i].length;j++ )
        {
            array.push(lists[i][j])
            
        }
    }
    array.sort((a,b) => a-b);
   console.log(array)
};
mergeKLists([[1,4,5],[1,3,4],[2,6]])
mergeKLists([[]])