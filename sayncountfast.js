var countAndSay = function output(n) {
    let str="1";
     for (let i=1;i<n;i++){
         let strarr=str.split('');
         str='';
         let count=1;
         for(let j=0;j<strarr.length;j++)
         {
             if(strarr[j]!== strarr[j+1])
             {str += count + strarr[j];
             count=1;
             }
         else{
             count++
             }
         }
 }
     return str
 };