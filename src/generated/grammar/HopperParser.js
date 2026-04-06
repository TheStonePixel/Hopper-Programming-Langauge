// Generated from grammar/Hopper.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import HopperListener from './HopperListener.js';
import HopperVisitor from './HopperVisitor.js';

const serializedATN = [4,1,65,512,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,1,0,5,0,68,8,0,10,
0,12,0,71,9,0,1,0,1,0,5,0,75,8,0,10,0,12,0,78,9,0,5,0,80,8,0,10,0,12,0,83,
9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,3,1,92,8,1,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,
3,1,4,1,4,1,4,1,4,1,4,3,4,107,8,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,115,8,4,1,
4,1,4,1,4,1,4,3,4,121,8,4,1,5,1,5,1,5,1,5,5,5,127,8,5,10,5,12,5,130,9,5,
1,5,1,5,4,5,134,8,5,11,5,12,5,135,1,5,5,5,139,8,5,10,5,12,5,142,9,5,1,5,
5,5,145,8,5,10,5,12,5,148,9,5,3,5,150,8,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,3,
6,159,8,6,1,7,1,7,1,7,1,7,5,7,165,8,7,10,7,12,7,168,9,7,1,7,1,7,4,7,172,
8,7,11,7,12,7,173,1,7,5,7,177,8,7,10,7,12,7,180,9,7,1,7,5,7,183,8,7,10,7,
12,7,186,9,7,3,7,188,8,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,199,8,8,
1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,213,8,8,1,9,1,9,1,10,
1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,
10,1,10,1,10,3,10,235,8,10,1,11,1,11,1,11,5,11,240,8,11,10,11,12,11,243,
9,11,1,12,1,12,1,12,1,13,1,13,1,14,1,14,5,14,252,8,14,10,14,12,14,255,9,
14,1,14,1,14,4,14,259,8,14,11,14,12,14,260,1,14,5,14,264,8,14,10,14,12,14,
267,9,14,1,14,5,14,270,8,14,10,14,12,14,273,9,14,3,14,275,8,14,1,14,1,14,
1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,
15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,
1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,3,
15,322,8,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,3,15,333,8,15,1,
15,1,15,3,15,337,8,15,1,15,1,15,3,15,341,8,15,1,15,1,15,1,15,1,15,1,15,1,
15,3,15,349,8,15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,3,16,359,8,16,1,
17,1,17,1,17,1,17,1,18,1,18,1,19,1,19,1,19,5,19,370,8,19,10,19,12,19,373,
9,19,1,20,1,20,1,20,5,20,378,8,20,10,20,12,20,381,9,20,1,21,1,21,1,21,5,
21,386,8,21,10,21,12,21,389,9,21,1,22,1,22,1,22,5,22,394,8,22,10,22,12,22,
397,9,22,1,23,1,23,1,23,5,23,402,8,23,10,23,12,23,405,9,23,1,24,1,24,1,24,
5,24,410,8,24,10,24,12,24,413,9,24,1,25,1,25,1,25,5,25,418,8,25,10,25,12,
25,421,9,25,1,26,1,26,1,26,5,26,426,8,26,10,26,12,26,429,9,26,1,27,1,27,
1,27,5,27,434,8,27,10,27,12,27,437,9,27,1,28,1,28,1,28,5,28,442,8,28,10,
28,12,28,445,9,28,1,29,1,29,1,29,3,29,450,8,29,1,30,1,30,1,30,1,30,1,30,
1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,
30,1,30,1,30,1,30,1,30,3,30,476,8,30,1,30,1,30,1,30,1,30,1,30,1,30,3,30,
484,8,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,1,30,
1,30,3,30,500,8,30,1,31,1,31,1,31,5,31,505,8,31,10,31,12,31,508,9,31,1,32,
1,32,1,32,0,0,33,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,
40,42,44,46,48,50,52,54,56,58,60,62,64,0,9,2,0,14,15,62,62,3,0,15,15,35,
39,62,62,1,0,21,22,1,0,23,26,1,0,30,31,1,0,16,17,1,0,18,20,2,0,17,17,52,
53,2,0,54,55,57,60,572,0,69,1,0,0,0,2,91,1,0,0,0,4,93,1,0,0,0,6,96,1,0,0,
0,8,120,1,0,0,0,10,122,1,0,0,0,12,158,1,0,0,0,14,160,1,0,0,0,16,212,1,0,
0,0,18,214,1,0,0,0,20,234,1,0,0,0,22,236,1,0,0,0,24,244,1,0,0,0,26,247,1,
0,0,0,28,249,1,0,0,0,30,348,1,0,0,0,32,358,1,0,0,0,34,360,1,0,0,0,36,364,
1,0,0,0,38,366,1,0,0,0,40,374,1,0,0,0,42,382,1,0,0,0,44,390,1,0,0,0,46,398,
1,0,0,0,48,406,1,0,0,0,50,414,1,0,0,0,52,422,1,0,0,0,54,430,1,0,0,0,56,438,
1,0,0,0,58,449,1,0,0,0,60,499,1,0,0,0,62,501,1,0,0,0,64,509,1,0,0,0,66,68,
5,63,0,0,67,66,1,0,0,0,68,71,1,0,0,0,69,67,1,0,0,0,69,70,1,0,0,0,70,81,1,
0,0,0,71,69,1,0,0,0,72,76,3,2,1,0,73,75,5,63,0,0,74,73,1,0,0,0,75,78,1,0,
0,0,76,74,1,0,0,0,76,77,1,0,0,0,77,80,1,0,0,0,78,76,1,0,0,0,79,72,1,0,0,
0,80,83,1,0,0,0,81,79,1,0,0,0,81,82,1,0,0,0,82,84,1,0,0,0,83,81,1,0,0,0,
84,85,5,0,0,1,85,1,1,0,0,0,86,92,3,8,4,0,87,92,3,10,5,0,88,92,3,14,7,0,89,
92,3,6,3,0,90,92,3,4,2,0,91,86,1,0,0,0,91,87,1,0,0,0,91,88,1,0,0,0,91,89,
1,0,0,0,91,90,1,0,0,0,92,3,1,0,0,0,93,94,5,1,0,0,94,95,5,60,0,0,95,5,1,0,
0,0,96,97,5,2,0,0,97,98,5,62,0,0,98,99,5,3,0,0,99,100,3,64,32,0,100,7,1,
0,0,0,101,102,5,4,0,0,102,103,5,5,0,0,103,104,5,62,0,0,104,106,5,6,0,0,105,
107,3,22,11,0,106,105,1,0,0,0,106,107,1,0,0,0,107,108,1,0,0,0,108,109,5,
7,0,0,109,121,3,26,13,0,110,111,5,5,0,0,111,112,5,62,0,0,112,114,5,6,0,0,
113,115,3,22,11,0,114,113,1,0,0,0,114,115,1,0,0,0,115,116,1,0,0,0,116,117,
5,7,0,0,117,118,3,26,13,0,118,119,3,28,14,0,119,121,1,0,0,0,120,101,1,0,
0,0,120,110,1,0,0,0,121,9,1,0,0,0,122,123,5,8,0,0,123,124,5,62,0,0,124,128,
5,9,0,0,125,127,5,63,0,0,126,125,1,0,0,0,127,130,1,0,0,0,128,126,1,0,0,0,
128,129,1,0,0,0,129,149,1,0,0,0,130,128,1,0,0,0,131,140,3,12,6,0,132,134,
5,63,0,0,133,132,1,0,0,0,134,135,1,0,0,0,135,133,1,0,0,0,135,136,1,0,0,0,
136,137,1,0,0,0,137,139,3,12,6,0,138,133,1,0,0,0,139,142,1,0,0,0,140,138,
1,0,0,0,140,141,1,0,0,0,141,146,1,0,0,0,142,140,1,0,0,0,143,145,5,63,0,0,
144,143,1,0,0,0,145,148,1,0,0,0,146,144,1,0,0,0,146,147,1,0,0,0,147,150,
1,0,0,0,148,146,1,0,0,0,149,131,1,0,0,0,149,150,1,0,0,0,150,151,1,0,0,0,
151,152,5,10,0,0,152,11,1,0,0,0,153,154,3,26,13,0,154,155,3,18,9,0,155,159,
1,0,0,0,156,157,5,11,0,0,157,159,5,57,0,0,158,153,1,0,0,0,158,156,1,0,0,
0,159,13,1,0,0,0,160,161,5,12,0,0,161,162,5,62,0,0,162,166,5,9,0,0,163,165,
5,63,0,0,164,163,1,0,0,0,165,168,1,0,0,0,166,164,1,0,0,0,166,167,1,0,0,0,
167,187,1,0,0,0,168,166,1,0,0,0,169,178,3,16,8,0,170,172,5,63,0,0,171,170,
1,0,0,0,172,173,1,0,0,0,173,171,1,0,0,0,173,174,1,0,0,0,174,175,1,0,0,0,
175,177,3,16,8,0,176,171,1,0,0,0,177,180,1,0,0,0,178,176,1,0,0,0,178,179,
1,0,0,0,179,184,1,0,0,0,180,178,1,0,0,0,181,183,5,63,0,0,182,181,1,0,0,0,
183,186,1,0,0,0,184,182,1,0,0,0,184,185,1,0,0,0,185,188,1,0,0,0,186,184,
1,0,0,0,187,169,1,0,0,0,187,188,1,0,0,0,188,189,1,0,0,0,189,190,5,10,0,0,
190,15,1,0,0,0,191,192,3,26,13,0,192,193,3,18,9,0,193,213,1,0,0,0,194,195,
5,5,0,0,195,196,5,62,0,0,196,198,5,6,0,0,197,199,3,22,11,0,198,197,1,0,0,
0,198,199,1,0,0,0,199,200,1,0,0,0,200,201,5,7,0,0,201,202,3,26,13,0,202,
203,3,28,14,0,203,213,1,0,0,0,204,205,5,13,0,0,205,206,3,20,10,0,206,207,
5,6,0,0,207,208,3,24,12,0,208,209,5,7,0,0,209,210,3,26,13,0,210,211,3,28,
14,0,211,213,1,0,0,0,212,191,1,0,0,0,212,194,1,0,0,0,212,204,1,0,0,0,213,
17,1,0,0,0,214,215,7,0,0,0,215,19,1,0,0,0,216,235,5,16,0,0,217,235,5,17,
0,0,218,235,5,18,0,0,219,235,5,19,0,0,220,235,5,20,0,0,221,235,5,21,0,0,
222,235,5,22,0,0,223,235,5,23,0,0,224,235,5,24,0,0,225,235,5,25,0,0,226,
235,5,26,0,0,227,235,5,27,0,0,228,235,5,28,0,0,229,235,5,29,0,0,230,235,
5,30,0,0,231,235,5,31,0,0,232,233,5,32,0,0,233,235,5,33,0,0,234,216,1,0,
0,0,234,217,1,0,0,0,234,218,1,0,0,0,234,219,1,0,0,0,234,220,1,0,0,0,234,
221,1,0,0,0,234,222,1,0,0,0,234,223,1,0,0,0,234,224,1,0,0,0,234,225,1,0,
0,0,234,226,1,0,0,0,234,227,1,0,0,0,234,228,1,0,0,0,234,229,1,0,0,0,234,
230,1,0,0,0,234,231,1,0,0,0,234,232,1,0,0,0,235,21,1,0,0,0,236,241,3,24,
12,0,237,238,5,34,0,0,238,240,3,24,12,0,239,237,1,0,0,0,240,243,1,0,0,0,
241,239,1,0,0,0,241,242,1,0,0,0,242,23,1,0,0,0,243,241,1,0,0,0,244,245,3,
26,13,0,245,246,5,62,0,0,246,25,1,0,0,0,247,248,7,1,0,0,248,27,1,0,0,0,249,
253,5,9,0,0,250,252,5,63,0,0,251,250,1,0,0,0,252,255,1,0,0,0,253,251,1,0,
0,0,253,254,1,0,0,0,254,274,1,0,0,0,255,253,1,0,0,0,256,265,3,30,15,0,257,
259,5,63,0,0,258,257,1,0,0,0,259,260,1,0,0,0,260,258,1,0,0,0,260,261,1,0,
0,0,261,262,1,0,0,0,262,264,3,30,15,0,263,258,1,0,0,0,264,267,1,0,0,0,265,
263,1,0,0,0,265,266,1,0,0,0,266,271,1,0,0,0,267,265,1,0,0,0,268,270,5,63,
0,0,269,268,1,0,0,0,270,273,1,0,0,0,271,269,1,0,0,0,271,272,1,0,0,0,272,
275,1,0,0,0,273,271,1,0,0,0,274,256,1,0,0,0,274,275,1,0,0,0,275,276,1,0,
0,0,276,277,5,10,0,0,277,29,1,0,0,0,278,279,3,26,13,0,279,280,5,62,0,0,280,
281,5,32,0,0,281,282,5,57,0,0,282,283,5,33,0,0,283,349,1,0,0,0,284,285,3,
26,13,0,285,286,5,62,0,0,286,287,5,3,0,0,287,288,3,36,18,0,288,349,1,0,0,
0,289,290,3,26,13,0,290,291,5,62,0,0,291,349,1,0,0,0,292,293,5,62,0,0,293,
294,5,32,0,0,294,295,3,36,18,0,295,296,5,33,0,0,296,297,5,3,0,0,297,298,
3,36,18,0,298,349,1,0,0,0,299,300,5,62,0,0,300,301,5,3,0,0,301,349,3,36,
18,0,302,303,5,62,0,0,303,304,5,40,0,0,304,305,3,18,9,0,305,306,5,3,0,0,
306,307,3,36,18,0,307,349,1,0,0,0,308,309,5,62,0,0,309,310,5,41,0,0,310,
311,5,14,0,0,311,312,5,3,0,0,312,349,3,36,18,0,313,349,3,36,18,0,314,315,
5,42,0,0,315,316,5,6,0,0,316,317,3,36,18,0,317,318,5,7,0,0,318,321,3,28,
14,0,319,320,5,43,0,0,320,322,3,28,14,0,321,319,1,0,0,0,321,322,1,0,0,0,
322,349,1,0,0,0,323,324,5,44,0,0,324,325,5,6,0,0,325,326,3,36,18,0,326,327,
5,7,0,0,327,328,3,28,14,0,328,349,1,0,0,0,329,330,5,45,0,0,330,332,5,6,0,
0,331,333,3,32,16,0,332,331,1,0,0,0,332,333,1,0,0,0,333,334,1,0,0,0,334,
336,5,46,0,0,335,337,3,36,18,0,336,335,1,0,0,0,336,337,1,0,0,0,337,338,1,
0,0,0,338,340,5,46,0,0,339,341,3,34,17,0,340,339,1,0,0,0,340,341,1,0,0,0,
341,342,1,0,0,0,342,343,5,7,0,0,343,349,3,28,14,0,344,349,5,47,0,0,345,349,
5,48,0,0,346,347,5,49,0,0,347,349,3,36,18,0,348,278,1,0,0,0,348,284,1,0,
0,0,348,289,1,0,0,0,348,292,1,0,0,0,348,299,1,0,0,0,348,302,1,0,0,0,348,
308,1,0,0,0,348,313,1,0,0,0,348,314,1,0,0,0,348,323,1,0,0,0,348,329,1,0,
0,0,348,344,1,0,0,0,348,345,1,0,0,0,348,346,1,0,0,0,349,31,1,0,0,0,350,351,
3,26,13,0,351,352,5,62,0,0,352,353,5,3,0,0,353,354,3,36,18,0,354,359,1,0,
0,0,355,356,5,62,0,0,356,357,5,3,0,0,357,359,3,36,18,0,358,350,1,0,0,0,358,
355,1,0,0,0,359,33,1,0,0,0,360,361,5,62,0,0,361,362,5,3,0,0,362,363,3,36,
18,0,363,35,1,0,0,0,364,365,3,38,19,0,365,37,1,0,0,0,366,371,3,40,20,0,367,
368,5,50,0,0,368,370,3,40,20,0,369,367,1,0,0,0,370,373,1,0,0,0,371,369,1,
0,0,0,371,372,1,0,0,0,372,39,1,0,0,0,373,371,1,0,0,0,374,379,3,42,21,0,375,
376,5,51,0,0,376,378,3,42,21,0,377,375,1,0,0,0,378,381,1,0,0,0,379,377,1,
0,0,0,379,380,1,0,0,0,380,41,1,0,0,0,381,379,1,0,0,0,382,387,3,44,22,0,383,
384,5,28,0,0,384,386,3,44,22,0,385,383,1,0,0,0,386,389,1,0,0,0,387,385,1,
0,0,0,387,388,1,0,0,0,388,43,1,0,0,0,389,387,1,0,0,0,390,395,3,46,23,0,391,
392,5,29,0,0,392,394,3,46,23,0,393,391,1,0,0,0,394,397,1,0,0,0,395,393,1,
0,0,0,395,396,1,0,0,0,396,45,1,0,0,0,397,395,1,0,0,0,398,403,3,48,24,0,399,
400,5,27,0,0,400,402,3,48,24,0,401,399,1,0,0,0,402,405,1,0,0,0,403,401,1,
0,0,0,403,404,1,0,0,0,404,47,1,0,0,0,405,403,1,0,0,0,406,411,3,50,25,0,407,
408,7,2,0,0,408,410,3,50,25,0,409,407,1,0,0,0,410,413,1,0,0,0,411,409,1,
0,0,0,411,412,1,0,0,0,412,49,1,0,0,0,413,411,1,0,0,0,414,419,3,52,26,0,415,
416,7,3,0,0,416,418,3,52,26,0,417,415,1,0,0,0,418,421,1,0,0,0,419,417,1,
0,0,0,419,420,1,0,0,0,420,51,1,0,0,0,421,419,1,0,0,0,422,427,3,54,27,0,423,
424,7,4,0,0,424,426,3,54,27,0,425,423,1,0,0,0,426,429,1,0,0,0,427,425,1,
0,0,0,427,428,1,0,0,0,428,53,1,0,0,0,429,427,1,0,0,0,430,435,3,56,28,0,431,
432,7,5,0,0,432,434,3,56,28,0,433,431,1,0,0,0,434,437,1,0,0,0,435,433,1,
0,0,0,435,436,1,0,0,0,436,55,1,0,0,0,437,435,1,0,0,0,438,443,3,58,29,0,439,
440,7,6,0,0,440,442,3,58,29,0,441,439,1,0,0,0,442,445,1,0,0,0,443,441,1,
0,0,0,443,444,1,0,0,0,444,57,1,0,0,0,445,443,1,0,0,0,446,447,7,7,0,0,447,
450,3,58,29,0,448,450,3,60,30,0,449,446,1,0,0,0,449,448,1,0,0,0,450,59,1,
0,0,0,451,500,5,57,0,0,452,500,5,58,0,0,453,500,5,59,0,0,454,500,5,60,0,
0,455,500,5,61,0,0,456,500,5,54,0,0,457,500,5,55,0,0,458,500,5,56,0,0,459,
460,5,62,0,0,460,461,5,32,0,0,461,462,3,36,18,0,462,463,5,33,0,0,463,464,
5,41,0,0,464,465,5,15,0,0,465,500,1,0,0,0,466,467,5,62,0,0,467,468,5,41,
0,0,468,500,5,15,0,0,469,470,5,62,0,0,470,471,5,41,0,0,471,500,5,14,0,0,
472,473,5,62,0,0,473,475,5,6,0,0,474,476,3,62,31,0,475,474,1,0,0,0,475,476,
1,0,0,0,476,477,1,0,0,0,477,500,5,7,0,0,478,479,5,62,0,0,479,480,5,40,0,
0,480,481,5,62,0,0,481,483,5,6,0,0,482,484,3,62,31,0,483,482,1,0,0,0,483,
484,1,0,0,0,484,485,1,0,0,0,485,500,5,7,0,0,486,487,5,62,0,0,487,488,5,32,
0,0,488,489,3,36,18,0,489,490,5,33,0,0,490,500,1,0,0,0,491,492,5,62,0,0,
492,493,5,40,0,0,493,500,3,18,9,0,494,500,5,62,0,0,495,496,5,6,0,0,496,497,
3,36,18,0,497,498,5,7,0,0,498,500,1,0,0,0,499,451,1,0,0,0,499,452,1,0,0,
0,499,453,1,0,0,0,499,454,1,0,0,0,499,455,1,0,0,0,499,456,1,0,0,0,499,457,
1,0,0,0,499,458,1,0,0,0,499,459,1,0,0,0,499,466,1,0,0,0,499,469,1,0,0,0,
499,472,1,0,0,0,499,478,1,0,0,0,499,486,1,0,0,0,499,491,1,0,0,0,499,494,
1,0,0,0,499,495,1,0,0,0,500,61,1,0,0,0,501,506,3,36,18,0,502,503,5,34,0,
0,503,505,3,36,18,0,504,502,1,0,0,0,505,508,1,0,0,0,506,504,1,0,0,0,506,
507,1,0,0,0,507,63,1,0,0,0,508,506,1,0,0,0,509,510,7,8,0,0,510,65,1,0,0,
0,48,69,76,81,91,106,114,120,128,135,140,146,149,158,166,173,178,184,187,
198,212,234,241,253,260,265,271,274,321,332,336,340,348,358,371,379,387,
395,403,411,419,427,435,443,449,475,483,499,506];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class HopperParser extends antlr4.Parser {

    static grammarFileName = "Hopper.g4";
    static literalNames = [ null, "'import'", "'const'", "'='", "'extern'", 
                            "'function'", "'('", "')'", "'struct'", "'{'", 
                            "'}'", "'pad'", "'class'", "'operator'", "'value'", 
                            "'address'", "'+'", "'-'", "'*'", "'/'", "'%'", 
                            "'=='", "'!='", "'<'", "'<='", "'>'", "'>='", 
                            "'&'", "'|'", "'^'", "'<<'", "'>>'", "'['", 
                            "']'", "','", "'int'", "'bool'", "'float'", 
                            "'byte'", "'String'", "'.'", "'::'", "'if'", 
                            "'else'", "'while'", "'for'", "';'", "'break'", 
                            "'continue'", "'return'", "'||'", "'&&'", "'!'", 
                            "'~'", "'true'", "'false'", "'null'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, "IntegerLiteral", "HexLiteral", "FloatLiteral", 
                             "StringLiteral", "CharLiteral", "Identifier", 
                             "NEWLINE", "LINE_COMMENT", "WS" ];
    static ruleNames = [ "program", "topLevelDecl", "importDecl", "constDecl", 
                         "functionDecl", "structDecl", "structMember", "classDecl", 
                         "classMember", "fieldName", "operatorSymbol", "paramList", 
                         "param", "type", "block", "statement", "forInit", 
                         "forUpdate", "expression", "logicalOr", "logicalAnd", 
                         "bitwiseOr", "bitwiseXor", "bitwiseAnd", "equality", 
                         "relational", "shift", "additive", "multiplicative", 
                         "unary", "primary", "argList", "literal" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = HopperParser.ruleNames;
        this.literalNames = HopperParser.literalNames;
        this.symbolicNames = HopperParser.symbolicNames;
    }



	program() {
	    let localctx = new ProgramContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, HopperParser.RULE_program);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 69;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===63) {
	            this.state = 66;
	            this.match(HopperParser.NEWLINE);
	            this.state = 71;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 81;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4406) !== 0)) {
	            this.state = 72;
	            this.topLevelDecl();
	            this.state = 76;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===63) {
	                this.state = 73;
	                this.match(HopperParser.NEWLINE);
	                this.state = 78;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 83;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 84;
	        this.match(HopperParser.EOF);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	topLevelDecl() {
	    let localctx = new TopLevelDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, HopperParser.RULE_topLevelDecl);
	    try {
	        this.state = 91;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	        case 5:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 86;
	            this.functionDecl();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 87;
	            this.structDecl();
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 88;
	            this.classDecl();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 89;
	            this.constDecl();
	            break;
	        case 1:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 90;
	            this.importDecl();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	importDecl() {
	    let localctx = new ImportDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, HopperParser.RULE_importDecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 93;
	        this.match(HopperParser.T__0);
	        this.state = 94;
	        this.match(HopperParser.StringLiteral);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	constDecl() {
	    let localctx = new ConstDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, HopperParser.RULE_constDecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 96;
	        this.match(HopperParser.T__1);
	        this.state = 97;
	        this.match(HopperParser.Identifier);
	        this.state = 98;
	        this.match(HopperParser.T__2);
	        this.state = 99;
	        this.literal();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	functionDecl() {
	    let localctx = new FunctionDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, HopperParser.RULE_functionDecl);
	    var _la = 0;
	    try {
	        this.state = 120;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            localctx = new ExternFuncDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 101;
	            this.match(HopperParser.T__3);
	            this.state = 102;
	            this.match(HopperParser.T__4);
	            this.state = 103;
	            this.match(HopperParser.Identifier);
	            this.state = 104;
	            this.match(HopperParser.T__5);
	            this.state = 106;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===15 || ((((_la - 35)) & ~0x1f) === 0 && ((1 << (_la - 35)) & 134217759) !== 0)) {
	                this.state = 105;
	                this.paramList();
	            }

	            this.state = 108;
	            this.match(HopperParser.T__6);
	            this.state = 109;
	            this.type();
	            break;
	        case 5:
	            localctx = new FuncDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 110;
	            this.match(HopperParser.T__4);
	            this.state = 111;
	            this.match(HopperParser.Identifier);
	            this.state = 112;
	            this.match(HopperParser.T__5);
	            this.state = 114;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===15 || ((((_la - 35)) & ~0x1f) === 0 && ((1 << (_la - 35)) & 134217759) !== 0)) {
	                this.state = 113;
	                this.paramList();
	            }

	            this.state = 116;
	            this.match(HopperParser.T__6);
	            this.state = 117;
	            this.type();
	            this.state = 118;
	            this.block();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	structDecl() {
	    let localctx = new StructDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, HopperParser.RULE_structDecl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
	        this.match(HopperParser.T__7);
	        this.state = 123;
	        this.match(HopperParser.Identifier);
	        this.state = 124;
	        this.match(HopperParser.T__8);
	        this.state = 128;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===63) {
	            this.state = 125;
	            this.match(HopperParser.NEWLINE);
	            this.state = 130;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 149;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===11 || _la===15 || ((((_la - 35)) & ~0x1f) === 0 && ((1 << (_la - 35)) & 134217759) !== 0)) {
	            this.state = 131;
	            this.structMember();
	            this.state = 140;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 133; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    do {
	                        this.state = 132;
	                        this.match(HopperParser.NEWLINE);
	                        this.state = 135; 
	                        this._errHandler.sync(this);
	                        _la = this._input.LA(1);
	                    } while(_la===63);
	                    this.state = 137;
	                    this.structMember(); 
	                }
	                this.state = 142;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
	            }

	            this.state = 146;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===63) {
	                this.state = 143;
	                this.match(HopperParser.NEWLINE);
	                this.state = 148;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 151;
	        this.match(HopperParser.T__9);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	structMember() {
	    let localctx = new StructMemberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, HopperParser.RULE_structMember);
	    try {
	        this.state = 158;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 15:
	        case 35:
	        case 36:
	        case 37:
	        case 38:
	        case 39:
	        case 62:
	            localctx = new StructFieldContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 153;
	            this.type();
	            this.state = 154;
	            this.fieldName();
	            break;
	        case 11:
	            localctx = new StructPadContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 156;
	            this.match(HopperParser.T__10);
	            this.state = 157;
	            this.match(HopperParser.IntegerLiteral);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	classDecl() {
	    let localctx = new ClassDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 14, HopperParser.RULE_classDecl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 160;
	        this.match(HopperParser.T__11);
	        this.state = 161;
	        this.match(HopperParser.Identifier);
	        this.state = 162;
	        this.match(HopperParser.T__8);
	        this.state = 166;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===63) {
	            this.state = 163;
	            this.match(HopperParser.NEWLINE);
	            this.state = 168;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 187;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 40992) !== 0) || ((((_la - 35)) & ~0x1f) === 0 && ((1 << (_la - 35)) & 134217759) !== 0)) {
	            this.state = 169;
	            this.classMember();
	            this.state = 178;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 171; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    do {
	                        this.state = 170;
	                        this.match(HopperParser.NEWLINE);
	                        this.state = 173; 
	                        this._errHandler.sync(this);
	                        _la = this._input.LA(1);
	                    } while(_la===63);
	                    this.state = 175;
	                    this.classMember(); 
	                }
	                this.state = 180;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
	            }

	            this.state = 184;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===63) {
	                this.state = 181;
	                this.match(HopperParser.NEWLINE);
	                this.state = 186;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 189;
	        this.match(HopperParser.T__9);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	classMember() {
	    let localctx = new ClassMemberContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 16, HopperParser.RULE_classMember);
	    var _la = 0;
	    try {
	        this.state = 212;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 15:
	        case 35:
	        case 36:
	        case 37:
	        case 38:
	        case 39:
	        case 62:
	            localctx = new ClassFieldContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 191;
	            this.type();
	            this.state = 192;
	            this.fieldName();
	            break;
	        case 5:
	            localctx = new ClassMethodContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 194;
	            this.match(HopperParser.T__4);
	            this.state = 195;
	            this.match(HopperParser.Identifier);
	            this.state = 196;
	            this.match(HopperParser.T__5);
	            this.state = 198;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===15 || ((((_la - 35)) & ~0x1f) === 0 && ((1 << (_la - 35)) & 134217759) !== 0)) {
	                this.state = 197;
	                this.paramList();
	            }

	            this.state = 200;
	            this.match(HopperParser.T__6);
	            this.state = 201;
	            this.type();
	            this.state = 202;
	            this.block();
	            break;
	        case 13:
	            localctx = new ClassOperatorContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 204;
	            this.match(HopperParser.T__12);
	            this.state = 205;
	            this.operatorSymbol();
	            this.state = 206;
	            this.match(HopperParser.T__5);
	            this.state = 207;
	            this.param();
	            this.state = 208;
	            this.match(HopperParser.T__6);
	            this.state = 209;
	            this.type();
	            this.state = 210;
	            this.block();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	fieldName() {
	    let localctx = new FieldNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, HopperParser.RULE_fieldName);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 214;
	        _la = this._input.LA(1);
	        if(!(_la===14 || _la===15 || _la===62)) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	operatorSymbol() {
	    let localctx = new OperatorSymbolContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, HopperParser.RULE_operatorSymbol);
	    try {
	        this.state = 234;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 16:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 216;
	            this.match(HopperParser.T__15);
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 217;
	            this.match(HopperParser.T__16);
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 218;
	            this.match(HopperParser.T__17);
	            break;
	        case 19:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 219;
	            this.match(HopperParser.T__18);
	            break;
	        case 20:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 220;
	            this.match(HopperParser.T__19);
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 221;
	            this.match(HopperParser.T__20);
	            break;
	        case 22:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 222;
	            this.match(HopperParser.T__21);
	            break;
	        case 23:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 223;
	            this.match(HopperParser.T__22);
	            break;
	        case 24:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 224;
	            this.match(HopperParser.T__23);
	            break;
	        case 25:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 225;
	            this.match(HopperParser.T__24);
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 226;
	            this.match(HopperParser.T__25);
	            break;
	        case 27:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 227;
	            this.match(HopperParser.T__26);
	            break;
	        case 28:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 228;
	            this.match(HopperParser.T__27);
	            break;
	        case 29:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 229;
	            this.match(HopperParser.T__28);
	            break;
	        case 30:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 230;
	            this.match(HopperParser.T__29);
	            break;
	        case 31:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 231;
	            this.match(HopperParser.T__30);
	            break;
	        case 32:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 232;
	            this.match(HopperParser.T__31);
	            this.state = 233;
	            this.match(HopperParser.T__32);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	paramList() {
	    let localctx = new ParamListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, HopperParser.RULE_paramList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 236;
	        this.param();
	        this.state = 241;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===34) {
	            this.state = 237;
	            this.match(HopperParser.T__33);
	            this.state = 238;
	            this.param();
	            this.state = 243;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	param() {
	    let localctx = new ParamContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 24, HopperParser.RULE_param);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 244;
	        this.type();
	        this.state = 245;
	        this.match(HopperParser.Identifier);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	type() {
	    let localctx = new TypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, HopperParser.RULE_type);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 247;
	        _la = this._input.LA(1);
	        if(!(_la===15 || ((((_la - 35)) & ~0x1f) === 0 && ((1 << (_la - 35)) & 134217759) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, HopperParser.RULE_block);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 249;
	        this.match(HopperParser.T__8);
	        this.state = 253;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===63) {
	            this.state = 250;
	            this.match(HopperParser.NEWLINE);
	            this.state = 255;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 274;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 163904) !== 0) || ((((_la - 35)) & ~0x1f) === 0 && ((1 << (_la - 35)) & 268334751) !== 0)) {
	            this.state = 256;
	            this.statement();
	            this.state = 265;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,24,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 258; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    do {
	                        this.state = 257;
	                        this.match(HopperParser.NEWLINE);
	                        this.state = 260; 
	                        this._errHandler.sync(this);
	                        _la = this._input.LA(1);
	                    } while(_la===63);
	                    this.state = 262;
	                    this.statement(); 
	                }
	                this.state = 267;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,24,this._ctx);
	            }

	            this.state = 271;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===63) {
	                this.state = 268;
	                this.match(HopperParser.NEWLINE);
	                this.state = 273;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 276;
	        this.match(HopperParser.T__9);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	statement() {
	    let localctx = new StatementContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 30, HopperParser.RULE_statement);
	    var _la = 0;
	    try {
	        this.state = 348;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ArrayDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 278;
	            this.type();
	            this.state = 279;
	            this.match(HopperParser.Identifier);
	            this.state = 280;
	            this.match(HopperParser.T__31);
	            this.state = 281;
	            this.match(HopperParser.IntegerLiteral);
	            this.state = 282;
	            this.match(HopperParser.T__32);
	            break;

	        case 2:
	            localctx = new VarDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 284;
	            this.type();
	            this.state = 285;
	            this.match(HopperParser.Identifier);
	            this.state = 286;
	            this.match(HopperParser.T__2);
	            this.state = 287;
	            this.expression();
	            break;

	        case 3:
	            localctx = new VarDeclNoInitContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 289;
	            this.type();
	            this.state = 290;
	            this.match(HopperParser.Identifier);
	            break;

	        case 4:
	            localctx = new ArrayAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 292;
	            this.match(HopperParser.Identifier);
	            this.state = 293;
	            this.match(HopperParser.T__31);
	            this.state = 294;
	            this.expression();
	            this.state = 295;
	            this.match(HopperParser.T__32);
	            this.state = 296;
	            this.match(HopperParser.T__2);
	            this.state = 297;
	            this.expression();
	            break;

	        case 5:
	            localctx = new AssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 299;
	            this.match(HopperParser.Identifier);
	            this.state = 300;
	            this.match(HopperParser.T__2);
	            this.state = 301;
	            this.expression();
	            break;

	        case 6:
	            localctx = new FieldAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 302;
	            this.match(HopperParser.Identifier);
	            this.state = 303;
	            this.match(HopperParser.T__39);
	            this.state = 304;
	            this.fieldName();
	            this.state = 305;
	            this.match(HopperParser.T__2);
	            this.state = 306;
	            this.expression();
	            break;

	        case 7:
	            localctx = new DerefAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 7);
	            this.state = 308;
	            this.match(HopperParser.Identifier);
	            this.state = 309;
	            this.match(HopperParser.T__40);
	            this.state = 310;
	            this.match(HopperParser.T__13);
	            this.state = 311;
	            this.match(HopperParser.T__2);
	            this.state = 312;
	            this.expression();
	            break;

	        case 8:
	            localctx = new ExprStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 8);
	            this.state = 313;
	            this.expression();
	            break;

	        case 9:
	            localctx = new IfStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 9);
	            this.state = 314;
	            this.match(HopperParser.T__41);
	            this.state = 315;
	            this.match(HopperParser.T__5);
	            this.state = 316;
	            this.expression();
	            this.state = 317;
	            this.match(HopperParser.T__6);
	            this.state = 318;
	            this.block();
	            this.state = 321;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===43) {
	                this.state = 319;
	                this.match(HopperParser.T__42);
	                this.state = 320;
	                this.block();
	            }

	            break;

	        case 10:
	            localctx = new WhileStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 10);
	            this.state = 323;
	            this.match(HopperParser.T__43);
	            this.state = 324;
	            this.match(HopperParser.T__5);
	            this.state = 325;
	            this.expression();
	            this.state = 326;
	            this.match(HopperParser.T__6);
	            this.state = 327;
	            this.block();
	            break;

	        case 11:
	            localctx = new ForStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 11);
	            this.state = 329;
	            this.match(HopperParser.T__44);
	            this.state = 330;
	            this.match(HopperParser.T__5);
	            this.state = 332;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===15 || ((((_la - 35)) & ~0x1f) === 0 && ((1 << (_la - 35)) & 134217759) !== 0)) {
	                this.state = 331;
	                this.forInit();
	            }

	            this.state = 334;
	            this.match(HopperParser.T__45);
	            this.state = 336;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===6 || _la===17 || ((((_la - 52)) & ~0x1f) === 0 && ((1 << (_la - 52)) & 2047) !== 0)) {
	                this.state = 335;
	                this.expression();
	            }

	            this.state = 338;
	            this.match(HopperParser.T__45);
	            this.state = 340;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===62) {
	                this.state = 339;
	                this.forUpdate();
	            }

	            this.state = 342;
	            this.match(HopperParser.T__6);
	            this.state = 343;
	            this.block();
	            break;

	        case 12:
	            localctx = new BreakStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 12);
	            this.state = 344;
	            this.match(HopperParser.T__46);
	            break;

	        case 13:
	            localctx = new ContinueStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 13);
	            this.state = 345;
	            this.match(HopperParser.T__47);
	            break;

	        case 14:
	            localctx = new ReturnStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 14);
	            this.state = 346;
	            this.match(HopperParser.T__48);
	            this.state = 347;
	            this.expression();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	forInit() {
	    let localctx = new ForInitContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, HopperParser.RULE_forInit);
	    try {
	        this.state = 358;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ForInitDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 350;
	            this.type();
	            this.state = 351;
	            this.match(HopperParser.Identifier);
	            this.state = 352;
	            this.match(HopperParser.T__2);
	            this.state = 353;
	            this.expression();
	            break;

	        case 2:
	            localctx = new ForInitAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 355;
	            this.match(HopperParser.Identifier);
	            this.state = 356;
	            this.match(HopperParser.T__2);
	            this.state = 357;
	            this.expression();
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	forUpdate() {
	    let localctx = new ForUpdateContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 34, HopperParser.RULE_forUpdate);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 360;
	        this.match(HopperParser.Identifier);
	        this.state = 361;
	        this.match(HopperParser.T__2);
	        this.state = 362;
	        this.expression();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	expression() {
	    let localctx = new ExpressionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, HopperParser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 364;
	        this.logicalOr();
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	logicalOr() {
	    let localctx = new LogicalOrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, HopperParser.RULE_logicalOr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 366;
	        this.logicalAnd();
	        this.state = 371;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===50) {
	            this.state = 367;
	            this.match(HopperParser.T__49);
	            this.state = 368;
	            this.logicalAnd();
	            this.state = 373;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	logicalAnd() {
	    let localctx = new LogicalAndContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, HopperParser.RULE_logicalAnd);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 374;
	        this.bitwiseOr();
	        this.state = 379;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===51) {
	            this.state = 375;
	            this.match(HopperParser.T__50);
	            this.state = 376;
	            this.bitwiseOr();
	            this.state = 381;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bitwiseOr() {
	    let localctx = new BitwiseOrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 42, HopperParser.RULE_bitwiseOr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 382;
	        this.bitwiseXor();
	        this.state = 387;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28) {
	            this.state = 383;
	            this.match(HopperParser.T__27);
	            this.state = 384;
	            this.bitwiseXor();
	            this.state = 389;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bitwiseXor() {
	    let localctx = new BitwiseXorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 44, HopperParser.RULE_bitwiseXor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 390;
	        this.bitwiseAnd();
	        this.state = 395;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===29) {
	            this.state = 391;
	            this.match(HopperParser.T__28);
	            this.state = 392;
	            this.bitwiseAnd();
	            this.state = 397;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	bitwiseAnd() {
	    let localctx = new BitwiseAndContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, HopperParser.RULE_bitwiseAnd);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 398;
	        this.equality();
	        this.state = 403;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===27) {
	            this.state = 399;
	            this.match(HopperParser.T__26);
	            this.state = 400;
	            this.equality();
	            this.state = 405;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	equality() {
	    let localctx = new EqualityContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, HopperParser.RULE_equality);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 406;
	        this.relational();
	        this.state = 411;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===21 || _la===22) {
	            this.state = 407;
	            _la = this._input.LA(1);
	            if(!(_la===21 || _la===22)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 408;
	            this.relational();
	            this.state = 413;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	relational() {
	    let localctx = new RelationalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, HopperParser.RULE_relational);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 414;
	        this.shift();
	        this.state = 419;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 125829120) !== 0)) {
	            this.state = 415;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 125829120) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 416;
	            this.shift();
	            this.state = 421;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	shift() {
	    let localctx = new ShiftContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 52, HopperParser.RULE_shift);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 422;
	        this.additive();
	        this.state = 427;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===30 || _la===31) {
	            this.state = 423;
	            _la = this._input.LA(1);
	            if(!(_la===30 || _la===31)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 424;
	            this.additive();
	            this.state = 429;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	additive() {
	    let localctx = new AdditiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 54, HopperParser.RULE_additive);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 430;
	        this.multiplicative();
	        this.state = 435;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===16 || _la===17) {
	            this.state = 431;
	            _la = this._input.LA(1);
	            if(!(_la===16 || _la===17)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 432;
	            this.multiplicative();
	            this.state = 437;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	multiplicative() {
	    let localctx = new MultiplicativeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, HopperParser.RULE_multiplicative);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 438;
	        this.unary();
	        this.state = 443;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1835008) !== 0)) {
	            this.state = 439;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1835008) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 440;
	            this.unary();
	            this.state = 445;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	unary() {
	    let localctx = new UnaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, HopperParser.RULE_unary);
	    var _la = 0;
	    try {
	        this.state = 449;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 17:
	        case 52:
	        case 53:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 446;
	            _la = this._input.LA(1);
	            if(!(_la===17 || _la===52 || _la===53)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 447;
	            this.unary();
	            break;
	        case 6:
	        case 54:
	        case 55:
	        case 56:
	        case 57:
	        case 58:
	        case 59:
	        case 60:
	        case 61:
	        case 62:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 448;
	            this.primary();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	primary() {
	    let localctx = new PrimaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, HopperParser.RULE_primary);
	    var _la = 0;
	    try {
	        this.state = 499;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,46,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 451;
	            this.match(HopperParser.IntegerLiteral);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 452;
	            this.match(HopperParser.HexLiteral);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 453;
	            this.match(HopperParser.FloatLiteral);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 454;
	            this.match(HopperParser.StringLiteral);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 455;
	            this.match(HopperParser.CharLiteral);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 456;
	            this.match(HopperParser.T__53);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 457;
	            this.match(HopperParser.T__54);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 458;
	            this.match(HopperParser.T__55);
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 459;
	            this.match(HopperParser.Identifier);
	            this.state = 460;
	            this.match(HopperParser.T__31);
	            this.state = 461;
	            this.expression();
	            this.state = 462;
	            this.match(HopperParser.T__32);
	            this.state = 463;
	            this.match(HopperParser.T__40);
	            this.state = 464;
	            this.match(HopperParser.T__14);
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 466;
	            this.match(HopperParser.Identifier);
	            this.state = 467;
	            this.match(HopperParser.T__40);
	            this.state = 468;
	            this.match(HopperParser.T__14);
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 469;
	            this.match(HopperParser.Identifier);
	            this.state = 470;
	            this.match(HopperParser.T__40);
	            this.state = 471;
	            this.match(HopperParser.T__13);
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 472;
	            this.match(HopperParser.Identifier);
	            this.state = 473;
	            this.match(HopperParser.T__5);
	            this.state = 475;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===6 || _la===17 || ((((_la - 52)) & ~0x1f) === 0 && ((1 << (_la - 52)) & 2047) !== 0)) {
	                this.state = 474;
	                this.argList();
	            }

	            this.state = 477;
	            this.match(HopperParser.T__6);
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 478;
	            this.match(HopperParser.Identifier);
	            this.state = 479;
	            this.match(HopperParser.T__39);
	            this.state = 480;
	            this.match(HopperParser.Identifier);
	            this.state = 481;
	            this.match(HopperParser.T__5);
	            this.state = 483;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===6 || _la===17 || ((((_la - 52)) & ~0x1f) === 0 && ((1 << (_la - 52)) & 2047) !== 0)) {
	                this.state = 482;
	                this.argList();
	            }

	            this.state = 485;
	            this.match(HopperParser.T__6);
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 486;
	            this.match(HopperParser.Identifier);
	            this.state = 487;
	            this.match(HopperParser.T__31);
	            this.state = 488;
	            this.expression();
	            this.state = 489;
	            this.match(HopperParser.T__32);
	            break;

	        case 15:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 491;
	            this.match(HopperParser.Identifier);
	            this.state = 492;
	            this.match(HopperParser.T__39);
	            this.state = 493;
	            this.fieldName();
	            break;

	        case 16:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 494;
	            this.match(HopperParser.Identifier);
	            break;

	        case 17:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 495;
	            this.match(HopperParser.T__5);
	            this.state = 496;
	            this.expression();
	            this.state = 497;
	            this.match(HopperParser.T__6);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	argList() {
	    let localctx = new ArgListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, HopperParser.RULE_argList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 501;
	        this.expression();
	        this.state = 506;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===34) {
	            this.state = 502;
	            this.match(HopperParser.T__33);
	            this.state = 503;
	            this.expression();
	            this.state = 508;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	literal() {
	    let localctx = new LiteralContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, HopperParser.RULE_literal);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 509;
	        _la = this._input.LA(1);
	        if(!(((((_la - 54)) & ~0x1f) === 0 && ((1 << (_la - 54)) & 123) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

HopperParser.EOF = antlr4.Token.EOF;
HopperParser.T__0 = 1;
HopperParser.T__1 = 2;
HopperParser.T__2 = 3;
HopperParser.T__3 = 4;
HopperParser.T__4 = 5;
HopperParser.T__5 = 6;
HopperParser.T__6 = 7;
HopperParser.T__7 = 8;
HopperParser.T__8 = 9;
HopperParser.T__9 = 10;
HopperParser.T__10 = 11;
HopperParser.T__11 = 12;
HopperParser.T__12 = 13;
HopperParser.T__13 = 14;
HopperParser.T__14 = 15;
HopperParser.T__15 = 16;
HopperParser.T__16 = 17;
HopperParser.T__17 = 18;
HopperParser.T__18 = 19;
HopperParser.T__19 = 20;
HopperParser.T__20 = 21;
HopperParser.T__21 = 22;
HopperParser.T__22 = 23;
HopperParser.T__23 = 24;
HopperParser.T__24 = 25;
HopperParser.T__25 = 26;
HopperParser.T__26 = 27;
HopperParser.T__27 = 28;
HopperParser.T__28 = 29;
HopperParser.T__29 = 30;
HopperParser.T__30 = 31;
HopperParser.T__31 = 32;
HopperParser.T__32 = 33;
HopperParser.T__33 = 34;
HopperParser.T__34 = 35;
HopperParser.T__35 = 36;
HopperParser.T__36 = 37;
HopperParser.T__37 = 38;
HopperParser.T__38 = 39;
HopperParser.T__39 = 40;
HopperParser.T__40 = 41;
HopperParser.T__41 = 42;
HopperParser.T__42 = 43;
HopperParser.T__43 = 44;
HopperParser.T__44 = 45;
HopperParser.T__45 = 46;
HopperParser.T__46 = 47;
HopperParser.T__47 = 48;
HopperParser.T__48 = 49;
HopperParser.T__49 = 50;
HopperParser.T__50 = 51;
HopperParser.T__51 = 52;
HopperParser.T__52 = 53;
HopperParser.T__53 = 54;
HopperParser.T__54 = 55;
HopperParser.T__55 = 56;
HopperParser.IntegerLiteral = 57;
HopperParser.HexLiteral = 58;
HopperParser.FloatLiteral = 59;
HopperParser.StringLiteral = 60;
HopperParser.CharLiteral = 61;
HopperParser.Identifier = 62;
HopperParser.NEWLINE = 63;
HopperParser.LINE_COMMENT = 64;
HopperParser.WS = 65;

HopperParser.RULE_program = 0;
HopperParser.RULE_topLevelDecl = 1;
HopperParser.RULE_importDecl = 2;
HopperParser.RULE_constDecl = 3;
HopperParser.RULE_functionDecl = 4;
HopperParser.RULE_structDecl = 5;
HopperParser.RULE_structMember = 6;
HopperParser.RULE_classDecl = 7;
HopperParser.RULE_classMember = 8;
HopperParser.RULE_fieldName = 9;
HopperParser.RULE_operatorSymbol = 10;
HopperParser.RULE_paramList = 11;
HopperParser.RULE_param = 12;
HopperParser.RULE_type = 13;
HopperParser.RULE_block = 14;
HopperParser.RULE_statement = 15;
HopperParser.RULE_forInit = 16;
HopperParser.RULE_forUpdate = 17;
HopperParser.RULE_expression = 18;
HopperParser.RULE_logicalOr = 19;
HopperParser.RULE_logicalAnd = 20;
HopperParser.RULE_bitwiseOr = 21;
HopperParser.RULE_bitwiseXor = 22;
HopperParser.RULE_bitwiseAnd = 23;
HopperParser.RULE_equality = 24;
HopperParser.RULE_relational = 25;
HopperParser.RULE_shift = 26;
HopperParser.RULE_additive = 27;
HopperParser.RULE_multiplicative = 28;
HopperParser.RULE_unary = 29;
HopperParser.RULE_primary = 30;
HopperParser.RULE_argList = 31;
HopperParser.RULE_literal = 32;

class ProgramContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HopperParser.RULE_program;
    }

	EOF() {
	    return this.getToken(HopperParser.EOF, 0);
	};

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(HopperParser.NEWLINE);
	    } else {
	        return this.getToken(HopperParser.NEWLINE, i);
	    }
	};


	topLevelDecl = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TopLevelDeclContext);
	    } else {
	        return this.getTypedRuleContext(TopLevelDeclContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterProgram(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitProgram(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitProgram(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TopLevelDeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HopperParser.RULE_topLevelDecl;
    }

	functionDecl() {
	    return this.getTypedRuleContext(FunctionDeclContext,0);
	};

	structDecl() {
	    return this.getTypedRuleContext(StructDeclContext,0);
	};

	classDecl() {
	    return this.getTypedRuleContext(ClassDeclContext,0);
	};

	constDecl() {
	    return this.getTypedRuleContext(ConstDeclContext,0);
	};

	importDecl() {
	    return this.getTypedRuleContext(ImportDeclContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterTopLevelDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitTopLevelDecl(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitTopLevelDecl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ImportDeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HopperParser.RULE_importDecl;
    }

	StringLiteral() {
	    return this.getToken(HopperParser.StringLiteral, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterImportDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitImportDecl(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitImportDecl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ConstDeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HopperParser.RULE_constDecl;
    }

	Identifier() {
	    return this.getToken(HopperParser.Identifier, 0);
	};

	literal() {
	    return this.getTypedRuleContext(LiteralContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterConstDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitConstDecl(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitConstDecl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class FunctionDeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HopperParser.RULE_functionDecl;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ExternFuncDeclContext extends FunctionDeclContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Identifier() {
	    return this.getToken(HopperParser.Identifier, 0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	paramList() {
	    return this.getTypedRuleContext(ParamListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterExternFuncDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitExternFuncDecl(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitExternFuncDecl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

HopperParser.ExternFuncDeclContext = ExternFuncDeclContext;

class FuncDeclContext extends FunctionDeclContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Identifier() {
	    return this.getToken(HopperParser.Identifier, 0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	paramList() {
	    return this.getTypedRuleContext(ParamListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterFuncDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitFuncDecl(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitFuncDecl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

HopperParser.FuncDeclContext = FuncDeclContext;

class StructDeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HopperParser.RULE_structDecl;
    }

	Identifier() {
	    return this.getToken(HopperParser.Identifier, 0);
	};

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(HopperParser.NEWLINE);
	    } else {
	        return this.getToken(HopperParser.NEWLINE, i);
	    }
	};


	structMember = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StructMemberContext);
	    } else {
	        return this.getTypedRuleContext(StructMemberContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterStructDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitStructDecl(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitStructDecl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StructMemberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HopperParser.RULE_structMember;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class StructPadContext extends StructMemberContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	IntegerLiteral() {
	    return this.getToken(HopperParser.IntegerLiteral, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterStructPad(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitStructPad(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitStructPad(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

HopperParser.StructPadContext = StructPadContext;

class StructFieldContext extends StructMemberContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	fieldName() {
	    return this.getTypedRuleContext(FieldNameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterStructField(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitStructField(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitStructField(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

HopperParser.StructFieldContext = StructFieldContext;

class ClassDeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HopperParser.RULE_classDecl;
    }

	Identifier() {
	    return this.getToken(HopperParser.Identifier, 0);
	};

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(HopperParser.NEWLINE);
	    } else {
	        return this.getToken(HopperParser.NEWLINE, i);
	    }
	};


	classMember = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ClassMemberContext);
	    } else {
	        return this.getTypedRuleContext(ClassMemberContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterClassDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitClassDecl(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitClassDecl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ClassMemberContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HopperParser.RULE_classMember;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ClassOperatorContext extends ClassMemberContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	operatorSymbol() {
	    return this.getTypedRuleContext(OperatorSymbolContext,0);
	};

	param() {
	    return this.getTypedRuleContext(ParamContext,0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterClassOperator(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitClassOperator(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitClassOperator(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

HopperParser.ClassOperatorContext = ClassOperatorContext;

class ClassMethodContext extends ClassMemberContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Identifier() {
	    return this.getToken(HopperParser.Identifier, 0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	paramList() {
	    return this.getTypedRuleContext(ParamListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterClassMethod(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitClassMethod(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitClassMethod(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

HopperParser.ClassMethodContext = ClassMethodContext;

class ClassFieldContext extends ClassMemberContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	fieldName() {
	    return this.getTypedRuleContext(FieldNameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterClassField(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitClassField(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitClassField(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

HopperParser.ClassFieldContext = ClassFieldContext;

class FieldNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HopperParser.RULE_fieldName;
    }

	Identifier() {
	    return this.getToken(HopperParser.Identifier, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterFieldName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitFieldName(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitFieldName(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class OperatorSymbolContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HopperParser.RULE_operatorSymbol;
    }


	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterOperatorSymbol(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitOperatorSymbol(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitOperatorSymbol(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParamListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HopperParser.RULE_paramList;
    }

	param = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ParamContext);
	    } else {
	        return this.getTypedRuleContext(ParamContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterParamList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitParamList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitParamList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ParamContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HopperParser.RULE_param;
    }

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	Identifier() {
	    return this.getToken(HopperParser.Identifier, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterParam(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitParam(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitParam(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TypeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HopperParser.RULE_type;
    }

	Identifier() {
	    return this.getToken(HopperParser.Identifier, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterType(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitType(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitType(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BlockContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HopperParser.RULE_block;
    }

	NEWLINE = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(HopperParser.NEWLINE);
	    } else {
	        return this.getToken(HopperParser.NEWLINE, i);
	    }
	};


	statement = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatementContext);
	    } else {
	        return this.getTypedRuleContext(StatementContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitBlock(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatementContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HopperParser.RULE_statement;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class FieldAssignContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Identifier() {
	    return this.getToken(HopperParser.Identifier, 0);
	};

	fieldName() {
	    return this.getTypedRuleContext(FieldNameContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterFieldAssign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitFieldAssign(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitFieldAssign(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

HopperParser.FieldAssignContext = FieldAssignContext;

class ArrayAssignContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Identifier() {
	    return this.getToken(HopperParser.Identifier, 0);
	};

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterArrayAssign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitArrayAssign(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitArrayAssign(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

HopperParser.ArrayAssignContext = ArrayAssignContext;

class ContinueStmtContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterContinueStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitContinueStmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitContinueStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

HopperParser.ContinueStmtContext = ContinueStmtContext;

class IfStmtContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	block = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BlockContext);
	    } else {
	        return this.getTypedRuleContext(BlockContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterIfStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitIfStmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitIfStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

HopperParser.IfStmtContext = IfStmtContext;

class ExprStmtContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterExprStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitExprStmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitExprStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

HopperParser.ExprStmtContext = ExprStmtContext;

class VarDeclContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	Identifier() {
	    return this.getToken(HopperParser.Identifier, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterVarDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitVarDecl(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitVarDecl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

HopperParser.VarDeclContext = VarDeclContext;

class WhileStmtContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterWhileStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitWhileStmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitWhileStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

HopperParser.WhileStmtContext = WhileStmtContext;

class BreakStmtContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }


	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterBreakStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitBreakStmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitBreakStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

HopperParser.BreakStmtContext = BreakStmtContext;

class VarDeclNoInitContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	Identifier() {
	    return this.getToken(HopperParser.Identifier, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterVarDeclNoInit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitVarDeclNoInit(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitVarDeclNoInit(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

HopperParser.VarDeclNoInitContext = VarDeclNoInitContext;

class AssignContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Identifier() {
	    return this.getToken(HopperParser.Identifier, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterAssign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitAssign(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitAssign(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

HopperParser.AssignContext = AssignContext;

class DerefAssignContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Identifier() {
	    return this.getToken(HopperParser.Identifier, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterDerefAssign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitDerefAssign(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitDerefAssign(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

HopperParser.DerefAssignContext = DerefAssignContext;

class ForStmtContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	forInit() {
	    return this.getTypedRuleContext(ForInitContext,0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	forUpdate() {
	    return this.getTypedRuleContext(ForUpdateContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterForStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitForStmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitForStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

HopperParser.ForStmtContext = ForStmtContext;

class ReturnStmtContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterReturnStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitReturnStmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitReturnStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

HopperParser.ReturnStmtContext = ReturnStmtContext;

class ArrayDeclContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	Identifier() {
	    return this.getToken(HopperParser.Identifier, 0);
	};

	IntegerLiteral() {
	    return this.getToken(HopperParser.IntegerLiteral, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterArrayDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitArrayDecl(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitArrayDecl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

HopperParser.ArrayDeclContext = ArrayDeclContext;

class ForInitContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HopperParser.RULE_forInit;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ForInitAssignContext extends ForInitContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Identifier() {
	    return this.getToken(HopperParser.Identifier, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterForInitAssign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitForInitAssign(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitForInitAssign(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

HopperParser.ForInitAssignContext = ForInitAssignContext;

class ForInitDeclContext extends ForInitContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	Identifier() {
	    return this.getToken(HopperParser.Identifier, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterForInitDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitForInitDecl(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitForInitDecl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

HopperParser.ForInitDeclContext = ForInitDeclContext;

class ForUpdateContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HopperParser.RULE_forUpdate;
    }

	Identifier() {
	    return this.getToken(HopperParser.Identifier, 0);
	};

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterForUpdate(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitForUpdate(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitForUpdate(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ExpressionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HopperParser.RULE_expression;
    }

	logicalOr() {
	    return this.getTypedRuleContext(LogicalOrContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterExpression(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitExpression(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitExpression(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LogicalOrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HopperParser.RULE_logicalOr;
    }

	logicalAnd = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(LogicalAndContext);
	    } else {
	        return this.getTypedRuleContext(LogicalAndContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterLogicalOr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitLogicalOr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitLogicalOr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LogicalAndContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HopperParser.RULE_logicalAnd;
    }

	bitwiseOr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BitwiseOrContext);
	    } else {
	        return this.getTypedRuleContext(BitwiseOrContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterLogicalAnd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitLogicalAnd(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitLogicalAnd(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BitwiseOrContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HopperParser.RULE_bitwiseOr;
    }

	bitwiseXor = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BitwiseXorContext);
	    } else {
	        return this.getTypedRuleContext(BitwiseXorContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterBitwiseOr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitBitwiseOr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitBitwiseOr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BitwiseXorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HopperParser.RULE_bitwiseXor;
    }

	bitwiseAnd = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(BitwiseAndContext);
	    } else {
	        return this.getTypedRuleContext(BitwiseAndContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterBitwiseXor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitBitwiseXor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitBitwiseXor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class BitwiseAndContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HopperParser.RULE_bitwiseAnd;
    }

	equality = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(EqualityContext);
	    } else {
	        return this.getTypedRuleContext(EqualityContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterBitwiseAnd(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitBitwiseAnd(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitBitwiseAnd(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EqualityContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HopperParser.RULE_equality;
    }

	relational = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(RelationalContext);
	    } else {
	        return this.getTypedRuleContext(RelationalContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterEquality(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitEquality(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitEquality(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class RelationalContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HopperParser.RULE_relational;
    }

	shift = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ShiftContext);
	    } else {
	        return this.getTypedRuleContext(ShiftContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterRelational(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitRelational(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitRelational(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ShiftContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HopperParser.RULE_shift;
    }

	additive = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(AdditiveContext);
	    } else {
	        return this.getTypedRuleContext(AdditiveContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterShift(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitShift(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitShift(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AdditiveContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HopperParser.RULE_additive;
    }

	multiplicative = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(MultiplicativeContext);
	    } else {
	        return this.getTypedRuleContext(MultiplicativeContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterAdditive(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitAdditive(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitAdditive(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MultiplicativeContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HopperParser.RULE_multiplicative;
    }

	unary = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(UnaryContext);
	    } else {
	        return this.getTypedRuleContext(UnaryContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterMultiplicative(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitMultiplicative(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitMultiplicative(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class UnaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HopperParser.RULE_unary;
    }

	unary() {
	    return this.getTypedRuleContext(UnaryContext,0);
	};

	primary() {
	    return this.getTypedRuleContext(PrimaryContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterUnary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitUnary(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitUnary(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class PrimaryContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HopperParser.RULE_primary;
    }

	IntegerLiteral() {
	    return this.getToken(HopperParser.IntegerLiteral, 0);
	};

	HexLiteral() {
	    return this.getToken(HopperParser.HexLiteral, 0);
	};

	FloatLiteral() {
	    return this.getToken(HopperParser.FloatLiteral, 0);
	};

	StringLiteral() {
	    return this.getToken(HopperParser.StringLiteral, 0);
	};

	CharLiteral() {
	    return this.getToken(HopperParser.CharLiteral, 0);
	};

	Identifier = function(i) {
		if(i===undefined) {
			i = null;
		}
	    if(i===null) {
	        return this.getTokens(HopperParser.Identifier);
	    } else {
	        return this.getToken(HopperParser.Identifier, i);
	    }
	};


	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	argList() {
	    return this.getTypedRuleContext(ArgListContext,0);
	};

	fieldName() {
	    return this.getTypedRuleContext(FieldNameContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterPrimary(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitPrimary(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitPrimary(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ArgListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HopperParser.RULE_argList;
    }

	expression = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExpressionContext);
	    } else {
	        return this.getTypedRuleContext(ExpressionContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterArgList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitArgList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitArgList(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class LiteralContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HopperParser.RULE_literal;
    }

	IntegerLiteral() {
	    return this.getToken(HopperParser.IntegerLiteral, 0);
	};

	HexLiteral() {
	    return this.getToken(HopperParser.HexLiteral, 0);
	};

	FloatLiteral() {
	    return this.getToken(HopperParser.FloatLiteral, 0);
	};

	StringLiteral() {
	    return this.getToken(HopperParser.StringLiteral, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterLiteral(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitLiteral(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitLiteral(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




HopperParser.ProgramContext = ProgramContext; 
HopperParser.TopLevelDeclContext = TopLevelDeclContext; 
HopperParser.ImportDeclContext = ImportDeclContext; 
HopperParser.ConstDeclContext = ConstDeclContext; 
HopperParser.FunctionDeclContext = FunctionDeclContext; 
HopperParser.StructDeclContext = StructDeclContext; 
HopperParser.StructMemberContext = StructMemberContext; 
HopperParser.ClassDeclContext = ClassDeclContext; 
HopperParser.ClassMemberContext = ClassMemberContext; 
HopperParser.FieldNameContext = FieldNameContext; 
HopperParser.OperatorSymbolContext = OperatorSymbolContext; 
HopperParser.ParamListContext = ParamListContext; 
HopperParser.ParamContext = ParamContext; 
HopperParser.TypeContext = TypeContext; 
HopperParser.BlockContext = BlockContext; 
HopperParser.StatementContext = StatementContext; 
HopperParser.ForInitContext = ForInitContext; 
HopperParser.ForUpdateContext = ForUpdateContext; 
HopperParser.ExpressionContext = ExpressionContext; 
HopperParser.LogicalOrContext = LogicalOrContext; 
HopperParser.LogicalAndContext = LogicalAndContext; 
HopperParser.BitwiseOrContext = BitwiseOrContext; 
HopperParser.BitwiseXorContext = BitwiseXorContext; 
HopperParser.BitwiseAndContext = BitwiseAndContext; 
HopperParser.EqualityContext = EqualityContext; 
HopperParser.RelationalContext = RelationalContext; 
HopperParser.ShiftContext = ShiftContext; 
HopperParser.AdditiveContext = AdditiveContext; 
HopperParser.MultiplicativeContext = MultiplicativeContext; 
HopperParser.UnaryContext = UnaryContext; 
HopperParser.PrimaryContext = PrimaryContext; 
HopperParser.ArgListContext = ArgListContext; 
HopperParser.LiteralContext = LiteralContext; 
