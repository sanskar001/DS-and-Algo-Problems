// Remove Consecutive Characters

// Given a string S. For each index i(1<=i<=N-1), erase it if s[i] is equal to s[i-1] in the string.

class Solution{
    removeConsecutiveCharacter(s){
        //code here
        
        let resultString = '';
        
        for(let i = 0; i < s.length; i++){
            if( i > 0 && s[i] === s[i - 1]) continue;
            resultString += s[i];
        }
        
        return resultString;
    }
}
