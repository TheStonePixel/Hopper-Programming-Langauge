// Generated from grammar/Hopper.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import HopperListener from './HopperListener.js';
import HopperVisitor from './HopperVisitor.js';

const serializedATN = [4,1,75,674,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,1,0,5,0,78,8,0,10,0,12,0,81,9,0,1,0,1,0,
5,0,85,8,0,10,0,12,0,88,9,0,5,0,90,8,0,10,0,12,0,93,9,0,1,0,1,0,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,106,8,1,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,
1,3,1,3,1,3,1,3,1,3,1,3,1,3,3,3,123,8,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,
132,8,4,1,5,1,5,1,5,1,5,1,5,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,3,7,
149,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,158,8,7,1,7,1,7,1,7,1,7,1,7,3,7,
165,8,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,1,7,3,7,175,8,7,1,7,1,7,3,7,179,8,7,
1,8,1,8,1,8,1,8,5,8,185,8,8,10,8,12,8,188,9,8,1,8,1,8,4,8,192,8,8,11,8,12,
8,193,1,8,5,8,197,8,8,10,8,12,8,200,9,8,1,8,5,8,203,8,8,10,8,12,8,206,9,
8,3,8,208,8,8,1,8,1,8,1,9,1,9,1,9,1,9,1,9,3,9,217,8,9,1,10,1,10,1,10,1,10,
1,10,1,10,5,10,225,8,10,10,10,12,10,228,9,10,1,10,1,10,1,10,5,10,233,8,10,
10,10,12,10,236,9,10,1,10,1,10,4,10,240,8,10,11,10,12,10,241,1,10,5,10,245,
8,10,10,10,12,10,248,9,10,1,10,5,10,251,8,10,10,10,12,10,254,9,10,3,10,256,
8,10,1,10,1,10,1,11,1,11,1,11,1,11,5,11,264,8,11,10,11,12,11,267,9,11,1,
11,1,11,4,11,271,8,11,11,11,12,11,272,1,11,5,11,276,8,11,10,11,12,11,279,
9,11,1,11,5,11,282,8,11,10,11,12,11,285,9,11,3,11,287,8,11,1,11,1,11,1,12,
1,12,1,12,1,12,1,12,1,12,1,12,3,12,298,8,12,1,12,1,12,1,12,1,12,1,12,1,12,
1,12,1,12,3,12,308,8,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,
1,12,1,12,1,12,3,12,323,8,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,331,8,12,
1,13,1,13,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,
14,1,14,1,14,1,14,1,14,1,14,3,14,353,8,14,1,15,1,15,1,15,5,15,358,8,15,10,
15,12,15,361,9,15,1,16,1,16,1,16,5,16,366,8,16,10,16,12,16,369,9,16,1,16,
1,16,3,16,373,8,16,1,16,3,16,376,8,16,1,17,1,17,1,17,1,18,1,18,1,18,1,18,
1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,5,18,396,8,18,10,
18,12,18,399,9,18,1,18,1,18,1,18,3,18,404,8,18,1,19,1,19,5,19,408,8,19,10,
19,12,19,411,9,19,1,19,1,19,4,19,415,8,19,11,19,12,19,416,1,19,5,19,420,
8,19,10,19,12,19,423,9,19,1,19,5,19,426,8,19,10,19,12,19,429,9,19,3,19,431,
8,19,1,19,1,19,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,
20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,
1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,
20,1,20,1,20,3,20,478,8,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,
3,20,489,8,20,1,20,1,20,3,20,493,8,20,1,20,1,20,3,20,497,8,20,1,20,1,20,
1,20,1,20,1,20,1,20,3,20,505,8,20,1,20,1,20,3,20,509,8,20,1,21,1,21,1,21,
1,21,1,21,1,21,1,21,1,21,3,21,519,8,21,1,22,1,22,1,22,1,22,1,23,1,23,1,24,
1,24,1,24,5,24,530,8,24,10,24,12,24,533,9,24,1,25,1,25,1,25,5,25,538,8,25,
10,25,12,25,541,9,25,1,26,1,26,1,26,5,26,546,8,26,10,26,12,26,549,9,26,1,
27,1,27,1,27,5,27,554,8,27,10,27,12,27,557,9,27,1,28,1,28,1,28,5,28,562,
8,28,10,28,12,28,565,9,28,1,29,1,29,1,29,5,29,570,8,29,10,29,12,29,573,9,
29,1,30,1,30,1,30,5,30,578,8,30,10,30,12,30,581,9,30,1,31,1,31,1,31,5,31,
586,8,31,10,31,12,31,589,9,31,1,32,1,32,1,32,5,32,594,8,32,10,32,12,32,597,
9,32,1,33,1,33,1,33,5,33,602,8,33,10,33,12,33,605,9,33,1,34,1,34,1,34,1,
34,1,34,3,34,612,8,34,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,
1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,3,
35,638,8,35,1,35,1,35,1,35,1,35,1,35,1,35,3,35,646,8,35,1,35,1,35,1,35,1,
35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,3,35,662,8,35,1,36,
1,36,1,36,5,36,667,8,36,10,36,12,36,670,9,36,1,37,1,37,1,37,0,0,38,0,2,4,
6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,
56,58,60,62,64,66,68,70,72,74,0,8,3,0,5,5,25,25,72,72,1,0,31,32,3,0,18,18,
20,20,33,34,1,0,38,39,1,0,26,27,1,0,28,30,2,0,27,27,61,62,2,0,64,65,67,70,
766,0,79,1,0,0,0,2,105,1,0,0,0,4,107,1,0,0,0,6,122,1,0,0,0,8,131,1,0,0,0,
10,133,1,0,0,0,12,138,1,0,0,0,14,178,1,0,0,0,16,180,1,0,0,0,18,216,1,0,0,
0,20,218,1,0,0,0,22,259,1,0,0,0,24,330,1,0,0,0,26,332,1,0,0,0,28,352,1,0,
0,0,30,354,1,0,0,0,32,375,1,0,0,0,34,377,1,0,0,0,36,403,1,0,0,0,38,405,1,
0,0,0,40,508,1,0,0,0,42,518,1,0,0,0,44,520,1,0,0,0,46,524,1,0,0,0,48,526,
1,0,0,0,50,534,1,0,0,0,52,542,1,0,0,0,54,550,1,0,0,0,56,558,1,0,0,0,58,566,
1,0,0,0,60,574,1,0,0,0,62,582,1,0,0,0,64,590,1,0,0,0,66,598,1,0,0,0,68,611,
1,0,0,0,70,661,1,0,0,0,72,663,1,0,0,0,74,671,1,0,0,0,76,78,5,73,0,0,77,76,
1,0,0,0,78,81,1,0,0,0,79,77,1,0,0,0,79,80,1,0,0,0,80,91,1,0,0,0,81,79,1,
0,0,0,82,86,3,2,1,0,83,85,5,73,0,0,84,83,1,0,0,0,85,88,1,0,0,0,86,84,1,0,
0,0,86,87,1,0,0,0,87,90,1,0,0,0,88,86,1,0,0,0,89,82,1,0,0,0,90,93,1,0,0,
0,91,89,1,0,0,0,91,92,1,0,0,0,92,94,1,0,0,0,93,91,1,0,0,0,94,95,5,0,0,1,
95,1,1,0,0,0,96,106,3,14,7,0,97,106,3,16,8,0,98,106,3,22,11,0,99,106,3,20,
10,0,100,106,3,10,5,0,101,106,3,4,2,0,102,106,3,12,6,0,103,106,3,8,4,0,104,
106,3,6,3,0,105,96,1,0,0,0,105,97,1,0,0,0,105,98,1,0,0,0,105,99,1,0,0,0,
105,100,1,0,0,0,105,101,1,0,0,0,105,102,1,0,0,0,105,103,1,0,0,0,105,104,
1,0,0,0,106,3,1,0,0,0,107,108,5,1,0,0,108,109,5,70,0,0,109,5,1,0,0,0,110,
111,5,2,0,0,111,112,5,68,0,0,112,113,5,3,0,0,113,114,5,72,0,0,114,115,5,
4,0,0,115,123,5,5,0,0,116,117,5,2,0,0,117,118,3,36,18,0,118,119,5,72,0,0,
119,120,5,3,0,0,120,121,5,68,0,0,121,123,1,0,0,0,122,110,1,0,0,0,122,116,
1,0,0,0,123,7,1,0,0,0,124,125,5,6,0,0,125,126,5,72,0,0,126,132,3,38,19,0,
127,128,5,6,0,0,128,129,5,72,0,0,129,130,5,3,0,0,130,132,3,46,23,0,131,124,
1,0,0,0,131,127,1,0,0,0,132,9,1,0,0,0,133,134,5,7,0,0,134,135,5,72,0,0,135,
136,5,3,0,0,136,137,3,74,37,0,137,11,1,0,0,0,138,139,5,8,0,0,139,140,5,72,
0,0,140,141,5,3,0,0,141,142,3,36,18,0,142,13,1,0,0,0,143,144,5,9,0,0,144,
145,5,10,0,0,145,146,5,72,0,0,146,148,5,11,0,0,147,149,3,32,16,0,148,147,
1,0,0,0,148,149,1,0,0,0,149,150,1,0,0,0,150,151,5,12,0,0,151,179,3,36,18,
0,152,153,5,9,0,0,153,154,5,10,0,0,154,155,5,72,0,0,155,157,5,11,0,0,156,
158,3,32,16,0,157,156,1,0,0,0,157,158,1,0,0,0,158,159,1,0,0,0,159,179,5,
12,0,0,160,161,5,10,0,0,161,162,5,72,0,0,162,164,5,11,0,0,163,165,3,30,15,
0,164,163,1,0,0,0,164,165,1,0,0,0,165,166,1,0,0,0,166,167,5,12,0,0,167,168,
3,36,18,0,168,169,3,38,19,0,169,179,1,0,0,0,170,171,5,10,0,0,171,172,5,72,
0,0,172,174,5,11,0,0,173,175,3,30,15,0,174,173,1,0,0,0,174,175,1,0,0,0,175,
176,1,0,0,0,176,177,5,12,0,0,177,179,3,38,19,0,178,143,1,0,0,0,178,152,1,
0,0,0,178,160,1,0,0,0,178,170,1,0,0,0,179,15,1,0,0,0,180,181,5,13,0,0,181,
182,5,72,0,0,182,186,5,14,0,0,183,185,5,73,0,0,184,183,1,0,0,0,185,188,1,
0,0,0,186,184,1,0,0,0,186,187,1,0,0,0,187,207,1,0,0,0,188,186,1,0,0,0,189,
198,3,18,9,0,190,192,5,73,0,0,191,190,1,0,0,0,192,193,1,0,0,0,193,191,1,
0,0,0,193,194,1,0,0,0,194,195,1,0,0,0,195,197,3,18,9,0,196,191,1,0,0,0,197,
200,1,0,0,0,198,196,1,0,0,0,198,199,1,0,0,0,199,204,1,0,0,0,200,198,1,0,
0,0,201,203,5,73,0,0,202,201,1,0,0,0,203,206,1,0,0,0,204,202,1,0,0,0,204,
205,1,0,0,0,205,208,1,0,0,0,206,204,1,0,0,0,207,189,1,0,0,0,207,208,1,0,
0,0,208,209,1,0,0,0,209,210,5,15,0,0,210,17,1,0,0,0,211,212,3,36,18,0,212,
213,3,26,13,0,213,217,1,0,0,0,214,215,5,16,0,0,215,217,5,67,0,0,216,211,
1,0,0,0,216,214,1,0,0,0,217,19,1,0,0,0,218,219,5,17,0,0,219,220,5,72,0,0,
220,221,5,18,0,0,221,226,5,72,0,0,222,223,5,19,0,0,223,225,5,72,0,0,224,
222,1,0,0,0,225,228,1,0,0,0,226,224,1,0,0,0,226,227,1,0,0,0,227,229,1,0,
0,0,228,226,1,0,0,0,229,230,5,20,0,0,230,234,5,14,0,0,231,233,5,73,0,0,232,
231,1,0,0,0,233,236,1,0,0,0,234,232,1,0,0,0,234,235,1,0,0,0,235,255,1,0,
0,0,236,234,1,0,0,0,237,246,3,24,12,0,238,240,5,73,0,0,239,238,1,0,0,0,240,
241,1,0,0,0,241,239,1,0,0,0,241,242,1,0,0,0,242,243,1,0,0,0,243,245,3,24,
12,0,244,239,1,0,0,0,245,248,1,0,0,0,246,244,1,0,0,0,246,247,1,0,0,0,247,
252,1,0,0,0,248,246,1,0,0,0,249,251,5,73,0,0,250,249,1,0,0,0,251,254,1,0,
0,0,252,250,1,0,0,0,252,253,1,0,0,0,253,256,1,0,0,0,254,252,1,0,0,0,255,
237,1,0,0,0,255,256,1,0,0,0,256,257,1,0,0,0,257,258,5,15,0,0,258,21,1,0,
0,0,259,260,5,21,0,0,260,261,5,72,0,0,261,265,5,14,0,0,262,264,5,73,0,0,
263,262,1,0,0,0,264,267,1,0,0,0,265,263,1,0,0,0,265,266,1,0,0,0,266,286,
1,0,0,0,267,265,1,0,0,0,268,277,3,24,12,0,269,271,5,73,0,0,270,269,1,0,0,
0,271,272,1,0,0,0,272,270,1,0,0,0,272,273,1,0,0,0,273,274,1,0,0,0,274,276,
3,24,12,0,275,270,1,0,0,0,276,279,1,0,0,0,277,275,1,0,0,0,277,278,1,0,0,
0,278,283,1,0,0,0,279,277,1,0,0,0,280,282,5,73,0,0,281,280,1,0,0,0,282,285,
1,0,0,0,283,281,1,0,0,0,283,284,1,0,0,0,284,287,1,0,0,0,285,283,1,0,0,0,
286,268,1,0,0,0,286,287,1,0,0,0,287,288,1,0,0,0,288,289,5,15,0,0,289,23,
1,0,0,0,290,291,3,36,18,0,291,292,3,26,13,0,292,331,1,0,0,0,293,294,5,10,
0,0,294,295,5,72,0,0,295,297,5,11,0,0,296,298,3,30,15,0,297,296,1,0,0,0,
297,298,1,0,0,0,298,299,1,0,0,0,299,300,5,12,0,0,300,301,3,36,18,0,301,302,
3,38,19,0,302,331,1,0,0,0,303,304,5,10,0,0,304,305,5,72,0,0,305,307,5,11,
0,0,306,308,3,30,15,0,307,306,1,0,0,0,307,308,1,0,0,0,308,309,1,0,0,0,309,
310,5,12,0,0,310,331,3,38,19,0,311,312,5,22,0,0,312,313,3,28,14,0,313,314,
5,11,0,0,314,315,3,34,17,0,315,316,5,12,0,0,316,317,3,36,18,0,317,318,3,
38,19,0,318,331,1,0,0,0,319,320,5,23,0,0,320,322,5,11,0,0,321,323,3,30,15,
0,322,321,1,0,0,0,322,323,1,0,0,0,323,324,1,0,0,0,324,325,5,12,0,0,325,331,
3,38,19,0,326,327,5,24,0,0,327,328,5,11,0,0,328,329,5,12,0,0,329,331,3,38,
19,0,330,290,1,0,0,0,330,293,1,0,0,0,330,303,1,0,0,0,330,311,1,0,0,0,330,
319,1,0,0,0,330,326,1,0,0,0,331,25,1,0,0,0,332,333,7,0,0,0,333,27,1,0,0,
0,334,353,5,26,0,0,335,353,5,27,0,0,336,353,5,28,0,0,337,353,5,29,0,0,338,
353,5,30,0,0,339,353,5,31,0,0,340,353,5,32,0,0,341,353,5,18,0,0,342,353,
5,33,0,0,343,353,5,20,0,0,344,353,5,34,0,0,345,353,5,35,0,0,346,353,5,36,
0,0,347,353,5,37,0,0,348,353,5,38,0,0,349,353,5,39,0,0,350,351,5,40,0,0,
351,353,5,41,0,0,352,334,1,0,0,0,352,335,1,0,0,0,352,336,1,0,0,0,352,337,
1,0,0,0,352,338,1,0,0,0,352,339,1,0,0,0,352,340,1,0,0,0,352,341,1,0,0,0,
352,342,1,0,0,0,352,343,1,0,0,0,352,344,1,0,0,0,352,345,1,0,0,0,352,346,
1,0,0,0,352,347,1,0,0,0,352,348,1,0,0,0,352,349,1,0,0,0,352,350,1,0,0,0,
353,29,1,0,0,0,354,359,3,34,17,0,355,356,5,19,0,0,356,358,3,34,17,0,357,
355,1,0,0,0,358,361,1,0,0,0,359,357,1,0,0,0,359,360,1,0,0,0,360,31,1,0,0,
0,361,359,1,0,0,0,362,367,3,34,17,0,363,364,5,19,0,0,364,366,3,34,17,0,365,
363,1,0,0,0,366,369,1,0,0,0,367,365,1,0,0,0,367,368,1,0,0,0,368,372,1,0,
0,0,369,367,1,0,0,0,370,371,5,19,0,0,371,373,5,42,0,0,372,370,1,0,0,0,372,
373,1,0,0,0,373,376,1,0,0,0,374,376,5,42,0,0,375,362,1,0,0,0,375,374,1,0,
0,0,376,33,1,0,0,0,377,378,3,36,18,0,378,379,5,72,0,0,379,35,1,0,0,0,380,
404,5,43,0,0,381,404,5,44,0,0,382,404,5,45,0,0,383,404,5,46,0,0,384,404,
5,47,0,0,385,404,5,5,0,0,386,387,5,48,0,0,387,404,5,43,0,0,388,389,5,48,
0,0,389,404,5,46,0,0,390,391,5,72,0,0,391,392,5,18,0,0,392,397,3,36,18,0,
393,394,5,19,0,0,394,396,3,36,18,0,395,393,1,0,0,0,396,399,1,0,0,0,397,395,
1,0,0,0,397,398,1,0,0,0,398,400,1,0,0,0,399,397,1,0,0,0,400,401,5,20,0,0,
401,404,1,0,0,0,402,404,5,72,0,0,403,380,1,0,0,0,403,381,1,0,0,0,403,382,
1,0,0,0,403,383,1,0,0,0,403,384,1,0,0,0,403,385,1,0,0,0,403,386,1,0,0,0,
403,388,1,0,0,0,403,390,1,0,0,0,403,402,1,0,0,0,404,37,1,0,0,0,405,409,5,
14,0,0,406,408,5,73,0,0,407,406,1,0,0,0,408,411,1,0,0,0,409,407,1,0,0,0,
409,410,1,0,0,0,410,430,1,0,0,0,411,409,1,0,0,0,412,421,3,40,20,0,413,415,
5,73,0,0,414,413,1,0,0,0,415,416,1,0,0,0,416,414,1,0,0,0,416,417,1,0,0,0,
417,418,1,0,0,0,418,420,3,40,20,0,419,414,1,0,0,0,420,423,1,0,0,0,421,419,
1,0,0,0,421,422,1,0,0,0,422,427,1,0,0,0,423,421,1,0,0,0,424,426,5,73,0,0,
425,424,1,0,0,0,426,429,1,0,0,0,427,425,1,0,0,0,427,428,1,0,0,0,428,431,
1,0,0,0,429,427,1,0,0,0,430,412,1,0,0,0,430,431,1,0,0,0,431,432,1,0,0,0,
432,433,5,15,0,0,433,39,1,0,0,0,434,435,3,36,18,0,435,436,5,72,0,0,436,437,
5,40,0,0,437,438,5,67,0,0,438,439,5,41,0,0,439,509,1,0,0,0,440,441,3,36,
18,0,441,442,5,72,0,0,442,443,5,3,0,0,443,444,3,46,23,0,444,509,1,0,0,0,
445,446,3,36,18,0,446,447,5,72,0,0,447,509,1,0,0,0,448,449,5,72,0,0,449,
450,5,40,0,0,450,451,3,46,23,0,451,452,5,41,0,0,452,453,5,3,0,0,453,454,
3,46,23,0,454,509,1,0,0,0,455,456,5,72,0,0,456,457,5,3,0,0,457,509,3,46,
23,0,458,459,5,72,0,0,459,460,5,49,0,0,460,461,3,26,13,0,461,462,5,3,0,0,
462,463,3,46,23,0,463,509,1,0,0,0,464,465,5,72,0,0,465,466,5,4,0,0,466,467,
5,25,0,0,467,468,5,3,0,0,468,509,3,46,23,0,469,509,3,46,23,0,470,471,5,50,
0,0,471,472,5,11,0,0,472,473,3,46,23,0,473,474,5,12,0,0,474,477,3,38,19,
0,475,476,5,51,0,0,476,478,3,38,19,0,477,475,1,0,0,0,477,478,1,0,0,0,478,
509,1,0,0,0,479,480,5,52,0,0,480,481,5,11,0,0,481,482,3,46,23,0,482,483,
5,12,0,0,483,484,3,38,19,0,484,509,1,0,0,0,485,486,5,53,0,0,486,488,5,11,
0,0,487,489,3,42,21,0,488,487,1,0,0,0,488,489,1,0,0,0,489,490,1,0,0,0,490,
492,5,54,0,0,491,493,3,46,23,0,492,491,1,0,0,0,492,493,1,0,0,0,493,494,1,
0,0,0,494,496,5,54,0,0,495,497,3,44,22,0,496,495,1,0,0,0,496,497,1,0,0,0,
497,498,1,0,0,0,498,499,5,12,0,0,499,509,3,38,19,0,500,509,5,55,0,0,501,
509,5,56,0,0,502,504,5,57,0,0,503,505,3,46,23,0,504,503,1,0,0,0,504,505,
1,0,0,0,505,509,1,0,0,0,506,507,5,58,0,0,507,509,3,46,23,0,508,434,1,0,0,
0,508,440,1,0,0,0,508,445,1,0,0,0,508,448,1,0,0,0,508,455,1,0,0,0,508,458,
1,0,0,0,508,464,1,0,0,0,508,469,1,0,0,0,508,470,1,0,0,0,508,479,1,0,0,0,
508,485,1,0,0,0,508,500,1,0,0,0,508,501,1,0,0,0,508,502,1,0,0,0,508,506,
1,0,0,0,509,41,1,0,0,0,510,511,3,36,18,0,511,512,5,72,0,0,512,513,5,3,0,
0,513,514,3,46,23,0,514,519,1,0,0,0,515,516,5,72,0,0,516,517,5,3,0,0,517,
519,3,46,23,0,518,510,1,0,0,0,518,515,1,0,0,0,519,43,1,0,0,0,520,521,5,72,
0,0,521,522,5,3,0,0,522,523,3,46,23,0,523,45,1,0,0,0,524,525,3,48,24,0,525,
47,1,0,0,0,526,531,3,50,25,0,527,528,5,59,0,0,528,530,3,50,25,0,529,527,
1,0,0,0,530,533,1,0,0,0,531,529,1,0,0,0,531,532,1,0,0,0,532,49,1,0,0,0,533,
531,1,0,0,0,534,539,3,52,26,0,535,536,5,60,0,0,536,538,3,52,26,0,537,535,
1,0,0,0,538,541,1,0,0,0,539,537,1,0,0,0,539,540,1,0,0,0,540,51,1,0,0,0,541,
539,1,0,0,0,542,547,3,54,27,0,543,544,5,36,0,0,544,546,3,54,27,0,545,543,
1,0,0,0,546,549,1,0,0,0,547,545,1,0,0,0,547,548,1,0,0,0,548,53,1,0,0,0,549,
547,1,0,0,0,550,555,3,56,28,0,551,552,5,37,0,0,552,554,3,56,28,0,553,551,
1,0,0,0,554,557,1,0,0,0,555,553,1,0,0,0,555,556,1,0,0,0,556,55,1,0,0,0,557,
555,1,0,0,0,558,563,3,58,29,0,559,560,5,35,0,0,560,562,3,58,29,0,561,559,
1,0,0,0,562,565,1,0,0,0,563,561,1,0,0,0,563,564,1,0,0,0,564,57,1,0,0,0,565,
563,1,0,0,0,566,571,3,60,30,0,567,568,7,1,0,0,568,570,3,60,30,0,569,567,
1,0,0,0,570,573,1,0,0,0,571,569,1,0,0,0,571,572,1,0,0,0,572,59,1,0,0,0,573,
571,1,0,0,0,574,579,3,62,31,0,575,576,7,2,0,0,576,578,3,62,31,0,577,575,
1,0,0,0,578,581,1,0,0,0,579,577,1,0,0,0,579,580,1,0,0,0,580,61,1,0,0,0,581,
579,1,0,0,0,582,587,3,64,32,0,583,584,7,3,0,0,584,586,3,64,32,0,585,583,
1,0,0,0,586,589,1,0,0,0,587,585,1,0,0,0,587,588,1,0,0,0,588,63,1,0,0,0,589,
587,1,0,0,0,590,595,3,66,33,0,591,592,7,4,0,0,592,594,3,66,33,0,593,591,
1,0,0,0,594,597,1,0,0,0,595,593,1,0,0,0,595,596,1,0,0,0,596,65,1,0,0,0,597,
595,1,0,0,0,598,603,3,68,34,0,599,600,7,5,0,0,600,602,3,68,34,0,601,599,
1,0,0,0,602,605,1,0,0,0,603,601,1,0,0,0,603,604,1,0,0,0,604,67,1,0,0,0,605,
603,1,0,0,0,606,607,7,6,0,0,607,612,3,68,34,0,608,609,5,63,0,0,609,612,3,
68,34,0,610,612,3,70,35,0,611,606,1,0,0,0,611,608,1,0,0,0,611,610,1,0,0,
0,612,69,1,0,0,0,613,662,5,67,0,0,614,662,5,68,0,0,615,662,5,69,0,0,616,
662,5,70,0,0,617,662,5,71,0,0,618,662,5,64,0,0,619,662,5,65,0,0,620,662,
5,66,0,0,621,622,5,72,0,0,622,623,5,40,0,0,623,624,3,46,23,0,624,625,5,41,
0,0,625,626,5,4,0,0,626,627,5,5,0,0,627,662,1,0,0,0,628,629,5,72,0,0,629,
630,5,4,0,0,630,662,5,5,0,0,631,632,5,72,0,0,632,633,5,4,0,0,633,662,5,25,
0,0,634,635,5,72,0,0,635,637,5,11,0,0,636,638,3,72,36,0,637,636,1,0,0,0,
637,638,1,0,0,0,638,639,1,0,0,0,639,662,5,12,0,0,640,641,5,72,0,0,641,642,
5,49,0,0,642,643,5,72,0,0,643,645,5,11,0,0,644,646,3,72,36,0,645,644,1,0,
0,0,645,646,1,0,0,0,646,647,1,0,0,0,647,662,5,12,0,0,648,649,5,72,0,0,649,
650,5,40,0,0,650,651,3,46,23,0,651,652,5,41,0,0,652,662,1,0,0,0,653,654,
5,72,0,0,654,655,5,49,0,0,655,662,3,26,13,0,656,662,5,72,0,0,657,658,5,11,
0,0,658,659,3,46,23,0,659,660,5,12,0,0,660,662,1,0,0,0,661,613,1,0,0,0,661,
614,1,0,0,0,661,615,1,0,0,0,661,616,1,0,0,0,661,617,1,0,0,0,661,618,1,0,
0,0,661,619,1,0,0,0,661,620,1,0,0,0,661,621,1,0,0,0,661,628,1,0,0,0,661,
631,1,0,0,0,661,634,1,0,0,0,661,640,1,0,0,0,661,648,1,0,0,0,661,653,1,0,
0,0,661,656,1,0,0,0,661,657,1,0,0,0,662,71,1,0,0,0,663,668,3,46,23,0,664,
665,5,19,0,0,665,667,3,46,23,0,666,664,1,0,0,0,667,670,1,0,0,0,668,666,1,
0,0,0,668,669,1,0,0,0,669,73,1,0,0,0,670,668,1,0,0,0,671,672,7,7,0,0,672,
75,1,0,0,0,66,79,86,91,105,122,131,148,157,164,174,178,186,193,198,204,207,
216,226,234,241,246,252,255,265,272,277,283,286,297,307,322,330,352,359,
367,372,375,397,403,409,416,421,427,430,477,488,492,496,504,508,518,531,
539,547,555,563,571,579,587,595,603,611,637,645,661,668];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class HopperParser extends antlr4.Parser {

    static grammarFileName = "Hopper.g4";
    static literalNames = [ null, "'import'", "'bind'", "'='", "'::'", "'address'", 
                            "'entry'", "'const'", "'alias'", "'extern'", 
                            "'function'", "'('", "')'", "'struct'", "'{'", 
                            "'}'", "'pad'", "'template'", "'<'", "','", 
                            "'>'", "'class'", "'operator'", "'constructor'", 
                            "'destructor'", "'value'", "'+'", "'-'", "'*'", 
                            "'/'", "'%'", "'=='", "'!='", "'<='", "'>='", 
                            "'&'", "'|'", "'^'", "'<<'", "'>>'", "'['", 
                            "']'", "'...'", "'int'", "'bool'", "'float'", 
                            "'byte'", "'String'", "'unsigned'", "'.'", "'if'", 
                            "'else'", "'while'", "'for'", "';'", "'break'", 
                            "'continue'", "'return'", "'defer'", "'||'", 
                            "'&&'", "'!'", "'~'", "'cast'", "'true'", "'false'", 
                            "'null'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, "IntegerLiteral", "HexLiteral", 
                             "FloatLiteral", "StringLiteral", "CharLiteral", 
                             "Identifier", "NEWLINE", "LINE_COMMENT", "WS" ];
    static ruleNames = [ "program", "topLevelDecl", "importDecl", "bindDecl", 
                         "entryDecl", "constDecl", "aliasDecl", "functionDecl", 
                         "structDecl", "structMember", "templateDecl", "classDecl", 
                         "classMember", "fieldName", "operatorSymbol", "paramList", 
                         "externParamList", "param", "type", "block", "statement", 
                         "forInit", "forUpdate", "expression", "logicalOr", 
                         "logicalAnd", "bitwiseOr", "bitwiseXor", "bitwiseAnd", 
                         "equality", "relational", "shift", "additive", 
                         "multiplicative", "unary", "primary", "argList", 
                         "literal" ];

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
	        this.state = 79;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===73) {
	            this.state = 76;
	            this.match(HopperParser.NEWLINE);
	            this.state = 81;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 91;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 2238406) !== 0)) {
	            this.state = 82;
	            this.topLevelDecl();
	            this.state = 86;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===73) {
	                this.state = 83;
	                this.match(HopperParser.NEWLINE);
	                this.state = 88;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 93;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 94;
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
	        this.state = 105;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 9:
	        case 10:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 96;
	            this.functionDecl();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 97;
	            this.structDecl();
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 98;
	            this.classDecl();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 99;
	            this.templateDecl();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 100;
	            this.constDecl();
	            break;
	        case 1:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 101;
	            this.importDecl();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 102;
	            this.aliasDecl();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 103;
	            this.entryDecl();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 104;
	            this.bindDecl();
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
	        this.state = 107;
	        this.match(HopperParser.T__0);
	        this.state = 108;
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
	        this.state = 122;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new BindVectorContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 110;
	            this.match(HopperParser.T__1);
	            this.state = 111;
	            this.match(HopperParser.HexLiteral);
	            this.state = 112;
	            this.match(HopperParser.T__2);
	            this.state = 113;
	            this.match(HopperParser.Identifier);
	            this.state = 114;
	            this.match(HopperParser.T__3);
	            this.state = 115;
	            this.match(HopperParser.T__4);
	            break;

	        case 2:
	            localctx = new BindMMIOContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 116;
	            this.match(HopperParser.T__1);
	            this.state = 117;
	            this.type();
	            this.state = 118;
	            this.match(HopperParser.Identifier);
	            this.state = 119;
	            this.match(HopperParser.T__2);
	            this.state = 120;
	            this.match(HopperParser.HexLiteral);
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



	entryDecl() {
	    let localctx = new EntryDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, HopperParser.RULE_entryDecl);
	    try {
	        this.state = 131;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new EntryBlockContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 124;
	            this.match(HopperParser.T__5);
	            this.state = 125;
	            this.match(HopperParser.Identifier);
	            this.state = 126;
	            this.block();
	            break;

	        case 2:
	            localctx = new EntryAddrContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 127;
	            this.match(HopperParser.T__5);
	            this.state = 128;
	            this.match(HopperParser.Identifier);
	            this.state = 129;
	            this.match(HopperParser.T__2);
	            this.state = 130;
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
	    this.enterRule(localctx, 10, HopperParser.RULE_constDecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 133;
	        this.match(HopperParser.T__6);
	        this.state = 134;
	        this.match(HopperParser.Identifier);
	        this.state = 135;
	        this.match(HopperParser.T__2);
	        this.state = 136;
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
	    this.enterRule(localctx, 12, HopperParser.RULE_aliasDecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 138;
	        this.match(HopperParser.T__7);
	        this.state = 139;
	        this.match(HopperParser.Identifier);
	        this.state = 140;
	        this.match(HopperParser.T__2);
	        this.state = 141;
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
	    this.enterRule(localctx, 14, HopperParser.RULE_functionDecl);
	    var _la = 0;
	    try {
	        this.state = 178;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,10,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ExternFuncDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 143;
	            this.match(HopperParser.T__8);
	            this.state = 144;
	            this.match(HopperParser.T__9);
	            this.state = 145;
	            this.match(HopperParser.Identifier);
	            this.state = 146;
	            this.match(HopperParser.T__10);
	            this.state = 148;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5 || ((((_la - 42)) & ~0x1f) === 0 && ((1 << (_la - 42)) & 1073741951) !== 0)) {
	                this.state = 147;
	                this.externParamList();
	            }

	            this.state = 150;
	            this.match(HopperParser.T__11);
	            this.state = 151;
	            this.type();
	            break;

	        case 2:
	            localctx = new ExternProcDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 152;
	            this.match(HopperParser.T__8);
	            this.state = 153;
	            this.match(HopperParser.T__9);
	            this.state = 154;
	            this.match(HopperParser.Identifier);
	            this.state = 155;
	            this.match(HopperParser.T__10);
	            this.state = 157;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5 || ((((_la - 42)) & ~0x1f) === 0 && ((1 << (_la - 42)) & 1073741951) !== 0)) {
	                this.state = 156;
	                this.externParamList();
	            }

	            this.state = 159;
	            this.match(HopperParser.T__11);
	            break;

	        case 3:
	            localctx = new FuncDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 160;
	            this.match(HopperParser.T__9);
	            this.state = 161;
	            this.match(HopperParser.Identifier);
	            this.state = 162;
	            this.match(HopperParser.T__10);
	            this.state = 164;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5 || ((((_la - 43)) & ~0x1f) === 0 && ((1 << (_la - 43)) & 536870975) !== 0)) {
	                this.state = 163;
	                this.paramList();
	            }

	            this.state = 166;
	            this.match(HopperParser.T__11);
	            this.state = 167;
	            this.type();
	            this.state = 168;
	            this.block();
	            break;

	        case 4:
	            localctx = new ProcDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 170;
	            this.match(HopperParser.T__9);
	            this.state = 171;
	            this.match(HopperParser.Identifier);
	            this.state = 172;
	            this.match(HopperParser.T__10);
	            this.state = 174;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5 || ((((_la - 43)) & ~0x1f) === 0 && ((1 << (_la - 43)) & 536870975) !== 0)) {
	                this.state = 173;
	                this.paramList();
	            }

	            this.state = 176;
	            this.match(HopperParser.T__11);
	            this.state = 177;
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
	    this.enterRule(localctx, 16, HopperParser.RULE_structDecl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 180;
	        this.match(HopperParser.T__12);
	        this.state = 181;
	        this.match(HopperParser.Identifier);
	        this.state = 182;
	        this.match(HopperParser.T__13);
	        this.state = 186;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===73) {
	            this.state = 183;
	            this.match(HopperParser.NEWLINE);
	            this.state = 188;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 207;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5 || _la===16 || ((((_la - 43)) & ~0x1f) === 0 && ((1 << (_la - 43)) & 536870975) !== 0)) {
	            this.state = 189;
	            this.structMember();
	            this.state = 198;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,13,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 191; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    do {
	                        this.state = 190;
	                        this.match(HopperParser.NEWLINE);
	                        this.state = 193; 
	                        this._errHandler.sync(this);
	                        _la = this._input.LA(1);
	                    } while(_la===73);
	                    this.state = 195;
	                    this.structMember(); 
	                }
	                this.state = 200;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,13,this._ctx);
	            }

	            this.state = 204;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===73) {
	                this.state = 201;
	                this.match(HopperParser.NEWLINE);
	                this.state = 206;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 209;
	        this.match(HopperParser.T__14);
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
	    this.enterRule(localctx, 18, HopperParser.RULE_structMember);
	    try {
	        this.state = 216;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	        case 43:
	        case 44:
	        case 45:
	        case 46:
	        case 47:
	        case 48:
	        case 72:
	            localctx = new StructFieldContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 211;
	            this.type();
	            this.state = 212;
	            this.fieldName();
	            break;
	        case 16:
	            localctx = new StructPadContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 214;
	            this.match(HopperParser.T__15);
	            this.state = 215;
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
	    this.enterRule(localctx, 20, HopperParser.RULE_templateDecl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 218;
	        this.match(HopperParser.T__16);
	        this.state = 219;
	        this.match(HopperParser.Identifier);
	        this.state = 220;
	        this.match(HopperParser.T__17);
	        this.state = 221;
	        this.match(HopperParser.Identifier);
	        this.state = 226;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===19) {
	            this.state = 222;
	            this.match(HopperParser.T__18);
	            this.state = 223;
	            this.match(HopperParser.Identifier);
	            this.state = 228;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 229;
	        this.match(HopperParser.T__19);
	        this.state = 230;
	        this.match(HopperParser.T__13);
	        this.state = 234;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===73) {
	            this.state = 231;
	            this.match(HopperParser.NEWLINE);
	            this.state = 236;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 255;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 29361184) !== 0) || ((((_la - 43)) & ~0x1f) === 0 && ((1 << (_la - 43)) & 536870975) !== 0)) {
	            this.state = 237;
	            this.classMember();
	            this.state = 246;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,20,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 239; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    do {
	                        this.state = 238;
	                        this.match(HopperParser.NEWLINE);
	                        this.state = 241; 
	                        this._errHandler.sync(this);
	                        _la = this._input.LA(1);
	                    } while(_la===73);
	                    this.state = 243;
	                    this.classMember(); 
	                }
	                this.state = 248;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,20,this._ctx);
	            }

	            this.state = 252;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===73) {
	                this.state = 249;
	                this.match(HopperParser.NEWLINE);
	                this.state = 254;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 257;
	        this.match(HopperParser.T__14);
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
	    this.enterRule(localctx, 22, HopperParser.RULE_classDecl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 259;
	        this.match(HopperParser.T__20);
	        this.state = 260;
	        this.match(HopperParser.Identifier);
	        this.state = 261;
	        this.match(HopperParser.T__13);
	        this.state = 265;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===73) {
	            this.state = 262;
	            this.match(HopperParser.NEWLINE);
	            this.state = 267;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 286;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 29361184) !== 0) || ((((_la - 43)) & ~0x1f) === 0 && ((1 << (_la - 43)) & 536870975) !== 0)) {
	            this.state = 268;
	            this.classMember();
	            this.state = 277;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,25,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 270; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    do {
	                        this.state = 269;
	                        this.match(HopperParser.NEWLINE);
	                        this.state = 272; 
	                        this._errHandler.sync(this);
	                        _la = this._input.LA(1);
	                    } while(_la===73);
	                    this.state = 274;
	                    this.classMember(); 
	                }
	                this.state = 279;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,25,this._ctx);
	            }

	            this.state = 283;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===73) {
	                this.state = 280;
	                this.match(HopperParser.NEWLINE);
	                this.state = 285;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 288;
	        this.match(HopperParser.T__14);
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
	    this.enterRule(localctx, 24, HopperParser.RULE_classMember);
	    var _la = 0;
	    try {
	        this.state = 330;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,31,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ClassFieldContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 290;
	            this.type();
	            this.state = 291;
	            this.fieldName();
	            break;

	        case 2:
	            localctx = new ClassMethodContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 293;
	            this.match(HopperParser.T__9);
	            this.state = 294;
	            this.match(HopperParser.Identifier);
	            this.state = 295;
	            this.match(HopperParser.T__10);
	            this.state = 297;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5 || ((((_la - 43)) & ~0x1f) === 0 && ((1 << (_la - 43)) & 536870975) !== 0)) {
	                this.state = 296;
	                this.paramList();
	            }

	            this.state = 299;
	            this.match(HopperParser.T__11);
	            this.state = 300;
	            this.type();
	            this.state = 301;
	            this.block();
	            break;

	        case 3:
	            localctx = new ClassProcMethodContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 303;
	            this.match(HopperParser.T__9);
	            this.state = 304;
	            this.match(HopperParser.Identifier);
	            this.state = 305;
	            this.match(HopperParser.T__10);
	            this.state = 307;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5 || ((((_la - 43)) & ~0x1f) === 0 && ((1 << (_la - 43)) & 536870975) !== 0)) {
	                this.state = 306;
	                this.paramList();
	            }

	            this.state = 309;
	            this.match(HopperParser.T__11);
	            this.state = 310;
	            this.block();
	            break;

	        case 4:
	            localctx = new ClassOperatorContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 311;
	            this.match(HopperParser.T__21);
	            this.state = 312;
	            this.operatorSymbol();
	            this.state = 313;
	            this.match(HopperParser.T__10);
	            this.state = 314;
	            this.param();
	            this.state = 315;
	            this.match(HopperParser.T__11);
	            this.state = 316;
	            this.type();
	            this.state = 317;
	            this.block();
	            break;

	        case 5:
	            localctx = new ClassConstructorContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 319;
	            this.match(HopperParser.T__22);
	            this.state = 320;
	            this.match(HopperParser.T__10);
	            this.state = 322;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5 || ((((_la - 43)) & ~0x1f) === 0 && ((1 << (_la - 43)) & 536870975) !== 0)) {
	                this.state = 321;
	                this.paramList();
	            }

	            this.state = 324;
	            this.match(HopperParser.T__11);
	            this.state = 325;
	            this.block();
	            break;

	        case 6:
	            localctx = new ClassDestructorContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 326;
	            this.match(HopperParser.T__23);
	            this.state = 327;
	            this.match(HopperParser.T__10);
	            this.state = 328;
	            this.match(HopperParser.T__11);
	            this.state = 329;
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
	    this.enterRule(localctx, 26, HopperParser.RULE_fieldName);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 332;
	        _la = this._input.LA(1);
	        if(!(_la===5 || _la===25 || _la===72)) {
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
	    this.enterRule(localctx, 28, HopperParser.RULE_operatorSymbol);
	    try {
	        this.state = 352;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 26:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 334;
	            this.match(HopperParser.T__25);
	            break;
	        case 27:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 335;
	            this.match(HopperParser.T__26);
	            break;
	        case 28:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 336;
	            this.match(HopperParser.T__27);
	            break;
	        case 29:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 337;
	            this.match(HopperParser.T__28);
	            break;
	        case 30:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 338;
	            this.match(HopperParser.T__29);
	            break;
	        case 31:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 339;
	            this.match(HopperParser.T__30);
	            break;
	        case 32:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 340;
	            this.match(HopperParser.T__31);
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 341;
	            this.match(HopperParser.T__17);
	            break;
	        case 33:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 342;
	            this.match(HopperParser.T__32);
	            break;
	        case 20:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 343;
	            this.match(HopperParser.T__19);
	            break;
	        case 34:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 344;
	            this.match(HopperParser.T__33);
	            break;
	        case 35:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 345;
	            this.match(HopperParser.T__34);
	            break;
	        case 36:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 346;
	            this.match(HopperParser.T__35);
	            break;
	        case 37:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 347;
	            this.match(HopperParser.T__36);
	            break;
	        case 38:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 348;
	            this.match(HopperParser.T__37);
	            break;
	        case 39:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 349;
	            this.match(HopperParser.T__38);
	            break;
	        case 40:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 350;
	            this.match(HopperParser.T__39);
	            this.state = 351;
	            this.match(HopperParser.T__40);
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
	    this.enterRule(localctx, 30, HopperParser.RULE_paramList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 354;
	        this.param();
	        this.state = 359;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===19) {
	            this.state = 355;
	            this.match(HopperParser.T__18);
	            this.state = 356;
	            this.param();
	            this.state = 361;
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
	    this.enterRule(localctx, 32, HopperParser.RULE_externParamList);
	    var _la = 0;
	    try {
	        this.state = 375;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	        case 43:
	        case 44:
	        case 45:
	        case 46:
	        case 47:
	        case 48:
	        case 72:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 362;
	            this.param();
	            this.state = 367;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,34,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 363;
	                    this.match(HopperParser.T__18);
	                    this.state = 364;
	                    this.param(); 
	                }
	                this.state = 369;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,34,this._ctx);
	            }

	            this.state = 372;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===19) {
	                this.state = 370;
	                this.match(HopperParser.T__18);
	                this.state = 371;
	                this.match(HopperParser.T__41);
	            }

	            break;
	        case 42:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 374;
	            this.match(HopperParser.T__41);
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
	    this.enterRule(localctx, 34, HopperParser.RULE_param);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 377;
	        this.type();
	        this.state = 378;
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
	    this.enterRule(localctx, 36, HopperParser.RULE_type);
	    var _la = 0;
	    try {
	        this.state = 403;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,38,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 380;
	            this.match(HopperParser.T__42);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 381;
	            this.match(HopperParser.T__43);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 382;
	            this.match(HopperParser.T__44);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 383;
	            this.match(HopperParser.T__45);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 384;
	            this.match(HopperParser.T__46);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 385;
	            this.match(HopperParser.T__4);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 386;
	            this.match(HopperParser.T__47);
	            this.state = 387;
	            this.match(HopperParser.T__42);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 388;
	            this.match(HopperParser.T__47);
	            this.state = 389;
	            this.match(HopperParser.T__45);
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 390;
	            this.match(HopperParser.Identifier);
	            this.state = 391;
	            this.match(HopperParser.T__17);
	            this.state = 392;
	            this.type();
	            this.state = 397;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===19) {
	                this.state = 393;
	                this.match(HopperParser.T__18);
	                this.state = 394;
	                this.type();
	                this.state = 399;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 400;
	            this.match(HopperParser.T__19);
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 402;
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
	    this.enterRule(localctx, 38, HopperParser.RULE_block);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 405;
	        this.match(HopperParser.T__13);
	        this.state = 409;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===73) {
	            this.state = 406;
	            this.match(HopperParser.NEWLINE);
	            this.state = 411;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 430;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 134219808) !== 0) || ((((_la - 43)) & ~0x1f) === 0 && ((1 << (_la - 43)) & 1073542847) !== 0)) {
	            this.state = 412;
	            this.statement();
	            this.state = 421;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,41,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 414; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    do {
	                        this.state = 413;
	                        this.match(HopperParser.NEWLINE);
	                        this.state = 416; 
	                        this._errHandler.sync(this);
	                        _la = this._input.LA(1);
	                    } while(_la===73);
	                    this.state = 418;
	                    this.statement(); 
	                }
	                this.state = 423;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,41,this._ctx);
	            }

	            this.state = 427;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===73) {
	                this.state = 424;
	                this.match(HopperParser.NEWLINE);
	                this.state = 429;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 432;
	        this.match(HopperParser.T__14);
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
	    this.enterRule(localctx, 40, HopperParser.RULE_statement);
	    var _la = 0;
	    try {
	        this.state = 508;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,49,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ArrayDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 434;
	            this.type();
	            this.state = 435;
	            this.match(HopperParser.Identifier);
	            this.state = 436;
	            this.match(HopperParser.T__39);
	            this.state = 437;
	            this.match(HopperParser.IntegerLiteral);
	            this.state = 438;
	            this.match(HopperParser.T__40);
	            break;

	        case 2:
	            localctx = new VarDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 440;
	            this.type();
	            this.state = 441;
	            this.match(HopperParser.Identifier);
	            this.state = 442;
	            this.match(HopperParser.T__2);
	            this.state = 443;
	            this.expression();
	            break;

	        case 3:
	            localctx = new VarDeclNoInitContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 445;
	            this.type();
	            this.state = 446;
	            this.match(HopperParser.Identifier);
	            break;

	        case 4:
	            localctx = new ArrayAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 448;
	            this.match(HopperParser.Identifier);
	            this.state = 449;
	            this.match(HopperParser.T__39);
	            this.state = 450;
	            this.expression();
	            this.state = 451;
	            this.match(HopperParser.T__40);
	            this.state = 452;
	            this.match(HopperParser.T__2);
	            this.state = 453;
	            this.expression();
	            break;

	        case 5:
	            localctx = new AssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 455;
	            this.match(HopperParser.Identifier);
	            this.state = 456;
	            this.match(HopperParser.T__2);
	            this.state = 457;
	            this.expression();
	            break;

	        case 6:
	            localctx = new FieldAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 458;
	            this.match(HopperParser.Identifier);
	            this.state = 459;
	            this.match(HopperParser.T__48);
	            this.state = 460;
	            this.fieldName();
	            this.state = 461;
	            this.match(HopperParser.T__2);
	            this.state = 462;
	            this.expression();
	            break;

	        case 7:
	            localctx = new DerefAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 7);
	            this.state = 464;
	            this.match(HopperParser.Identifier);
	            this.state = 465;
	            this.match(HopperParser.T__3);
	            this.state = 466;
	            this.match(HopperParser.T__24);
	            this.state = 467;
	            this.match(HopperParser.T__2);
	            this.state = 468;
	            this.expression();
	            break;

	        case 8:
	            localctx = new ExprStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 8);
	            this.state = 469;
	            this.expression();
	            break;

	        case 9:
	            localctx = new IfStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 9);
	            this.state = 470;
	            this.match(HopperParser.T__49);
	            this.state = 471;
	            this.match(HopperParser.T__10);
	            this.state = 472;
	            this.expression();
	            this.state = 473;
	            this.match(HopperParser.T__11);
	            this.state = 474;
	            this.block();
	            this.state = 477;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===51) {
	                this.state = 475;
	                this.match(HopperParser.T__50);
	                this.state = 476;
	                this.block();
	            }

	            break;

	        case 10:
	            localctx = new WhileStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 10);
	            this.state = 479;
	            this.match(HopperParser.T__51);
	            this.state = 480;
	            this.match(HopperParser.T__10);
	            this.state = 481;
	            this.expression();
	            this.state = 482;
	            this.match(HopperParser.T__11);
	            this.state = 483;
	            this.block();
	            break;

	        case 11:
	            localctx = new ForStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 11);
	            this.state = 485;
	            this.match(HopperParser.T__52);
	            this.state = 486;
	            this.match(HopperParser.T__10);
	            this.state = 488;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5 || ((((_la - 43)) & ~0x1f) === 0 && ((1 << (_la - 43)) & 536870975) !== 0)) {
	                this.state = 487;
	                this.forInit();
	            }

	            this.state = 490;
	            this.match(HopperParser.T__53);
	            this.state = 492;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===11 || _la===27 || ((((_la - 61)) & ~0x1f) === 0 && ((1 << (_la - 61)) & 4095) !== 0)) {
	                this.state = 491;
	                this.expression();
	            }

	            this.state = 494;
	            this.match(HopperParser.T__53);
	            this.state = 496;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===72) {
	                this.state = 495;
	                this.forUpdate();
	            }

	            this.state = 498;
	            this.match(HopperParser.T__11);
	            this.state = 499;
	            this.block();
	            break;

	        case 12:
	            localctx = new BreakStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 12);
	            this.state = 500;
	            this.match(HopperParser.T__54);
	            break;

	        case 13:
	            localctx = new ContinueStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 13);
	            this.state = 501;
	            this.match(HopperParser.T__55);
	            break;

	        case 14:
	            localctx = new ReturnStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 14);
	            this.state = 502;
	            this.match(HopperParser.T__56);
	            this.state = 504;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===11 || _la===27 || ((((_la - 61)) & ~0x1f) === 0 && ((1 << (_la - 61)) & 4095) !== 0)) {
	                this.state = 503;
	                this.expression();
	            }

	            break;

	        case 15:
	            localctx = new DeferStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 15);
	            this.state = 506;
	            this.match(HopperParser.T__57);
	            this.state = 507;
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
	    this.enterRule(localctx, 42, HopperParser.RULE_forInit);
	    try {
	        this.state = 518;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,50,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ForInitDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 510;
	            this.type();
	            this.state = 511;
	            this.match(HopperParser.Identifier);
	            this.state = 512;
	            this.match(HopperParser.T__2);
	            this.state = 513;
	            this.expression();
	            break;

	        case 2:
	            localctx = new ForInitAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 515;
	            this.match(HopperParser.Identifier);
	            this.state = 516;
	            this.match(HopperParser.T__2);
	            this.state = 517;
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
	    this.enterRule(localctx, 44, HopperParser.RULE_forUpdate);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 520;
	        this.match(HopperParser.Identifier);
	        this.state = 521;
	        this.match(HopperParser.T__2);
	        this.state = 522;
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
	    this.enterRule(localctx, 46, HopperParser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 524;
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
	    this.enterRule(localctx, 48, HopperParser.RULE_logicalOr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 526;
	        this.logicalAnd();
	        this.state = 531;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===59) {
	            this.state = 527;
	            this.match(HopperParser.T__58);
	            this.state = 528;
	            this.logicalAnd();
	            this.state = 533;
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
	    this.enterRule(localctx, 50, HopperParser.RULE_logicalAnd);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 534;
	        this.bitwiseOr();
	        this.state = 539;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===60) {
	            this.state = 535;
	            this.match(HopperParser.T__59);
	            this.state = 536;
	            this.bitwiseOr();
	            this.state = 541;
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
	    this.enterRule(localctx, 52, HopperParser.RULE_bitwiseOr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 542;
	        this.bitwiseXor();
	        this.state = 547;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===36) {
	            this.state = 543;
	            this.match(HopperParser.T__35);
	            this.state = 544;
	            this.bitwiseXor();
	            this.state = 549;
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
	    this.enterRule(localctx, 54, HopperParser.RULE_bitwiseXor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 550;
	        this.bitwiseAnd();
	        this.state = 555;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===37) {
	            this.state = 551;
	            this.match(HopperParser.T__36);
	            this.state = 552;
	            this.bitwiseAnd();
	            this.state = 557;
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
	    this.enterRule(localctx, 56, HopperParser.RULE_bitwiseAnd);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 558;
	        this.equality();
	        this.state = 563;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===35) {
	            this.state = 559;
	            this.match(HopperParser.T__34);
	            this.state = 560;
	            this.equality();
	            this.state = 565;
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
	    this.enterRule(localctx, 58, HopperParser.RULE_equality);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 566;
	        this.relational();
	        this.state = 571;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===31 || _la===32) {
	            this.state = 567;
	            _la = this._input.LA(1);
	            if(!(_la===31 || _la===32)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 568;
	            this.relational();
	            this.state = 573;
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
	    this.enterRule(localctx, 60, HopperParser.RULE_relational);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 574;
	        this.shift();
	        this.state = 579;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 18)) & ~0x1f) === 0 && ((1 << (_la - 18)) & 98309) !== 0)) {
	            this.state = 575;
	            _la = this._input.LA(1);
	            if(!(((((_la - 18)) & ~0x1f) === 0 && ((1 << (_la - 18)) & 98309) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 576;
	            this.shift();
	            this.state = 581;
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
	    this.enterRule(localctx, 62, HopperParser.RULE_shift);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 582;
	        this.additive();
	        this.state = 587;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===38 || _la===39) {
	            this.state = 583;
	            _la = this._input.LA(1);
	            if(!(_la===38 || _la===39)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 584;
	            this.additive();
	            this.state = 589;
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
	    this.enterRule(localctx, 64, HopperParser.RULE_additive);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 590;
	        this.multiplicative();
	        this.state = 595;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===26 || _la===27) {
	            this.state = 591;
	            _la = this._input.LA(1);
	            if(!(_la===26 || _la===27)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 592;
	            this.multiplicative();
	            this.state = 597;
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
	    this.enterRule(localctx, 66, HopperParser.RULE_multiplicative);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 598;
	        this.unary();
	        this.state = 603;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1879048192) !== 0)) {
	            this.state = 599;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 1879048192) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 600;
	            this.unary();
	            this.state = 605;
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
	    this.enterRule(localctx, 68, HopperParser.RULE_unary);
	    var _la = 0;
	    try {
	        this.state = 611;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 27:
	        case 61:
	        case 62:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 606;
	            _la = this._input.LA(1);
	            if(!(_la===27 || _la===61 || _la===62)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 607;
	            this.unary();
	            break;
	        case 63:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 608;
	            this.match(HopperParser.T__62);
	            this.state = 609;
	            this.unary();
	            break;
	        case 11:
	        case 64:
	        case 65:
	        case 66:
	        case 67:
	        case 68:
	        case 69:
	        case 70:
	        case 71:
	        case 72:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 610;
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
	    this.enterRule(localctx, 70, HopperParser.RULE_primary);
	    var _la = 0;
	    try {
	        this.state = 661;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,64,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 613;
	            this.match(HopperParser.IntegerLiteral);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 614;
	            this.match(HopperParser.HexLiteral);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 615;
	            this.match(HopperParser.FloatLiteral);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 616;
	            this.match(HopperParser.StringLiteral);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 617;
	            this.match(HopperParser.CharLiteral);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 618;
	            this.match(HopperParser.T__63);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 619;
	            this.match(HopperParser.T__64);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 620;
	            this.match(HopperParser.T__65);
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 621;
	            this.match(HopperParser.Identifier);
	            this.state = 622;
	            this.match(HopperParser.T__39);
	            this.state = 623;
	            this.expression();
	            this.state = 624;
	            this.match(HopperParser.T__40);
	            this.state = 625;
	            this.match(HopperParser.T__3);
	            this.state = 626;
	            this.match(HopperParser.T__4);
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 628;
	            this.match(HopperParser.Identifier);
	            this.state = 629;
	            this.match(HopperParser.T__3);
	            this.state = 630;
	            this.match(HopperParser.T__4);
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 631;
	            this.match(HopperParser.Identifier);
	            this.state = 632;
	            this.match(HopperParser.T__3);
	            this.state = 633;
	            this.match(HopperParser.T__24);
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 634;
	            this.match(HopperParser.Identifier);
	            this.state = 635;
	            this.match(HopperParser.T__10);
	            this.state = 637;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===11 || _la===27 || ((((_la - 61)) & ~0x1f) === 0 && ((1 << (_la - 61)) & 4095) !== 0)) {
	                this.state = 636;
	                this.argList();
	            }

	            this.state = 639;
	            this.match(HopperParser.T__11);
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 640;
	            this.match(HopperParser.Identifier);
	            this.state = 641;
	            this.match(HopperParser.T__48);
	            this.state = 642;
	            this.match(HopperParser.Identifier);
	            this.state = 643;
	            this.match(HopperParser.T__10);
	            this.state = 645;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===11 || _la===27 || ((((_la - 61)) & ~0x1f) === 0 && ((1 << (_la - 61)) & 4095) !== 0)) {
	                this.state = 644;
	                this.argList();
	            }

	            this.state = 647;
	            this.match(HopperParser.T__11);
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 648;
	            this.match(HopperParser.Identifier);
	            this.state = 649;
	            this.match(HopperParser.T__39);
	            this.state = 650;
	            this.expression();
	            this.state = 651;
	            this.match(HopperParser.T__40);
	            break;

	        case 15:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 653;
	            this.match(HopperParser.Identifier);
	            this.state = 654;
	            this.match(HopperParser.T__48);
	            this.state = 655;
	            this.fieldName();
	            break;

	        case 16:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 656;
	            this.match(HopperParser.Identifier);
	            break;

	        case 17:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 657;
	            this.match(HopperParser.T__10);
	            this.state = 658;
	            this.expression();
	            this.state = 659;
	            this.match(HopperParser.T__11);
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
	    this.enterRule(localctx, 72, HopperParser.RULE_argList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 663;
	        this.expression();
	        this.state = 668;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===19) {
	            this.state = 664;
	            this.match(HopperParser.T__18);
	            this.state = 665;
	            this.expression();
	            this.state = 670;
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
	    this.enterRule(localctx, 74, HopperParser.RULE_literal);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 671;
	        _la = this._input.LA(1);
	        if(!(((((_la - 64)) & ~0x1f) === 0 && ((1 << (_la - 64)) & 123) !== 0))) {
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
HopperParser.IntegerLiteral = 67;
HopperParser.HexLiteral = 68;
HopperParser.FloatLiteral = 69;
HopperParser.StringLiteral = 70;
HopperParser.CharLiteral = 71;
HopperParser.Identifier = 72;
HopperParser.NEWLINE = 73;
HopperParser.LINE_COMMENT = 74;
HopperParser.WS = 75;

HopperParser.RULE_program = 0;
HopperParser.RULE_topLevelDecl = 1;
HopperParser.RULE_importDecl = 2;
HopperParser.RULE_bindDecl = 3;
HopperParser.RULE_entryDecl = 4;
HopperParser.RULE_constDecl = 5;
HopperParser.RULE_aliasDecl = 6;
HopperParser.RULE_functionDecl = 7;
HopperParser.RULE_structDecl = 8;
HopperParser.RULE_structMember = 9;
HopperParser.RULE_templateDecl = 10;
HopperParser.RULE_classDecl = 11;
HopperParser.RULE_classMember = 12;
HopperParser.RULE_fieldName = 13;
HopperParser.RULE_operatorSymbol = 14;
HopperParser.RULE_paramList = 15;
HopperParser.RULE_externParamList = 16;
HopperParser.RULE_param = 17;
HopperParser.RULE_type = 18;
HopperParser.RULE_block = 19;
HopperParser.RULE_statement = 20;
HopperParser.RULE_forInit = 21;
HopperParser.RULE_forUpdate = 22;
HopperParser.RULE_expression = 23;
HopperParser.RULE_logicalOr = 24;
HopperParser.RULE_logicalAnd = 25;
HopperParser.RULE_bitwiseOr = 26;
HopperParser.RULE_bitwiseXor = 27;
HopperParser.RULE_bitwiseAnd = 28;
HopperParser.RULE_equality = 29;
HopperParser.RULE_relational = 30;
HopperParser.RULE_shift = 31;
HopperParser.RULE_additive = 32;
HopperParser.RULE_multiplicative = 33;
HopperParser.RULE_unary = 34;
HopperParser.RULE_primary = 35;
HopperParser.RULE_argList = 36;
HopperParser.RULE_literal = 37;

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


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class BindMMIOContext extends BindDeclContext {

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

	HexLiteral() {
	    return this.getToken(HopperParser.HexLiteral, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterBindMMIO(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitBindMMIO(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitBindMMIO(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

HopperParser.BindMMIOContext = BindMMIOContext;

class BindVectorContext extends BindDeclContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	HexLiteral() {
	    return this.getToken(HopperParser.HexLiteral, 0);
	};

	Identifier() {
	    return this.getToken(HopperParser.Identifier, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterBindVector(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitBindVector(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitBindVector(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

HopperParser.BindVectorContext = BindVectorContext;

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
HopperParser.BindDeclContext = BindDeclContext; 
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
