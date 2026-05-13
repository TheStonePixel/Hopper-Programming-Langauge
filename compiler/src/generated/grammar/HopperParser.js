// Generated from grammar/Hopper.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import HopperListener from './HopperListener.js';
import HopperVisitor from './HopperVisitor.js';

const serializedATN = [4,1,77,696,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,1,0,5,0,82,8,0,10,0,
12,0,85,9,0,1,0,1,0,5,0,89,8,0,10,0,12,0,92,9,0,5,0,94,8,0,10,0,12,0,97,
9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,111,8,1,1,2,1,2,
1,2,1,3,1,3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,
1,5,1,5,1,5,3,5,136,8,5,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,8,1,8,
1,8,1,8,1,8,3,8,153,8,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,162,8,8,1,8,1,8,
1,8,1,8,1,8,3,8,169,8,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,179,8,8,1,8,
1,8,3,8,183,8,8,1,9,1,9,1,9,1,9,5,9,189,8,9,10,9,12,9,192,9,9,1,9,1,9,4,
9,196,8,9,11,9,12,9,197,1,9,5,9,201,8,9,10,9,12,9,204,9,9,1,9,5,9,207,8,
9,10,9,12,9,210,9,9,3,9,212,8,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,3,10,221,
8,10,1,11,1,11,1,11,1,11,1,11,1,11,5,11,229,8,11,10,11,12,11,232,9,11,1,
11,1,11,1,11,5,11,237,8,11,10,11,12,11,240,9,11,1,11,1,11,4,11,244,8,11,
11,11,12,11,245,1,11,5,11,249,8,11,10,11,12,11,252,9,11,1,11,5,11,255,8,
11,10,11,12,11,258,9,11,3,11,260,8,11,1,11,1,11,1,12,1,12,1,12,1,12,5,12,
268,8,12,10,12,12,12,271,9,12,1,12,1,12,4,12,275,8,12,11,12,12,12,276,1,
12,5,12,280,8,12,10,12,12,12,283,9,12,1,12,5,12,286,8,12,10,12,12,12,289,
9,12,3,12,291,8,12,1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,3,13,302,
8,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,3,13,312,8,13,1,13,1,13,1,13,
1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,3,13,327,8,13,1,13,1,13,
1,13,1,13,1,13,1,13,3,13,335,8,13,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,15,
1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,3,15,357,8,15,
1,16,1,16,1,16,5,16,362,8,16,10,16,12,16,365,9,16,1,17,1,17,1,17,5,17,370,
8,17,10,17,12,17,373,9,17,1,17,1,17,3,17,377,8,17,1,17,3,17,380,8,17,1,18,
1,18,1,18,1,19,1,19,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,
20,1,20,1,20,1,20,1,20,1,20,5,20,403,8,20,10,20,12,20,406,9,20,1,20,1,20,
1,20,3,20,411,8,20,1,21,1,21,5,21,415,8,21,10,21,12,21,418,9,21,1,21,1,21,
4,21,422,8,21,11,21,12,21,423,1,21,5,21,427,8,21,10,21,12,21,430,9,21,1,
21,5,21,433,8,21,10,21,12,21,436,9,21,3,21,438,8,21,1,21,1,21,1,22,1,22,
1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,
22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,
1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,
22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,3,22,495,8,22,1,22,1,22,1,22,1,22,
1,22,1,22,1,22,1,22,1,22,3,22,506,8,22,1,22,1,22,3,22,510,8,22,1,22,1,22,
3,22,514,8,22,1,22,1,22,1,22,1,22,1,22,1,22,3,22,522,8,22,1,22,1,22,3,22,
526,8,22,1,23,1,23,1,23,1,23,1,23,1,23,1,23,1,23,3,23,536,8,23,1,24,1,24,
1,24,1,24,1,25,1,25,1,26,1,26,1,26,5,26,547,8,26,10,26,12,26,550,9,26,1,
27,1,27,1,27,5,27,555,8,27,10,27,12,27,558,9,27,1,28,1,28,1,28,5,28,563,
8,28,10,28,12,28,566,9,28,1,29,1,29,1,29,5,29,571,8,29,10,29,12,29,574,9,
29,1,30,1,30,1,30,5,30,579,8,30,10,30,12,30,582,9,30,1,31,1,31,1,31,5,31,
587,8,31,10,31,12,31,590,9,31,1,32,1,32,1,32,5,32,595,8,32,10,32,12,32,598,
9,32,1,33,1,33,1,33,5,33,603,8,33,10,33,12,33,606,9,33,1,34,1,34,1,34,5,
34,611,8,34,10,34,12,34,614,9,34,1,35,1,35,1,35,5,35,619,8,35,10,35,12,35,
622,9,35,1,36,1,36,1,36,1,36,1,36,3,36,629,8,36,1,37,1,37,1,37,1,37,1,37,
1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,
37,1,37,1,37,1,37,1,37,1,37,1,37,3,37,657,8,37,1,37,1,37,1,37,1,37,1,37,
1,37,3,37,665,8,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,
1,37,1,37,1,37,1,37,1,37,1,37,3,37,684,8,37,1,38,1,38,1,38,5,38,689,8,38,
10,38,12,38,692,9,38,1,39,1,39,1,39,0,0,40,0,2,4,6,8,10,12,14,16,18,20,22,
24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,
72,74,76,78,0,8,3,0,5,5,26,27,74,74,1,0,33,34,3,0,19,19,21,21,35,36,1,0,
40,41,1,0,28,29,1,0,30,32,2,0,29,29,64,65,2,0,67,68,70,73,791,0,83,1,0,0,
0,2,110,1,0,0,0,4,112,1,0,0,0,6,115,1,0,0,0,8,122,1,0,0,0,10,135,1,0,0,0,
12,137,1,0,0,0,14,142,1,0,0,0,16,182,1,0,0,0,18,184,1,0,0,0,20,220,1,0,0,
0,22,222,1,0,0,0,24,263,1,0,0,0,26,334,1,0,0,0,28,336,1,0,0,0,30,356,1,0,
0,0,32,358,1,0,0,0,34,379,1,0,0,0,36,381,1,0,0,0,38,384,1,0,0,0,40,410,1,
0,0,0,42,412,1,0,0,0,44,525,1,0,0,0,46,535,1,0,0,0,48,537,1,0,0,0,50,541,
1,0,0,0,52,543,1,0,0,0,54,551,1,0,0,0,56,559,1,0,0,0,58,567,1,0,0,0,60,575,
1,0,0,0,62,583,1,0,0,0,64,591,1,0,0,0,66,599,1,0,0,0,68,607,1,0,0,0,70,615,
1,0,0,0,72,628,1,0,0,0,74,683,1,0,0,0,76,685,1,0,0,0,78,693,1,0,0,0,80,82,
5,75,0,0,81,80,1,0,0,0,82,85,1,0,0,0,83,81,1,0,0,0,83,84,1,0,0,0,84,95,1,
0,0,0,85,83,1,0,0,0,86,90,3,2,1,0,87,89,5,75,0,0,88,87,1,0,0,0,89,92,1,0,
0,0,90,88,1,0,0,0,90,91,1,0,0,0,91,94,1,0,0,0,92,90,1,0,0,0,93,86,1,0,0,
0,94,97,1,0,0,0,95,93,1,0,0,0,95,96,1,0,0,0,96,98,1,0,0,0,97,95,1,0,0,0,
98,99,5,0,0,1,99,1,1,0,0,0,100,111,3,16,8,0,101,111,3,18,9,0,102,111,3,24,
12,0,103,111,3,22,11,0,104,111,3,12,6,0,105,111,3,4,2,0,106,111,3,14,7,0,
107,111,3,10,5,0,108,111,3,6,3,0,109,111,3,8,4,0,110,100,1,0,0,0,110,101,
1,0,0,0,110,102,1,0,0,0,110,103,1,0,0,0,110,104,1,0,0,0,110,105,1,0,0,0,
110,106,1,0,0,0,110,107,1,0,0,0,110,108,1,0,0,0,110,109,1,0,0,0,111,3,1,
0,0,0,112,113,5,1,0,0,113,114,5,73,0,0,114,5,1,0,0,0,115,116,5,2,0,0,116,
117,5,71,0,0,117,118,5,3,0,0,118,119,5,74,0,0,119,120,5,4,0,0,120,121,5,
5,0,0,121,7,1,0,0,0,122,123,5,6,0,0,123,124,3,40,20,0,124,125,5,74,0,0,125,
126,5,3,0,0,126,127,5,71,0,0,127,9,1,0,0,0,128,129,5,7,0,0,129,130,5,74,
0,0,130,136,3,42,21,0,131,132,5,7,0,0,132,133,5,74,0,0,133,134,5,3,0,0,134,
136,3,50,25,0,135,128,1,0,0,0,135,131,1,0,0,0,136,11,1,0,0,0,137,138,5,8,
0,0,138,139,5,74,0,0,139,140,5,3,0,0,140,141,3,78,39,0,141,13,1,0,0,0,142,
143,5,9,0,0,143,144,5,74,0,0,144,145,5,3,0,0,145,146,3,40,20,0,146,15,1,
0,0,0,147,148,5,10,0,0,148,149,5,11,0,0,149,150,5,74,0,0,150,152,5,12,0,
0,151,153,3,34,17,0,152,151,1,0,0,0,152,153,1,0,0,0,153,154,1,0,0,0,154,
155,5,13,0,0,155,183,3,40,20,0,156,157,5,10,0,0,157,158,5,11,0,0,158,159,
5,74,0,0,159,161,5,12,0,0,160,162,3,34,17,0,161,160,1,0,0,0,161,162,1,0,
0,0,162,163,1,0,0,0,163,183,5,13,0,0,164,165,5,11,0,0,165,166,5,74,0,0,166,
168,5,12,0,0,167,169,3,32,16,0,168,167,1,0,0,0,168,169,1,0,0,0,169,170,1,
0,0,0,170,171,5,13,0,0,171,172,3,40,20,0,172,173,3,42,21,0,173,183,1,0,0,
0,174,175,5,11,0,0,175,176,5,74,0,0,176,178,5,12,0,0,177,179,3,32,16,0,178,
177,1,0,0,0,178,179,1,0,0,0,179,180,1,0,0,0,180,181,5,13,0,0,181,183,3,42,
21,0,182,147,1,0,0,0,182,156,1,0,0,0,182,164,1,0,0,0,182,174,1,0,0,0,183,
17,1,0,0,0,184,185,5,14,0,0,185,186,5,74,0,0,186,190,5,15,0,0,187,189,5,
75,0,0,188,187,1,0,0,0,189,192,1,0,0,0,190,188,1,0,0,0,190,191,1,0,0,0,191,
211,1,0,0,0,192,190,1,0,0,0,193,202,3,20,10,0,194,196,5,75,0,0,195,194,1,
0,0,0,196,197,1,0,0,0,197,195,1,0,0,0,197,198,1,0,0,0,198,199,1,0,0,0,199,
201,3,20,10,0,200,195,1,0,0,0,201,204,1,0,0,0,202,200,1,0,0,0,202,203,1,
0,0,0,203,208,1,0,0,0,204,202,1,0,0,0,205,207,5,75,0,0,206,205,1,0,0,0,207,
210,1,0,0,0,208,206,1,0,0,0,208,209,1,0,0,0,209,212,1,0,0,0,210,208,1,0,
0,0,211,193,1,0,0,0,211,212,1,0,0,0,212,213,1,0,0,0,213,214,5,16,0,0,214,
19,1,0,0,0,215,216,3,40,20,0,216,217,3,28,14,0,217,221,1,0,0,0,218,219,5,
17,0,0,219,221,5,70,0,0,220,215,1,0,0,0,220,218,1,0,0,0,221,21,1,0,0,0,222,
223,5,18,0,0,223,224,5,74,0,0,224,225,5,19,0,0,225,230,5,74,0,0,226,227,
5,20,0,0,227,229,5,74,0,0,228,226,1,0,0,0,229,232,1,0,0,0,230,228,1,0,0,
0,230,231,1,0,0,0,231,233,1,0,0,0,232,230,1,0,0,0,233,234,5,21,0,0,234,238,
5,15,0,0,235,237,5,75,0,0,236,235,1,0,0,0,237,240,1,0,0,0,238,236,1,0,0,
0,238,239,1,0,0,0,239,259,1,0,0,0,240,238,1,0,0,0,241,250,3,26,13,0,242,
244,5,75,0,0,243,242,1,0,0,0,244,245,1,0,0,0,245,243,1,0,0,0,245,246,1,0,
0,0,246,247,1,0,0,0,247,249,3,26,13,0,248,243,1,0,0,0,249,252,1,0,0,0,250,
248,1,0,0,0,250,251,1,0,0,0,251,256,1,0,0,0,252,250,1,0,0,0,253,255,5,75,
0,0,254,253,1,0,0,0,255,258,1,0,0,0,256,254,1,0,0,0,256,257,1,0,0,0,257,
260,1,0,0,0,258,256,1,0,0,0,259,241,1,0,0,0,259,260,1,0,0,0,260,261,1,0,
0,0,261,262,5,16,0,0,262,23,1,0,0,0,263,264,5,22,0,0,264,265,5,74,0,0,265,
269,5,15,0,0,266,268,5,75,0,0,267,266,1,0,0,0,268,271,1,0,0,0,269,267,1,
0,0,0,269,270,1,0,0,0,270,290,1,0,0,0,271,269,1,0,0,0,272,281,3,26,13,0,
273,275,5,75,0,0,274,273,1,0,0,0,275,276,1,0,0,0,276,274,1,0,0,0,276,277,
1,0,0,0,277,278,1,0,0,0,278,280,3,26,13,0,279,274,1,0,0,0,280,283,1,0,0,
0,281,279,1,0,0,0,281,282,1,0,0,0,282,287,1,0,0,0,283,281,1,0,0,0,284,286,
5,75,0,0,285,284,1,0,0,0,286,289,1,0,0,0,287,285,1,0,0,0,287,288,1,0,0,0,
288,291,1,0,0,0,289,287,1,0,0,0,290,272,1,0,0,0,290,291,1,0,0,0,291,292,
1,0,0,0,292,293,5,16,0,0,293,25,1,0,0,0,294,295,3,40,20,0,295,296,3,28,14,
0,296,335,1,0,0,0,297,298,5,11,0,0,298,299,5,74,0,0,299,301,5,12,0,0,300,
302,3,32,16,0,301,300,1,0,0,0,301,302,1,0,0,0,302,303,1,0,0,0,303,304,5,
13,0,0,304,305,3,40,20,0,305,306,3,42,21,0,306,335,1,0,0,0,307,308,5,11,
0,0,308,309,5,74,0,0,309,311,5,12,0,0,310,312,3,32,16,0,311,310,1,0,0,0,
311,312,1,0,0,0,312,313,1,0,0,0,313,314,5,13,0,0,314,335,3,42,21,0,315,316,
5,23,0,0,316,317,3,30,15,0,317,318,5,12,0,0,318,319,3,36,18,0,319,320,5,
13,0,0,320,321,3,40,20,0,321,322,3,42,21,0,322,335,1,0,0,0,323,324,5,24,
0,0,324,326,5,12,0,0,325,327,3,32,16,0,326,325,1,0,0,0,326,327,1,0,0,0,327,
328,1,0,0,0,328,329,5,13,0,0,329,335,3,42,21,0,330,331,5,25,0,0,331,332,
5,12,0,0,332,333,5,13,0,0,333,335,3,42,21,0,334,294,1,0,0,0,334,297,1,0,
0,0,334,307,1,0,0,0,334,315,1,0,0,0,334,323,1,0,0,0,334,330,1,0,0,0,335,
27,1,0,0,0,336,337,7,0,0,0,337,29,1,0,0,0,338,357,5,28,0,0,339,357,5,29,
0,0,340,357,5,30,0,0,341,357,5,31,0,0,342,357,5,32,0,0,343,357,5,33,0,0,
344,357,5,34,0,0,345,357,5,19,0,0,346,357,5,35,0,0,347,357,5,21,0,0,348,
357,5,36,0,0,349,357,5,37,0,0,350,357,5,38,0,0,351,357,5,39,0,0,352,357,
5,40,0,0,353,357,5,41,0,0,354,355,5,42,0,0,355,357,5,43,0,0,356,338,1,0,
0,0,356,339,1,0,0,0,356,340,1,0,0,0,356,341,1,0,0,0,356,342,1,0,0,0,356,
343,1,0,0,0,356,344,1,0,0,0,356,345,1,0,0,0,356,346,1,0,0,0,356,347,1,0,
0,0,356,348,1,0,0,0,356,349,1,0,0,0,356,350,1,0,0,0,356,351,1,0,0,0,356,
352,1,0,0,0,356,353,1,0,0,0,356,354,1,0,0,0,357,31,1,0,0,0,358,363,3,36,
18,0,359,360,5,20,0,0,360,362,3,36,18,0,361,359,1,0,0,0,362,365,1,0,0,0,
363,361,1,0,0,0,363,364,1,0,0,0,364,33,1,0,0,0,365,363,1,0,0,0,366,371,3,
36,18,0,367,368,5,20,0,0,368,370,3,36,18,0,369,367,1,0,0,0,370,373,1,0,0,
0,371,369,1,0,0,0,371,372,1,0,0,0,372,376,1,0,0,0,373,371,1,0,0,0,374,375,
5,20,0,0,375,377,5,44,0,0,376,374,1,0,0,0,376,377,1,0,0,0,377,380,1,0,0,
0,378,380,5,44,0,0,379,366,1,0,0,0,379,378,1,0,0,0,380,35,1,0,0,0,381,382,
3,40,20,0,382,383,3,38,19,0,383,37,1,0,0,0,384,385,7,0,0,0,385,39,1,0,0,
0,386,411,5,45,0,0,387,411,5,46,0,0,388,411,5,47,0,0,389,411,5,48,0,0,390,
411,5,49,0,0,391,411,5,50,0,0,392,411,5,5,0,0,393,394,5,51,0,0,394,411,5,
45,0,0,395,396,5,51,0,0,396,411,5,48,0,0,397,398,5,74,0,0,398,399,5,19,0,
0,399,404,3,40,20,0,400,401,5,20,0,0,401,403,3,40,20,0,402,400,1,0,0,0,403,
406,1,0,0,0,404,402,1,0,0,0,404,405,1,0,0,0,405,407,1,0,0,0,406,404,1,0,
0,0,407,408,5,21,0,0,408,411,1,0,0,0,409,411,5,74,0,0,410,386,1,0,0,0,410,
387,1,0,0,0,410,388,1,0,0,0,410,389,1,0,0,0,410,390,1,0,0,0,410,391,1,0,
0,0,410,392,1,0,0,0,410,393,1,0,0,0,410,395,1,0,0,0,410,397,1,0,0,0,410,
409,1,0,0,0,411,41,1,0,0,0,412,416,5,15,0,0,413,415,5,75,0,0,414,413,1,0,
0,0,415,418,1,0,0,0,416,414,1,0,0,0,416,417,1,0,0,0,417,437,1,0,0,0,418,
416,1,0,0,0,419,428,3,44,22,0,420,422,5,75,0,0,421,420,1,0,0,0,422,423,1,
0,0,0,423,421,1,0,0,0,423,424,1,0,0,0,424,425,1,0,0,0,425,427,3,44,22,0,
426,421,1,0,0,0,427,430,1,0,0,0,428,426,1,0,0,0,428,429,1,0,0,0,429,434,
1,0,0,0,430,428,1,0,0,0,431,433,5,75,0,0,432,431,1,0,0,0,433,436,1,0,0,0,
434,432,1,0,0,0,434,435,1,0,0,0,435,438,1,0,0,0,436,434,1,0,0,0,437,419,
1,0,0,0,437,438,1,0,0,0,438,439,1,0,0,0,439,440,5,16,0,0,440,43,1,0,0,0,
441,442,3,40,20,0,442,443,5,74,0,0,443,444,5,42,0,0,444,445,5,70,0,0,445,
446,5,43,0,0,446,447,5,3,0,0,447,448,5,42,0,0,448,449,3,76,38,0,449,450,
5,43,0,0,450,526,1,0,0,0,451,452,3,40,20,0,452,453,5,74,0,0,453,454,5,42,
0,0,454,455,5,70,0,0,455,456,5,43,0,0,456,526,1,0,0,0,457,458,3,40,20,0,
458,459,5,74,0,0,459,460,5,3,0,0,460,461,3,50,25,0,461,526,1,0,0,0,462,463,
3,40,20,0,463,464,5,74,0,0,464,526,1,0,0,0,465,466,5,74,0,0,466,467,5,42,
0,0,467,468,3,50,25,0,468,469,5,43,0,0,469,470,5,3,0,0,470,471,3,50,25,0,
471,526,1,0,0,0,472,473,5,74,0,0,473,474,5,3,0,0,474,526,3,50,25,0,475,476,
5,74,0,0,476,477,5,52,0,0,477,478,3,28,14,0,478,479,5,3,0,0,479,480,3,50,
25,0,480,526,1,0,0,0,481,482,5,74,0,0,482,483,5,4,0,0,483,484,5,26,0,0,484,
485,5,3,0,0,485,526,3,50,25,0,486,526,3,50,25,0,487,488,5,53,0,0,488,489,
5,12,0,0,489,490,3,50,25,0,490,491,5,13,0,0,491,494,3,42,21,0,492,493,5,
54,0,0,493,495,3,42,21,0,494,492,1,0,0,0,494,495,1,0,0,0,495,526,1,0,0,0,
496,497,5,55,0,0,497,498,5,12,0,0,498,499,3,50,25,0,499,500,5,13,0,0,500,
501,3,42,21,0,501,526,1,0,0,0,502,503,5,56,0,0,503,505,5,12,0,0,504,506,
3,46,23,0,505,504,1,0,0,0,505,506,1,0,0,0,506,507,1,0,0,0,507,509,5,57,0,
0,508,510,3,50,25,0,509,508,1,0,0,0,509,510,1,0,0,0,510,511,1,0,0,0,511,
513,5,57,0,0,512,514,3,48,24,0,513,512,1,0,0,0,513,514,1,0,0,0,514,515,1,
0,0,0,515,516,5,13,0,0,516,526,3,42,21,0,517,526,5,58,0,0,518,526,5,59,0,
0,519,521,5,60,0,0,520,522,3,50,25,0,521,520,1,0,0,0,521,522,1,0,0,0,522,
526,1,0,0,0,523,524,5,61,0,0,524,526,3,50,25,0,525,441,1,0,0,0,525,451,1,
0,0,0,525,457,1,0,0,0,525,462,1,0,0,0,525,465,1,0,0,0,525,472,1,0,0,0,525,
475,1,0,0,0,525,481,1,0,0,0,525,486,1,0,0,0,525,487,1,0,0,0,525,496,1,0,
0,0,525,502,1,0,0,0,525,517,1,0,0,0,525,518,1,0,0,0,525,519,1,0,0,0,525,
523,1,0,0,0,526,45,1,0,0,0,527,528,3,40,20,0,528,529,5,74,0,0,529,530,5,
3,0,0,530,531,3,50,25,0,531,536,1,0,0,0,532,533,5,74,0,0,533,534,5,3,0,0,
534,536,3,50,25,0,535,527,1,0,0,0,535,532,1,0,0,0,536,47,1,0,0,0,537,538,
5,74,0,0,538,539,5,3,0,0,539,540,3,50,25,0,540,49,1,0,0,0,541,542,3,52,26,
0,542,51,1,0,0,0,543,548,3,54,27,0,544,545,5,62,0,0,545,547,3,54,27,0,546,
544,1,0,0,0,547,550,1,0,0,0,548,546,1,0,0,0,548,549,1,0,0,0,549,53,1,0,0,
0,550,548,1,0,0,0,551,556,3,56,28,0,552,553,5,63,0,0,553,555,3,56,28,0,554,
552,1,0,0,0,555,558,1,0,0,0,556,554,1,0,0,0,556,557,1,0,0,0,557,55,1,0,0,
0,558,556,1,0,0,0,559,564,3,58,29,0,560,561,5,38,0,0,561,563,3,58,29,0,562,
560,1,0,0,0,563,566,1,0,0,0,564,562,1,0,0,0,564,565,1,0,0,0,565,57,1,0,0,
0,566,564,1,0,0,0,567,572,3,60,30,0,568,569,5,39,0,0,569,571,3,60,30,0,570,
568,1,0,0,0,571,574,1,0,0,0,572,570,1,0,0,0,572,573,1,0,0,0,573,59,1,0,0,
0,574,572,1,0,0,0,575,580,3,62,31,0,576,577,5,37,0,0,577,579,3,62,31,0,578,
576,1,0,0,0,579,582,1,0,0,0,580,578,1,0,0,0,580,581,1,0,0,0,581,61,1,0,0,
0,582,580,1,0,0,0,583,588,3,64,32,0,584,585,7,1,0,0,585,587,3,64,32,0,586,
584,1,0,0,0,587,590,1,0,0,0,588,586,1,0,0,0,588,589,1,0,0,0,589,63,1,0,0,
0,590,588,1,0,0,0,591,596,3,66,33,0,592,593,7,2,0,0,593,595,3,66,33,0,594,
592,1,0,0,0,595,598,1,0,0,0,596,594,1,0,0,0,596,597,1,0,0,0,597,65,1,0,0,
0,598,596,1,0,0,0,599,604,3,68,34,0,600,601,7,3,0,0,601,603,3,68,34,0,602,
600,1,0,0,0,603,606,1,0,0,0,604,602,1,0,0,0,604,605,1,0,0,0,605,67,1,0,0,
0,606,604,1,0,0,0,607,612,3,70,35,0,608,609,7,4,0,0,609,611,3,70,35,0,610,
608,1,0,0,0,611,614,1,0,0,0,612,610,1,0,0,0,612,613,1,0,0,0,613,69,1,0,0,
0,614,612,1,0,0,0,615,620,3,72,36,0,616,617,7,5,0,0,617,619,3,72,36,0,618,
616,1,0,0,0,619,622,1,0,0,0,620,618,1,0,0,0,620,621,1,0,0,0,621,71,1,0,0,
0,622,620,1,0,0,0,623,624,7,6,0,0,624,629,3,72,36,0,625,626,5,66,0,0,626,
629,3,72,36,0,627,629,3,74,37,0,628,623,1,0,0,0,628,625,1,0,0,0,628,627,
1,0,0,0,629,73,1,0,0,0,630,684,5,70,0,0,631,684,5,71,0,0,632,684,5,72,0,
0,633,684,5,73,0,0,634,684,5,67,0,0,635,684,5,68,0,0,636,684,5,69,0,0,637,
638,5,74,0,0,638,639,5,42,0,0,639,640,3,50,25,0,640,641,5,43,0,0,641,642,
5,4,0,0,642,643,5,5,0,0,643,684,1,0,0,0,644,645,5,74,0,0,645,646,5,4,0,0,
646,684,5,5,0,0,647,648,5,74,0,0,648,649,5,4,0,0,649,684,5,26,0,0,650,651,
5,74,0,0,651,652,5,4,0,0,652,684,5,27,0,0,653,654,5,74,0,0,654,656,5,12,
0,0,655,657,3,76,38,0,656,655,1,0,0,0,656,657,1,0,0,0,657,658,1,0,0,0,658,
684,5,13,0,0,659,660,5,74,0,0,660,661,5,52,0,0,661,662,5,74,0,0,662,664,
5,12,0,0,663,665,3,76,38,0,664,663,1,0,0,0,664,665,1,0,0,0,665,666,1,0,0,
0,666,684,5,13,0,0,667,668,5,74,0,0,668,669,5,42,0,0,669,670,3,50,25,0,670,
671,5,43,0,0,671,684,1,0,0,0,672,673,5,74,0,0,673,674,5,52,0,0,674,684,3,
28,14,0,675,684,5,74,0,0,676,684,5,26,0,0,677,684,5,5,0,0,678,684,5,27,0,
0,679,680,5,12,0,0,680,681,3,50,25,0,681,682,5,13,0,0,682,684,1,0,0,0,683,
630,1,0,0,0,683,631,1,0,0,0,683,632,1,0,0,0,683,633,1,0,0,0,683,634,1,0,
0,0,683,635,1,0,0,0,683,636,1,0,0,0,683,637,1,0,0,0,683,644,1,0,0,0,683,
647,1,0,0,0,683,650,1,0,0,0,683,653,1,0,0,0,683,659,1,0,0,0,683,667,1,0,
0,0,683,672,1,0,0,0,683,675,1,0,0,0,683,676,1,0,0,0,683,677,1,0,0,0,683,
678,1,0,0,0,683,679,1,0,0,0,684,75,1,0,0,0,685,690,3,50,25,0,686,687,5,20,
0,0,687,689,3,50,25,0,688,686,1,0,0,0,689,692,1,0,0,0,690,688,1,0,0,0,690,
691,1,0,0,0,691,77,1,0,0,0,692,690,1,0,0,0,693,694,7,7,0,0,694,79,1,0,0,
0,65,83,90,95,110,135,152,161,168,178,182,190,197,202,208,211,220,230,238,
245,250,256,259,269,276,281,287,290,301,311,326,334,356,363,371,376,379,
404,410,416,423,428,434,437,494,505,509,513,521,525,535,548,556,564,572,
580,588,596,604,612,620,628,656,664,683,690];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class HopperParser extends antlr4.Parser {

    static grammarFileName = "Hopper.g4";
    static literalNames = [ null, "'import'", "'bind'", "'='", "'::'", "'address'", 
                            "'strict'", "'entry'", "'const'", "'alias'", 
                            "'extern'", "'function'", "'('", "')'", "'struct'", 
                            "'{'", "'}'", "'pad'", "'template'", "'<'", 
                            "','", "'>'", "'class'", "'operator'", "'constructor'", 
                            "'destructor'", "'value'", "'size'", "'+'", 
                            "'-'", "'*'", "'/'", "'%'", "'=='", "'!='", 
                            "'<='", "'>='", "'&'", "'|'", "'^'", "'<<'", 
                            "'>>'", "'['", "']'", "'...'", "'int'", "'bool'", 
                            "'float'", "'byte'", "'string'", "'String'", 
                            "'unsigned'", "'.'", "'if'", "'else'", "'while'", 
                            "'for'", "';'", "'break'", "'continue'", "'return'", 
                            "'defer'", "'||'", "'&&'", "'!'", "'~'", "'cast'", 
                            "'true'", "'false'", "'null'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, "IntegerLiteral", 
                             "HexLiteral", "FloatLiteral", "StringLiteral", 
                             "Identifier", "NEWLINE", "LINE_COMMENT", "WS" ];
    static ruleNames = [ "program", "topLevelDecl", "importDecl", "bindDecl", 
                         "strictDecl", "entryDecl", "constDecl", "aliasDecl", 
                         "functionDecl", "structDecl", "structMember", "templateDecl", 
                         "classDecl", "classMember", "fieldName", "operatorSymbol", 
                         "paramList", "externParamList", "param", "paramName", 
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
	        this.state = 83;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===75) {
	            this.state = 80;
	            this.match(HopperParser.NEWLINE);
	            this.state = 85;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 95;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4476870) !== 0)) {
	            this.state = 86;
	            this.topLevelDecl();
	            this.state = 90;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===75) {
	                this.state = 87;
	                this.match(HopperParser.NEWLINE);
	                this.state = 92;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 97;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 98;
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
	        this.state = 110;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 10:
	        case 11:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 100;
	            this.functionDecl();
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 101;
	            this.structDecl();
	            break;
	        case 22:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 102;
	            this.classDecl();
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 103;
	            this.templateDecl();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 104;
	            this.constDecl();
	            break;
	        case 1:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 105;
	            this.importDecl();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 106;
	            this.aliasDecl();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 107;
	            this.entryDecl();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 108;
	            this.bindDecl();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 109;
	            this.strictDecl();
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
	        this.state = 112;
	        this.match(HopperParser.T__0);
	        this.state = 113;
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



	bindDecl() {
	    let localctx = new BindDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, HopperParser.RULE_bindDecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 115;
	        this.match(HopperParser.T__1);
	        this.state = 116;
	        this.match(HopperParser.HexLiteral);
	        this.state = 117;
	        this.match(HopperParser.T__2);
	        this.state = 118;
	        this.match(HopperParser.Identifier);
	        this.state = 119;
	        this.match(HopperParser.T__3);
	        this.state = 120;
	        this.match(HopperParser.T__4);
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



	strictDecl() {
	    let localctx = new StrictDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, HopperParser.RULE_strictDecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 122;
	        this.match(HopperParser.T__5);
	        this.state = 123;
	        this.type();
	        this.state = 124;
	        this.match(HopperParser.Identifier);
	        this.state = 125;
	        this.match(HopperParser.T__2);
	        this.state = 126;
	        this.match(HopperParser.HexLiteral);
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



	entryDecl() {
	    let localctx = new EntryDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, HopperParser.RULE_entryDecl);
	    try {
	        this.state = 135;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new EntryBlockContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 128;
	            this.match(HopperParser.T__6);
	            this.state = 129;
	            this.match(HopperParser.Identifier);
	            this.state = 130;
	            this.block();
	            break;

	        case 2:
	            localctx = new EntryAddrContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 131;
	            this.match(HopperParser.T__6);
	            this.state = 132;
	            this.match(HopperParser.Identifier);
	            this.state = 133;
	            this.match(HopperParser.T__2);
	            this.state = 134;
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



	constDecl() {
	    let localctx = new ConstDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, HopperParser.RULE_constDecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 137;
	        this.match(HopperParser.T__7);
	        this.state = 138;
	        this.match(HopperParser.Identifier);
	        this.state = 139;
	        this.match(HopperParser.T__2);
	        this.state = 140;
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
	    this.enterRule(localctx, 14, HopperParser.RULE_aliasDecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 142;
	        this.match(HopperParser.T__8);
	        this.state = 143;
	        this.match(HopperParser.Identifier);
	        this.state = 144;
	        this.match(HopperParser.T__2);
	        this.state = 145;
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
	    this.enterRule(localctx, 16, HopperParser.RULE_functionDecl);
	    var _la = 0;
	    try {
	        this.state = 182;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ExternFuncDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 147;
	            this.match(HopperParser.T__9);
	            this.state = 148;
	            this.match(HopperParser.T__10);
	            this.state = 149;
	            this.match(HopperParser.Identifier);
	            this.state = 150;
	            this.match(HopperParser.T__11);
	            this.state = 152;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5 || ((((_la - 44)) & ~0x1f) === 0 && ((1 << (_la - 44)) & 1073742079) !== 0)) {
	                this.state = 151;
	                this.externParamList();
	            }

	            this.state = 154;
	            this.match(HopperParser.T__12);
	            this.state = 155;
	            this.type();
	            break;

	        case 2:
	            localctx = new ExternProcDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 156;
	            this.match(HopperParser.T__9);
	            this.state = 157;
	            this.match(HopperParser.T__10);
	            this.state = 158;
	            this.match(HopperParser.Identifier);
	            this.state = 159;
	            this.match(HopperParser.T__11);
	            this.state = 161;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5 || ((((_la - 44)) & ~0x1f) === 0 && ((1 << (_la - 44)) & 1073742079) !== 0)) {
	                this.state = 160;
	                this.externParamList();
	            }

	            this.state = 163;
	            this.match(HopperParser.T__12);
	            break;

	        case 3:
	            localctx = new FuncDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 164;
	            this.match(HopperParser.T__10);
	            this.state = 165;
	            this.match(HopperParser.Identifier);
	            this.state = 166;
	            this.match(HopperParser.T__11);
	            this.state = 168;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5 || ((((_la - 45)) & ~0x1f) === 0 && ((1 << (_la - 45)) & 536871039) !== 0)) {
	                this.state = 167;
	                this.paramList();
	            }

	            this.state = 170;
	            this.match(HopperParser.T__12);
	            this.state = 171;
	            this.type();
	            this.state = 172;
	            this.block();
	            break;

	        case 4:
	            localctx = new ProcDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 174;
	            this.match(HopperParser.T__10);
	            this.state = 175;
	            this.match(HopperParser.Identifier);
	            this.state = 176;
	            this.match(HopperParser.T__11);
	            this.state = 178;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5 || ((((_la - 45)) & ~0x1f) === 0 && ((1 << (_la - 45)) & 536871039) !== 0)) {
	                this.state = 177;
	                this.paramList();
	            }

	            this.state = 180;
	            this.match(HopperParser.T__12);
	            this.state = 181;
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
	    this.enterRule(localctx, 18, HopperParser.RULE_structDecl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 184;
	        this.match(HopperParser.T__13);
	        this.state = 185;
	        this.match(HopperParser.Identifier);
	        this.state = 186;
	        this.match(HopperParser.T__14);
	        this.state = 190;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===75) {
	            this.state = 187;
	            this.match(HopperParser.NEWLINE);
	            this.state = 192;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 211;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5 || _la===17 || ((((_la - 45)) & ~0x1f) === 0 && ((1 << (_la - 45)) & 536871039) !== 0)) {
	            this.state = 193;
	            this.structMember();
	            this.state = 202;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 195; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    do {
	                        this.state = 194;
	                        this.match(HopperParser.NEWLINE);
	                        this.state = 197; 
	                        this._errHandler.sync(this);
	                        _la = this._input.LA(1);
	                    } while(_la===75);
	                    this.state = 199;
	                    this.structMember(); 
	                }
	                this.state = 204;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
	            }

	            this.state = 208;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===75) {
	                this.state = 205;
	                this.match(HopperParser.NEWLINE);
	                this.state = 210;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 213;
	        this.match(HopperParser.T__15);
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
	    this.enterRule(localctx, 20, HopperParser.RULE_structMember);
	    try {
	        this.state = 220;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	        case 45:
	        case 46:
	        case 47:
	        case 48:
	        case 49:
	        case 50:
	        case 51:
	        case 74:
	            localctx = new StructFieldContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 215;
	            this.type();
	            this.state = 216;
	            this.fieldName();
	            break;
	        case 17:
	            localctx = new StructPadContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 218;
	            this.match(HopperParser.T__16);
	            this.state = 219;
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



	templateDecl() {
	    let localctx = new TemplateDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 22, HopperParser.RULE_templateDecl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 222;
	        this.match(HopperParser.T__17);
	        this.state = 223;
	        this.match(HopperParser.Identifier);
	        this.state = 224;
	        this.match(HopperParser.T__18);
	        this.state = 225;
	        this.match(HopperParser.Identifier);
	        this.state = 230;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===20) {
	            this.state = 226;
	            this.match(HopperParser.T__19);
	            this.state = 227;
	            this.match(HopperParser.Identifier);
	            this.state = 232;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 233;
	        this.match(HopperParser.T__20);
	        this.state = 234;
	        this.match(HopperParser.T__14);
	        this.state = 238;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===75) {
	            this.state = 235;
	            this.match(HopperParser.NEWLINE);
	            this.state = 240;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 259;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 58722336) !== 0) || ((((_la - 45)) & ~0x1f) === 0 && ((1 << (_la - 45)) & 536871039) !== 0)) {
	            this.state = 241;
	            this.classMember();
	            this.state = 250;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 243; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    do {
	                        this.state = 242;
	                        this.match(HopperParser.NEWLINE);
	                        this.state = 245; 
	                        this._errHandler.sync(this);
	                        _la = this._input.LA(1);
	                    } while(_la===75);
	                    this.state = 247;
	                    this.classMember(); 
	                }
	                this.state = 252;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
	            }

	            this.state = 256;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===75) {
	                this.state = 253;
	                this.match(HopperParser.NEWLINE);
	                this.state = 258;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 261;
	        this.match(HopperParser.T__15);
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
	    this.enterRule(localctx, 24, HopperParser.RULE_classDecl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 263;
	        this.match(HopperParser.T__21);
	        this.state = 264;
	        this.match(HopperParser.Identifier);
	        this.state = 265;
	        this.match(HopperParser.T__14);
	        this.state = 269;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===75) {
	            this.state = 266;
	            this.match(HopperParser.NEWLINE);
	            this.state = 271;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 290;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 58722336) !== 0) || ((((_la - 45)) & ~0x1f) === 0 && ((1 << (_la - 45)) & 536871039) !== 0)) {
	            this.state = 272;
	            this.classMember();
	            this.state = 281;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,24,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 274; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    do {
	                        this.state = 273;
	                        this.match(HopperParser.NEWLINE);
	                        this.state = 276; 
	                        this._errHandler.sync(this);
	                        _la = this._input.LA(1);
	                    } while(_la===75);
	                    this.state = 278;
	                    this.classMember(); 
	                }
	                this.state = 283;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,24,this._ctx);
	            }

	            this.state = 287;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===75) {
	                this.state = 284;
	                this.match(HopperParser.NEWLINE);
	                this.state = 289;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 292;
	        this.match(HopperParser.T__15);
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
	    this.enterRule(localctx, 26, HopperParser.RULE_classMember);
	    var _la = 0;
	    try {
	        this.state = 334;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ClassFieldContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 294;
	            this.type();
	            this.state = 295;
	            this.fieldName();
	            break;

	        case 2:
	            localctx = new ClassMethodContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 297;
	            this.match(HopperParser.T__10);
	            this.state = 298;
	            this.match(HopperParser.Identifier);
	            this.state = 299;
	            this.match(HopperParser.T__11);
	            this.state = 301;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5 || ((((_la - 45)) & ~0x1f) === 0 && ((1 << (_la - 45)) & 536871039) !== 0)) {
	                this.state = 300;
	                this.paramList();
	            }

	            this.state = 303;
	            this.match(HopperParser.T__12);
	            this.state = 304;
	            this.type();
	            this.state = 305;
	            this.block();
	            break;

	        case 3:
	            localctx = new ClassProcMethodContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 307;
	            this.match(HopperParser.T__10);
	            this.state = 308;
	            this.match(HopperParser.Identifier);
	            this.state = 309;
	            this.match(HopperParser.T__11);
	            this.state = 311;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5 || ((((_la - 45)) & ~0x1f) === 0 && ((1 << (_la - 45)) & 536871039) !== 0)) {
	                this.state = 310;
	                this.paramList();
	            }

	            this.state = 313;
	            this.match(HopperParser.T__12);
	            this.state = 314;
	            this.block();
	            break;

	        case 4:
	            localctx = new ClassOperatorContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 315;
	            this.match(HopperParser.T__22);
	            this.state = 316;
	            this.operatorSymbol();
	            this.state = 317;
	            this.match(HopperParser.T__11);
	            this.state = 318;
	            this.param();
	            this.state = 319;
	            this.match(HopperParser.T__12);
	            this.state = 320;
	            this.type();
	            this.state = 321;
	            this.block();
	            break;

	        case 5:
	            localctx = new ClassConstructorContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 323;
	            this.match(HopperParser.T__23);
	            this.state = 324;
	            this.match(HopperParser.T__11);
	            this.state = 326;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5 || ((((_la - 45)) & ~0x1f) === 0 && ((1 << (_la - 45)) & 536871039) !== 0)) {
	                this.state = 325;
	                this.paramList();
	            }

	            this.state = 328;
	            this.match(HopperParser.T__12);
	            this.state = 329;
	            this.block();
	            break;

	        case 6:
	            localctx = new ClassDestructorContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 330;
	            this.match(HopperParser.T__24);
	            this.state = 331;
	            this.match(HopperParser.T__11);
	            this.state = 332;
	            this.match(HopperParser.T__12);
	            this.state = 333;
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
	    this.enterRule(localctx, 28, HopperParser.RULE_fieldName);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 336;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 201326624) !== 0) || _la===74)) {
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
	    this.enterRule(localctx, 30, HopperParser.RULE_operatorSymbol);
	    try {
	        this.state = 356;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 28:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 338;
	            this.match(HopperParser.T__27);
	            break;
	        case 29:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 339;
	            this.match(HopperParser.T__28);
	            break;
	        case 30:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 340;
	            this.match(HopperParser.T__29);
	            break;
	        case 31:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 341;
	            this.match(HopperParser.T__30);
	            break;
	        case 32:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 342;
	            this.match(HopperParser.T__31);
	            break;
	        case 33:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 343;
	            this.match(HopperParser.T__32);
	            break;
	        case 34:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 344;
	            this.match(HopperParser.T__33);
	            break;
	        case 19:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 345;
	            this.match(HopperParser.T__18);
	            break;
	        case 35:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 346;
	            this.match(HopperParser.T__34);
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 347;
	            this.match(HopperParser.T__20);
	            break;
	        case 36:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 348;
	            this.match(HopperParser.T__35);
	            break;
	        case 37:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 349;
	            this.match(HopperParser.T__36);
	            break;
	        case 38:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 350;
	            this.match(HopperParser.T__37);
	            break;
	        case 39:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 351;
	            this.match(HopperParser.T__38);
	            break;
	        case 40:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 352;
	            this.match(HopperParser.T__39);
	            break;
	        case 41:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 353;
	            this.match(HopperParser.T__40);
	            break;
	        case 42:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 354;
	            this.match(HopperParser.T__41);
	            this.state = 355;
	            this.match(HopperParser.T__42);
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
	    this.enterRule(localctx, 32, HopperParser.RULE_paramList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 358;
	        this.param();
	        this.state = 363;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===20) {
	            this.state = 359;
	            this.match(HopperParser.T__19);
	            this.state = 360;
	            this.param();
	            this.state = 365;
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
	    this.enterRule(localctx, 34, HopperParser.RULE_externParamList);
	    var _la = 0;
	    try {
	        this.state = 379;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	        case 45:
	        case 46:
	        case 47:
	        case 48:
	        case 49:
	        case 50:
	        case 51:
	        case 74:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 366;
	            this.param();
	            this.state = 371;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,33,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 367;
	                    this.match(HopperParser.T__19);
	                    this.state = 368;
	                    this.param(); 
	                }
	                this.state = 373;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,33,this._ctx);
	            }

	            this.state = 376;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===20) {
	                this.state = 374;
	                this.match(HopperParser.T__19);
	                this.state = 375;
	                this.match(HopperParser.T__43);
	            }

	            break;
	        case 44:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 378;
	            this.match(HopperParser.T__43);
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
	    this.enterRule(localctx, 36, HopperParser.RULE_param);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 381;
	        this.type();
	        this.state = 382;
	        this.paramName();
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



	paramName() {
	    let localctx = new ParamNameContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 38, HopperParser.RULE_paramName);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 384;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 201326624) !== 0) || _la===74)) {
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



	type() {
	    let localctx = new TypeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 40, HopperParser.RULE_type);
	    var _la = 0;
	    try {
	        this.state = 410;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 386;
	            this.match(HopperParser.T__44);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 387;
	            this.match(HopperParser.T__45);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 388;
	            this.match(HopperParser.T__46);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 389;
	            this.match(HopperParser.T__47);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 390;
	            this.match(HopperParser.T__48);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 391;
	            this.match(HopperParser.T__49);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 392;
	            this.match(HopperParser.T__4);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 393;
	            this.match(HopperParser.T__50);
	            this.state = 394;
	            this.match(HopperParser.T__44);
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 395;
	            this.match(HopperParser.T__50);
	            this.state = 396;
	            this.match(HopperParser.T__47);
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 397;
	            this.match(HopperParser.Identifier);
	            this.state = 398;
	            this.match(HopperParser.T__18);
	            this.state = 399;
	            this.type();
	            this.state = 404;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===20) {
	                this.state = 400;
	                this.match(HopperParser.T__19);
	                this.state = 401;
	                this.type();
	                this.state = 406;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 407;
	            this.match(HopperParser.T__20);
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 409;
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
	    this.enterRule(localctx, 42, HopperParser.RULE_block);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 412;
	        this.match(HopperParser.T__14);
	        this.state = 416;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===75) {
	            this.state = 413;
	            this.match(HopperParser.NEWLINE);
	            this.state = 418;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 437;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 738201632) !== 0) || ((((_la - 45)) & ~0x1f) === 0 && ((1 << (_la - 45)) & 1073343871) !== 0)) {
	            this.state = 419;
	            this.statement();
	            this.state = 428;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,40,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 421; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    do {
	                        this.state = 420;
	                        this.match(HopperParser.NEWLINE);
	                        this.state = 423; 
	                        this._errHandler.sync(this);
	                        _la = this._input.LA(1);
	                    } while(_la===75);
	                    this.state = 425;
	                    this.statement(); 
	                }
	                this.state = 430;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,40,this._ctx);
	            }

	            this.state = 434;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===75) {
	                this.state = 431;
	                this.match(HopperParser.NEWLINE);
	                this.state = 436;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 439;
	        this.match(HopperParser.T__15);
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
	    this.enterRule(localctx, 44, HopperParser.RULE_statement);
	    var _la = 0;
	    try {
	        this.state = 525;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,48,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ArrayDeclInitContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 441;
	            this.type();
	            this.state = 442;
	            this.match(HopperParser.Identifier);
	            this.state = 443;
	            this.match(HopperParser.T__41);
	            this.state = 444;
	            this.match(HopperParser.IntegerLiteral);
	            this.state = 445;
	            this.match(HopperParser.T__42);
	            this.state = 446;
	            this.match(HopperParser.T__2);
	            this.state = 447;
	            this.match(HopperParser.T__41);
	            this.state = 448;
	            this.argList();
	            this.state = 449;
	            this.match(HopperParser.T__42);
	            break;

	        case 2:
	            localctx = new ArrayDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 451;
	            this.type();
	            this.state = 452;
	            this.match(HopperParser.Identifier);
	            this.state = 453;
	            this.match(HopperParser.T__41);
	            this.state = 454;
	            this.match(HopperParser.IntegerLiteral);
	            this.state = 455;
	            this.match(HopperParser.T__42);
	            break;

	        case 3:
	            localctx = new VarDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 457;
	            this.type();
	            this.state = 458;
	            this.match(HopperParser.Identifier);
	            this.state = 459;
	            this.match(HopperParser.T__2);
	            this.state = 460;
	            this.expression();
	            break;

	        case 4:
	            localctx = new VarDeclNoInitContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 462;
	            this.type();
	            this.state = 463;
	            this.match(HopperParser.Identifier);
	            break;

	        case 5:
	            localctx = new ArrayAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 465;
	            this.match(HopperParser.Identifier);
	            this.state = 466;
	            this.match(HopperParser.T__41);
	            this.state = 467;
	            this.expression();
	            this.state = 468;
	            this.match(HopperParser.T__42);
	            this.state = 469;
	            this.match(HopperParser.T__2);
	            this.state = 470;
	            this.expression();
	            break;

	        case 6:
	            localctx = new AssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 472;
	            this.match(HopperParser.Identifier);
	            this.state = 473;
	            this.match(HopperParser.T__2);
	            this.state = 474;
	            this.expression();
	            break;

	        case 7:
	            localctx = new FieldAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 7);
	            this.state = 475;
	            this.match(HopperParser.Identifier);
	            this.state = 476;
	            this.match(HopperParser.T__51);
	            this.state = 477;
	            this.fieldName();
	            this.state = 478;
	            this.match(HopperParser.T__2);
	            this.state = 479;
	            this.expression();
	            break;

	        case 8:
	            localctx = new DerefAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 8);
	            this.state = 481;
	            this.match(HopperParser.Identifier);
	            this.state = 482;
	            this.match(HopperParser.T__3);
	            this.state = 483;
	            this.match(HopperParser.T__25);
	            this.state = 484;
	            this.match(HopperParser.T__2);
	            this.state = 485;
	            this.expression();
	            break;

	        case 9:
	            localctx = new ExprStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 9);
	            this.state = 486;
	            this.expression();
	            break;

	        case 10:
	            localctx = new IfStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 10);
	            this.state = 487;
	            this.match(HopperParser.T__52);
	            this.state = 488;
	            this.match(HopperParser.T__11);
	            this.state = 489;
	            this.expression();
	            this.state = 490;
	            this.match(HopperParser.T__12);
	            this.state = 491;
	            this.block();
	            this.state = 494;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===54) {
	                this.state = 492;
	                this.match(HopperParser.T__53);
	                this.state = 493;
	                this.block();
	            }

	            break;

	        case 11:
	            localctx = new WhileStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 11);
	            this.state = 496;
	            this.match(HopperParser.T__54);
	            this.state = 497;
	            this.match(HopperParser.T__11);
	            this.state = 498;
	            this.expression();
	            this.state = 499;
	            this.match(HopperParser.T__12);
	            this.state = 500;
	            this.block();
	            break;

	        case 12:
	            localctx = new ForStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 12);
	            this.state = 502;
	            this.match(HopperParser.T__55);
	            this.state = 503;
	            this.match(HopperParser.T__11);
	            this.state = 505;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5 || ((((_la - 45)) & ~0x1f) === 0 && ((1 << (_la - 45)) & 536871039) !== 0)) {
	                this.state = 504;
	                this.forInit();
	            }

	            this.state = 507;
	            this.match(HopperParser.T__56);
	            this.state = 509;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 738201632) !== 0) || ((((_la - 64)) & ~0x1f) === 0 && ((1 << (_la - 64)) & 2047) !== 0)) {
	                this.state = 508;
	                this.expression();
	            }

	            this.state = 511;
	            this.match(HopperParser.T__56);
	            this.state = 513;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===74) {
	                this.state = 512;
	                this.forUpdate();
	            }

	            this.state = 515;
	            this.match(HopperParser.T__12);
	            this.state = 516;
	            this.block();
	            break;

	        case 13:
	            localctx = new BreakStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 13);
	            this.state = 517;
	            this.match(HopperParser.T__57);
	            break;

	        case 14:
	            localctx = new ContinueStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 14);
	            this.state = 518;
	            this.match(HopperParser.T__58);
	            break;

	        case 15:
	            localctx = new ReturnStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 15);
	            this.state = 519;
	            this.match(HopperParser.T__59);
	            this.state = 521;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 738201632) !== 0) || ((((_la - 64)) & ~0x1f) === 0 && ((1 << (_la - 64)) & 2047) !== 0)) {
	                this.state = 520;
	                this.expression();
	            }

	            break;

	        case 16:
	            localctx = new DeferStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 16);
	            this.state = 523;
	            this.match(HopperParser.T__60);
	            this.state = 524;
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
	    this.enterRule(localctx, 46, HopperParser.RULE_forInit);
	    try {
	        this.state = 535;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,49,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ForInitDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 527;
	            this.type();
	            this.state = 528;
	            this.match(HopperParser.Identifier);
	            this.state = 529;
	            this.match(HopperParser.T__2);
	            this.state = 530;
	            this.expression();
	            break;

	        case 2:
	            localctx = new ForInitAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 532;
	            this.match(HopperParser.Identifier);
	            this.state = 533;
	            this.match(HopperParser.T__2);
	            this.state = 534;
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
	    this.enterRule(localctx, 48, HopperParser.RULE_forUpdate);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 537;
	        this.match(HopperParser.Identifier);
	        this.state = 538;
	        this.match(HopperParser.T__2);
	        this.state = 539;
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
	    this.enterRule(localctx, 50, HopperParser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 541;
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
	    this.enterRule(localctx, 52, HopperParser.RULE_logicalOr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 543;
	        this.logicalAnd();
	        this.state = 548;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===62) {
	            this.state = 544;
	            this.match(HopperParser.T__61);
	            this.state = 545;
	            this.logicalAnd();
	            this.state = 550;
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
	    this.enterRule(localctx, 54, HopperParser.RULE_logicalAnd);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 551;
	        this.bitwiseOr();
	        this.state = 556;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===63) {
	            this.state = 552;
	            this.match(HopperParser.T__62);
	            this.state = 553;
	            this.bitwiseOr();
	            this.state = 558;
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
	    this.enterRule(localctx, 56, HopperParser.RULE_bitwiseOr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 559;
	        this.bitwiseXor();
	        this.state = 564;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===38) {
	            this.state = 560;
	            this.match(HopperParser.T__37);
	            this.state = 561;
	            this.bitwiseXor();
	            this.state = 566;
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
	    this.enterRule(localctx, 58, HopperParser.RULE_bitwiseXor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 567;
	        this.bitwiseAnd();
	        this.state = 572;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===39) {
	            this.state = 568;
	            this.match(HopperParser.T__38);
	            this.state = 569;
	            this.bitwiseAnd();
	            this.state = 574;
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
	    this.enterRule(localctx, 60, HopperParser.RULE_bitwiseAnd);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 575;
	        this.equality();
	        this.state = 580;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===37) {
	            this.state = 576;
	            this.match(HopperParser.T__36);
	            this.state = 577;
	            this.equality();
	            this.state = 582;
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
	    this.enterRule(localctx, 62, HopperParser.RULE_equality);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 583;
	        this.relational();
	        this.state = 588;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===33 || _la===34) {
	            this.state = 584;
	            _la = this._input.LA(1);
	            if(!(_la===33 || _la===34)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 585;
	            this.relational();
	            this.state = 590;
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
	    this.enterRule(localctx, 64, HopperParser.RULE_relational);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 591;
	        this.shift();
	        this.state = 596;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 19)) & ~0x1f) === 0 && ((1 << (_la - 19)) & 196613) !== 0)) {
	            this.state = 592;
	            _la = this._input.LA(1);
	            if(!(((((_la - 19)) & ~0x1f) === 0 && ((1 << (_la - 19)) & 196613) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 593;
	            this.shift();
	            this.state = 598;
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
	    this.enterRule(localctx, 66, HopperParser.RULE_shift);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 599;
	        this.additive();
	        this.state = 604;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===40 || _la===41) {
	            this.state = 600;
	            _la = this._input.LA(1);
	            if(!(_la===40 || _la===41)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 601;
	            this.additive();
	            this.state = 606;
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
	    this.enterRule(localctx, 68, HopperParser.RULE_additive);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 607;
	        this.multiplicative();
	        this.state = 612;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28 || _la===29) {
	            this.state = 608;
	            _la = this._input.LA(1);
	            if(!(_la===28 || _la===29)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 609;
	            this.multiplicative();
	            this.state = 614;
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
	    this.enterRule(localctx, 70, HopperParser.RULE_multiplicative);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 615;
	        this.unary();
	        this.state = 620;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 30)) & ~0x1f) === 0 && ((1 << (_la - 30)) & 7) !== 0)) {
	            this.state = 616;
	            _la = this._input.LA(1);
	            if(!(((((_la - 30)) & ~0x1f) === 0 && ((1 << (_la - 30)) & 7) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 617;
	            this.unary();
	            this.state = 622;
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
	    this.enterRule(localctx, 72, HopperParser.RULE_unary);
	    var _la = 0;
	    try {
	        this.state = 628;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 29:
	        case 64:
	        case 65:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 623;
	            _la = this._input.LA(1);
	            if(!(_la===29 || _la===64 || _la===65)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 624;
	            this.unary();
	            break;
	        case 66:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 625;
	            this.match(HopperParser.T__65);
	            this.state = 626;
	            this.unary();
	            break;
	        case 5:
	        case 12:
	        case 26:
	        case 27:
	        case 67:
	        case 68:
	        case 69:
	        case 70:
	        case 71:
	        case 72:
	        case 73:
	        case 74:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 627;
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
	    this.enterRule(localctx, 74, HopperParser.RULE_primary);
	    var _la = 0;
	    try {
	        this.state = 683;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,63,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 630;
	            this.match(HopperParser.IntegerLiteral);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 631;
	            this.match(HopperParser.HexLiteral);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 632;
	            this.match(HopperParser.FloatLiteral);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 633;
	            this.match(HopperParser.StringLiteral);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 634;
	            this.match(HopperParser.T__66);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 635;
	            this.match(HopperParser.T__67);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 636;
	            this.match(HopperParser.T__68);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 637;
	            this.match(HopperParser.Identifier);
	            this.state = 638;
	            this.match(HopperParser.T__41);
	            this.state = 639;
	            this.expression();
	            this.state = 640;
	            this.match(HopperParser.T__42);
	            this.state = 641;
	            this.match(HopperParser.T__3);
	            this.state = 642;
	            this.match(HopperParser.T__4);
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 644;
	            this.match(HopperParser.Identifier);
	            this.state = 645;
	            this.match(HopperParser.T__3);
	            this.state = 646;
	            this.match(HopperParser.T__4);
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 647;
	            this.match(HopperParser.Identifier);
	            this.state = 648;
	            this.match(HopperParser.T__3);
	            this.state = 649;
	            this.match(HopperParser.T__25);
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 650;
	            this.match(HopperParser.Identifier);
	            this.state = 651;
	            this.match(HopperParser.T__3);
	            this.state = 652;
	            this.match(HopperParser.T__26);
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 653;
	            this.match(HopperParser.Identifier);
	            this.state = 654;
	            this.match(HopperParser.T__11);
	            this.state = 656;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 738201632) !== 0) || ((((_la - 64)) & ~0x1f) === 0 && ((1 << (_la - 64)) & 2047) !== 0)) {
	                this.state = 655;
	                this.argList();
	            }

	            this.state = 658;
	            this.match(HopperParser.T__12);
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 659;
	            this.match(HopperParser.Identifier);
	            this.state = 660;
	            this.match(HopperParser.T__51);
	            this.state = 661;
	            this.match(HopperParser.Identifier);
	            this.state = 662;
	            this.match(HopperParser.T__11);
	            this.state = 664;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 738201632) !== 0) || ((((_la - 64)) & ~0x1f) === 0 && ((1 << (_la - 64)) & 2047) !== 0)) {
	                this.state = 663;
	                this.argList();
	            }

	            this.state = 666;
	            this.match(HopperParser.T__12);
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 667;
	            this.match(HopperParser.Identifier);
	            this.state = 668;
	            this.match(HopperParser.T__41);
	            this.state = 669;
	            this.expression();
	            this.state = 670;
	            this.match(HopperParser.T__42);
	            break;

	        case 15:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 672;
	            this.match(HopperParser.Identifier);
	            this.state = 673;
	            this.match(HopperParser.T__51);
	            this.state = 674;
	            this.fieldName();
	            break;

	        case 16:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 675;
	            this.match(HopperParser.Identifier);
	            break;

	        case 17:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 676;
	            this.match(HopperParser.T__25);
	            break;

	        case 18:
	            this.enterOuterAlt(localctx, 18);
	            this.state = 677;
	            this.match(HopperParser.T__4);
	            break;

	        case 19:
	            this.enterOuterAlt(localctx, 19);
	            this.state = 678;
	            this.match(HopperParser.T__26);
	            break;

	        case 20:
	            this.enterOuterAlt(localctx, 20);
	            this.state = 679;
	            this.match(HopperParser.T__11);
	            this.state = 680;
	            this.expression();
	            this.state = 681;
	            this.match(HopperParser.T__12);
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
	    this.enterRule(localctx, 76, HopperParser.RULE_argList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 685;
	        this.expression();
	        this.state = 690;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===20) {
	            this.state = 686;
	            this.match(HopperParser.T__19);
	            this.state = 687;
	            this.expression();
	            this.state = 692;
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
	    this.enterRule(localctx, 78, HopperParser.RULE_literal);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 693;
	        _la = this._input.LA(1);
	        if(!(((((_la - 67)) & ~0x1f) === 0 && ((1 << (_la - 67)) & 123) !== 0))) {
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
HopperParser.T__63 = 64;
HopperParser.T__64 = 65;
HopperParser.T__65 = 66;
HopperParser.T__66 = 67;
HopperParser.T__67 = 68;
HopperParser.T__68 = 69;
HopperParser.IntegerLiteral = 70;
HopperParser.HexLiteral = 71;
HopperParser.FloatLiteral = 72;
HopperParser.StringLiteral = 73;
HopperParser.Identifier = 74;
HopperParser.NEWLINE = 75;
HopperParser.LINE_COMMENT = 76;
HopperParser.WS = 77;

HopperParser.RULE_program = 0;
HopperParser.RULE_topLevelDecl = 1;
HopperParser.RULE_importDecl = 2;
HopperParser.RULE_bindDecl = 3;
HopperParser.RULE_strictDecl = 4;
HopperParser.RULE_entryDecl = 5;
HopperParser.RULE_constDecl = 6;
HopperParser.RULE_aliasDecl = 7;
HopperParser.RULE_functionDecl = 8;
HopperParser.RULE_structDecl = 9;
HopperParser.RULE_structMember = 10;
HopperParser.RULE_templateDecl = 11;
HopperParser.RULE_classDecl = 12;
HopperParser.RULE_classMember = 13;
HopperParser.RULE_fieldName = 14;
HopperParser.RULE_operatorSymbol = 15;
HopperParser.RULE_paramList = 16;
HopperParser.RULE_externParamList = 17;
HopperParser.RULE_param = 18;
HopperParser.RULE_paramName = 19;
HopperParser.RULE_type = 20;
HopperParser.RULE_block = 21;
HopperParser.RULE_statement = 22;
HopperParser.RULE_forInit = 23;
HopperParser.RULE_forUpdate = 24;
HopperParser.RULE_expression = 25;
HopperParser.RULE_logicalOr = 26;
HopperParser.RULE_logicalAnd = 27;
HopperParser.RULE_bitwiseOr = 28;
HopperParser.RULE_bitwiseXor = 29;
HopperParser.RULE_bitwiseAnd = 30;
HopperParser.RULE_equality = 31;
HopperParser.RULE_relational = 32;
HopperParser.RULE_shift = 33;
HopperParser.RULE_additive = 34;
HopperParser.RULE_multiplicative = 35;
HopperParser.RULE_unary = 36;
HopperParser.RULE_primary = 37;
HopperParser.RULE_argList = 38;
HopperParser.RULE_literal = 39;

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

	templateDecl() {
	    return this.getTypedRuleContext(TemplateDeclContext,0);
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

	entryDecl() {
	    return this.getTypedRuleContext(EntryDeclContext,0);
	};

	bindDecl() {
	    return this.getTypedRuleContext(BindDeclContext,0);
	};

	strictDecl() {
	    return this.getTypedRuleContext(StrictDeclContext,0);
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



class BindDeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HopperParser.RULE_bindDecl;
    }

	HexLiteral() {
	    return this.getToken(HopperParser.HexLiteral, 0);
	};

	Identifier() {
	    return this.getToken(HopperParser.Identifier, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterBindDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitBindDecl(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitBindDecl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StrictDeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HopperParser.RULE_strictDecl;
    }

	type() {
	    return this.getTypedRuleContext(TypeContext,0);
	};

	Identifier() {
	    return this.getToken(HopperParser.Identifier, 0);
	};

	HexLiteral() {
	    return this.getToken(HopperParser.HexLiteral, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterStrictDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitStrictDecl(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitStrictDecl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class EntryDeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HopperParser.RULE_entryDecl;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class EntryAddrContext extends EntryDeclContext {

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
	        listener.enterEntryAddr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitEntryAddr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitEntryAddr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

HopperParser.EntryAddrContext = EntryAddrContext;

class EntryBlockContext extends EntryDeclContext {

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

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterEntryBlock(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitEntryBlock(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitEntryBlock(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

HopperParser.EntryBlockContext = EntryBlockContext;

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

class TemplateDeclContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HopperParser.RULE_templateDecl;
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
	        listener.enterTemplateDecl(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitTemplateDecl(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitTemplateDecl(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



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

	paramName() {
	    return this.getTypedRuleContext(ParamNameContext,0);
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



class ParamNameContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = HopperParser.RULE_paramName;
    }

	Identifier() {
	    return this.getToken(HopperParser.Identifier, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterParamName(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitParamName(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitParamName(this);
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

	type = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(TypeContext);
	    } else {
	        return this.getTypedRuleContext(TypeContext,i);
	    }
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

class ArrayDeclInitContext extends StatementContext {

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

	argList() {
	    return this.getTypedRuleContext(ArgListContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterArrayDeclInit(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitArrayDeclInit(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitArrayDeclInit(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

HopperParser.ArrayDeclInitContext = ArrayDeclInitContext;

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
HopperParser.BindDeclContext = BindDeclContext; 
HopperParser.StrictDeclContext = StrictDeclContext; 
HopperParser.EntryDeclContext = EntryDeclContext; 
HopperParser.ConstDeclContext = ConstDeclContext; 
HopperParser.AliasDeclContext = AliasDeclContext; 
HopperParser.FunctionDeclContext = FunctionDeclContext; 
HopperParser.StructDeclContext = StructDeclContext; 
HopperParser.StructMemberContext = StructMemberContext; 
HopperParser.TemplateDeclContext = TemplateDeclContext; 
HopperParser.ClassDeclContext = ClassDeclContext; 
HopperParser.ClassMemberContext = ClassMemberContext; 
HopperParser.FieldNameContext = FieldNameContext; 
HopperParser.OperatorSymbolContext = OperatorSymbolContext; 
HopperParser.ParamListContext = ParamListContext; 
HopperParser.ExternParamListContext = ExternParamListContext; 
HopperParser.ParamContext = ParamContext; 
HopperParser.ParamNameContext = ParamNameContext; 
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
