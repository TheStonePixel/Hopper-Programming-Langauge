// Generated from grammar/Hopper.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import HopperListener from './HopperListener.js';
import HopperVisitor from './HopperVisitor.js';

const serializedATN = [4,1,78,708,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,2,39,7,39,1,0,5,0,82,8,0,10,0,
12,0,85,9,0,1,0,1,0,5,0,89,8,0,10,0,12,0,92,9,0,5,0,94,8,0,10,0,12,0,97,
9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,111,8,1,1,2,1,2,
1,2,1,2,5,2,117,8,2,10,2,12,2,120,9,2,1,2,1,2,1,2,1,2,3,2,126,8,2,1,3,1,
3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,
5,3,5,148,8,5,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,
8,3,8,165,8,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,174,8,8,1,8,1,8,1,8,1,8,1,
8,3,8,181,8,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,191,8,8,1,8,1,8,3,8,195,
8,8,1,9,1,9,1,9,1,9,5,9,201,8,9,10,9,12,9,204,9,9,1,9,1,9,4,9,208,8,9,11,
9,12,9,209,1,9,5,9,213,8,9,10,9,12,9,216,9,9,1,9,5,9,219,8,9,10,9,12,9,222,
9,9,3,9,224,8,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,3,10,233,8,10,1,11,1,11,
1,11,1,11,1,11,1,11,5,11,241,8,11,10,11,12,11,244,9,11,1,11,1,11,1,11,5,
11,249,8,11,10,11,12,11,252,9,11,1,11,1,11,4,11,256,8,11,11,11,12,11,257,
1,11,5,11,261,8,11,10,11,12,11,264,9,11,1,11,5,11,267,8,11,10,11,12,11,270,
9,11,3,11,272,8,11,1,11,1,11,1,12,1,12,1,12,1,12,5,12,280,8,12,10,12,12,
12,283,9,12,1,12,1,12,4,12,287,8,12,11,12,12,12,288,1,12,5,12,292,8,12,10,
12,12,12,295,9,12,1,12,5,12,298,8,12,10,12,12,12,301,9,12,3,12,303,8,12,
1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,3,13,314,8,13,1,13,1,13,1,13,
1,13,1,13,1,13,1,13,1,13,3,13,324,8,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,
1,13,1,13,1,13,1,13,1,13,1,13,3,13,339,8,13,1,13,1,13,1,13,1,13,1,13,1,13,
3,13,347,8,13,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,
1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,3,15,369,8,15,1,16,1,16,1,16,5,16,
374,8,16,10,16,12,16,377,9,16,1,17,1,17,1,17,5,17,382,8,17,10,17,12,17,385,
9,17,1,17,1,17,3,17,389,8,17,1,17,3,17,392,8,17,1,18,1,18,1,18,1,19,1,19,
1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,
20,1,20,5,20,415,8,20,10,20,12,20,418,9,20,1,20,1,20,1,20,3,20,423,8,20,
1,21,1,21,5,21,427,8,21,10,21,12,21,430,9,21,1,21,1,21,4,21,434,8,21,11,
21,12,21,435,1,21,5,21,439,8,21,10,21,12,21,442,9,21,1,21,5,21,445,8,21,
10,21,12,21,448,9,21,3,21,450,8,21,1,21,1,21,1,22,1,22,1,22,1,22,1,22,1,
22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,
1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,
22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,
1,22,1,22,1,22,1,22,3,22,507,8,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,1,22,
1,22,3,22,518,8,22,1,22,1,22,3,22,522,8,22,1,22,1,22,3,22,526,8,22,1,22,
1,22,1,22,1,22,1,22,1,22,3,22,534,8,22,1,22,1,22,3,22,538,8,22,1,23,1,23,
1,23,1,23,1,23,1,23,1,23,1,23,3,23,548,8,23,1,24,1,24,1,24,1,24,1,25,1,25,
1,26,1,26,1,26,5,26,559,8,26,10,26,12,26,562,9,26,1,27,1,27,1,27,5,27,567,
8,27,10,27,12,27,570,9,27,1,28,1,28,1,28,5,28,575,8,28,10,28,12,28,578,9,
28,1,29,1,29,1,29,5,29,583,8,29,10,29,12,29,586,9,29,1,30,1,30,1,30,5,30,
591,8,30,10,30,12,30,594,9,30,1,31,1,31,1,31,5,31,599,8,31,10,31,12,31,602,
9,31,1,32,1,32,1,32,5,32,607,8,32,10,32,12,32,610,9,32,1,33,1,33,1,33,5,
33,615,8,33,10,33,12,33,618,9,33,1,34,1,34,1,34,5,34,623,8,34,10,34,12,34,
626,9,34,1,35,1,35,1,35,5,35,631,8,35,10,35,12,35,634,9,35,1,36,1,36,1,36,
1,36,1,36,3,36,641,8,36,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,
1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,
37,1,37,3,37,669,8,37,1,37,1,37,1,37,1,37,1,37,1,37,3,37,677,8,37,1,37,1,
37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,1,37,
1,37,3,37,696,8,37,1,38,1,38,1,38,5,38,701,8,38,10,38,12,38,704,9,38,1,39,
1,39,1,39,0,0,40,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,
40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,72,74,76,78,0,8,3,0,7,7,
27,28,75,75,1,0,34,35,2,0,21,22,36,37,1,0,41,42,1,0,29,30,1,0,31,33,2,0,
30,30,65,66,2,0,68,69,71,74,805,0,83,1,0,0,0,2,110,1,0,0,0,4,125,1,0,0,0,
6,127,1,0,0,0,8,134,1,0,0,0,10,147,1,0,0,0,12,149,1,0,0,0,14,154,1,0,0,0,
16,194,1,0,0,0,18,196,1,0,0,0,20,232,1,0,0,0,22,234,1,0,0,0,24,275,1,0,0,
0,26,346,1,0,0,0,28,348,1,0,0,0,30,368,1,0,0,0,32,370,1,0,0,0,34,391,1,0,
0,0,36,393,1,0,0,0,38,396,1,0,0,0,40,422,1,0,0,0,42,424,1,0,0,0,44,537,1,
0,0,0,46,547,1,0,0,0,48,549,1,0,0,0,50,553,1,0,0,0,52,555,1,0,0,0,54,563,
1,0,0,0,56,571,1,0,0,0,58,579,1,0,0,0,60,587,1,0,0,0,62,595,1,0,0,0,64,603,
1,0,0,0,66,611,1,0,0,0,68,619,1,0,0,0,70,627,1,0,0,0,72,640,1,0,0,0,74,695,
1,0,0,0,76,697,1,0,0,0,78,705,1,0,0,0,80,82,5,76,0,0,81,80,1,0,0,0,82,85,
1,0,0,0,83,81,1,0,0,0,83,84,1,0,0,0,84,95,1,0,0,0,85,83,1,0,0,0,86,90,3,
2,1,0,87,89,5,76,0,0,88,87,1,0,0,0,89,92,1,0,0,0,90,88,1,0,0,0,90,91,1,0,
0,0,91,94,1,0,0,0,92,90,1,0,0,0,93,86,1,0,0,0,94,97,1,0,0,0,95,93,1,0,0,
0,95,96,1,0,0,0,96,98,1,0,0,0,97,95,1,0,0,0,98,99,5,0,0,1,99,1,1,0,0,0,100,
111,3,16,8,0,101,111,3,18,9,0,102,111,3,24,12,0,103,111,3,22,11,0,104,111,
3,12,6,0,105,111,3,4,2,0,106,111,3,14,7,0,107,111,3,10,5,0,108,111,3,6,3,
0,109,111,3,8,4,0,110,100,1,0,0,0,110,101,1,0,0,0,110,102,1,0,0,0,110,103,
1,0,0,0,110,104,1,0,0,0,110,105,1,0,0,0,110,106,1,0,0,0,110,107,1,0,0,0,
110,108,1,0,0,0,110,109,1,0,0,0,111,3,1,0,0,0,112,113,5,1,0,0,113,118,5,
75,0,0,114,115,5,2,0,0,115,117,5,75,0,0,116,114,1,0,0,0,117,120,1,0,0,0,
118,116,1,0,0,0,118,119,1,0,0,0,119,121,1,0,0,0,120,118,1,0,0,0,121,122,
5,3,0,0,122,126,5,75,0,0,123,124,5,1,0,0,124,126,5,75,0,0,125,112,1,0,0,
0,125,123,1,0,0,0,126,5,1,0,0,0,127,128,5,4,0,0,128,129,5,72,0,0,129,130,
5,5,0,0,130,131,5,75,0,0,131,132,5,6,0,0,132,133,5,7,0,0,133,7,1,0,0,0,134,
135,5,8,0,0,135,136,3,40,20,0,136,137,5,75,0,0,137,138,5,5,0,0,138,139,5,
72,0,0,139,9,1,0,0,0,140,141,5,9,0,0,141,142,5,75,0,0,142,148,3,42,21,0,
143,144,5,9,0,0,144,145,5,75,0,0,145,146,5,5,0,0,146,148,3,50,25,0,147,140,
1,0,0,0,147,143,1,0,0,0,148,11,1,0,0,0,149,150,5,10,0,0,150,151,5,75,0,0,
151,152,5,5,0,0,152,153,3,78,39,0,153,13,1,0,0,0,154,155,5,11,0,0,155,156,
5,75,0,0,156,157,5,5,0,0,157,158,3,40,20,0,158,15,1,0,0,0,159,160,5,12,0,
0,160,161,5,13,0,0,161,162,5,75,0,0,162,164,5,14,0,0,163,165,3,34,17,0,164,
163,1,0,0,0,164,165,1,0,0,0,165,166,1,0,0,0,166,167,5,15,0,0,167,195,3,40,
20,0,168,169,5,12,0,0,169,170,5,13,0,0,170,171,5,75,0,0,171,173,5,14,0,0,
172,174,3,34,17,0,173,172,1,0,0,0,173,174,1,0,0,0,174,175,1,0,0,0,175,195,
5,15,0,0,176,177,5,13,0,0,177,178,5,75,0,0,178,180,5,14,0,0,179,181,3,32,
16,0,180,179,1,0,0,0,180,181,1,0,0,0,181,182,1,0,0,0,182,183,5,15,0,0,183,
184,3,40,20,0,184,185,3,42,21,0,185,195,1,0,0,0,186,187,5,13,0,0,187,188,
5,75,0,0,188,190,5,14,0,0,189,191,3,32,16,0,190,189,1,0,0,0,190,191,1,0,
0,0,191,192,1,0,0,0,192,193,5,15,0,0,193,195,3,42,21,0,194,159,1,0,0,0,194,
168,1,0,0,0,194,176,1,0,0,0,194,186,1,0,0,0,195,17,1,0,0,0,196,197,5,16,
0,0,197,198,5,75,0,0,198,202,5,17,0,0,199,201,5,76,0,0,200,199,1,0,0,0,201,
204,1,0,0,0,202,200,1,0,0,0,202,203,1,0,0,0,203,223,1,0,0,0,204,202,1,0,
0,0,205,214,3,20,10,0,206,208,5,76,0,0,207,206,1,0,0,0,208,209,1,0,0,0,209,
207,1,0,0,0,209,210,1,0,0,0,210,211,1,0,0,0,211,213,3,20,10,0,212,207,1,
0,0,0,213,216,1,0,0,0,214,212,1,0,0,0,214,215,1,0,0,0,215,220,1,0,0,0,216,
214,1,0,0,0,217,219,5,76,0,0,218,217,1,0,0,0,219,222,1,0,0,0,220,218,1,0,
0,0,220,221,1,0,0,0,221,224,1,0,0,0,222,220,1,0,0,0,223,205,1,0,0,0,223,
224,1,0,0,0,224,225,1,0,0,0,225,226,5,18,0,0,226,19,1,0,0,0,227,228,3,40,
20,0,228,229,3,28,14,0,229,233,1,0,0,0,230,231,5,19,0,0,231,233,5,71,0,0,
232,227,1,0,0,0,232,230,1,0,0,0,233,21,1,0,0,0,234,235,5,20,0,0,235,236,
5,75,0,0,236,237,5,21,0,0,237,242,5,75,0,0,238,239,5,2,0,0,239,241,5,75,
0,0,240,238,1,0,0,0,241,244,1,0,0,0,242,240,1,0,0,0,242,243,1,0,0,0,243,
245,1,0,0,0,244,242,1,0,0,0,245,246,5,22,0,0,246,250,5,17,0,0,247,249,5,
76,0,0,248,247,1,0,0,0,249,252,1,0,0,0,250,248,1,0,0,0,250,251,1,0,0,0,251,
271,1,0,0,0,252,250,1,0,0,0,253,262,3,26,13,0,254,256,5,76,0,0,255,254,1,
0,0,0,256,257,1,0,0,0,257,255,1,0,0,0,257,258,1,0,0,0,258,259,1,0,0,0,259,
261,3,26,13,0,260,255,1,0,0,0,261,264,1,0,0,0,262,260,1,0,0,0,262,263,1,
0,0,0,263,268,1,0,0,0,264,262,1,0,0,0,265,267,5,76,0,0,266,265,1,0,0,0,267,
270,1,0,0,0,268,266,1,0,0,0,268,269,1,0,0,0,269,272,1,0,0,0,270,268,1,0,
0,0,271,253,1,0,0,0,271,272,1,0,0,0,272,273,1,0,0,0,273,274,5,18,0,0,274,
23,1,0,0,0,275,276,5,23,0,0,276,277,5,75,0,0,277,281,5,17,0,0,278,280,5,
76,0,0,279,278,1,0,0,0,280,283,1,0,0,0,281,279,1,0,0,0,281,282,1,0,0,0,282,
302,1,0,0,0,283,281,1,0,0,0,284,293,3,26,13,0,285,287,5,76,0,0,286,285,1,
0,0,0,287,288,1,0,0,0,288,286,1,0,0,0,288,289,1,0,0,0,289,290,1,0,0,0,290,
292,3,26,13,0,291,286,1,0,0,0,292,295,1,0,0,0,293,291,1,0,0,0,293,294,1,
0,0,0,294,299,1,0,0,0,295,293,1,0,0,0,296,298,5,76,0,0,297,296,1,0,0,0,298,
301,1,0,0,0,299,297,1,0,0,0,299,300,1,0,0,0,300,303,1,0,0,0,301,299,1,0,
0,0,302,284,1,0,0,0,302,303,1,0,0,0,303,304,1,0,0,0,304,305,5,18,0,0,305,
25,1,0,0,0,306,307,3,40,20,0,307,308,3,28,14,0,308,347,1,0,0,0,309,310,5,
13,0,0,310,311,5,75,0,0,311,313,5,14,0,0,312,314,3,32,16,0,313,312,1,0,0,
0,313,314,1,0,0,0,314,315,1,0,0,0,315,316,5,15,0,0,316,317,3,40,20,0,317,
318,3,42,21,0,318,347,1,0,0,0,319,320,5,13,0,0,320,321,5,75,0,0,321,323,
5,14,0,0,322,324,3,32,16,0,323,322,1,0,0,0,323,324,1,0,0,0,324,325,1,0,0,
0,325,326,5,15,0,0,326,347,3,42,21,0,327,328,5,24,0,0,328,329,3,30,15,0,
329,330,5,14,0,0,330,331,3,36,18,0,331,332,5,15,0,0,332,333,3,40,20,0,333,
334,3,42,21,0,334,347,1,0,0,0,335,336,5,25,0,0,336,338,5,14,0,0,337,339,
3,32,16,0,338,337,1,0,0,0,338,339,1,0,0,0,339,340,1,0,0,0,340,341,5,15,0,
0,341,347,3,42,21,0,342,343,5,26,0,0,343,344,5,14,0,0,344,345,5,15,0,0,345,
347,3,42,21,0,346,306,1,0,0,0,346,309,1,0,0,0,346,319,1,0,0,0,346,327,1,
0,0,0,346,335,1,0,0,0,346,342,1,0,0,0,347,27,1,0,0,0,348,349,7,0,0,0,349,
29,1,0,0,0,350,369,5,29,0,0,351,369,5,30,0,0,352,369,5,31,0,0,353,369,5,
32,0,0,354,369,5,33,0,0,355,369,5,34,0,0,356,369,5,35,0,0,357,369,5,21,0,
0,358,369,5,36,0,0,359,369,5,22,0,0,360,369,5,37,0,0,361,369,5,38,0,0,362,
369,5,39,0,0,363,369,5,40,0,0,364,369,5,41,0,0,365,369,5,42,0,0,366,367,
5,43,0,0,367,369,5,44,0,0,368,350,1,0,0,0,368,351,1,0,0,0,368,352,1,0,0,
0,368,353,1,0,0,0,368,354,1,0,0,0,368,355,1,0,0,0,368,356,1,0,0,0,368,357,
1,0,0,0,368,358,1,0,0,0,368,359,1,0,0,0,368,360,1,0,0,0,368,361,1,0,0,0,
368,362,1,0,0,0,368,363,1,0,0,0,368,364,1,0,0,0,368,365,1,0,0,0,368,366,
1,0,0,0,369,31,1,0,0,0,370,375,3,36,18,0,371,372,5,2,0,0,372,374,3,36,18,
0,373,371,1,0,0,0,374,377,1,0,0,0,375,373,1,0,0,0,375,376,1,0,0,0,376,33,
1,0,0,0,377,375,1,0,0,0,378,383,3,36,18,0,379,380,5,2,0,0,380,382,3,36,18,
0,381,379,1,0,0,0,382,385,1,0,0,0,383,381,1,0,0,0,383,384,1,0,0,0,384,388,
1,0,0,0,385,383,1,0,0,0,386,387,5,2,0,0,387,389,5,45,0,0,388,386,1,0,0,0,
388,389,1,0,0,0,389,392,1,0,0,0,390,392,5,45,0,0,391,378,1,0,0,0,391,390,
1,0,0,0,392,35,1,0,0,0,393,394,3,40,20,0,394,395,3,38,19,0,395,37,1,0,0,
0,396,397,7,0,0,0,397,39,1,0,0,0,398,423,5,46,0,0,399,423,5,47,0,0,400,423,
5,48,0,0,401,423,5,49,0,0,402,423,5,50,0,0,403,423,5,51,0,0,404,423,5,7,
0,0,405,406,5,52,0,0,406,423,5,46,0,0,407,408,5,52,0,0,408,423,5,49,0,0,
409,410,5,75,0,0,410,411,5,21,0,0,411,416,3,40,20,0,412,413,5,2,0,0,413,
415,3,40,20,0,414,412,1,0,0,0,415,418,1,0,0,0,416,414,1,0,0,0,416,417,1,
0,0,0,417,419,1,0,0,0,418,416,1,0,0,0,419,420,5,22,0,0,420,423,1,0,0,0,421,
423,5,75,0,0,422,398,1,0,0,0,422,399,1,0,0,0,422,400,1,0,0,0,422,401,1,0,
0,0,422,402,1,0,0,0,422,403,1,0,0,0,422,404,1,0,0,0,422,405,1,0,0,0,422,
407,1,0,0,0,422,409,1,0,0,0,422,421,1,0,0,0,423,41,1,0,0,0,424,428,5,17,
0,0,425,427,5,76,0,0,426,425,1,0,0,0,427,430,1,0,0,0,428,426,1,0,0,0,428,
429,1,0,0,0,429,449,1,0,0,0,430,428,1,0,0,0,431,440,3,44,22,0,432,434,5,
76,0,0,433,432,1,0,0,0,434,435,1,0,0,0,435,433,1,0,0,0,435,436,1,0,0,0,436,
437,1,0,0,0,437,439,3,44,22,0,438,433,1,0,0,0,439,442,1,0,0,0,440,438,1,
0,0,0,440,441,1,0,0,0,441,446,1,0,0,0,442,440,1,0,0,0,443,445,5,76,0,0,444,
443,1,0,0,0,445,448,1,0,0,0,446,444,1,0,0,0,446,447,1,0,0,0,447,450,1,0,
0,0,448,446,1,0,0,0,449,431,1,0,0,0,449,450,1,0,0,0,450,451,1,0,0,0,451,
452,5,18,0,0,452,43,1,0,0,0,453,454,3,40,20,0,454,455,5,75,0,0,455,456,5,
43,0,0,456,457,5,71,0,0,457,458,5,44,0,0,458,459,5,5,0,0,459,460,5,43,0,
0,460,461,3,76,38,0,461,462,5,44,0,0,462,538,1,0,0,0,463,464,3,40,20,0,464,
465,5,75,0,0,465,466,5,43,0,0,466,467,5,71,0,0,467,468,5,44,0,0,468,538,
1,0,0,0,469,470,3,40,20,0,470,471,5,75,0,0,471,472,5,5,0,0,472,473,3,50,
25,0,473,538,1,0,0,0,474,475,3,40,20,0,475,476,5,75,0,0,476,538,1,0,0,0,
477,478,5,75,0,0,478,479,5,43,0,0,479,480,3,50,25,0,480,481,5,44,0,0,481,
482,5,5,0,0,482,483,3,50,25,0,483,538,1,0,0,0,484,485,5,75,0,0,485,486,5,
5,0,0,486,538,3,50,25,0,487,488,5,75,0,0,488,489,5,53,0,0,489,490,3,28,14,
0,490,491,5,5,0,0,491,492,3,50,25,0,492,538,1,0,0,0,493,494,5,75,0,0,494,
495,5,6,0,0,495,496,5,27,0,0,496,497,5,5,0,0,497,538,3,50,25,0,498,538,3,
50,25,0,499,500,5,54,0,0,500,501,5,14,0,0,501,502,3,50,25,0,502,503,5,15,
0,0,503,506,3,42,21,0,504,505,5,55,0,0,505,507,3,42,21,0,506,504,1,0,0,0,
506,507,1,0,0,0,507,538,1,0,0,0,508,509,5,56,0,0,509,510,5,14,0,0,510,511,
3,50,25,0,511,512,5,15,0,0,512,513,3,42,21,0,513,538,1,0,0,0,514,515,5,57,
0,0,515,517,5,14,0,0,516,518,3,46,23,0,517,516,1,0,0,0,517,518,1,0,0,0,518,
519,1,0,0,0,519,521,5,58,0,0,520,522,3,50,25,0,521,520,1,0,0,0,521,522,1,
0,0,0,522,523,1,0,0,0,523,525,5,58,0,0,524,526,3,48,24,0,525,524,1,0,0,0,
525,526,1,0,0,0,526,527,1,0,0,0,527,528,5,15,0,0,528,538,3,42,21,0,529,538,
5,59,0,0,530,538,5,60,0,0,531,533,5,61,0,0,532,534,3,50,25,0,533,532,1,0,
0,0,533,534,1,0,0,0,534,538,1,0,0,0,535,536,5,62,0,0,536,538,3,50,25,0,537,
453,1,0,0,0,537,463,1,0,0,0,537,469,1,0,0,0,537,474,1,0,0,0,537,477,1,0,
0,0,537,484,1,0,0,0,537,487,1,0,0,0,537,493,1,0,0,0,537,498,1,0,0,0,537,
499,1,0,0,0,537,508,1,0,0,0,537,514,1,0,0,0,537,529,1,0,0,0,537,530,1,0,
0,0,537,531,1,0,0,0,537,535,1,0,0,0,538,45,1,0,0,0,539,540,3,40,20,0,540,
541,5,75,0,0,541,542,5,5,0,0,542,543,3,50,25,0,543,548,1,0,0,0,544,545,5,
75,0,0,545,546,5,5,0,0,546,548,3,50,25,0,547,539,1,0,0,0,547,544,1,0,0,0,
548,47,1,0,0,0,549,550,5,75,0,0,550,551,5,5,0,0,551,552,3,50,25,0,552,49,
1,0,0,0,553,554,3,52,26,0,554,51,1,0,0,0,555,560,3,54,27,0,556,557,5,63,
0,0,557,559,3,54,27,0,558,556,1,0,0,0,559,562,1,0,0,0,560,558,1,0,0,0,560,
561,1,0,0,0,561,53,1,0,0,0,562,560,1,0,0,0,563,568,3,56,28,0,564,565,5,64,
0,0,565,567,3,56,28,0,566,564,1,0,0,0,567,570,1,0,0,0,568,566,1,0,0,0,568,
569,1,0,0,0,569,55,1,0,0,0,570,568,1,0,0,0,571,576,3,58,29,0,572,573,5,39,
0,0,573,575,3,58,29,0,574,572,1,0,0,0,575,578,1,0,0,0,576,574,1,0,0,0,576,
577,1,0,0,0,577,57,1,0,0,0,578,576,1,0,0,0,579,584,3,60,30,0,580,581,5,40,
0,0,581,583,3,60,30,0,582,580,1,0,0,0,583,586,1,0,0,0,584,582,1,0,0,0,584,
585,1,0,0,0,585,59,1,0,0,0,586,584,1,0,0,0,587,592,3,62,31,0,588,589,5,38,
0,0,589,591,3,62,31,0,590,588,1,0,0,0,591,594,1,0,0,0,592,590,1,0,0,0,592,
593,1,0,0,0,593,61,1,0,0,0,594,592,1,0,0,0,595,600,3,64,32,0,596,597,7,1,
0,0,597,599,3,64,32,0,598,596,1,0,0,0,599,602,1,0,0,0,600,598,1,0,0,0,600,
601,1,0,0,0,601,63,1,0,0,0,602,600,1,0,0,0,603,608,3,66,33,0,604,605,7,2,
0,0,605,607,3,66,33,0,606,604,1,0,0,0,607,610,1,0,0,0,608,606,1,0,0,0,608,
609,1,0,0,0,609,65,1,0,0,0,610,608,1,0,0,0,611,616,3,68,34,0,612,613,7,3,
0,0,613,615,3,68,34,0,614,612,1,0,0,0,615,618,1,0,0,0,616,614,1,0,0,0,616,
617,1,0,0,0,617,67,1,0,0,0,618,616,1,0,0,0,619,624,3,70,35,0,620,621,7,4,
0,0,621,623,3,70,35,0,622,620,1,0,0,0,623,626,1,0,0,0,624,622,1,0,0,0,624,
625,1,0,0,0,625,69,1,0,0,0,626,624,1,0,0,0,627,632,3,72,36,0,628,629,7,5,
0,0,629,631,3,72,36,0,630,628,1,0,0,0,631,634,1,0,0,0,632,630,1,0,0,0,632,
633,1,0,0,0,633,71,1,0,0,0,634,632,1,0,0,0,635,636,7,6,0,0,636,641,3,72,
36,0,637,638,5,67,0,0,638,641,3,72,36,0,639,641,3,74,37,0,640,635,1,0,0,
0,640,637,1,0,0,0,640,639,1,0,0,0,641,73,1,0,0,0,642,696,5,71,0,0,643,696,
5,72,0,0,644,696,5,73,0,0,645,696,5,74,0,0,646,696,5,68,0,0,647,696,5,69,
0,0,648,696,5,70,0,0,649,650,5,75,0,0,650,651,5,43,0,0,651,652,3,50,25,0,
652,653,5,44,0,0,653,654,5,6,0,0,654,655,5,7,0,0,655,696,1,0,0,0,656,657,
5,75,0,0,657,658,5,6,0,0,658,696,5,7,0,0,659,660,5,75,0,0,660,661,5,6,0,
0,661,696,5,27,0,0,662,663,5,75,0,0,663,664,5,6,0,0,664,696,5,28,0,0,665,
666,5,75,0,0,666,668,5,14,0,0,667,669,3,76,38,0,668,667,1,0,0,0,668,669,
1,0,0,0,669,670,1,0,0,0,670,696,5,15,0,0,671,672,5,75,0,0,672,673,5,53,0,
0,673,674,5,75,0,0,674,676,5,14,0,0,675,677,3,76,38,0,676,675,1,0,0,0,676,
677,1,0,0,0,677,678,1,0,0,0,678,696,5,15,0,0,679,680,5,75,0,0,680,681,5,
43,0,0,681,682,3,50,25,0,682,683,5,44,0,0,683,696,1,0,0,0,684,685,5,75,0,
0,685,686,5,53,0,0,686,696,3,28,14,0,687,696,5,75,0,0,688,696,5,27,0,0,689,
696,5,7,0,0,690,696,5,28,0,0,691,692,5,14,0,0,692,693,3,50,25,0,693,694,
5,15,0,0,694,696,1,0,0,0,695,642,1,0,0,0,695,643,1,0,0,0,695,644,1,0,0,0,
695,645,1,0,0,0,695,646,1,0,0,0,695,647,1,0,0,0,695,648,1,0,0,0,695,649,
1,0,0,0,695,656,1,0,0,0,695,659,1,0,0,0,695,662,1,0,0,0,695,665,1,0,0,0,
695,671,1,0,0,0,695,679,1,0,0,0,695,684,1,0,0,0,695,687,1,0,0,0,695,688,
1,0,0,0,695,689,1,0,0,0,695,690,1,0,0,0,695,691,1,0,0,0,696,75,1,0,0,0,697,
702,3,50,25,0,698,699,5,2,0,0,699,701,3,50,25,0,700,698,1,0,0,0,701,704,
1,0,0,0,702,700,1,0,0,0,702,703,1,0,0,0,703,77,1,0,0,0,704,702,1,0,0,0,705,
706,7,7,0,0,706,79,1,0,0,0,67,83,90,95,110,118,125,147,164,173,180,190,194,
202,209,214,220,223,232,242,250,257,262,268,271,281,288,293,299,302,313,
323,338,346,368,375,383,388,391,416,422,428,435,440,446,449,506,517,521,
525,533,537,547,560,568,576,584,592,600,608,616,624,632,640,668,676,695,
702];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class HopperParser extends antlr4.Parser {

    static grammarFileName = "Hopper.g4";
    static literalNames = [ null, "'import'", "','", "'from'", "'bind'", 
                            "'='", "'::'", "'address'", "'strict'", "'entry'", 
                            "'const'", "'alias'", "'extern'", "'function'", 
                            "'('", "')'", "'struct'", "'{'", "'}'", "'pad'", 
                            "'template'", "'<'", "'>'", "'class'", "'operator'", 
                            "'constructor'", "'destructor'", "'value'", 
                            "'size'", "'+'", "'-'", "'*'", "'/'", "'%'", 
                            "'=='", "'!='", "'<='", "'>='", "'&'", "'|'", 
                            "'^'", "'<<'", "'>>'", "'['", "']'", "'...'", 
                            "'int'", "'bool'", "'float'", "'byte'", "'string'", 
                            "'String'", "'unsigned'", "'.'", "'if'", "'else'", 
                            "'while'", "'for'", "';'", "'break'", "'continue'", 
                            "'return'", "'defer'", "'||'", "'&&'", "'!'", 
                            "'~'", "'cast'", "'true'", "'false'", "'null'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, "IntegerLiteral", 
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
	        while(_la===76) {
	            this.state = 80;
	            this.match(HopperParser.NEWLINE);
	            this.state = 85;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 95;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 9518866) !== 0)) {
	            this.state = 86;
	            this.topLevelDecl();
	            this.state = 90;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===76) {
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
	        case 12:
	        case 13:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 100;
	            this.functionDecl();
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 101;
	            this.structDecl();
	            break;
	        case 23:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 102;
	            this.classDecl();
	            break;
	        case 20:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 103;
	            this.templateDecl();
	            break;
	        case 10:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 104;
	            this.constDecl();
	            break;
	        case 1:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 105;
	            this.importDecl();
	            break;
	        case 11:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 106;
	            this.aliasDecl();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 107;
	            this.entryDecl();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 108;
	            this.bindDecl();
	            break;
	        case 8:
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
	    var _la = 0;
	    try {
	        this.state = 125;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ImportFromContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 112;
	            this.match(HopperParser.T__0);
	            this.state = 113;
	            this.match(HopperParser.Identifier);
	            this.state = 118;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===2) {
	                this.state = 114;
	                this.match(HopperParser.T__1);
	                this.state = 115;
	                this.match(HopperParser.Identifier);
	                this.state = 120;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 121;
	            this.match(HopperParser.T__2);
	            this.state = 122;
	            this.match(HopperParser.Identifier);
	            break;

	        case 2:
	            localctx = new ImportModuleContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 123;
	            this.match(HopperParser.T__0);
	            this.state = 124;
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



	bindDecl() {
	    let localctx = new BindDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, HopperParser.RULE_bindDecl);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 127;
	        this.match(HopperParser.T__3);
	        this.state = 128;
	        this.match(HopperParser.HexLiteral);
	        this.state = 129;
	        this.match(HopperParser.T__4);
	        this.state = 130;
	        this.match(HopperParser.Identifier);
	        this.state = 131;
	        this.match(HopperParser.T__5);
	        this.state = 132;
	        this.match(HopperParser.T__6);
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
	        this.state = 134;
	        this.match(HopperParser.T__7);
	        this.state = 135;
	        this.type();
	        this.state = 136;
	        this.match(HopperParser.Identifier);
	        this.state = 137;
	        this.match(HopperParser.T__4);
	        this.state = 138;
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
	        this.state = 147;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,6,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new EntryBlockContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 140;
	            this.match(HopperParser.T__8);
	            this.state = 141;
	            this.match(HopperParser.Identifier);
	            this.state = 142;
	            this.block();
	            break;

	        case 2:
	            localctx = new EntryAddrContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 143;
	            this.match(HopperParser.T__8);
	            this.state = 144;
	            this.match(HopperParser.Identifier);
	            this.state = 145;
	            this.match(HopperParser.T__4);
	            this.state = 146;
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
	        this.state = 149;
	        this.match(HopperParser.T__9);
	        this.state = 150;
	        this.match(HopperParser.Identifier);
	        this.state = 151;
	        this.match(HopperParser.T__4);
	        this.state = 152;
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
	        this.state = 154;
	        this.match(HopperParser.T__10);
	        this.state = 155;
	        this.match(HopperParser.Identifier);
	        this.state = 156;
	        this.match(HopperParser.T__4);
	        this.state = 157;
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
	        this.state = 194;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,11,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ExternFuncDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 159;
	            this.match(HopperParser.T__11);
	            this.state = 160;
	            this.match(HopperParser.T__12);
	            this.state = 161;
	            this.match(HopperParser.Identifier);
	            this.state = 162;
	            this.match(HopperParser.T__13);
	            this.state = 164;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7 || ((((_la - 45)) & ~0x1f) === 0 && ((1 << (_la - 45)) & 1073742079) !== 0)) {
	                this.state = 163;
	                this.externParamList();
	            }

	            this.state = 166;
	            this.match(HopperParser.T__14);
	            this.state = 167;
	            this.type();
	            break;

	        case 2:
	            localctx = new ExternProcDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 168;
	            this.match(HopperParser.T__11);
	            this.state = 169;
	            this.match(HopperParser.T__12);
	            this.state = 170;
	            this.match(HopperParser.Identifier);
	            this.state = 171;
	            this.match(HopperParser.T__13);
	            this.state = 173;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7 || ((((_la - 45)) & ~0x1f) === 0 && ((1 << (_la - 45)) & 1073742079) !== 0)) {
	                this.state = 172;
	                this.externParamList();
	            }

	            this.state = 175;
	            this.match(HopperParser.T__14);
	            break;

	        case 3:
	            localctx = new FuncDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 176;
	            this.match(HopperParser.T__12);
	            this.state = 177;
	            this.match(HopperParser.Identifier);
	            this.state = 178;
	            this.match(HopperParser.T__13);
	            this.state = 180;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7 || ((((_la - 46)) & ~0x1f) === 0 && ((1 << (_la - 46)) & 536871039) !== 0)) {
	                this.state = 179;
	                this.paramList();
	            }

	            this.state = 182;
	            this.match(HopperParser.T__14);
	            this.state = 183;
	            this.type();
	            this.state = 184;
	            this.block();
	            break;

	        case 4:
	            localctx = new ProcDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 186;
	            this.match(HopperParser.T__12);
	            this.state = 187;
	            this.match(HopperParser.Identifier);
	            this.state = 188;
	            this.match(HopperParser.T__13);
	            this.state = 190;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7 || ((((_la - 46)) & ~0x1f) === 0 && ((1 << (_la - 46)) & 536871039) !== 0)) {
	                this.state = 189;
	                this.paramList();
	            }

	            this.state = 192;
	            this.match(HopperParser.T__14);
	            this.state = 193;
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
	        this.state = 196;
	        this.match(HopperParser.T__15);
	        this.state = 197;
	        this.match(HopperParser.Identifier);
	        this.state = 198;
	        this.match(HopperParser.T__16);
	        this.state = 202;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===76) {
	            this.state = 199;
	            this.match(HopperParser.NEWLINE);
	            this.state = 204;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 223;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===7 || _la===19 || ((((_la - 46)) & ~0x1f) === 0 && ((1 << (_la - 46)) & 536871039) !== 0)) {
	            this.state = 205;
	            this.structMember();
	            this.state = 214;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,14,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 207; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    do {
	                        this.state = 206;
	                        this.match(HopperParser.NEWLINE);
	                        this.state = 209; 
	                        this._errHandler.sync(this);
	                        _la = this._input.LA(1);
	                    } while(_la===76);
	                    this.state = 211;
	                    this.structMember(); 
	                }
	                this.state = 216;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,14,this._ctx);
	            }

	            this.state = 220;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===76) {
	                this.state = 217;
	                this.match(HopperParser.NEWLINE);
	                this.state = 222;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 225;
	        this.match(HopperParser.T__17);
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
	        this.state = 232;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	        case 46:
	        case 47:
	        case 48:
	        case 49:
	        case 50:
	        case 51:
	        case 52:
	        case 75:
	            localctx = new StructFieldContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 227;
	            this.type();
	            this.state = 228;
	            this.fieldName();
	            break;
	        case 19:
	            localctx = new StructPadContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 230;
	            this.match(HopperParser.T__18);
	            this.state = 231;
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
	        this.state = 234;
	        this.match(HopperParser.T__19);
	        this.state = 235;
	        this.match(HopperParser.Identifier);
	        this.state = 236;
	        this.match(HopperParser.T__20);
	        this.state = 237;
	        this.match(HopperParser.Identifier);
	        this.state = 242;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 238;
	            this.match(HopperParser.T__1);
	            this.state = 239;
	            this.match(HopperParser.Identifier);
	            this.state = 244;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 245;
	        this.match(HopperParser.T__21);
	        this.state = 246;
	        this.match(HopperParser.T__16);
	        this.state = 250;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===76) {
	            this.state = 247;
	            this.match(HopperParser.NEWLINE);
	            this.state = 252;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 271;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 117448832) !== 0) || ((((_la - 46)) & ~0x1f) === 0 && ((1 << (_la - 46)) & 536871039) !== 0)) {
	            this.state = 253;
	            this.classMember();
	            this.state = 262;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,21,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 255; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    do {
	                        this.state = 254;
	                        this.match(HopperParser.NEWLINE);
	                        this.state = 257; 
	                        this._errHandler.sync(this);
	                        _la = this._input.LA(1);
	                    } while(_la===76);
	                    this.state = 259;
	                    this.classMember(); 
	                }
	                this.state = 264;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,21,this._ctx);
	            }

	            this.state = 268;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===76) {
	                this.state = 265;
	                this.match(HopperParser.NEWLINE);
	                this.state = 270;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 273;
	        this.match(HopperParser.T__17);
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
	        this.state = 275;
	        this.match(HopperParser.T__22);
	        this.state = 276;
	        this.match(HopperParser.Identifier);
	        this.state = 277;
	        this.match(HopperParser.T__16);
	        this.state = 281;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===76) {
	            this.state = 278;
	            this.match(HopperParser.NEWLINE);
	            this.state = 283;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 302;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 117448832) !== 0) || ((((_la - 46)) & ~0x1f) === 0 && ((1 << (_la - 46)) & 536871039) !== 0)) {
	            this.state = 284;
	            this.classMember();
	            this.state = 293;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,26,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 286; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    do {
	                        this.state = 285;
	                        this.match(HopperParser.NEWLINE);
	                        this.state = 288; 
	                        this._errHandler.sync(this);
	                        _la = this._input.LA(1);
	                    } while(_la===76);
	                    this.state = 290;
	                    this.classMember(); 
	                }
	                this.state = 295;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,26,this._ctx);
	            }

	            this.state = 299;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===76) {
	                this.state = 296;
	                this.match(HopperParser.NEWLINE);
	                this.state = 301;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 304;
	        this.match(HopperParser.T__17);
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
	        this.state = 346;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,32,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ClassFieldContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 306;
	            this.type();
	            this.state = 307;
	            this.fieldName();
	            break;

	        case 2:
	            localctx = new ClassMethodContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 309;
	            this.match(HopperParser.T__12);
	            this.state = 310;
	            this.match(HopperParser.Identifier);
	            this.state = 311;
	            this.match(HopperParser.T__13);
	            this.state = 313;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7 || ((((_la - 46)) & ~0x1f) === 0 && ((1 << (_la - 46)) & 536871039) !== 0)) {
	                this.state = 312;
	                this.paramList();
	            }

	            this.state = 315;
	            this.match(HopperParser.T__14);
	            this.state = 316;
	            this.type();
	            this.state = 317;
	            this.block();
	            break;

	        case 3:
	            localctx = new ClassProcMethodContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 319;
	            this.match(HopperParser.T__12);
	            this.state = 320;
	            this.match(HopperParser.Identifier);
	            this.state = 321;
	            this.match(HopperParser.T__13);
	            this.state = 323;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7 || ((((_la - 46)) & ~0x1f) === 0 && ((1 << (_la - 46)) & 536871039) !== 0)) {
	                this.state = 322;
	                this.paramList();
	            }

	            this.state = 325;
	            this.match(HopperParser.T__14);
	            this.state = 326;
	            this.block();
	            break;

	        case 4:
	            localctx = new ClassOperatorContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 327;
	            this.match(HopperParser.T__23);
	            this.state = 328;
	            this.operatorSymbol();
	            this.state = 329;
	            this.match(HopperParser.T__13);
	            this.state = 330;
	            this.param();
	            this.state = 331;
	            this.match(HopperParser.T__14);
	            this.state = 332;
	            this.type();
	            this.state = 333;
	            this.block();
	            break;

	        case 5:
	            localctx = new ClassConstructorContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 335;
	            this.match(HopperParser.T__24);
	            this.state = 336;
	            this.match(HopperParser.T__13);
	            this.state = 338;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7 || ((((_la - 46)) & ~0x1f) === 0 && ((1 << (_la - 46)) & 536871039) !== 0)) {
	                this.state = 337;
	                this.paramList();
	            }

	            this.state = 340;
	            this.match(HopperParser.T__14);
	            this.state = 341;
	            this.block();
	            break;

	        case 6:
	            localctx = new ClassDestructorContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 342;
	            this.match(HopperParser.T__25);
	            this.state = 343;
	            this.match(HopperParser.T__13);
	            this.state = 344;
	            this.match(HopperParser.T__14);
	            this.state = 345;
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
	        this.state = 348;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 402653312) !== 0) || _la===75)) {
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
	        this.state = 368;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 29:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 350;
	            this.match(HopperParser.T__28);
	            break;
	        case 30:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 351;
	            this.match(HopperParser.T__29);
	            break;
	        case 31:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 352;
	            this.match(HopperParser.T__30);
	            break;
	        case 32:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 353;
	            this.match(HopperParser.T__31);
	            break;
	        case 33:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 354;
	            this.match(HopperParser.T__32);
	            break;
	        case 34:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 355;
	            this.match(HopperParser.T__33);
	            break;
	        case 35:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 356;
	            this.match(HopperParser.T__34);
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 357;
	            this.match(HopperParser.T__20);
	            break;
	        case 36:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 358;
	            this.match(HopperParser.T__35);
	            break;
	        case 22:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 359;
	            this.match(HopperParser.T__21);
	            break;
	        case 37:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 360;
	            this.match(HopperParser.T__36);
	            break;
	        case 38:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 361;
	            this.match(HopperParser.T__37);
	            break;
	        case 39:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 362;
	            this.match(HopperParser.T__38);
	            break;
	        case 40:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 363;
	            this.match(HopperParser.T__39);
	            break;
	        case 41:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 364;
	            this.match(HopperParser.T__40);
	            break;
	        case 42:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 365;
	            this.match(HopperParser.T__41);
	            break;
	        case 43:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 366;
	            this.match(HopperParser.T__42);
	            this.state = 367;
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



	paramList() {
	    let localctx = new ParamListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, HopperParser.RULE_paramList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 370;
	        this.param();
	        this.state = 375;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 371;
	            this.match(HopperParser.T__1);
	            this.state = 372;
	            this.param();
	            this.state = 377;
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
	        this.state = 391;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	        case 46:
	        case 47:
	        case 48:
	        case 49:
	        case 50:
	        case 51:
	        case 52:
	        case 75:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 378;
	            this.param();
	            this.state = 383;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,35,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 379;
	                    this.match(HopperParser.T__1);
	                    this.state = 380;
	                    this.param(); 
	                }
	                this.state = 385;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,35,this._ctx);
	            }

	            this.state = 388;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===2) {
	                this.state = 386;
	                this.match(HopperParser.T__1);
	                this.state = 387;
	                this.match(HopperParser.T__44);
	            }

	            break;
	        case 45:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 390;
	            this.match(HopperParser.T__44);
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
	        this.state = 393;
	        this.type();
	        this.state = 394;
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
	        this.state = 396;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 402653312) !== 0) || _la===75)) {
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
	        this.state = 422;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,39,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 398;
	            this.match(HopperParser.T__45);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 399;
	            this.match(HopperParser.T__46);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 400;
	            this.match(HopperParser.T__47);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 401;
	            this.match(HopperParser.T__48);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 402;
	            this.match(HopperParser.T__49);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 403;
	            this.match(HopperParser.T__50);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 404;
	            this.match(HopperParser.T__6);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 405;
	            this.match(HopperParser.T__51);
	            this.state = 406;
	            this.match(HopperParser.T__45);
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 407;
	            this.match(HopperParser.T__51);
	            this.state = 408;
	            this.match(HopperParser.T__48);
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 409;
	            this.match(HopperParser.Identifier);
	            this.state = 410;
	            this.match(HopperParser.T__20);
	            this.state = 411;
	            this.type();
	            this.state = 416;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===2) {
	                this.state = 412;
	                this.match(HopperParser.T__1);
	                this.state = 413;
	                this.type();
	                this.state = 418;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 419;
	            this.match(HopperParser.T__21);
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 421;
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
	        this.state = 424;
	        this.match(HopperParser.T__16);
	        this.state = 428;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===76) {
	            this.state = 425;
	            this.match(HopperParser.NEWLINE);
	            this.state = 430;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 449;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1476411520) !== 0) || ((((_la - 46)) & ~0x1f) === 0 && ((1 << (_la - 46)) & 1073343871) !== 0)) {
	            this.state = 431;
	            this.statement();
	            this.state = 440;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,42,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 433; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    do {
	                        this.state = 432;
	                        this.match(HopperParser.NEWLINE);
	                        this.state = 435; 
	                        this._errHandler.sync(this);
	                        _la = this._input.LA(1);
	                    } while(_la===76);
	                    this.state = 437;
	                    this.statement(); 
	                }
	                this.state = 442;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,42,this._ctx);
	            }

	            this.state = 446;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===76) {
	                this.state = 443;
	                this.match(HopperParser.NEWLINE);
	                this.state = 448;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 451;
	        this.match(HopperParser.T__17);
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
	        this.state = 537;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,50,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ArrayDeclInitContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 453;
	            this.type();
	            this.state = 454;
	            this.match(HopperParser.Identifier);
	            this.state = 455;
	            this.match(HopperParser.T__42);
	            this.state = 456;
	            this.match(HopperParser.IntegerLiteral);
	            this.state = 457;
	            this.match(HopperParser.T__43);
	            this.state = 458;
	            this.match(HopperParser.T__4);
	            this.state = 459;
	            this.match(HopperParser.T__42);
	            this.state = 460;
	            this.argList();
	            this.state = 461;
	            this.match(HopperParser.T__43);
	            break;

	        case 2:
	            localctx = new ArrayDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 463;
	            this.type();
	            this.state = 464;
	            this.match(HopperParser.Identifier);
	            this.state = 465;
	            this.match(HopperParser.T__42);
	            this.state = 466;
	            this.match(HopperParser.IntegerLiteral);
	            this.state = 467;
	            this.match(HopperParser.T__43);
	            break;

	        case 3:
	            localctx = new VarDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 469;
	            this.type();
	            this.state = 470;
	            this.match(HopperParser.Identifier);
	            this.state = 471;
	            this.match(HopperParser.T__4);
	            this.state = 472;
	            this.expression();
	            break;

	        case 4:
	            localctx = new VarDeclNoInitContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 474;
	            this.type();
	            this.state = 475;
	            this.match(HopperParser.Identifier);
	            break;

	        case 5:
	            localctx = new ArrayAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 477;
	            this.match(HopperParser.Identifier);
	            this.state = 478;
	            this.match(HopperParser.T__42);
	            this.state = 479;
	            this.expression();
	            this.state = 480;
	            this.match(HopperParser.T__43);
	            this.state = 481;
	            this.match(HopperParser.T__4);
	            this.state = 482;
	            this.expression();
	            break;

	        case 6:
	            localctx = new AssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 484;
	            this.match(HopperParser.Identifier);
	            this.state = 485;
	            this.match(HopperParser.T__4);
	            this.state = 486;
	            this.expression();
	            break;

	        case 7:
	            localctx = new FieldAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 7);
	            this.state = 487;
	            this.match(HopperParser.Identifier);
	            this.state = 488;
	            this.match(HopperParser.T__52);
	            this.state = 489;
	            this.fieldName();
	            this.state = 490;
	            this.match(HopperParser.T__4);
	            this.state = 491;
	            this.expression();
	            break;

	        case 8:
	            localctx = new DerefAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 8);
	            this.state = 493;
	            this.match(HopperParser.Identifier);
	            this.state = 494;
	            this.match(HopperParser.T__5);
	            this.state = 495;
	            this.match(HopperParser.T__26);
	            this.state = 496;
	            this.match(HopperParser.T__4);
	            this.state = 497;
	            this.expression();
	            break;

	        case 9:
	            localctx = new ExprStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 9);
	            this.state = 498;
	            this.expression();
	            break;

	        case 10:
	            localctx = new IfStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 10);
	            this.state = 499;
	            this.match(HopperParser.T__53);
	            this.state = 500;
	            this.match(HopperParser.T__13);
	            this.state = 501;
	            this.expression();
	            this.state = 502;
	            this.match(HopperParser.T__14);
	            this.state = 503;
	            this.block();
	            this.state = 506;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===55) {
	                this.state = 504;
	                this.match(HopperParser.T__54);
	                this.state = 505;
	                this.block();
	            }

	            break;

	        case 11:
	            localctx = new WhileStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 11);
	            this.state = 508;
	            this.match(HopperParser.T__55);
	            this.state = 509;
	            this.match(HopperParser.T__13);
	            this.state = 510;
	            this.expression();
	            this.state = 511;
	            this.match(HopperParser.T__14);
	            this.state = 512;
	            this.block();
	            break;

	        case 12:
	            localctx = new ForStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 12);
	            this.state = 514;
	            this.match(HopperParser.T__56);
	            this.state = 515;
	            this.match(HopperParser.T__13);
	            this.state = 517;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7 || ((((_la - 46)) & ~0x1f) === 0 && ((1 << (_la - 46)) & 536871039) !== 0)) {
	                this.state = 516;
	                this.forInit();
	            }

	            this.state = 519;
	            this.match(HopperParser.T__57);
	            this.state = 521;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1476411520) !== 0) || ((((_la - 65)) & ~0x1f) === 0 && ((1 << (_la - 65)) & 2047) !== 0)) {
	                this.state = 520;
	                this.expression();
	            }

	            this.state = 523;
	            this.match(HopperParser.T__57);
	            this.state = 525;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===75) {
	                this.state = 524;
	                this.forUpdate();
	            }

	            this.state = 527;
	            this.match(HopperParser.T__14);
	            this.state = 528;
	            this.block();
	            break;

	        case 13:
	            localctx = new BreakStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 13);
	            this.state = 529;
	            this.match(HopperParser.T__58);
	            break;

	        case 14:
	            localctx = new ContinueStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 14);
	            this.state = 530;
	            this.match(HopperParser.T__59);
	            break;

	        case 15:
	            localctx = new ReturnStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 15);
	            this.state = 531;
	            this.match(HopperParser.T__60);
	            this.state = 533;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1476411520) !== 0) || ((((_la - 65)) & ~0x1f) === 0 && ((1 << (_la - 65)) & 2047) !== 0)) {
	                this.state = 532;
	                this.expression();
	            }

	            break;

	        case 16:
	            localctx = new DeferStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 16);
	            this.state = 535;
	            this.match(HopperParser.T__61);
	            this.state = 536;
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
	        this.state = 547;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,51,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ForInitDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 539;
	            this.type();
	            this.state = 540;
	            this.match(HopperParser.Identifier);
	            this.state = 541;
	            this.match(HopperParser.T__4);
	            this.state = 542;
	            this.expression();
	            break;

	        case 2:
	            localctx = new ForInitAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 544;
	            this.match(HopperParser.Identifier);
	            this.state = 545;
	            this.match(HopperParser.T__4);
	            this.state = 546;
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
	        this.state = 549;
	        this.match(HopperParser.Identifier);
	        this.state = 550;
	        this.match(HopperParser.T__4);
	        this.state = 551;
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
	        this.state = 553;
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
	        this.state = 555;
	        this.logicalAnd();
	        this.state = 560;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===63) {
	            this.state = 556;
	            this.match(HopperParser.T__62);
	            this.state = 557;
	            this.logicalAnd();
	            this.state = 562;
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
	        this.state = 563;
	        this.bitwiseOr();
	        this.state = 568;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===64) {
	            this.state = 564;
	            this.match(HopperParser.T__63);
	            this.state = 565;
	            this.bitwiseOr();
	            this.state = 570;
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
	        this.state = 571;
	        this.bitwiseXor();
	        this.state = 576;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===39) {
	            this.state = 572;
	            this.match(HopperParser.T__38);
	            this.state = 573;
	            this.bitwiseXor();
	            this.state = 578;
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
	        this.state = 579;
	        this.bitwiseAnd();
	        this.state = 584;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===40) {
	            this.state = 580;
	            this.match(HopperParser.T__39);
	            this.state = 581;
	            this.bitwiseAnd();
	            this.state = 586;
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
	        this.state = 587;
	        this.equality();
	        this.state = 592;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===38) {
	            this.state = 588;
	            this.match(HopperParser.T__37);
	            this.state = 589;
	            this.equality();
	            this.state = 594;
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
	        this.state = 595;
	        this.relational();
	        this.state = 600;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===34 || _la===35) {
	            this.state = 596;
	            _la = this._input.LA(1);
	            if(!(_la===34 || _la===35)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 597;
	            this.relational();
	            this.state = 602;
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
	        this.state = 603;
	        this.shift();
	        this.state = 608;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 21)) & ~0x1f) === 0 && ((1 << (_la - 21)) & 98307) !== 0)) {
	            this.state = 604;
	            _la = this._input.LA(1);
	            if(!(((((_la - 21)) & ~0x1f) === 0 && ((1 << (_la - 21)) & 98307) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 605;
	            this.shift();
	            this.state = 610;
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
	        this.state = 611;
	        this.additive();
	        this.state = 616;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===41 || _la===42) {
	            this.state = 612;
	            _la = this._input.LA(1);
	            if(!(_la===41 || _la===42)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 613;
	            this.additive();
	            this.state = 618;
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
	        this.state = 619;
	        this.multiplicative();
	        this.state = 624;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===29 || _la===30) {
	            this.state = 620;
	            _la = this._input.LA(1);
	            if(!(_la===29 || _la===30)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 621;
	            this.multiplicative();
	            this.state = 626;
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
	        this.state = 627;
	        this.unary();
	        this.state = 632;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 31)) & ~0x1f) === 0 && ((1 << (_la - 31)) & 7) !== 0)) {
	            this.state = 628;
	            _la = this._input.LA(1);
	            if(!(((((_la - 31)) & ~0x1f) === 0 && ((1 << (_la - 31)) & 7) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 629;
	            this.unary();
	            this.state = 634;
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
	        this.state = 640;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 30:
	        case 65:
	        case 66:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 635;
	            _la = this._input.LA(1);
	            if(!(_la===30 || _la===65 || _la===66)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 636;
	            this.unary();
	            break;
	        case 67:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 637;
	            this.match(HopperParser.T__66);
	            this.state = 638;
	            this.unary();
	            break;
	        case 7:
	        case 14:
	        case 27:
	        case 28:
	        case 68:
	        case 69:
	        case 70:
	        case 71:
	        case 72:
	        case 73:
	        case 74:
	        case 75:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 639;
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
	        this.state = 695;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,65,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 642;
	            this.match(HopperParser.IntegerLiteral);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 643;
	            this.match(HopperParser.HexLiteral);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 644;
	            this.match(HopperParser.FloatLiteral);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 645;
	            this.match(HopperParser.StringLiteral);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 646;
	            this.match(HopperParser.T__67);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 647;
	            this.match(HopperParser.T__68);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 648;
	            this.match(HopperParser.T__69);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 649;
	            this.match(HopperParser.Identifier);
	            this.state = 650;
	            this.match(HopperParser.T__42);
	            this.state = 651;
	            this.expression();
	            this.state = 652;
	            this.match(HopperParser.T__43);
	            this.state = 653;
	            this.match(HopperParser.T__5);
	            this.state = 654;
	            this.match(HopperParser.T__6);
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 656;
	            this.match(HopperParser.Identifier);
	            this.state = 657;
	            this.match(HopperParser.T__5);
	            this.state = 658;
	            this.match(HopperParser.T__6);
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 659;
	            this.match(HopperParser.Identifier);
	            this.state = 660;
	            this.match(HopperParser.T__5);
	            this.state = 661;
	            this.match(HopperParser.T__26);
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 662;
	            this.match(HopperParser.Identifier);
	            this.state = 663;
	            this.match(HopperParser.T__5);
	            this.state = 664;
	            this.match(HopperParser.T__27);
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 665;
	            this.match(HopperParser.Identifier);
	            this.state = 666;
	            this.match(HopperParser.T__13);
	            this.state = 668;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1476411520) !== 0) || ((((_la - 65)) & ~0x1f) === 0 && ((1 << (_la - 65)) & 2047) !== 0)) {
	                this.state = 667;
	                this.argList();
	            }

	            this.state = 670;
	            this.match(HopperParser.T__14);
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 671;
	            this.match(HopperParser.Identifier);
	            this.state = 672;
	            this.match(HopperParser.T__52);
	            this.state = 673;
	            this.match(HopperParser.Identifier);
	            this.state = 674;
	            this.match(HopperParser.T__13);
	            this.state = 676;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if((((_la) & ~0x1f) === 0 && ((1 << _la) & 1476411520) !== 0) || ((((_la - 65)) & ~0x1f) === 0 && ((1 << (_la - 65)) & 2047) !== 0)) {
	                this.state = 675;
	                this.argList();
	            }

	            this.state = 678;
	            this.match(HopperParser.T__14);
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 679;
	            this.match(HopperParser.Identifier);
	            this.state = 680;
	            this.match(HopperParser.T__42);
	            this.state = 681;
	            this.expression();
	            this.state = 682;
	            this.match(HopperParser.T__43);
	            break;

	        case 15:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 684;
	            this.match(HopperParser.Identifier);
	            this.state = 685;
	            this.match(HopperParser.T__52);
	            this.state = 686;
	            this.fieldName();
	            break;

	        case 16:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 687;
	            this.match(HopperParser.Identifier);
	            break;

	        case 17:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 688;
	            this.match(HopperParser.T__26);
	            break;

	        case 18:
	            this.enterOuterAlt(localctx, 18);
	            this.state = 689;
	            this.match(HopperParser.T__6);
	            break;

	        case 19:
	            this.enterOuterAlt(localctx, 19);
	            this.state = 690;
	            this.match(HopperParser.T__27);
	            break;

	        case 20:
	            this.enterOuterAlt(localctx, 20);
	            this.state = 691;
	            this.match(HopperParser.T__13);
	            this.state = 692;
	            this.expression();
	            this.state = 693;
	            this.match(HopperParser.T__14);
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
	        this.state = 697;
	        this.expression();
	        this.state = 702;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===2) {
	            this.state = 698;
	            this.match(HopperParser.T__1);
	            this.state = 699;
	            this.expression();
	            this.state = 704;
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
	        this.state = 705;
	        _la = this._input.LA(1);
	        if(!(((((_la - 68)) & ~0x1f) === 0 && ((1 << (_la - 68)) & 123) !== 0))) {
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
HopperParser.T__69 = 70;
HopperParser.IntegerLiteral = 71;
HopperParser.HexLiteral = 72;
HopperParser.FloatLiteral = 73;
HopperParser.StringLiteral = 74;
HopperParser.Identifier = 75;
HopperParser.NEWLINE = 76;
HopperParser.LINE_COMMENT = 77;
HopperParser.WS = 78;

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


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ImportFromContext extends ImportDeclContext {

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


	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterImportFrom(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitImportFrom(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitImportFrom(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

HopperParser.ImportFromContext = ImportFromContext;

class ImportModuleContext extends ImportDeclContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	Identifier() {
	    return this.getToken(HopperParser.Identifier, 0);
	};

	enterRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.enterImportModule(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof HopperListener ) {
	        listener.exitImportModule(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof HopperVisitor ) {
	        return visitor.visitImportModule(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

HopperParser.ImportModuleContext = ImportModuleContext;

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
