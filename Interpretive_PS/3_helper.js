var str = `'B':'O',
'X':'K',
'D':'Q',
'C':'P',
'N':'A',
'G':'T',
'R':'E',
'F':'S',
'J':'W',
'H':'U',
'V':'I',
'L':'Y',
'Z':'M',
`;

var newStr = `'$2':'$1'`;

console.log(str.replace(/\'([A-Z])\':\'([A-Z])\'/g, newStr));
