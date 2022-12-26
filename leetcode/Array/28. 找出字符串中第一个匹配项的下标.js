var strStr = function(haystack, needle) {
  if(needle.length > haystack.length) return -1
  for(let i=0; i<=haystack.length - needle.length; i++) {
      if(haystack[i] === needle[0]) {
          let tag = 0
          for(let j=0; j<needle.length; j++) {
              if(needle[j] === haystack[i+j]) {
                  tag++
              }else {
                  j = Infinity
              }
          }
          if(tag===needle.length) return i
      }
  }
  return -1
};