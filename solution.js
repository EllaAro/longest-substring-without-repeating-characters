const lengthOfLongestSubstring = s => {
    let i = 0;
    let j = 0;
    let ans = 0;
    let set = new Set();
    const n = s.length;
    while(j<n && i<n){
        if(!set.has(s.charAt(j))) {
            set.add(s.charAt(j));
            j++;
            ans= Math.max(ans, j-i);
        }
        else {
            set.delete(s.charAt(i));
            i++;
        }
    }
    return ans;
};
