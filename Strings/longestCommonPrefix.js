// Solution1: Time complexity - O(n*m) and Aux Space complexity - O(1);
var longestCommonPrefix = function(strs) {
    
    const firstString = strs[0];
    let commonPrefix = '';
    let isCommon = true;
    
    for(let i = 0; i < firstString.length; i++){
        
        for(let j = 1; j < strs.length; j++){
            
            if(firstString[i] !== strs[j][i]){
                isCommon = false;
                break;
            }
        }
        
        if(isCommon){
            commonPrefix += firstString[i];
        }
        else {
            break;
        }
    }
    
    return commonPrefix;
};
