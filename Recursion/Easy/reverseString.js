function reverse(s){
    if(s.length === 0){
        return '';
    }
    const lastLetter = s[s.length - 1];
    return lastLetter + reverse(s.slice(0, s.length - 1));
}
