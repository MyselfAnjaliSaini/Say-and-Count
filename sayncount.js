var countAndSay = function output(n) {
    if(n==1)
        {return "1"}
    var s = output(n-1);
   var res = "";
    var count = 0;
    for(var i = 0; i<s;i++){
        count++;
        if(i==s||s.charAt(i)!=s.charAt(i+1))
            {
                res=res+count+s.charAt(i);
                count=0;
            }
    }
    return res
};