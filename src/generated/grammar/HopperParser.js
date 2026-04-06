// Generated from grammar/Hopper.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import HopperListener from './HopperListener.js';
import HopperVisitor from './HopperVisitor.js';

const serializedATN = [4,1,65,507,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,1,0,5,0,66,8,0,10,0,12,0,69,
9,0,1,0,1,0,5,0,73,8,0,10,0,12,0,76,9,0,5,0,78,8,0,10,0,12,0,81,9,0,1,0,
1,0,1,1,1,1,1,1,1,1,1,1,3,1,90,8,1,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,4,1,
4,1,4,1,4,1,4,3,4,105,8,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,113,8,4,1,4,1,4,1,
4,1,4,3,4,119,8,4,1,5,1,5,1,5,1,5,5,5,125,8,5,10,5,12,5,128,9,5,1,5,1,5,
4,5,132,8,5,11,5,12,5,133,1,5,5,5,137,8,5,10,5,12,5,140,9,5,1,5,5,5,143,
8,5,10,5,12,5,146,9,5,3,5,148,8,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,3,6,157,8,
6,1,7,1,7,1,7,1,7,5,7,163,8,7,10,7,12,7,166,9,7,1,7,1,7,4,7,170,8,7,11,7,
12,7,171,1,7,5,7,175,8,7,10,7,12,7,178,9,7,1,7,5,7,181,8,7,10,7,12,7,184,
9,7,3,7,186,8,7,1,7,1,7,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,197,8,8,1,8,1,8,
1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,211,8,8,1,9,1,9,1,9,1,9,1,9,
1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,231,8,9,1,10,1,10,
1,10,5,10,236,8,10,10,10,12,10,239,9,10,1,11,1,11,1,11,1,12,1,12,1,13,1,
13,5,13,248,8,13,10,13,12,13,251,9,13,1,13,1,13,4,13,255,8,13,11,13,12,13,
256,1,13,5,13,260,8,13,10,13,12,13,263,9,13,1,13,5,13,266,8,13,10,13,12,
13,269,9,13,3,13,271,8,13,1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,
14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,
1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,
14,1,14,1,14,1,14,1,14,1,14,3,14,317,8,14,1,14,1,14,1,14,1,14,1,14,1,14,
1,14,1,14,1,14,3,14,328,8,14,1,14,1,14,3,14,332,8,14,1,14,1,14,3,14,336,
8,14,1,14,1,14,1,14,1,14,1,14,1,14,3,14,344,8,14,1,15,1,15,1,15,1,15,1,15,
1,15,1,15,1,15,3,15,354,8,15,1,16,1,16,1,16,1,16,1,17,1,17,1,18,1,18,1,18,
5,18,365,8,18,10,18,12,18,368,9,18,1,19,1,19,1,19,5,19,373,8,19,10,19,12,
19,376,9,19,1,20,1,20,1,20,5,20,381,8,20,10,20,12,20,384,9,20,1,21,1,21,
1,21,5,21,389,8,21,10,21,12,21,392,9,21,1,22,1,22,1,22,5,22,397,8,22,10,
22,12,22,400,9,22,1,23,1,23,1,23,5,23,405,8,23,10,23,12,23,408,9,23,1,24,
1,24,1,24,5,24,413,8,24,10,24,12,24,416,9,24,1,25,1,25,1,25,5,25,421,8,25,
10,25,12,25,424,9,25,1,26,1,26,1,26,5,26,429,8,26,10,26,12,26,432,9,26,1,
27,1,27,1,27,5,27,437,8,27,10,27,12,27,440,9,27,1,28,1,28,1,28,3,28,445,
8,28,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,
29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,3,29,471,8,29,1,29,
1,29,1,29,1,29,1,29,1,29,3,29,479,8,29,1,29,1,29,1,29,1,29,1,29,1,29,1,29,
1,29,1,29,1,29,1,29,1,29,1,29,1,29,3,29,495,8,29,1,30,1,30,1,30,5,30,500,
8,30,10,30,12,30,503,9,30,1,31,1,31,1,31,0,0,32,0,2,4,6,8,10,12,14,16,18,
20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,0,8,2,
0,33,38,62,62,1,0,19,20,1,0,21,24,1,0,28,29,1,0,14,15,1,0,16,18,2,0,15,15,
52,53,2,0,54,55,57,60,568,0,67,1,0,0,0,2,89,1,0,0,0,4,91,1,0,0,0,6,94,1,
0,0,0,8,118,1,0,0,0,10,120,1,0,0,0,12,156,1,0,0,0,14,158,1,0,0,0,16,210,
1,0,0,0,18,230,1,0,0,0,20,232,1,0,0,0,22,240,1,0,0,0,24,243,1,0,0,0,26,245,
1,0,0,0,28,343,1,0,0,0,30,353,1,0,0,0,32,355,1,0,0,0,34,359,1,0,0,0,36,361,
1,0,0,0,38,369,1,0,0,0,40,377,1,0,0,0,42,385,1,0,0,0,44,393,1,0,0,0,46,401,
1,0,0,0,48,409,1,0,0,0,50,417,1,0,0,0,52,425,1,0,0,0,54,433,1,0,0,0,56,444,
1,0,0,0,58,494,1,0,0,0,60,496,1,0,0,0,62,504,1,0,0,0,64,66,5,63,0,0,65,64,
1,0,0,0,66,69,1,0,0,0,67,65,1,0,0,0,67,68,1,0,0,0,68,79,1,0,0,0,69,67,1,
0,0,0,70,74,3,2,1,0,71,73,5,63,0,0,72,71,1,0,0,0,73,76,1,0,0,0,74,72,1,0,
0,0,74,75,1,0,0,0,75,78,1,0,0,0,76,74,1,0,0,0,77,70,1,0,0,0,78,81,1,0,0,
0,79,77,1,0,0,0,79,80,1,0,0,0,80,82,1,0,0,0,81,79,1,0,0,0,82,83,5,0,0,1,
83,1,1,0,0,0,84,90,3,8,4,0,85,90,3,10,5,0,86,90,3,14,7,0,87,90,3,6,3,0,88,
90,3,4,2,0,89,84,1,0,0,0,89,85,1,0,0,0,89,86,1,0,0,0,89,87,1,0,0,0,89,88,
1,0,0,0,90,3,1,0,0,0,91,92,5,1,0,0,92,93,5,60,0,0,93,5,1,0,0,0,94,95,5,2,
0,0,95,96,5,62,0,0,96,97,5,3,0,0,97,98,3,62,31,0,98,7,1,0,0,0,99,100,5,4,
0,0,100,101,5,5,0,0,101,102,5,62,0,0,102,104,5,6,0,0,103,105,3,20,10,0,104,
103,1,0,0,0,104,105,1,0,0,0,105,106,1,0,0,0,106,107,5,7,0,0,107,119,3,24,
12,0,108,109,5,5,0,0,109,110,5,62,0,0,110,112,5,6,0,0,111,113,3,20,10,0,
112,111,1,0,0,0,112,113,1,0,0,0,113,114,1,0,0,0,114,115,5,7,0,0,115,116,
3,24,12,0,116,117,3,26,13,0,117,119,1,0,0,0,118,99,1,0,0,0,118,108,1,0,0,
0,119,9,1,0,0,0,120,121,5,8,0,0,121,122,5,62,0,0,122,126,5,9,0,0,123,125,
5,63,0,0,124,123,1,0,0,0,125,128,1,0,0,0,126,124,1,0,0,0,126,127,1,0,0,0,
127,147,1,0,0,0,128,126,1,0,0,0,129,138,3,12,6,0,130,132,5,63,0,0,131,130,
1,0,0,0,132,133,1,0,0,0,133,131,1,0,0,0,133,134,1,0,0,0,134,135,1,0,0,0,
135,137,3,12,6,0,136,131,1,0,0,0,137,140,1,0,0,0,138,136,1,0,0,0,138,139,
1,0,0,0,139,144,1,0,0,0,140,138,1,0,0,0,141,143,5,63,0,0,142,141,1,0,0,0,
143,146,1,0,0,0,144,142,1,0,0,0,144,145,1,0,0,0,145,148,1,0,0,0,146,144,
1,0,0,0,147,129,1,0,0,0,147,148,1,0,0,0,148,149,1,0,0,0,149,150,5,10,0,0,
150,11,1,0,0,0,151,152,3,24,12,0,152,153,5,62,0,0,153,157,1,0,0,0,154,155,
5,11,0,0,155,157,5,57,0,0,156,151,1,0,0,0,156,154,1,0,0,0,157,13,1,0,0,0,
158,159,5,12,0,0,159,160,5,62,0,0,160,164,5,9,0,0,161,163,5,63,0,0,162,161,
1,0,0,0,163,166,1,0,0,0,164,162,1,0,0,0,164,165,1,0,0,0,165,185,1,0,0,0,
166,164,1,0,0,0,167,176,3,16,8,0,168,170,5,63,0,0,169,168,1,0,0,0,170,171,
1,0,0,0,171,169,1,0,0,0,171,172,1,0,0,0,172,173,1,0,0,0,173,175,3,16,8,0,
174,169,1,0,0,0,175,178,1,0,0,0,176,174,1,0,0,0,176,177,1,0,0,0,177,182,
1,0,0,0,178,176,1,0,0,0,179,181,5,63,0,0,180,179,1,0,0,0,181,184,1,0,0,0,
182,180,1,0,0,0,182,183,1,0,0,0,183,186,1,0,0,0,184,182,1,0,0,0,185,167,
1,0,0,0,185,186,1,0,0,0,186,187,1,0,0,0,187,188,5,10,0,0,188,15,1,0,0,0,
189,190,3,24,12,0,190,191,5,62,0,0,191,211,1,0,0,0,192,193,5,5,0,0,193,194,
5,62,0,0,194,196,5,6,0,0,195,197,3,20,10,0,196,195,1,0,0,0,196,197,1,0,0,
0,197,198,1,0,0,0,198,199,5,7,0,0,199,200,3,24,12,0,200,201,3,26,13,0,201,
211,1,0,0,0,202,203,5,13,0,0,203,204,3,18,9,0,204,205,5,6,0,0,205,206,3,
22,11,0,206,207,5,7,0,0,207,208,3,24,12,0,208,209,3,26,13,0,209,211,1,0,
0,0,210,189,1,0,0,0,210,192,1,0,0,0,210,202,1,0,0,0,211,17,1,0,0,0,212,231,
5,14,0,0,213,231,5,15,0,0,214,231,5,16,0,0,215,231,5,17,0,0,216,231,5,18,
0,0,217,231,5,19,0,0,218,231,5,20,0,0,219,231,5,21,0,0,220,231,5,22,0,0,
221,231,5,23,0,0,222,231,5,24,0,0,223,231,5,25,0,0,224,231,5,26,0,0,225,
231,5,27,0,0,226,231,5,28,0,0,227,231,5,29,0,0,228,229,5,30,0,0,229,231,
5,31,0,0,230,212,1,0,0,0,230,213,1,0,0,0,230,214,1,0,0,0,230,215,1,0,0,0,
230,216,1,0,0,0,230,217,1,0,0,0,230,218,1,0,0,0,230,219,1,0,0,0,230,220,
1,0,0,0,230,221,1,0,0,0,230,222,1,0,0,0,230,223,1,0,0,0,230,224,1,0,0,0,
230,225,1,0,0,0,230,226,1,0,0,0,230,227,1,0,0,0,230,228,1,0,0,0,231,19,1,
0,0,0,232,237,3,22,11,0,233,234,5,32,0,0,234,236,3,22,11,0,235,233,1,0,0,
0,236,239,1,0,0,0,237,235,1,0,0,0,237,238,1,0,0,0,238,21,1,0,0,0,239,237,
1,0,0,0,240,241,3,24,12,0,241,242,5,62,0,0,242,23,1,0,0,0,243,244,7,0,0,
0,244,25,1,0,0,0,245,249,5,9,0,0,246,248,5,63,0,0,247,246,1,0,0,0,248,251,
1,0,0,0,249,247,1,0,0,0,249,250,1,0,0,0,250,270,1,0,0,0,251,249,1,0,0,0,
252,261,3,28,14,0,253,255,5,63,0,0,254,253,1,0,0,0,255,256,1,0,0,0,256,254,
1,0,0,0,256,257,1,0,0,0,257,258,1,0,0,0,258,260,3,28,14,0,259,254,1,0,0,
0,260,263,1,0,0,0,261,259,1,0,0,0,261,262,1,0,0,0,262,267,1,0,0,0,263,261,
1,0,0,0,264,266,5,63,0,0,265,264,1,0,0,0,266,269,1,0,0,0,267,265,1,0,0,0,
267,268,1,0,0,0,268,271,1,0,0,0,269,267,1,0,0,0,270,252,1,0,0,0,270,271,
1,0,0,0,271,272,1,0,0,0,272,273,5,10,0,0,273,27,1,0,0,0,274,275,3,24,12,
0,275,276,5,62,0,0,276,277,5,30,0,0,277,278,5,57,0,0,278,279,5,31,0,0,279,
344,1,0,0,0,280,281,3,24,12,0,281,282,5,62,0,0,282,283,5,3,0,0,283,284,3,
34,17,0,284,344,1,0,0,0,285,286,3,24,12,0,286,287,5,62,0,0,287,344,1,0,0,
0,288,289,5,62,0,0,289,290,5,30,0,0,290,291,3,34,17,0,291,292,5,31,0,0,292,
293,5,3,0,0,293,294,3,34,17,0,294,344,1,0,0,0,295,296,5,62,0,0,296,297,5,
3,0,0,297,344,3,34,17,0,298,299,5,62,0,0,299,300,5,39,0,0,300,301,5,62,0,
0,301,302,5,3,0,0,302,344,3,34,17,0,303,304,5,62,0,0,304,305,5,40,0,0,305,
306,5,41,0,0,306,307,5,3,0,0,307,344,3,34,17,0,308,344,3,34,17,0,309,310,
5,42,0,0,310,311,5,6,0,0,311,312,3,34,17,0,312,313,5,7,0,0,313,316,3,26,
13,0,314,315,5,43,0,0,315,317,3,26,13,0,316,314,1,0,0,0,316,317,1,0,0,0,
317,344,1,0,0,0,318,319,5,44,0,0,319,320,5,6,0,0,320,321,3,34,17,0,321,322,
5,7,0,0,322,323,3,26,13,0,323,344,1,0,0,0,324,325,5,45,0,0,325,327,5,6,0,
0,326,328,3,30,15,0,327,326,1,0,0,0,327,328,1,0,0,0,328,329,1,0,0,0,329,
331,5,46,0,0,330,332,3,34,17,0,331,330,1,0,0,0,331,332,1,0,0,0,332,333,1,
0,0,0,333,335,5,46,0,0,334,336,3,32,16,0,335,334,1,0,0,0,335,336,1,0,0,0,
336,337,1,0,0,0,337,338,5,7,0,0,338,344,3,26,13,0,339,344,5,47,0,0,340,344,
5,48,0,0,341,342,5,49,0,0,342,344,3,34,17,0,343,274,1,0,0,0,343,280,1,0,
0,0,343,285,1,0,0,0,343,288,1,0,0,0,343,295,1,0,0,0,343,298,1,0,0,0,343,
303,1,0,0,0,343,308,1,0,0,0,343,309,1,0,0,0,343,318,1,0,0,0,343,324,1,0,
0,0,343,339,1,0,0,0,343,340,1,0,0,0,343,341,1,0,0,0,344,29,1,0,0,0,345,346,
3,24,12,0,346,347,5,62,0,0,347,348,5,3,0,0,348,349,3,34,17,0,349,354,1,0,
0,0,350,351,5,62,0,0,351,352,5,3,0,0,352,354,3,34,17,0,353,345,1,0,0,0,353,
350,1,0,0,0,354,31,1,0,0,0,355,356,5,62,0,0,356,357,5,3,0,0,357,358,3,34,
17,0,358,33,1,0,0,0,359,360,3,36,18,0,360,35,1,0,0,0,361,366,3,38,19,0,362,
363,5,50,0,0,363,365,3,38,19,0,364,362,1,0,0,0,365,368,1,0,0,0,366,364,1,
0,0,0,366,367,1,0,0,0,367,37,1,0,0,0,368,366,1,0,0,0,369,374,3,40,20,0,370,
371,5,51,0,0,371,373,3,40,20,0,372,370,1,0,0,0,373,376,1,0,0,0,374,372,1,
0,0,0,374,375,1,0,0,0,375,39,1,0,0,0,376,374,1,0,0,0,377,382,3,42,21,0,378,
379,5,26,0,0,379,381,3,42,21,0,380,378,1,0,0,0,381,384,1,0,0,0,382,380,1,
0,0,0,382,383,1,0,0,0,383,41,1,0,0,0,384,382,1,0,0,0,385,390,3,44,22,0,386,
387,5,27,0,0,387,389,3,44,22,0,388,386,1,0,0,0,389,392,1,0,0,0,390,388,1,
0,0,0,390,391,1,0,0,0,391,43,1,0,0,0,392,390,1,0,0,0,393,398,3,46,23,0,394,
395,5,25,0,0,395,397,3,46,23,0,396,394,1,0,0,0,397,400,1,0,0,0,398,396,1,
0,0,0,398,399,1,0,0,0,399,45,1,0,0,0,400,398,1,0,0,0,401,406,3,48,24,0,402,
403,7,1,0,0,403,405,3,48,24,0,404,402,1,0,0,0,405,408,1,0,0,0,406,404,1,
0,0,0,406,407,1,0,0,0,407,47,1,0,0,0,408,406,1,0,0,0,409,414,3,50,25,0,410,
411,7,2,0,0,411,413,3,50,25,0,412,410,1,0,0,0,413,416,1,0,0,0,414,412,1,
0,0,0,414,415,1,0,0,0,415,49,1,0,0,0,416,414,1,0,0,0,417,422,3,52,26,0,418,
419,7,3,0,0,419,421,3,52,26,0,420,418,1,0,0,0,421,424,1,0,0,0,422,420,1,
0,0,0,422,423,1,0,0,0,423,51,1,0,0,0,424,422,1,0,0,0,425,430,3,54,27,0,426,
427,7,4,0,0,427,429,3,54,27,0,428,426,1,0,0,0,429,432,1,0,0,0,430,428,1,
0,0,0,430,431,1,0,0,0,431,53,1,0,0,0,432,430,1,0,0,0,433,438,3,56,28,0,434,
435,7,5,0,0,435,437,3,56,28,0,436,434,1,0,0,0,437,440,1,0,0,0,438,436,1,
0,0,0,438,439,1,0,0,0,439,55,1,0,0,0,440,438,1,0,0,0,441,442,7,6,0,0,442,
445,3,56,28,0,443,445,3,58,29,0,444,441,1,0,0,0,444,443,1,0,0,0,445,57,1,
0,0,0,446,495,5,57,0,0,447,495,5,58,0,0,448,495,5,59,0,0,449,495,5,60,0,
0,450,495,5,61,0,0,451,495,5,54,0,0,452,495,5,55,0,0,453,495,5,56,0,0,454,
455,5,62,0,0,455,456,5,30,0,0,456,457,3,34,17,0,457,458,5,31,0,0,458,459,
5,40,0,0,459,460,5,38,0,0,460,495,1,0,0,0,461,462,5,62,0,0,462,463,5,40,
0,0,463,495,5,38,0,0,464,465,5,62,0,0,465,466,5,40,0,0,466,495,5,41,0,0,
467,468,5,62,0,0,468,470,5,6,0,0,469,471,3,60,30,0,470,469,1,0,0,0,470,471,
1,0,0,0,471,472,1,0,0,0,472,495,5,7,0,0,473,474,5,62,0,0,474,475,5,39,0,
0,475,476,5,62,0,0,476,478,5,6,0,0,477,479,3,60,30,0,478,477,1,0,0,0,478,
479,1,0,0,0,479,480,1,0,0,0,480,495,5,7,0,0,481,482,5,62,0,0,482,483,5,30,
0,0,483,484,3,34,17,0,484,485,5,31,0,0,485,495,1,0,0,0,486,487,5,62,0,0,
487,488,5,39,0,0,488,495,5,62,0,0,489,495,5,62,0,0,490,491,5,6,0,0,491,492,
3,34,17,0,492,493,5,7,0,0,493,495,1,0,0,0,494,446,1,0,0,0,494,447,1,0,0,
0,494,448,1,0,0,0,494,449,1,0,0,0,494,450,1,0,0,0,494,451,1,0,0,0,494,452,
1,0,0,0,494,453,1,0,0,0,494,454,1,0,0,0,494,461,1,0,0,0,494,464,1,0,0,0,
494,467,1,0,0,0,494,473,1,0,0,0,494,481,1,0,0,0,494,486,1,0,0,0,494,489,
1,0,0,0,494,490,1,0,0,0,495,59,1,0,0,0,496,501,3,34,17,0,497,498,5,32,0,
0,498,500,3,34,17,0,499,497,1,0,0,0,500,503,1,0,0,0,501,499,1,0,0,0,501,
502,1,0,0,0,502,61,1,0,0,0,503,501,1,0,0,0,504,505,7,7,0,0,505,63,1,0,0,
0,48,67,74,79,89,104,112,118,126,133,138,144,147,156,164,171,176,182,185,
196,210,230,237,249,256,261,267,270,316,327,331,335,343,353,366,374,382,
390,398,406,414,422,430,438,444,470,478,494,501];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class HopperParser extends antlr4.Parser {

    static grammarFileName = "Hopper.g4";
    static literalNames = [ null, "'import'", "'const'", "'='", "'extern'", 
                            "'function'", "'('", "')'", "'struct'", "'{'", 
                            "'}'", "'pad'", "'class'", "'operator'", "'+'", 
                            "'-'", "'*'", "'/'", "'%'", "'=='", "'!='", 
                            "'<'", "'<='", "'>'", "'>='", "'&'", "'|'", 
                            "'^'", "'<<'", "'>>'", "'['", "']'", "','", 
                            "'int'", "'bool'", "'float'", "'byte'", "'String'", 
                            "'address'", "'.'", "'::'", "'value'", "'if'", 
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
                         "classMember", "operatorSymbol", "paramList", "param", 
                         "type", "block", "statement", "forInit", "forUpdate", 
                         "expression", "logicalOr", "logicalAnd", "bitwiseOr", 
                         "bitwiseXor", "bitwiseAnd", "equality", "relational", 
                         "shift", "additive", "multiplicative", "unary", 
                         "primary", "argList", "literal" ];

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
	        this.state = 67;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===63) {
	            this.state = 64;
	            this.match(HopperParser.NEWLINE);
	            this.state = 69;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 79;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4406) !== 0)) {
	            this.state = 70;
	            this.topLevelDecl();
	            this.state = 74;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===63) {
	                this.state = 71;
	                this.match(HopperParser.NEWLINE);
	                this.state = 76;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 81;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 82;
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
	        this.state = 89;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	        case 5:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 84;
	            this.functionDecl();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 85;
	            this.structDecl();
	            break;
	        case 12:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 86;
	            this.classDecl();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 87;
	            this.constDecl();
	            break;
	        case 1:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 88;
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
	        this.state = 91;
	        this.match(HopperParser.T__0);
	        this.state = 92;
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
	        this.state = 94;
	        this.match(HopperParser.T__1);
	        this.state = 95;
	        this.match(HopperParser.Identifier);
	        this.state = 96;
	        this.match(HopperParser.T__2);
	        this.state = 97;
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
	        this.state = 118;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 4:
	            localctx = new ExternFuncDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 99;
	            this.match(HopperParser.T__3);
	            this.state = 100;
	            this.match(HopperParser.T__4);
	            this.state = 101;
	            this.match(HopperParser.Identifier);
	            this.state = 102;
	            this.match(HopperParser.T__5);
	            this.state = 104;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 536870975) !== 0)) {
	                this.state = 103;
	                this.paramList();
	            }

	            this.state = 106;
	            this.match(HopperParser.T__6);
	            this.state = 107;
	            this.type();
	            break;
	        case 5:
	            localctx = new FuncDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 108;
	            this.match(HopperParser.T__4);
	            this.state = 109;
	            this.match(HopperParser.Identifier);
	            this.state = 110;
	            this.match(HopperParser.T__5);
	            this.state = 112;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 536870975) !== 0)) {
	                this.state = 111;
	                this.paramList();
	            }

	            this.state = 114;
	            this.match(HopperParser.T__6);
	            this.state = 115;
	            this.type();
	            this.state = 116;
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
	        this.state = 120;
	        this.match(HopperParser.T__7);
	        this.state = 121;
	        this.match(HopperParser.Identifier);
	        this.state = 122;
	        this.match(HopperParser.T__8);
	        this.state = 126;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===63) {
	            this.state = 123;
	            this.match(HopperParser.NEWLINE);
	            this.state = 128;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 147;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===11 || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 536870975) !== 0)) {
	            this.state = 129;
	            this.structMember();
	            this.state = 138;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,9,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 131; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    do {
	                        this.state = 130;
	                        this.match(HopperParser.NEWLINE);
	                        this.state = 133; 
	                        this._errHandler.sync(this);
	                        _la = this._input.LA(1);
	                    } while(_la===63);
	                    this.state = 135;
	                    this.structMember(); 
	                }
	                this.state = 140;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,9,this._ctx);
	            }

	            this.state = 144;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===63) {
	                this.state = 141;
	                this.match(HopperParser.NEWLINE);
	                this.state = 146;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 149;
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
	        this.state = 156;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 33:
	        case 34:
	        case 35:
	        case 36:
	        case 37:
	        case 38:
	        case 62:
	            localctx = new StructFieldContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 151;
	            this.type();
	            this.state = 152;
	            this.match(HopperParser.Identifier);
	            break;
	        case 11:
	            localctx = new StructPadContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 154;
	            this.match(HopperParser.T__10);
	            this.state = 155;
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
	        this.state = 158;
	        this.match(HopperParser.T__11);
	        this.state = 159;
	        this.match(HopperParser.Identifier);
	        this.state = 160;
	        this.match(HopperParser.T__8);
	        this.state = 164;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===63) {
	            this.state = 161;
	            this.match(HopperParser.NEWLINE);
	            this.state = 166;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 185;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5 || _la===13 || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 536870975) !== 0)) {
	            this.state = 167;
	            this.classMember();
	            this.state = 176;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,15,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 169; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    do {
	                        this.state = 168;
	                        this.match(HopperParser.NEWLINE);
	                        this.state = 171; 
	                        this._errHandler.sync(this);
	                        _la = this._input.LA(1);
	                    } while(_la===63);
	                    this.state = 173;
	                    this.classMember(); 
	                }
	                this.state = 178;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,15,this._ctx);
	            }

	            this.state = 182;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===63) {
	                this.state = 179;
	                this.match(HopperParser.NEWLINE);
	                this.state = 184;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 187;
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
	        this.state = 210;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 33:
	        case 34:
	        case 35:
	        case 36:
	        case 37:
	        case 38:
	        case 62:
	            localctx = new ClassFieldContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 189;
	            this.type();
	            this.state = 190;
	            this.match(HopperParser.Identifier);
	            break;
	        case 5:
	            localctx = new ClassMethodContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 192;
	            this.match(HopperParser.T__4);
	            this.state = 193;
	            this.match(HopperParser.Identifier);
	            this.state = 194;
	            this.match(HopperParser.T__5);
	            this.state = 196;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 536870975) !== 0)) {
	                this.state = 195;
	                this.paramList();
	            }

	            this.state = 198;
	            this.match(HopperParser.T__6);
	            this.state = 199;
	            this.type();
	            this.state = 200;
	            this.block();
	            break;
	        case 13:
	            localctx = new ClassOperatorContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 202;
	            this.match(HopperParser.T__12);
	            this.state = 203;
	            this.operatorSymbol();
	            this.state = 204;
	            this.match(HopperParser.T__5);
	            this.state = 205;
	            this.param();
	            this.state = 206;
	            this.match(HopperParser.T__6);
	            this.state = 207;
	            this.type();
	            this.state = 208;
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



	operatorSymbol() {
	    let localctx = new OperatorSymbolContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, HopperParser.RULE_operatorSymbol);
	    try {
	        this.state = 230;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 14:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 212;
	            this.match(HopperParser.T__13);
	            break;
	        case 15:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 213;
	            this.match(HopperParser.T__14);
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 214;
	            this.match(HopperParser.T__15);
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 215;
	            this.match(HopperParser.T__16);
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 216;
	            this.match(HopperParser.T__17);
	            break;
	        case 19:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 217;
	            this.match(HopperParser.T__18);
	            break;
	        case 20:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 218;
	            this.match(HopperParser.T__19);
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 219;
	            this.match(HopperParser.T__20);
	            break;
	        case 22:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 220;
	            this.match(HopperParser.T__21);
	            break;
	        case 23:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 221;
	            this.match(HopperParser.T__22);
	            break;
	        case 24:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 222;
	            this.match(HopperParser.T__23);
	            break;
	        case 25:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 223;
	            this.match(HopperParser.T__24);
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 224;
	            this.match(HopperParser.T__25);
	            break;
	        case 27:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 225;
	            this.match(HopperParser.T__26);
	            break;
	        case 28:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 226;
	            this.match(HopperParser.T__27);
	            break;
	        case 29:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 227;
	            this.match(HopperParser.T__28);
	            break;
	        case 30:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 228;
	            this.match(HopperParser.T__29);
	            this.state = 229;
	            this.match(HopperParser.T__30);
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
	    this.enterRule(localctx, 20, HopperParser.RULE_paramList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 232;
	        this.param();
	        this.state = 237;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===32) {
	            this.state = 233;
	            this.match(HopperParser.T__31);
	            this.state = 234;
	            this.param();
	            this.state = 239;
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
	    this.enterRule(localctx, 22, HopperParser.RULE_param);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 240;
	        this.type();
	        this.state = 241;
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
	    this.enterRule(localctx, 24, HopperParser.RULE_type);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 243;
	        _la = this._input.LA(1);
	        if(!(((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 536870975) !== 0))) {
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
	    this.enterRule(localctx, 26, HopperParser.RULE_block);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 245;
	        this.match(HopperParser.T__8);
	        this.state = 249;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===63) {
	            this.state = 246;
	            this.match(HopperParser.NEWLINE);
	            this.state = 251;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 270;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===6 || _la===15 || ((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 1073338943) !== 0)) {
	            this.state = 252;
	            this.statement();
	            this.state = 261;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,24,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 254; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    do {
	                        this.state = 253;
	                        this.match(HopperParser.NEWLINE);
	                        this.state = 256; 
	                        this._errHandler.sync(this);
	                        _la = this._input.LA(1);
	                    } while(_la===63);
	                    this.state = 258;
	                    this.statement(); 
	                }
	                this.state = 263;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,24,this._ctx);
	            }

	            this.state = 267;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===63) {
	                this.state = 264;
	                this.match(HopperParser.NEWLINE);
	                this.state = 269;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 272;
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
	    this.enterRule(localctx, 28, HopperParser.RULE_statement);
	    var _la = 0;
	    try {
	        this.state = 343;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ArrayDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 274;
	            this.type();
	            this.state = 275;
	            this.match(HopperParser.Identifier);
	            this.state = 276;
	            this.match(HopperParser.T__29);
	            this.state = 277;
	            this.match(HopperParser.IntegerLiteral);
	            this.state = 278;
	            this.match(HopperParser.T__30);
	            break;

	        case 2:
	            localctx = new VarDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 280;
	            this.type();
	            this.state = 281;
	            this.match(HopperParser.Identifier);
	            this.state = 282;
	            this.match(HopperParser.T__2);
	            this.state = 283;
	            this.expression();
	            break;

	        case 3:
	            localctx = new VarDeclNoInitContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 285;
	            this.type();
	            this.state = 286;
	            this.match(HopperParser.Identifier);
	            break;

	        case 4:
	            localctx = new ArrayAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 288;
	            this.match(HopperParser.Identifier);
	            this.state = 289;
	            this.match(HopperParser.T__29);
	            this.state = 290;
	            this.expression();
	            this.state = 291;
	            this.match(HopperParser.T__30);
	            this.state = 292;
	            this.match(HopperParser.T__2);
	            this.state = 293;
	            this.expression();
	            break;

	        case 5:
	            localctx = new AssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 295;
	            this.match(HopperParser.Identifier);
	            this.state = 296;
	            this.match(HopperParser.T__2);
	            this.state = 297;
	            this.expression();
	            break;

	        case 6:
	            localctx = new FieldAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 298;
	            this.match(HopperParser.Identifier);
	            this.state = 299;
	            this.match(HopperParser.T__38);
	            this.state = 300;
	            this.match(HopperParser.Identifier);
	            this.state = 301;
	            this.match(HopperParser.T__2);
	            this.state = 302;
	            this.expression();
	            break;

	        case 7:
	            localctx = new DerefAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 7);
	            this.state = 303;
	            this.match(HopperParser.Identifier);
	            this.state = 304;
	            this.match(HopperParser.T__39);
	            this.state = 305;
	            this.match(HopperParser.T__40);
	            this.state = 306;
	            this.match(HopperParser.T__2);
	            this.state = 307;
	            this.expression();
	            break;

	        case 8:
	            localctx = new ExprStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 8);
	            this.state = 308;
	            this.expression();
	            break;

	        case 9:
	            localctx = new IfStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 9);
	            this.state = 309;
	            this.match(HopperParser.T__41);
	            this.state = 310;
	            this.match(HopperParser.T__5);
	            this.state = 311;
	            this.expression();
	            this.state = 312;
	            this.match(HopperParser.T__6);
	            this.state = 313;
	            this.block();
	            this.state = 316;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===43) {
	                this.state = 314;
	                this.match(HopperParser.T__42);
	                this.state = 315;
	                this.block();
	            }

	            break;

	        case 10:
	            localctx = new WhileStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 10);
	            this.state = 318;
	            this.match(HopperParser.T__43);
	            this.state = 319;
	            this.match(HopperParser.T__5);
	            this.state = 320;
	            this.expression();
	            this.state = 321;
	            this.match(HopperParser.T__6);
	            this.state = 322;
	            this.block();
	            break;

	        case 11:
	            localctx = new ForStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 11);
	            this.state = 324;
	            this.match(HopperParser.T__44);
	            this.state = 325;
	            this.match(HopperParser.T__5);
	            this.state = 327;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(((((_la - 33)) & ~0x1f) === 0 && ((1 << (_la - 33)) & 536870975) !== 0)) {
	                this.state = 326;
	                this.forInit();
	            }

	            this.state = 329;
	            this.match(HopperParser.T__45);
	            this.state = 331;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===6 || _la===15 || ((((_la - 52)) & ~0x1f) === 0 && ((1 << (_la - 52)) & 2047) !== 0)) {
	                this.state = 330;
	                this.expression();
	            }

	            this.state = 333;
	            this.match(HopperParser.T__45);
	            this.state = 335;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===62) {
	                this.state = 334;
	                this.forUpdate();
	            }

	            this.state = 337;
	            this.match(HopperParser.T__6);
	            this.state = 338;
	            this.block();
	            break;

	        case 12:
	            localctx = new BreakStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 12);
	            this.state = 339;
	            this.match(HopperParser.T__46);
	            break;

	        case 13:
	            localctx = new ContinueStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 13);
	            this.state = 340;
	            this.match(HopperParser.T__47);
	            break;

	        case 14:
	            localctx = new ReturnStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 14);
	            this.state = 341;
	            this.match(HopperParser.T__48);
	            this.state = 342;
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
	    this.enterRule(localctx, 30, HopperParser.RULE_forInit);
	    try {
	        this.state = 353;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ForInitDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 345;
	            this.type();
	            this.state = 346;
	            this.match(HopperParser.Identifier);
	            this.state = 347;
	            this.match(HopperParser.T__2);
	            this.state = 348;
	            this.expression();
	            break;

	        case 2:
	            localctx = new ForInitAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 350;
	            this.match(HopperParser.Identifier);
	            this.state = 351;
	            this.match(HopperParser.T__2);
	            this.state = 352;
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
	    this.enterRule(localctx, 32, HopperParser.RULE_forUpdate);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 355;
	        this.match(HopperParser.Identifier);
	        this.state = 356;
	        this.match(HopperParser.T__2);
	        this.state = 357;
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
	    this.enterRule(localctx, 34, HopperParser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 359;
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
	    this.enterRule(localctx, 36, HopperParser.RULE_logicalOr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 361;
	        this.logicalAnd();
	        this.state = 366;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===50) {
	            this.state = 362;
	            this.match(HopperParser.T__49);
	            this.state = 363;
	            this.logicalAnd();
	            this.state = 368;
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
	    this.enterRule(localctx, 38, HopperParser.RULE_logicalAnd);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 369;
	        this.bitwiseOr();
	        this.state = 374;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===51) {
	            this.state = 370;
	            this.match(HopperParser.T__50);
	            this.state = 371;
	            this.bitwiseOr();
	            this.state = 376;
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
	    this.enterRule(localctx, 40, HopperParser.RULE_bitwiseOr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 377;
	        this.bitwiseXor();
	        this.state = 382;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===26) {
	            this.state = 378;
	            this.match(HopperParser.T__25);
	            this.state = 379;
	            this.bitwiseXor();
	            this.state = 384;
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
	    this.enterRule(localctx, 42, HopperParser.RULE_bitwiseXor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 385;
	        this.bitwiseAnd();
	        this.state = 390;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===27) {
	            this.state = 386;
	            this.match(HopperParser.T__26);
	            this.state = 387;
	            this.bitwiseAnd();
	            this.state = 392;
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
	    this.enterRule(localctx, 44, HopperParser.RULE_bitwiseAnd);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 393;
	        this.equality();
	        this.state = 398;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===25) {
	            this.state = 394;
	            this.match(HopperParser.T__24);
	            this.state = 395;
	            this.equality();
	            this.state = 400;
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
	    this.enterRule(localctx, 46, HopperParser.RULE_equality);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 401;
	        this.relational();
	        this.state = 406;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===19 || _la===20) {
	            this.state = 402;
	            _la = this._input.LA(1);
	            if(!(_la===19 || _la===20)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 403;
	            this.relational();
	            this.state = 408;
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
	    this.enterRule(localctx, 48, HopperParser.RULE_relational);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 409;
	        this.shift();
	        this.state = 414;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 31457280) !== 0)) {
	            this.state = 410;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 31457280) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 411;
	            this.shift();
	            this.state = 416;
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
	    this.enterRule(localctx, 50, HopperParser.RULE_shift);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 417;
	        this.additive();
	        this.state = 422;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28 || _la===29) {
	            this.state = 418;
	            _la = this._input.LA(1);
	            if(!(_la===28 || _la===29)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 419;
	            this.additive();
	            this.state = 424;
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
	    this.enterRule(localctx, 52, HopperParser.RULE_additive);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 425;
	        this.multiplicative();
	        this.state = 430;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===14 || _la===15) {
	            this.state = 426;
	            _la = this._input.LA(1);
	            if(!(_la===14 || _la===15)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 427;
	            this.multiplicative();
	            this.state = 432;
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
	    this.enterRule(localctx, 54, HopperParser.RULE_multiplicative);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 433;
	        this.unary();
	        this.state = 438;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 458752) !== 0)) {
	            this.state = 434;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 458752) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 435;
	            this.unary();
	            this.state = 440;
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
	    this.enterRule(localctx, 56, HopperParser.RULE_unary);
	    var _la = 0;
	    try {
	        this.state = 444;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 15:
	        case 52:
	        case 53:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 441;
	            _la = this._input.LA(1);
	            if(!(_la===15 || _la===52 || _la===53)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 442;
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
	            this.state = 443;
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
	    this.enterRule(localctx, 58, HopperParser.RULE_primary);
	    var _la = 0;
	    try {
	        this.state = 494;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,46,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 446;
	            this.match(HopperParser.IntegerLiteral);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 447;
	            this.match(HopperParser.HexLiteral);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 448;
	            this.match(HopperParser.FloatLiteral);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 449;
	            this.match(HopperParser.StringLiteral);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 450;
	            this.match(HopperParser.CharLiteral);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 451;
	            this.match(HopperParser.T__53);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 452;
	            this.match(HopperParser.T__54);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 453;
	            this.match(HopperParser.T__55);
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 454;
	            this.match(HopperParser.Identifier);
	            this.state = 455;
	            this.match(HopperParser.T__29);
	            this.state = 456;
	            this.expression();
	            this.state = 457;
	            this.match(HopperParser.T__30);
	            this.state = 458;
	            this.match(HopperParser.T__39);
	            this.state = 459;
	            this.match(HopperParser.T__37);
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 461;
	            this.match(HopperParser.Identifier);
	            this.state = 462;
	            this.match(HopperParser.T__39);
	            this.state = 463;
	            this.match(HopperParser.T__37);
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 464;
	            this.match(HopperParser.Identifier);
	            this.state = 465;
	            this.match(HopperParser.T__39);
	            this.state = 466;
	            this.match(HopperParser.T__40);
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 467;
	            this.match(HopperParser.Identifier);
	            this.state = 468;
	            this.match(HopperParser.T__5);
	            this.state = 470;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===6 || _la===15 || ((((_la - 52)) & ~0x1f) === 0 && ((1 << (_la - 52)) & 2047) !== 0)) {
	                this.state = 469;
	                this.argList();
	            }

	            this.state = 472;
	            this.match(HopperParser.T__6);
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 473;
	            this.match(HopperParser.Identifier);
	            this.state = 474;
	            this.match(HopperParser.T__38);
	            this.state = 475;
	            this.match(HopperParser.Identifier);
	            this.state = 476;
	            this.match(HopperParser.T__5);
	            this.state = 478;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===6 || _la===15 || ((((_la - 52)) & ~0x1f) === 0 && ((1 << (_la - 52)) & 2047) !== 0)) {
	                this.state = 477;
	                this.argList();
	            }

	            this.state = 480;
	            this.match(HopperParser.T__6);
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 481;
	            this.match(HopperParser.Identifier);
	            this.state = 482;
	            this.match(HopperParser.T__29);
	            this.state = 483;
	            this.expression();
	            this.state = 484;
	            this.match(HopperParser.T__30);
	            break;

	        case 15:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 486;
	            this.match(HopperParser.Identifier);
	            this.state = 487;
	            this.match(HopperParser.T__38);
	            this.state = 488;
	            this.match(HopperParser.Identifier);
	            break;

	        case 16:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 489;
	            this.match(HopperParser.Identifier);
	            break;

	        case 17:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 490;
	            this.match(HopperParser.T__5);
	            this.state = 491;
	            this.expression();
	            this.state = 492;
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
	    this.enterRule(localctx, 60, HopperParser.RULE_argList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 496;
	        this.expression();
	        this.state = 501;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===32) {
	            this.state = 497;
	            this.match(HopperParser.T__31);
	            this.state = 498;
	            this.expression();
	            this.state = 503;
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
	    this.enterRule(localctx, 62, HopperParser.RULE_literal);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 504;
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
HopperParser.RULE_operatorSymbol = 9;
HopperParser.RULE_paramList = 10;
HopperParser.RULE_param = 11;
HopperParser.RULE_type = 12;
HopperParser.RULE_block = 13;
HopperParser.RULE_statement = 14;
HopperParser.RULE_forInit = 15;
HopperParser.RULE_forUpdate = 16;
HopperParser.RULE_expression = 17;
HopperParser.RULE_logicalOr = 18;
HopperParser.RULE_logicalAnd = 19;
HopperParser.RULE_bitwiseOr = 20;
HopperParser.RULE_bitwiseXor = 21;
HopperParser.RULE_bitwiseAnd = 22;
HopperParser.RULE_equality = 23;
HopperParser.RULE_relational = 24;
HopperParser.RULE_shift = 25;
HopperParser.RULE_additive = 26;
HopperParser.RULE_multiplicative = 27;
HopperParser.RULE_unary = 28;
HopperParser.RULE_primary = 29;
HopperParser.RULE_argList = 30;
HopperParser.RULE_literal = 31;

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

	Identifier() {
	    return this.getToken(HopperParser.Identifier, 0);
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

	Identifier() {
	    return this.getToken(HopperParser.Identifier, 0);
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
