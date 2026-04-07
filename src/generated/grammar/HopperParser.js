// Generated from grammar/Hopper.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import HopperListener from './HopperListener.js';
import HopperVisitor from './HopperVisitor.js';

const serializedATN = [4,1,72,589,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,1,0,5,0,72,8,0,10,0,12,0,75,9,0,1,0,1,0,5,0,79,8,0,10,0,12,0,82,9,0,5,
0,84,8,0,10,0,12,0,87,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,3,1,97,8,1,1,2,
1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,3,5,
117,8,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,126,8,5,1,5,1,5,1,5,1,5,1,5,3,5,
133,8,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,143,8,5,1,5,1,5,3,5,147,8,5,
1,6,1,6,1,6,1,6,5,6,153,8,6,10,6,12,6,156,9,6,1,6,1,6,4,6,160,8,6,11,6,12,
6,161,1,6,5,6,165,8,6,10,6,12,6,168,9,6,1,6,5,6,171,8,6,10,6,12,6,174,9,
6,3,6,176,8,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,3,7,185,8,7,1,8,1,8,1,8,1,8,5,
8,191,8,8,10,8,12,8,194,9,8,1,8,1,8,4,8,198,8,8,11,8,12,8,199,1,8,5,8,203,
8,8,10,8,12,8,206,9,8,1,8,5,8,209,8,8,10,8,12,8,212,9,8,3,8,214,8,8,1,8,
1,8,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,225,8,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,
1,9,3,9,235,8,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,
250,8,9,1,9,1,9,1,9,1,9,1,9,1,9,3,9,258,8,9,1,10,1,10,1,11,1,11,1,11,1,11,
1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,1,11,3,
11,280,8,11,1,12,1,12,1,12,5,12,285,8,12,10,12,12,12,288,9,12,1,13,1,13,
1,13,5,13,293,8,13,10,13,12,13,296,9,13,1,13,1,13,3,13,300,8,13,1,13,3,13,
303,8,13,1,14,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,
1,15,3,15,319,8,15,1,16,1,16,5,16,323,8,16,10,16,12,16,326,9,16,1,16,1,16,
4,16,330,8,16,11,16,12,16,331,1,16,5,16,335,8,16,10,16,12,16,338,9,16,1,
16,5,16,341,8,16,10,16,12,16,344,9,16,3,16,346,8,16,1,16,1,16,1,17,1,17,
1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,
17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,
1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,3,17,393,8,17,
1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,1,17,3,17,404,8,17,1,17,1,17,3,17,
408,8,17,1,17,1,17,3,17,412,8,17,1,17,1,17,1,17,1,17,1,17,1,17,3,17,420,
8,17,1,17,1,17,3,17,424,8,17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,
434,8,18,1,19,1,19,1,19,1,19,1,20,1,20,1,21,1,21,1,21,5,21,445,8,21,10,21,
12,21,448,9,21,1,22,1,22,1,22,5,22,453,8,22,10,22,12,22,456,9,22,1,23,1,
23,1,23,5,23,461,8,23,10,23,12,23,464,9,23,1,24,1,24,1,24,5,24,469,8,24,
10,24,12,24,472,9,24,1,25,1,25,1,25,5,25,477,8,25,10,25,12,25,480,9,25,1,
26,1,26,1,26,5,26,485,8,26,10,26,12,26,488,9,26,1,27,1,27,1,27,5,27,493,
8,27,10,27,12,27,496,9,27,1,28,1,28,1,28,5,28,501,8,28,10,28,12,28,504,9,
28,1,29,1,29,1,29,5,29,509,8,29,10,29,12,29,512,9,29,1,30,1,30,1,30,5,30,
517,8,30,10,30,12,30,520,9,30,1,31,1,31,1,31,1,31,1,31,3,31,527,8,31,1,32,
1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,
32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,3,32,553,8,32,1,32,1,32,1,32,
1,32,1,32,1,32,3,32,561,8,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,1,32,
1,32,1,32,1,32,1,32,1,32,3,32,577,8,32,1,33,1,33,1,33,5,33,582,8,33,10,33,
12,33,585,9,33,1,34,1,34,1,34,0,0,35,0,2,4,6,8,10,12,14,16,18,20,22,24,26,
28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,0,8,2,0,17,
18,69,69,1,0,24,25,1,0,26,29,1,0,33,34,1,0,19,20,1,0,21,23,2,0,20,20,58,
59,2,0,61,62,64,67,671,0,73,1,0,0,0,2,96,1,0,0,0,4,98,1,0,0,0,6,101,1,0,
0,0,8,106,1,0,0,0,10,146,1,0,0,0,12,148,1,0,0,0,14,184,1,0,0,0,16,186,1,
0,0,0,18,257,1,0,0,0,20,259,1,0,0,0,22,279,1,0,0,0,24,281,1,0,0,0,26,302,
1,0,0,0,28,304,1,0,0,0,30,318,1,0,0,0,32,320,1,0,0,0,34,423,1,0,0,0,36,433,
1,0,0,0,38,435,1,0,0,0,40,439,1,0,0,0,42,441,1,0,0,0,44,449,1,0,0,0,46,457,
1,0,0,0,48,465,1,0,0,0,50,473,1,0,0,0,52,481,1,0,0,0,54,489,1,0,0,0,56,497,
1,0,0,0,58,505,1,0,0,0,60,513,1,0,0,0,62,526,1,0,0,0,64,576,1,0,0,0,66,578,
1,0,0,0,68,586,1,0,0,0,70,72,5,70,0,0,71,70,1,0,0,0,72,75,1,0,0,0,73,71,
1,0,0,0,73,74,1,0,0,0,74,85,1,0,0,0,75,73,1,0,0,0,76,80,3,2,1,0,77,79,5,
70,0,0,78,77,1,0,0,0,79,82,1,0,0,0,80,78,1,0,0,0,80,81,1,0,0,0,81,84,1,0,
0,0,82,80,1,0,0,0,83,76,1,0,0,0,84,87,1,0,0,0,85,83,1,0,0,0,85,86,1,0,0,
0,86,88,1,0,0,0,87,85,1,0,0,0,88,89,5,0,0,1,89,1,1,0,0,0,90,97,3,10,5,0,
91,97,3,12,6,0,92,97,3,16,8,0,93,97,3,6,3,0,94,97,3,4,2,0,95,97,3,8,4,0,
96,90,1,0,0,0,96,91,1,0,0,0,96,92,1,0,0,0,96,93,1,0,0,0,96,94,1,0,0,0,96,
95,1,0,0,0,97,3,1,0,0,0,98,99,5,1,0,0,99,100,5,67,0,0,100,5,1,0,0,0,101,
102,5,2,0,0,102,103,5,69,0,0,103,104,5,3,0,0,104,105,3,68,34,0,105,7,1,0,
0,0,106,107,5,4,0,0,107,108,5,69,0,0,108,109,5,3,0,0,109,110,3,30,15,0,110,
9,1,0,0,0,111,112,5,5,0,0,112,113,5,6,0,0,113,114,5,69,0,0,114,116,5,7,0,
0,115,117,3,26,13,0,116,115,1,0,0,0,116,117,1,0,0,0,117,118,1,0,0,0,118,
119,5,8,0,0,119,147,3,30,15,0,120,121,5,5,0,0,121,122,5,6,0,0,122,123,5,
69,0,0,123,125,5,7,0,0,124,126,3,26,13,0,125,124,1,0,0,0,125,126,1,0,0,0,
126,127,1,0,0,0,127,147,5,8,0,0,128,129,5,6,0,0,129,130,5,69,0,0,130,132,
5,7,0,0,131,133,3,24,12,0,132,131,1,0,0,0,132,133,1,0,0,0,133,134,1,0,0,
0,134,135,5,8,0,0,135,136,3,30,15,0,136,137,3,32,16,0,137,147,1,0,0,0,138,
139,5,6,0,0,139,140,5,69,0,0,140,142,5,7,0,0,141,143,3,24,12,0,142,141,1,
0,0,0,142,143,1,0,0,0,143,144,1,0,0,0,144,145,5,8,0,0,145,147,3,32,16,0,
146,111,1,0,0,0,146,120,1,0,0,0,146,128,1,0,0,0,146,138,1,0,0,0,147,11,1,
0,0,0,148,149,5,9,0,0,149,150,5,69,0,0,150,154,5,10,0,0,151,153,5,70,0,0,
152,151,1,0,0,0,153,156,1,0,0,0,154,152,1,0,0,0,154,155,1,0,0,0,155,175,
1,0,0,0,156,154,1,0,0,0,157,166,3,14,7,0,158,160,5,70,0,0,159,158,1,0,0,
0,160,161,1,0,0,0,161,159,1,0,0,0,161,162,1,0,0,0,162,163,1,0,0,0,163,165,
3,14,7,0,164,159,1,0,0,0,165,168,1,0,0,0,166,164,1,0,0,0,166,167,1,0,0,0,
167,172,1,0,0,0,168,166,1,0,0,0,169,171,5,70,0,0,170,169,1,0,0,0,171,174,
1,0,0,0,172,170,1,0,0,0,172,173,1,0,0,0,173,176,1,0,0,0,174,172,1,0,0,0,
175,157,1,0,0,0,175,176,1,0,0,0,176,177,1,0,0,0,177,178,5,11,0,0,178,13,
1,0,0,0,179,180,3,30,15,0,180,181,3,20,10,0,181,185,1,0,0,0,182,183,5,12,
0,0,183,185,5,64,0,0,184,179,1,0,0,0,184,182,1,0,0,0,185,15,1,0,0,0,186,
187,5,13,0,0,187,188,5,69,0,0,188,192,5,10,0,0,189,191,5,70,0,0,190,189,
1,0,0,0,191,194,1,0,0,0,192,190,1,0,0,0,192,193,1,0,0,0,193,213,1,0,0,0,
194,192,1,0,0,0,195,204,3,18,9,0,196,198,5,70,0,0,197,196,1,0,0,0,198,199,
1,0,0,0,199,197,1,0,0,0,199,200,1,0,0,0,200,201,1,0,0,0,201,203,3,18,9,0,
202,197,1,0,0,0,203,206,1,0,0,0,204,202,1,0,0,0,204,205,1,0,0,0,205,210,
1,0,0,0,206,204,1,0,0,0,207,209,5,70,0,0,208,207,1,0,0,0,209,212,1,0,0,0,
210,208,1,0,0,0,210,211,1,0,0,0,211,214,1,0,0,0,212,210,1,0,0,0,213,195,
1,0,0,0,213,214,1,0,0,0,214,215,1,0,0,0,215,216,5,11,0,0,216,17,1,0,0,0,
217,218,3,30,15,0,218,219,3,20,10,0,219,258,1,0,0,0,220,221,5,6,0,0,221,
222,5,69,0,0,222,224,5,7,0,0,223,225,3,24,12,0,224,223,1,0,0,0,224,225,1,
0,0,0,225,226,1,0,0,0,226,227,5,8,0,0,227,228,3,30,15,0,228,229,3,32,16,
0,229,258,1,0,0,0,230,231,5,6,0,0,231,232,5,69,0,0,232,234,5,7,0,0,233,235,
3,24,12,0,234,233,1,0,0,0,234,235,1,0,0,0,235,236,1,0,0,0,236,237,5,8,0,
0,237,258,3,32,16,0,238,239,5,14,0,0,239,240,3,22,11,0,240,241,5,7,0,0,241,
242,3,28,14,0,242,243,5,8,0,0,243,244,3,30,15,0,244,245,3,32,16,0,245,258,
1,0,0,0,246,247,5,15,0,0,247,249,5,7,0,0,248,250,3,24,12,0,249,248,1,0,0,
0,249,250,1,0,0,0,250,251,1,0,0,0,251,252,5,8,0,0,252,258,3,32,16,0,253,
254,5,16,0,0,254,255,5,7,0,0,255,256,5,8,0,0,256,258,3,32,16,0,257,217,1,
0,0,0,257,220,1,0,0,0,257,230,1,0,0,0,257,238,1,0,0,0,257,246,1,0,0,0,257,
253,1,0,0,0,258,19,1,0,0,0,259,260,7,0,0,0,260,21,1,0,0,0,261,280,5,19,0,
0,262,280,5,20,0,0,263,280,5,21,0,0,264,280,5,22,0,0,265,280,5,23,0,0,266,
280,5,24,0,0,267,280,5,25,0,0,268,280,5,26,0,0,269,280,5,27,0,0,270,280,
5,28,0,0,271,280,5,29,0,0,272,280,5,30,0,0,273,280,5,31,0,0,274,280,5,32,
0,0,275,280,5,33,0,0,276,280,5,34,0,0,277,278,5,35,0,0,278,280,5,36,0,0,
279,261,1,0,0,0,279,262,1,0,0,0,279,263,1,0,0,0,279,264,1,0,0,0,279,265,
1,0,0,0,279,266,1,0,0,0,279,267,1,0,0,0,279,268,1,0,0,0,279,269,1,0,0,0,
279,270,1,0,0,0,279,271,1,0,0,0,279,272,1,0,0,0,279,273,1,0,0,0,279,274,
1,0,0,0,279,275,1,0,0,0,279,276,1,0,0,0,279,277,1,0,0,0,280,23,1,0,0,0,281,
286,3,28,14,0,282,283,5,37,0,0,283,285,3,28,14,0,284,282,1,0,0,0,285,288,
1,0,0,0,286,284,1,0,0,0,286,287,1,0,0,0,287,25,1,0,0,0,288,286,1,0,0,0,289,
294,3,28,14,0,290,291,5,37,0,0,291,293,3,28,14,0,292,290,1,0,0,0,293,296,
1,0,0,0,294,292,1,0,0,0,294,295,1,0,0,0,295,299,1,0,0,0,296,294,1,0,0,0,
297,298,5,37,0,0,298,300,5,38,0,0,299,297,1,0,0,0,299,300,1,0,0,0,300,303,
1,0,0,0,301,303,5,38,0,0,302,289,1,0,0,0,302,301,1,0,0,0,303,27,1,0,0,0,
304,305,3,30,15,0,305,306,5,69,0,0,306,29,1,0,0,0,307,319,5,39,0,0,308,319,
5,40,0,0,309,319,5,41,0,0,310,319,5,42,0,0,311,319,5,43,0,0,312,319,5,18,
0,0,313,314,5,44,0,0,314,319,5,39,0,0,315,316,5,44,0,0,316,319,5,42,0,0,
317,319,5,69,0,0,318,307,1,0,0,0,318,308,1,0,0,0,318,309,1,0,0,0,318,310,
1,0,0,0,318,311,1,0,0,0,318,312,1,0,0,0,318,313,1,0,0,0,318,315,1,0,0,0,
318,317,1,0,0,0,319,31,1,0,0,0,320,324,5,10,0,0,321,323,5,70,0,0,322,321,
1,0,0,0,323,326,1,0,0,0,324,322,1,0,0,0,324,325,1,0,0,0,325,345,1,0,0,0,
326,324,1,0,0,0,327,336,3,34,17,0,328,330,5,70,0,0,329,328,1,0,0,0,330,331,
1,0,0,0,331,329,1,0,0,0,331,332,1,0,0,0,332,333,1,0,0,0,333,335,3,34,17,
0,334,329,1,0,0,0,335,338,1,0,0,0,336,334,1,0,0,0,336,337,1,0,0,0,337,342,
1,0,0,0,338,336,1,0,0,0,339,341,5,70,0,0,340,339,1,0,0,0,341,344,1,0,0,0,
342,340,1,0,0,0,342,343,1,0,0,0,343,346,1,0,0,0,344,342,1,0,0,0,345,327,
1,0,0,0,345,346,1,0,0,0,346,347,1,0,0,0,347,348,5,11,0,0,348,33,1,0,0,0,
349,350,3,30,15,0,350,351,5,69,0,0,351,352,5,35,0,0,352,353,5,64,0,0,353,
354,5,36,0,0,354,424,1,0,0,0,355,356,3,30,15,0,356,357,5,69,0,0,357,358,
5,3,0,0,358,359,3,40,20,0,359,424,1,0,0,0,360,361,3,30,15,0,361,362,5,69,
0,0,362,424,1,0,0,0,363,364,5,69,0,0,364,365,5,35,0,0,365,366,3,40,20,0,
366,367,5,36,0,0,367,368,5,3,0,0,368,369,3,40,20,0,369,424,1,0,0,0,370,371,
5,69,0,0,371,372,5,3,0,0,372,424,3,40,20,0,373,374,5,69,0,0,374,375,5,45,
0,0,375,376,3,20,10,0,376,377,5,3,0,0,377,378,3,40,20,0,378,424,1,0,0,0,
379,380,5,69,0,0,380,381,5,46,0,0,381,382,5,17,0,0,382,383,5,3,0,0,383,424,
3,40,20,0,384,424,3,40,20,0,385,386,5,47,0,0,386,387,5,7,0,0,387,388,3,40,
20,0,388,389,5,8,0,0,389,392,3,32,16,0,390,391,5,48,0,0,391,393,3,32,16,
0,392,390,1,0,0,0,392,393,1,0,0,0,393,424,1,0,0,0,394,395,5,49,0,0,395,396,
5,7,0,0,396,397,3,40,20,0,397,398,5,8,0,0,398,399,3,32,16,0,399,424,1,0,
0,0,400,401,5,50,0,0,401,403,5,7,0,0,402,404,3,36,18,0,403,402,1,0,0,0,403,
404,1,0,0,0,404,405,1,0,0,0,405,407,5,51,0,0,406,408,3,40,20,0,407,406,1,
0,0,0,407,408,1,0,0,0,408,409,1,0,0,0,409,411,5,51,0,0,410,412,3,38,19,0,
411,410,1,0,0,0,411,412,1,0,0,0,412,413,1,0,0,0,413,414,5,8,0,0,414,424,
3,32,16,0,415,424,5,52,0,0,416,424,5,53,0,0,417,419,5,54,0,0,418,420,3,40,
20,0,419,418,1,0,0,0,419,420,1,0,0,0,420,424,1,0,0,0,421,422,5,55,0,0,422,
424,3,40,20,0,423,349,1,0,0,0,423,355,1,0,0,0,423,360,1,0,0,0,423,363,1,
0,0,0,423,370,1,0,0,0,423,373,1,0,0,0,423,379,1,0,0,0,423,384,1,0,0,0,423,
385,1,0,0,0,423,394,1,0,0,0,423,400,1,0,0,0,423,415,1,0,0,0,423,416,1,0,
0,0,423,417,1,0,0,0,423,421,1,0,0,0,424,35,1,0,0,0,425,426,3,30,15,0,426,
427,5,69,0,0,427,428,5,3,0,0,428,429,3,40,20,0,429,434,1,0,0,0,430,431,5,
69,0,0,431,432,5,3,0,0,432,434,3,40,20,0,433,425,1,0,0,0,433,430,1,0,0,0,
434,37,1,0,0,0,435,436,5,69,0,0,436,437,5,3,0,0,437,438,3,40,20,0,438,39,
1,0,0,0,439,440,3,42,21,0,440,41,1,0,0,0,441,446,3,44,22,0,442,443,5,56,
0,0,443,445,3,44,22,0,444,442,1,0,0,0,445,448,1,0,0,0,446,444,1,0,0,0,446,
447,1,0,0,0,447,43,1,0,0,0,448,446,1,0,0,0,449,454,3,46,23,0,450,451,5,57,
0,0,451,453,3,46,23,0,452,450,1,0,0,0,453,456,1,0,0,0,454,452,1,0,0,0,454,
455,1,0,0,0,455,45,1,0,0,0,456,454,1,0,0,0,457,462,3,48,24,0,458,459,5,31,
0,0,459,461,3,48,24,0,460,458,1,0,0,0,461,464,1,0,0,0,462,460,1,0,0,0,462,
463,1,0,0,0,463,47,1,0,0,0,464,462,1,0,0,0,465,470,3,50,25,0,466,467,5,32,
0,0,467,469,3,50,25,0,468,466,1,0,0,0,469,472,1,0,0,0,470,468,1,0,0,0,470,
471,1,0,0,0,471,49,1,0,0,0,472,470,1,0,0,0,473,478,3,52,26,0,474,475,5,30,
0,0,475,477,3,52,26,0,476,474,1,0,0,0,477,480,1,0,0,0,478,476,1,0,0,0,478,
479,1,0,0,0,479,51,1,0,0,0,480,478,1,0,0,0,481,486,3,54,27,0,482,483,7,1,
0,0,483,485,3,54,27,0,484,482,1,0,0,0,485,488,1,0,0,0,486,484,1,0,0,0,486,
487,1,0,0,0,487,53,1,0,0,0,488,486,1,0,0,0,489,494,3,56,28,0,490,491,7,2,
0,0,491,493,3,56,28,0,492,490,1,0,0,0,493,496,1,0,0,0,494,492,1,0,0,0,494,
495,1,0,0,0,495,55,1,0,0,0,496,494,1,0,0,0,497,502,3,58,29,0,498,499,7,3,
0,0,499,501,3,58,29,0,500,498,1,0,0,0,501,504,1,0,0,0,502,500,1,0,0,0,502,
503,1,0,0,0,503,57,1,0,0,0,504,502,1,0,0,0,505,510,3,60,30,0,506,507,7,4,
0,0,507,509,3,60,30,0,508,506,1,0,0,0,509,512,1,0,0,0,510,508,1,0,0,0,510,
511,1,0,0,0,511,59,1,0,0,0,512,510,1,0,0,0,513,518,3,62,31,0,514,515,7,5,
0,0,515,517,3,62,31,0,516,514,1,0,0,0,517,520,1,0,0,0,518,516,1,0,0,0,518,
519,1,0,0,0,519,61,1,0,0,0,520,518,1,0,0,0,521,522,7,6,0,0,522,527,3,62,
31,0,523,524,5,60,0,0,524,527,3,62,31,0,525,527,3,64,32,0,526,521,1,0,0,
0,526,523,1,0,0,0,526,525,1,0,0,0,527,63,1,0,0,0,528,577,5,64,0,0,529,577,
5,65,0,0,530,577,5,66,0,0,531,577,5,67,0,0,532,577,5,68,0,0,533,577,5,61,
0,0,534,577,5,62,0,0,535,577,5,63,0,0,536,537,5,69,0,0,537,538,5,35,0,0,
538,539,3,40,20,0,539,540,5,36,0,0,540,541,5,46,0,0,541,542,5,18,0,0,542,
577,1,0,0,0,543,544,5,69,0,0,544,545,5,46,0,0,545,577,5,18,0,0,546,547,5,
69,0,0,547,548,5,46,0,0,548,577,5,17,0,0,549,550,5,69,0,0,550,552,5,7,0,
0,551,553,3,66,33,0,552,551,1,0,0,0,552,553,1,0,0,0,553,554,1,0,0,0,554,
577,5,8,0,0,555,556,5,69,0,0,556,557,5,45,0,0,557,558,5,69,0,0,558,560,5,
7,0,0,559,561,3,66,33,0,560,559,1,0,0,0,560,561,1,0,0,0,561,562,1,0,0,0,
562,577,5,8,0,0,563,564,5,69,0,0,564,565,5,35,0,0,565,566,3,40,20,0,566,
567,5,36,0,0,567,577,1,0,0,0,568,569,5,69,0,0,569,570,5,45,0,0,570,577,3,
20,10,0,571,577,5,69,0,0,572,573,5,7,0,0,573,574,3,40,20,0,574,575,5,8,0,
0,575,577,1,0,0,0,576,528,1,0,0,0,576,529,1,0,0,0,576,530,1,0,0,0,576,531,
1,0,0,0,576,532,1,0,0,0,576,533,1,0,0,0,576,534,1,0,0,0,576,535,1,0,0,0,
576,536,1,0,0,0,576,543,1,0,0,0,576,546,1,0,0,0,576,549,1,0,0,0,576,555,
1,0,0,0,576,563,1,0,0,0,576,568,1,0,0,0,576,571,1,0,0,0,576,572,1,0,0,0,
577,65,1,0,0,0,578,583,3,40,20,0,579,580,5,37,0,0,580,582,3,40,20,0,581,
579,1,0,0,0,582,585,1,0,0,0,583,581,1,0,0,0,583,584,1,0,0,0,584,67,1,0,0,
0,585,583,1,0,0,0,586,587,7,7,0,0,587,69,1,0,0,0,57,73,80,85,96,116,125,
132,142,146,154,161,166,172,175,184,192,199,204,210,213,224,234,249,257,
279,286,294,299,302,318,324,331,336,342,345,392,403,407,411,419,423,433,
446,454,462,470,478,486,494,502,510,518,526,552,560,576,583];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class HopperParser extends antlr4.Parser {

    static grammarFileName = "Hopper.g4";
    static literalNames = [ null, "'import'", "'const'", "'='", "'alias'", 
                            "'extern'", "'function'", "'('", "')'", "'struct'", 
                            "'{'", "'}'", "'pad'", "'class'", "'operator'", 
                            "'constructor'", "'destructor'", "'value'", 
                            "'address'", "'+'", "'-'", "'*'", "'/'", "'%'", 
                            "'=='", "'!='", "'<'", "'<='", "'>'", "'>='", 
                            "'&'", "'|'", "'^'", "'<<'", "'>>'", "'['", 
                            "']'", "','", "'...'", "'int'", "'bool'", "'float'", 
                            "'byte'", "'String'", "'unsigned'", "'.'", "'::'", 
                            "'if'", "'else'", "'while'", "'for'", "';'", 
                            "'break'", "'continue'", "'return'", "'defer'", 
                            "'||'", "'&&'", "'!'", "'~'", "'cast'", "'true'", 
                            "'false'", "'null'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             "IntegerLiteral", "HexLiteral", "FloatLiteral", 
                             "StringLiteral", "CharLiteral", "Identifier", 
                             "NEWLINE", "LINE_COMMENT", "WS" ];
    static ruleNames = [ "program", "topLevelDecl", "importDecl", "constDecl", 
                         "aliasDecl", "functionDecl", "structDecl", "structMember", 
                         "classDecl", "classMember", "fieldName", "operatorSymbol", 
                         "paramList", "externParamList", "param", "type", 
                         "block", "statement", "forInit", "forUpdate", "expression", 
                         "logicalOr", "logicalAnd", "bitwiseOr", "bitwiseXor", 
                         "bitwiseAnd", "equality", "relational", "shift", 
                         "additive", "multiplicative", "unary", "primary", 
                         "argList", "literal" ];

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
	        this.state = 73;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===70) {
	            this.state = 70;
	            this.match(HopperParser.NEWLINE);
	            this.state = 75;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 85;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 8822) !== 0)) {
	            this.state = 76;
	            this.topLevelDecl();
	            this.state = 80;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===70) {
	                this.state = 77;
	                this.match(HopperParser.NEWLINE);
	                this.state = 82;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 87;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 88;
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
	        this.state = 96;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	        case 6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 90;
	            this.functionDecl();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 91;
	            this.structDecl();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 92;
	            this.classDecl();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 93;
	            this.constDecl();
	            break;
	        case 1:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 94;
	            this.importDecl();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 95;
	            this.aliasDecl();
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
	        this.state = 98;
	        this.match(HopperParser.T__0);
	        this.state = 99;
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
	        this.state = 101;
	        this.match(HopperParser.T__1);
	        this.state = 102;
	        this.match(HopperParser.Identifier);
	        this.state = 103;
	        this.match(HopperParser.T__2);
	        this.state = 104;
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



	aliasDecl() {
	    let localctx = new AliasDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, HopperParser.RULE_aliasDecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 106;
	        this.match(HopperParser.T__3);
	        this.state = 107;
	        this.match(HopperParser.Identifier);
	        this.state = 108;
	        this.match(HopperParser.T__2);
	        this.state = 109;
	        this.type();
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
	    this.enterRule(localctx, 10, HopperParser.RULE_functionDecl);
	    var _la = 0;
	    try {
	        this.state = 146;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ExternFuncDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 111;
	            this.match(HopperParser.T__4);
	            this.state = 112;
	            this.match(HopperParser.T__5);
	            this.state = 113;
	            this.match(HopperParser.Identifier);
	            this.state = 114;
	            this.match(HopperParser.T__6);
	            this.state = 116;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===18 || ((((_la - 38)) & ~0x1f) === 0 && ((1 << (_la - 38)) & 2147483775) !== 0)) {
	                this.state = 115;
	                this.externParamList();
	            }

	            this.state = 118;
	            this.match(HopperParser.T__7);
	            this.state = 119;
	            this.type();
	            break;

	        case 2:
	            localctx = new ExternProcDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 120;
	            this.match(HopperParser.T__4);
	            this.state = 121;
	            this.match(HopperParser.T__5);
	            this.state = 122;
	            this.match(HopperParser.Identifier);
	            this.state = 123;
	            this.match(HopperParser.T__6);
	            this.state = 125;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===18 || ((((_la - 38)) & ~0x1f) === 0 && ((1 << (_la - 38)) & 2147483775) !== 0)) {
	                this.state = 124;
	                this.externParamList();
	            }

	            this.state = 127;
	            this.match(HopperParser.T__7);
	            break;

	        case 3:
	            localctx = new FuncDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 128;
	            this.match(HopperParser.T__5);
	            this.state = 129;
	            this.match(HopperParser.Identifier);
	            this.state = 130;
	            this.match(HopperParser.T__6);
	            this.state = 132;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===18 || ((((_la - 39)) & ~0x1f) === 0 && ((1 << (_la - 39)) & 1073741887) !== 0)) {
	                this.state = 131;
	                this.paramList();
	            }

	            this.state = 134;
	            this.match(HopperParser.T__7);
	            this.state = 135;
	            this.type();
	            this.state = 136;
	            this.block();
	            break;

	        case 4:
	            localctx = new ProcDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 138;
	            this.match(HopperParser.T__5);
	            this.state = 139;
	            this.match(HopperParser.Identifier);
	            this.state = 140;
	            this.match(HopperParser.T__6);
	            this.state = 142;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===18 || ((((_la - 39)) & ~0x1f) === 0 && ((1 << (_la - 39)) & 1073741887) !== 0)) {
	                this.state = 141;
	                this.paramList();
	            }

	            this.state = 144;
	            this.match(HopperParser.T__7);
	            this.state = 145;
	            this.block();
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



	structDecl() {
	    let localctx = new StructDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, HopperParser.RULE_structDecl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 148;
	        this.match(HopperParser.T__8);
	        this.state = 149;
	        this.match(HopperParser.Identifier);
	        this.state = 150;
	        this.match(HopperParser.T__9);
	        this.state = 154;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===70) {
	            this.state = 151;
	            this.match(HopperParser.NEWLINE);
	            this.state = 156;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 175;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===12 || _la===18 || ((((_la - 39)) & ~0x1f) === 0 && ((1 << (_la - 39)) & 1073741887) !== 0)) {
	            this.state = 157;
	            this.structMember();
	            this.state = 166;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 159; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    do {
	                        this.state = 158;
	                        this.match(HopperParser.NEWLINE);
	                        this.state = 161; 
	                        this._errHandler.sync(this);
	                        _la = this._input.LA(1);
	                    } while(_la===70);
	                    this.state = 163;
	                    this.structMember(); 
	                }
	                this.state = 168;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
	            }

	            this.state = 172;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===70) {
	                this.state = 169;
	                this.match(HopperParser.NEWLINE);
	                this.state = 174;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 177;
	        this.match(HopperParser.T__10);
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
	    this.enterRule(localctx, 14, HopperParser.RULE_structMember);
	    try {
	        this.state = 184;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 18:
	        case 39:
	        case 40:
	        case 41:
	        case 42:
	        case 43:
	        case 44:
	        case 69:
	            localctx = new StructFieldContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 179;
	            this.type();
	            this.state = 180;
	            this.fieldName();
	            break;
	        case 12:
	            localctx = new StructPadContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 182;
	            this.match(HopperParser.T__11);
	            this.state = 183;
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
	    this.enterRule(localctx, 16, HopperParser.RULE_classDecl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 186;
	        this.match(HopperParser.T__12);
	        this.state = 187;
	        this.match(HopperParser.Identifier);
	        this.state = 188;
	        this.match(HopperParser.T__9);
	        this.state = 192;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===70) {
	            this.state = 189;
	            this.match(HopperParser.NEWLINE);
	            this.state = 194;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 213;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 376896) !== 0) || ((((_la - 39)) & ~0x1f) === 0 && ((1 << (_la - 39)) & 1073741887) !== 0)) {
	            this.state = 195;
	            this.classMember();
	            this.state = 204;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,17,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 197; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    do {
	                        this.state = 196;
	                        this.match(HopperParser.NEWLINE);
	                        this.state = 199; 
	                        this._errHandler.sync(this);
	                        _la = this._input.LA(1);
	                    } while(_la===70);
	                    this.state = 201;
	                    this.classMember(); 
	                }
	                this.state = 206;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,17,this._ctx);
	            }

	            this.state = 210;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===70) {
	                this.state = 207;
	                this.match(HopperParser.NEWLINE);
	                this.state = 212;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 215;
	        this.match(HopperParser.T__10);
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
	    this.enterRule(localctx, 18, HopperParser.RULE_classMember);
	    var _la = 0;
	    try {
	        this.state = 257;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,23,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ClassFieldContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 217;
	            this.type();
	            this.state = 218;
	            this.fieldName();
	            break;

	        case 2:
	            localctx = new ClassMethodContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 220;
	            this.match(HopperParser.T__5);
	            this.state = 221;
	            this.match(HopperParser.Identifier);
	            this.state = 222;
	            this.match(HopperParser.T__6);
	            this.state = 224;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===18 || ((((_la - 39)) & ~0x1f) === 0 && ((1 << (_la - 39)) & 1073741887) !== 0)) {
	                this.state = 223;
	                this.paramList();
	            }

	            this.state = 226;
	            this.match(HopperParser.T__7);
	            this.state = 227;
	            this.type();
	            this.state = 228;
	            this.block();
	            break;

	        case 3:
	            localctx = new ClassProcMethodContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 230;
	            this.match(HopperParser.T__5);
	            this.state = 231;
	            this.match(HopperParser.Identifier);
	            this.state = 232;
	            this.match(HopperParser.T__6);
	            this.state = 234;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===18 || ((((_la - 39)) & ~0x1f) === 0 && ((1 << (_la - 39)) & 1073741887) !== 0)) {
	                this.state = 233;
	                this.paramList();
	            }

	            this.state = 236;
	            this.match(HopperParser.T__7);
	            this.state = 237;
	            this.block();
	            break;

	        case 4:
	            localctx = new ClassOperatorContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 238;
	            this.match(HopperParser.T__13);
	            this.state = 239;
	            this.operatorSymbol();
	            this.state = 240;
	            this.match(HopperParser.T__6);
	            this.state = 241;
	            this.param();
	            this.state = 242;
	            this.match(HopperParser.T__7);
	            this.state = 243;
	            this.type();
	            this.state = 244;
	            this.block();
	            break;

	        case 5:
	            localctx = new ClassConstructorContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 246;
	            this.match(HopperParser.T__14);
	            this.state = 247;
	            this.match(HopperParser.T__6);
	            this.state = 249;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===18 || ((((_la - 39)) & ~0x1f) === 0 && ((1 << (_la - 39)) & 1073741887) !== 0)) {
	                this.state = 248;
	                this.paramList();
	            }

	            this.state = 251;
	            this.match(HopperParser.T__7);
	            this.state = 252;
	            this.block();
	            break;

	        case 6:
	            localctx = new ClassDestructorContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 253;
	            this.match(HopperParser.T__15);
	            this.state = 254;
	            this.match(HopperParser.T__6);
	            this.state = 255;
	            this.match(HopperParser.T__7);
	            this.state = 256;
	            this.block();
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



	fieldName() {
	    let localctx = new FieldNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 20, HopperParser.RULE_fieldName);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 259;
	        _la = this._input.LA(1);
	        if(!(_la===17 || _la===18 || _la===69)) {
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
	    this.enterRule(localctx, 22, HopperParser.RULE_operatorSymbol);
	    try {
	        this.state = 279;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 19:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 261;
	            this.match(HopperParser.T__18);
	            break;
	        case 20:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 262;
	            this.match(HopperParser.T__19);
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 263;
	            this.match(HopperParser.T__20);
	            break;
	        case 22:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 264;
	            this.match(HopperParser.T__21);
	            break;
	        case 23:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 265;
	            this.match(HopperParser.T__22);
	            break;
	        case 24:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 266;
	            this.match(HopperParser.T__23);
	            break;
	        case 25:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 267;
	            this.match(HopperParser.T__24);
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 268;
	            this.match(HopperParser.T__25);
	            break;
	        case 27:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 269;
	            this.match(HopperParser.T__26);
	            break;
	        case 28:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 270;
	            this.match(HopperParser.T__27);
	            break;
	        case 29:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 271;
	            this.match(HopperParser.T__28);
	            break;
	        case 30:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 272;
	            this.match(HopperParser.T__29);
	            break;
	        case 31:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 273;
	            this.match(HopperParser.T__30);
	            break;
	        case 32:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 274;
	            this.match(HopperParser.T__31);
	            break;
	        case 33:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 275;
	            this.match(HopperParser.T__32);
	            break;
	        case 34:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 276;
	            this.match(HopperParser.T__33);
	            break;
	        case 35:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 277;
	            this.match(HopperParser.T__34);
	            this.state = 278;
	            this.match(HopperParser.T__35);
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
	    this.enterRule(localctx, 24, HopperParser.RULE_paramList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 281;
	        this.param();
	        this.state = 286;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===37) {
	            this.state = 282;
	            this.match(HopperParser.T__36);
	            this.state = 283;
	            this.param();
	            this.state = 288;
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



	externParamList() {
	    let localctx = new ExternParamListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, HopperParser.RULE_externParamList);
	    var _la = 0;
	    try {
	        this.state = 302;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 18:
	        case 39:
	        case 40:
	        case 41:
	        case 42:
	        case 43:
	        case 44:
	        case 69:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 289;
	            this.param();
	            this.state = 294;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,26,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 290;
	                    this.match(HopperParser.T__36);
	                    this.state = 291;
	                    this.param(); 
	                }
	                this.state = 296;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,26,this._ctx);
	            }

	            this.state = 299;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===37) {
	                this.state = 297;
	                this.match(HopperParser.T__36);
	                this.state = 298;
	                this.match(HopperParser.T__37);
	            }

	            break;
	        case 38:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 301;
	            this.match(HopperParser.T__37);
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



	param() {
	    let localctx = new ParamContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 28, HopperParser.RULE_param);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 304;
	        this.type();
	        this.state = 305;
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
	    this.enterRule(localctx, 30, HopperParser.RULE_type);
	    try {
	        this.state = 318;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 307;
	            this.match(HopperParser.T__38);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 308;
	            this.match(HopperParser.T__39);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 309;
	            this.match(HopperParser.T__40);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 310;
	            this.match(HopperParser.T__41);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 311;
	            this.match(HopperParser.T__42);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 312;
	            this.match(HopperParser.T__17);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 313;
	            this.match(HopperParser.T__43);
	            this.state = 314;
	            this.match(HopperParser.T__38);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 315;
	            this.match(HopperParser.T__43);
	            this.state = 316;
	            this.match(HopperParser.T__41);
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 317;
	            this.match(HopperParser.Identifier);
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



	block() {
	    let localctx = new BlockContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, HopperParser.RULE_block);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 320;
	        this.match(HopperParser.T__9);
	        this.state = 324;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===70) {
	            this.state = 321;
	            this.match(HopperParser.NEWLINE);
	            this.state = 326;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 345;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1310848) !== 0) || ((((_la - 39)) & ~0x1f) === 0 && ((1 << (_la - 39)) & 2147085631) !== 0)) {
	            this.state = 327;
	            this.statement();
	            this.state = 336;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,32,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 329; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    do {
	                        this.state = 328;
	                        this.match(HopperParser.NEWLINE);
	                        this.state = 331; 
	                        this._errHandler.sync(this);
	                        _la = this._input.LA(1);
	                    } while(_la===70);
	                    this.state = 333;
	                    this.statement(); 
	                }
	                this.state = 338;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,32,this._ctx);
	            }

	            this.state = 342;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===70) {
	                this.state = 339;
	                this.match(HopperParser.NEWLINE);
	                this.state = 344;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 347;
	        this.match(HopperParser.T__10);
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
	    this.enterRule(localctx, 34, HopperParser.RULE_statement);
	    var _la = 0;
	    try {
	        this.state = 423;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,40,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ArrayDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 349;
	            this.type();
	            this.state = 350;
	            this.match(HopperParser.Identifier);
	            this.state = 351;
	            this.match(HopperParser.T__34);
	            this.state = 352;
	            this.match(HopperParser.IntegerLiteral);
	            this.state = 353;
	            this.match(HopperParser.T__35);
	            break;

	        case 2:
	            localctx = new VarDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 355;
	            this.type();
	            this.state = 356;
	            this.match(HopperParser.Identifier);
	            this.state = 357;
	            this.match(HopperParser.T__2);
	            this.state = 358;
	            this.expression();
	            break;

	        case 3:
	            localctx = new VarDeclNoInitContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 360;
	            this.type();
	            this.state = 361;
	            this.match(HopperParser.Identifier);
	            break;

	        case 4:
	            localctx = new ArrayAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 363;
	            this.match(HopperParser.Identifier);
	            this.state = 364;
	            this.match(HopperParser.T__34);
	            this.state = 365;
	            this.expression();
	            this.state = 366;
	            this.match(HopperParser.T__35);
	            this.state = 367;
	            this.match(HopperParser.T__2);
	            this.state = 368;
	            this.expression();
	            break;

	        case 5:
	            localctx = new AssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 370;
	            this.match(HopperParser.Identifier);
	            this.state = 371;
	            this.match(HopperParser.T__2);
	            this.state = 372;
	            this.expression();
	            break;

	        case 6:
	            localctx = new FieldAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 373;
	            this.match(HopperParser.Identifier);
	            this.state = 374;
	            this.match(HopperParser.T__44);
	            this.state = 375;
	            this.fieldName();
	            this.state = 376;
	            this.match(HopperParser.T__2);
	            this.state = 377;
	            this.expression();
	            break;

	        case 7:
	            localctx = new DerefAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 7);
	            this.state = 379;
	            this.match(HopperParser.Identifier);
	            this.state = 380;
	            this.match(HopperParser.T__45);
	            this.state = 381;
	            this.match(HopperParser.T__16);
	            this.state = 382;
	            this.match(HopperParser.T__2);
	            this.state = 383;
	            this.expression();
	            break;

	        case 8:
	            localctx = new ExprStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 8);
	            this.state = 384;
	            this.expression();
	            break;

	        case 9:
	            localctx = new IfStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 9);
	            this.state = 385;
	            this.match(HopperParser.T__46);
	            this.state = 386;
	            this.match(HopperParser.T__6);
	            this.state = 387;
	            this.expression();
	            this.state = 388;
	            this.match(HopperParser.T__7);
	            this.state = 389;
	            this.block();
	            this.state = 392;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===48) {
	                this.state = 390;
	                this.match(HopperParser.T__47);
	                this.state = 391;
	                this.block();
	            }

	            break;

	        case 10:
	            localctx = new WhileStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 10);
	            this.state = 394;
	            this.match(HopperParser.T__48);
	            this.state = 395;
	            this.match(HopperParser.T__6);
	            this.state = 396;
	            this.expression();
	            this.state = 397;
	            this.match(HopperParser.T__7);
	            this.state = 398;
	            this.block();
	            break;

	        case 11:
	            localctx = new ForStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 11);
	            this.state = 400;
	            this.match(HopperParser.T__49);
	            this.state = 401;
	            this.match(HopperParser.T__6);
	            this.state = 403;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===18 || ((((_la - 39)) & ~0x1f) === 0 && ((1 << (_la - 39)) & 1073741887) !== 0)) {
	                this.state = 402;
	                this.forInit();
	            }

	            this.state = 405;
	            this.match(HopperParser.T__50);
	            this.state = 407;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7 || _la===20 || ((((_la - 58)) & ~0x1f) === 0 && ((1 << (_la - 58)) & 4095) !== 0)) {
	                this.state = 406;
	                this.expression();
	            }

	            this.state = 409;
	            this.match(HopperParser.T__50);
	            this.state = 411;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===69) {
	                this.state = 410;
	                this.forUpdate();
	            }

	            this.state = 413;
	            this.match(HopperParser.T__7);
	            this.state = 414;
	            this.block();
	            break;

	        case 12:
	            localctx = new BreakStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 12);
	            this.state = 415;
	            this.match(HopperParser.T__51);
	            break;

	        case 13:
	            localctx = new ContinueStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 13);
	            this.state = 416;
	            this.match(HopperParser.T__52);
	            break;

	        case 14:
	            localctx = new ReturnStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 14);
	            this.state = 417;
	            this.match(HopperParser.T__53);
	            this.state = 419;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7 || _la===20 || ((((_la - 58)) & ~0x1f) === 0 && ((1 << (_la - 58)) & 4095) !== 0)) {
	                this.state = 418;
	                this.expression();
	            }

	            break;

	        case 15:
	            localctx = new DeferStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 15);
	            this.state = 421;
	            this.match(HopperParser.T__54);
	            this.state = 422;
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
	    this.enterRule(localctx, 36, HopperParser.RULE_forInit);
	    try {
	        this.state = 433;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,41,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ForInitDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 425;
	            this.type();
	            this.state = 426;
	            this.match(HopperParser.Identifier);
	            this.state = 427;
	            this.match(HopperParser.T__2);
	            this.state = 428;
	            this.expression();
	            break;

	        case 2:
	            localctx = new ForInitAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 430;
	            this.match(HopperParser.Identifier);
	            this.state = 431;
	            this.match(HopperParser.T__2);
	            this.state = 432;
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
	    this.enterRule(localctx, 38, HopperParser.RULE_forUpdate);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 435;
	        this.match(HopperParser.Identifier);
	        this.state = 436;
	        this.match(HopperParser.T__2);
	        this.state = 437;
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
	    this.enterRule(localctx, 40, HopperParser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 439;
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
	    this.enterRule(localctx, 42, HopperParser.RULE_logicalOr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 441;
	        this.logicalAnd();
	        this.state = 446;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===56) {
	            this.state = 442;
	            this.match(HopperParser.T__55);
	            this.state = 443;
	            this.logicalAnd();
	            this.state = 448;
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
	    this.enterRule(localctx, 44, HopperParser.RULE_logicalAnd);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 449;
	        this.bitwiseOr();
	        this.state = 454;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===57) {
	            this.state = 450;
	            this.match(HopperParser.T__56);
	            this.state = 451;
	            this.bitwiseOr();
	            this.state = 456;
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
	    this.enterRule(localctx, 46, HopperParser.RULE_bitwiseOr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 457;
	        this.bitwiseXor();
	        this.state = 462;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===31) {
	            this.state = 458;
	            this.match(HopperParser.T__30);
	            this.state = 459;
	            this.bitwiseXor();
	            this.state = 464;
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
	    this.enterRule(localctx, 48, HopperParser.RULE_bitwiseXor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 465;
	        this.bitwiseAnd();
	        this.state = 470;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===32) {
	            this.state = 466;
	            this.match(HopperParser.T__31);
	            this.state = 467;
	            this.bitwiseAnd();
	            this.state = 472;
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
	    this.enterRule(localctx, 50, HopperParser.RULE_bitwiseAnd);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 473;
	        this.equality();
	        this.state = 478;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===30) {
	            this.state = 474;
	            this.match(HopperParser.T__29);
	            this.state = 475;
	            this.equality();
	            this.state = 480;
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
	    this.enterRule(localctx, 52, HopperParser.RULE_equality);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 481;
	        this.relational();
	        this.state = 486;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===24 || _la===25) {
	            this.state = 482;
	            _la = this._input.LA(1);
	            if(!(_la===24 || _la===25)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 483;
	            this.relational();
	            this.state = 488;
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
	    this.enterRule(localctx, 54, HopperParser.RULE_relational);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 489;
	        this.shift();
	        this.state = 494;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1006632960) !== 0)) {
	            this.state = 490;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1006632960) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 491;
	            this.shift();
	            this.state = 496;
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
	    this.enterRule(localctx, 56, HopperParser.RULE_shift);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 497;
	        this.additive();
	        this.state = 502;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===33 || _la===34) {
	            this.state = 498;
	            _la = this._input.LA(1);
	            if(!(_la===33 || _la===34)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 499;
	            this.additive();
	            this.state = 504;
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
	    this.enterRule(localctx, 58, HopperParser.RULE_additive);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 505;
	        this.multiplicative();
	        this.state = 510;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===19 || _la===20) {
	            this.state = 506;
	            _la = this._input.LA(1);
	            if(!(_la===19 || _la===20)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 507;
	            this.multiplicative();
	            this.state = 512;
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
	    this.enterRule(localctx, 60, HopperParser.RULE_multiplicative);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 513;
	        this.unary();
	        this.state = 518;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 14680064) !== 0)) {
	            this.state = 514;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 14680064) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 515;
	            this.unary();
	            this.state = 520;
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
	    this.enterRule(localctx, 62, HopperParser.RULE_unary);
	    var _la = 0;
	    try {
	        this.state = 526;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 20:
	        case 58:
	        case 59:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 521;
	            _la = this._input.LA(1);
	            if(!(_la===20 || _la===58 || _la===59)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 522;
	            this.unary();
	            break;
	        case 60:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 523;
	            this.match(HopperParser.T__59);
	            this.state = 524;
	            this.unary();
	            break;
	        case 7:
	        case 61:
	        case 62:
	        case 63:
	        case 64:
	        case 65:
	        case 66:
	        case 67:
	        case 68:
	        case 69:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 525;
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
	    this.enterRule(localctx, 64, HopperParser.RULE_primary);
	    var _la = 0;
	    try {
	        this.state = 576;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,55,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 528;
	            this.match(HopperParser.IntegerLiteral);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 529;
	            this.match(HopperParser.HexLiteral);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 530;
	            this.match(HopperParser.FloatLiteral);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 531;
	            this.match(HopperParser.StringLiteral);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 532;
	            this.match(HopperParser.CharLiteral);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 533;
	            this.match(HopperParser.T__60);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 534;
	            this.match(HopperParser.T__61);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 535;
	            this.match(HopperParser.T__62);
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 536;
	            this.match(HopperParser.Identifier);
	            this.state = 537;
	            this.match(HopperParser.T__34);
	            this.state = 538;
	            this.expression();
	            this.state = 539;
	            this.match(HopperParser.T__35);
	            this.state = 540;
	            this.match(HopperParser.T__45);
	            this.state = 541;
	            this.match(HopperParser.T__17);
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 543;
	            this.match(HopperParser.Identifier);
	            this.state = 544;
	            this.match(HopperParser.T__45);
	            this.state = 545;
	            this.match(HopperParser.T__17);
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 546;
	            this.match(HopperParser.Identifier);
	            this.state = 547;
	            this.match(HopperParser.T__45);
	            this.state = 548;
	            this.match(HopperParser.T__16);
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 549;
	            this.match(HopperParser.Identifier);
	            this.state = 550;
	            this.match(HopperParser.T__6);
	            this.state = 552;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7 || _la===20 || ((((_la - 58)) & ~0x1f) === 0 && ((1 << (_la - 58)) & 4095) !== 0)) {
	                this.state = 551;
	                this.argList();
	            }

	            this.state = 554;
	            this.match(HopperParser.T__7);
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 555;
	            this.match(HopperParser.Identifier);
	            this.state = 556;
	            this.match(HopperParser.T__44);
	            this.state = 557;
	            this.match(HopperParser.Identifier);
	            this.state = 558;
	            this.match(HopperParser.T__6);
	            this.state = 560;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7 || _la===20 || ((((_la - 58)) & ~0x1f) === 0 && ((1 << (_la - 58)) & 4095) !== 0)) {
	                this.state = 559;
	                this.argList();
	            }

	            this.state = 562;
	            this.match(HopperParser.T__7);
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 563;
	            this.match(HopperParser.Identifier);
	            this.state = 564;
	            this.match(HopperParser.T__34);
	            this.state = 565;
	            this.expression();
	            this.state = 566;
	            this.match(HopperParser.T__35);
	            break;

	        case 15:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 568;
	            this.match(HopperParser.Identifier);
	            this.state = 569;
	            this.match(HopperParser.T__44);
	            this.state = 570;
	            this.fieldName();
	            break;

	        case 16:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 571;
	            this.match(HopperParser.Identifier);
	            break;

	        case 17:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 572;
	            this.match(HopperParser.T__6);
	            this.state = 573;
	            this.expression();
	            this.state = 574;
	            this.match(HopperParser.T__7);
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
	    this.enterRule(localctx, 66, HopperParser.RULE_argList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 578;
	        this.expression();
	        this.state = 583;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===37) {
	            this.state = 579;
	            this.match(HopperParser.T__36);
	            this.state = 580;
	            this.expression();
	            this.state = 585;
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
	    this.enterRule(localctx, 68, HopperParser.RULE_literal);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 586;
	        _la = this._input.LA(1);
	        if(!(((((_la - 61)) & ~0x1f) === 0 && ((1 << (_la - 61)) & 123) !== 0))) {
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
HopperParser.T__56 = 57;
HopperParser.T__57 = 58;
HopperParser.T__58 = 59;
HopperParser.T__59 = 60;
HopperParser.T__60 = 61;
HopperParser.T__61 = 62;
HopperParser.T__62 = 63;
HopperParser.IntegerLiteral = 64;
HopperParser.HexLiteral = 65;
HopperParser.FloatLiteral = 66;
HopperParser.StringLiteral = 67;
HopperParser.CharLiteral = 68;
HopperParser.Identifier = 69;
HopperParser.NEWLINE = 70;
HopperParser.LINE_COMMENT = 71;
HopperParser.WS = 72;

HopperParser.RULE_program = 0;
HopperParser.RULE_topLevelDecl = 1;
HopperParser.RULE_importDecl = 2;
HopperParser.RULE_constDecl = 3;
HopperParser.RULE_aliasDecl = 4;
HopperParser.RULE_functionDecl = 5;
HopperParser.RULE_structDecl = 6;
HopperParser.RULE_structMember = 7;
HopperParser.RULE_classDecl = 8;
HopperParser.RULE_classMember = 9;
HopperParser.RULE_fieldName = 10;
HopperParser.RULE_operatorSymbol = 11;
HopperParser.RULE_paramList = 12;
HopperParser.RULE_externParamList = 13;
HopperParser.RULE_param = 14;
HopperParser.RULE_type = 15;
HopperParser.RULE_block = 16;
HopperParser.RULE_statement = 17;
HopperParser.RULE_forInit = 18;
HopperParser.RULE_forUpdate = 19;
HopperParser.RULE_expression = 20;
HopperParser.RULE_logicalOr = 21;
HopperParser.RULE_logicalAnd = 22;
HopperParser.RULE_bitwiseOr = 23;
HopperParser.RULE_bitwiseXor = 24;
HopperParser.RULE_bitwiseAnd = 25;
HopperParser.RULE_equality = 26;
HopperParser.RULE_relational = 27;
HopperParser.RULE_shift = 28;
HopperParser.RULE_additive = 29;
HopperParser.RULE_multiplicative = 30;
HopperParser.RULE_unary = 31;
HopperParser.RULE_primary = 32;
HopperParser.RULE_argList = 33;
HopperParser.RULE_literal = 34;

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

	aliasDecl() {
	    return this.getTypedRuleContext(AliasDeclContext,0);
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



class AliasDeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HopperParser.RULE_aliasDecl;
    }

	Identifier() {
	    return this.getToken(HopperParser.Identifier, 0);
	};

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterAliasDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitAliasDecl(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitAliasDecl(this);
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


class ProcDeclContext extends FunctionDeclContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Identifier() {
	    return this.getToken(HopperParser.Identifier, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	paramList() {
	    return this.getTypedRuleContext(ParamListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterProcDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitProcDecl(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitProcDecl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

HopperParser.ProcDeclContext = ProcDeclContext;

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

	externParamList() {
	    return this.getTypedRuleContext(ExternParamListContext,0);
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

class ExternProcDeclContext extends FunctionDeclContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Identifier() {
	    return this.getToken(HopperParser.Identifier, 0);
	};

	externParamList() {
	    return this.getTypedRuleContext(ExternParamListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterExternProcDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitExternProcDecl(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitExternProcDecl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

HopperParser.ExternProcDeclContext = ExternProcDeclContext;

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


class ClassProcMethodContext extends ClassMemberContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Identifier() {
	    return this.getToken(HopperParser.Identifier, 0);
	};

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	paramList() {
	    return this.getTypedRuleContext(ParamListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterClassProcMethod(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitClassProcMethod(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitClassProcMethod(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

HopperParser.ClassProcMethodContext = ClassProcMethodContext;

class ClassDestructorContext extends ClassMemberContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterClassDestructor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitClassDestructor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitClassDestructor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

HopperParser.ClassDestructorContext = ClassDestructorContext;

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

class ClassConstructorContext extends ClassMemberContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	block() {
	    return this.getTypedRuleContext(BlockContext,0);
	};

	paramList() {
	    return this.getTypedRuleContext(ParamListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterClassConstructor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitClassConstructor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitClassConstructor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

HopperParser.ClassConstructorContext = ClassConstructorContext;

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



class ExternParamListContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HopperParser.RULE_externParamList;
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
	        listener.enterExternParamList(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitExternParamList(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitExternParamList(this);
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

class DeferStmtContext extends StatementContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expression() {
	    return this.getTypedRuleContext(ExpressionContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterDeferStmt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitDeferStmt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitDeferStmt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

HopperParser.DeferStmtContext = DeferStmtContext;

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
HopperParser.AliasDeclContext = AliasDeclContext; 
HopperParser.FunctionDeclContext = FunctionDeclContext; 
HopperParser.StructDeclContext = StructDeclContext; 
HopperParser.StructMemberContext = StructMemberContext; 
HopperParser.ClassDeclContext = ClassDeclContext; 
HopperParser.ClassMemberContext = ClassMemberContext; 
HopperParser.FieldNameContext = FieldNameContext; 
HopperParser.OperatorSymbolContext = OperatorSymbolContext; 
HopperParser.ParamListContext = ParamListContext; 
HopperParser.ExternParamListContext = ExternParamListContext; 
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
