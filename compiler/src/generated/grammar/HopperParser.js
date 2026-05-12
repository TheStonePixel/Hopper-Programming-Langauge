// Generated from grammar/Hopper.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import HopperListener from './HopperListener.js';
import HopperVisitor from './HopperVisitor.js';

const serializedATN = [4,1,73,645,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,1,0,5,0,74,8,0,10,0,12,0,77,9,0,1,0,1,0,5,0,81,8,0,10,0,12,
0,84,9,0,5,0,86,8,0,10,0,12,0,89,9,0,1,0,1,0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
3,1,100,8,1,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,5,1,5,
1,5,1,5,1,5,3,5,120,8,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,129,8,5,1,5,1,5,
1,5,1,5,1,5,3,5,136,8,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,1,5,3,5,146,8,5,1,5,
1,5,3,5,150,8,5,1,6,1,6,1,6,1,6,5,6,156,8,6,10,6,12,6,159,9,6,1,6,1,6,4,
6,163,8,6,11,6,12,6,164,1,6,5,6,168,8,6,10,6,12,6,171,9,6,1,6,5,6,174,8,
6,10,6,12,6,177,9,6,3,6,179,8,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,3,7,188,8,7,
1,8,1,8,1,8,1,8,1,8,1,8,5,8,196,8,8,10,8,12,8,199,9,8,1,8,1,8,1,8,5,8,204,
8,8,10,8,12,8,207,9,8,1,8,1,8,4,8,211,8,8,11,8,12,8,212,1,8,5,8,216,8,8,
10,8,12,8,219,9,8,1,8,5,8,222,8,8,10,8,12,8,225,9,8,3,8,227,8,8,1,8,1,8,
1,9,1,9,1,9,1,9,5,9,235,8,9,10,9,12,9,238,9,9,1,9,1,9,4,9,242,8,9,11,9,12,
9,243,1,9,5,9,247,8,9,10,9,12,9,250,9,9,1,9,5,9,253,8,9,10,9,12,9,256,9,
9,3,9,258,8,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,1,10,1,10,3,10,269,8,10,1,
10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,3,10,279,8,10,1,10,1,10,1,10,1,10,
1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,1,10,3,10,294,8,10,1,10,1,10,1,10,
1,10,1,10,1,10,3,10,302,8,10,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,12,1,12,
1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,324,8,12,1,13,
1,13,1,13,5,13,329,8,13,10,13,12,13,332,9,13,1,14,1,14,1,14,5,14,337,8,14,
10,14,12,14,340,9,14,1,14,1,14,3,14,344,8,14,1,14,3,14,347,8,14,1,15,1,15,
1,15,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,16,1,
16,1,16,5,16,367,8,16,10,16,12,16,370,9,16,1,16,1,16,1,16,3,16,375,8,16,
1,17,1,17,5,17,379,8,17,10,17,12,17,382,9,17,1,17,1,17,4,17,386,8,17,11,
17,12,17,387,1,17,5,17,391,8,17,10,17,12,17,394,9,17,1,17,5,17,397,8,17,
10,17,12,17,400,9,17,3,17,402,8,17,1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,
18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,
1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,
18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,449,8,18,1,18,1,18,1,18,
1,18,1,18,1,18,1,18,1,18,1,18,3,18,460,8,18,1,18,1,18,3,18,464,8,18,1,18,
1,18,3,18,468,8,18,1,18,1,18,1,18,1,18,1,18,1,18,3,18,476,8,18,1,18,1,18,
3,18,480,8,18,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,3,19,490,8,19,1,20,
1,20,1,20,1,20,1,21,1,21,1,22,1,22,1,22,5,22,501,8,22,10,22,12,22,504,9,
22,1,23,1,23,1,23,5,23,509,8,23,10,23,12,23,512,9,23,1,24,1,24,1,24,5,24,
517,8,24,10,24,12,24,520,9,24,1,25,1,25,1,25,5,25,525,8,25,10,25,12,25,528,
9,25,1,26,1,26,1,26,5,26,533,8,26,10,26,12,26,536,9,26,1,27,1,27,1,27,5,
27,541,8,27,10,27,12,27,544,9,27,1,28,1,28,1,28,5,28,549,8,28,10,28,12,28,
552,9,28,1,29,1,29,1,29,5,29,557,8,29,10,29,12,29,560,9,29,1,30,1,30,1,30,
5,30,565,8,30,10,30,12,30,568,9,30,1,31,1,31,1,31,5,31,573,8,31,10,31,12,
31,576,9,31,1,32,1,32,1,32,1,32,1,32,3,32,583,8,32,1,33,1,33,1,33,1,33,1,
33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,
1,33,1,33,1,33,1,33,1,33,3,33,609,8,33,1,33,1,33,1,33,1,33,1,33,1,33,3,33,
617,8,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,1,33,
1,33,3,33,633,8,33,1,34,1,34,1,34,5,34,638,8,34,10,34,12,34,641,9,34,1,35,
1,35,1,35,0,0,36,0,2,4,6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,
40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,0,8,2,0,21,22,70,70,1,0,
28,29,3,0,14,14,16,16,30,31,1,0,35,36,1,0,23,24,1,0,25,27,2,0,24,24,59,60,
2,0,62,63,65,68,735,0,75,1,0,0,0,2,99,1,0,0,0,4,101,1,0,0,0,6,104,1,0,0,
0,8,109,1,0,0,0,10,149,1,0,0,0,12,151,1,0,0,0,14,187,1,0,0,0,16,189,1,0,
0,0,18,230,1,0,0,0,20,301,1,0,0,0,22,303,1,0,0,0,24,323,1,0,0,0,26,325,1,
0,0,0,28,346,1,0,0,0,30,348,1,0,0,0,32,374,1,0,0,0,34,376,1,0,0,0,36,479,
1,0,0,0,38,489,1,0,0,0,40,491,1,0,0,0,42,495,1,0,0,0,44,497,1,0,0,0,46,505,
1,0,0,0,48,513,1,0,0,0,50,521,1,0,0,0,52,529,1,0,0,0,54,537,1,0,0,0,56,545,
1,0,0,0,58,553,1,0,0,0,60,561,1,0,0,0,62,569,1,0,0,0,64,582,1,0,0,0,66,632,
1,0,0,0,68,634,1,0,0,0,70,642,1,0,0,0,72,74,5,71,0,0,73,72,1,0,0,0,74,77,
1,0,0,0,75,73,1,0,0,0,75,76,1,0,0,0,76,87,1,0,0,0,77,75,1,0,0,0,78,82,3,
2,1,0,79,81,5,71,0,0,80,79,1,0,0,0,81,84,1,0,0,0,82,80,1,0,0,0,82,83,1,0,
0,0,83,86,1,0,0,0,84,82,1,0,0,0,85,78,1,0,0,0,86,89,1,0,0,0,87,85,1,0,0,
0,87,88,1,0,0,0,88,90,1,0,0,0,89,87,1,0,0,0,90,91,5,0,0,1,91,1,1,0,0,0,92,
100,3,10,5,0,93,100,3,12,6,0,94,100,3,18,9,0,95,100,3,16,8,0,96,100,3,6,
3,0,97,100,3,4,2,0,98,100,3,8,4,0,99,92,1,0,0,0,99,93,1,0,0,0,99,94,1,0,
0,0,99,95,1,0,0,0,99,96,1,0,0,0,99,97,1,0,0,0,99,98,1,0,0,0,100,3,1,0,0,
0,101,102,5,1,0,0,102,103,5,68,0,0,103,5,1,0,0,0,104,105,5,2,0,0,105,106,
5,70,0,0,106,107,5,3,0,0,107,108,3,70,35,0,108,7,1,0,0,0,109,110,5,4,0,0,
110,111,5,70,0,0,111,112,5,3,0,0,112,113,3,32,16,0,113,9,1,0,0,0,114,115,
5,5,0,0,115,116,5,6,0,0,116,117,5,70,0,0,117,119,5,7,0,0,118,120,3,28,14,
0,119,118,1,0,0,0,119,120,1,0,0,0,120,121,1,0,0,0,121,122,5,8,0,0,122,150,
3,32,16,0,123,124,5,5,0,0,124,125,5,6,0,0,125,126,5,70,0,0,126,128,5,7,0,
0,127,129,3,28,14,0,128,127,1,0,0,0,128,129,1,0,0,0,129,130,1,0,0,0,130,
150,5,8,0,0,131,132,5,6,0,0,132,133,5,70,0,0,133,135,5,7,0,0,134,136,3,26,
13,0,135,134,1,0,0,0,135,136,1,0,0,0,136,137,1,0,0,0,137,138,5,8,0,0,138,
139,3,32,16,0,139,140,3,34,17,0,140,150,1,0,0,0,141,142,5,6,0,0,142,143,
5,70,0,0,143,145,5,7,0,0,144,146,3,26,13,0,145,144,1,0,0,0,145,146,1,0,0,
0,146,147,1,0,0,0,147,148,5,8,0,0,148,150,3,34,17,0,149,114,1,0,0,0,149,
123,1,0,0,0,149,131,1,0,0,0,149,141,1,0,0,0,150,11,1,0,0,0,151,152,5,9,0,
0,152,153,5,70,0,0,153,157,5,10,0,0,154,156,5,71,0,0,155,154,1,0,0,0,156,
159,1,0,0,0,157,155,1,0,0,0,157,158,1,0,0,0,158,178,1,0,0,0,159,157,1,0,
0,0,160,169,3,14,7,0,161,163,5,71,0,0,162,161,1,0,0,0,163,164,1,0,0,0,164,
162,1,0,0,0,164,165,1,0,0,0,165,166,1,0,0,0,166,168,3,14,7,0,167,162,1,0,
0,0,168,171,1,0,0,0,169,167,1,0,0,0,169,170,1,0,0,0,170,175,1,0,0,0,171,
169,1,0,0,0,172,174,5,71,0,0,173,172,1,0,0,0,174,177,1,0,0,0,175,173,1,0,
0,0,175,176,1,0,0,0,176,179,1,0,0,0,177,175,1,0,0,0,178,160,1,0,0,0,178,
179,1,0,0,0,179,180,1,0,0,0,180,181,5,11,0,0,181,13,1,0,0,0,182,183,3,32,
16,0,183,184,3,22,11,0,184,188,1,0,0,0,185,186,5,12,0,0,186,188,5,65,0,0,
187,182,1,0,0,0,187,185,1,0,0,0,188,15,1,0,0,0,189,190,5,13,0,0,190,191,
5,70,0,0,191,192,5,14,0,0,192,197,5,70,0,0,193,194,5,15,0,0,194,196,5,70,
0,0,195,193,1,0,0,0,196,199,1,0,0,0,197,195,1,0,0,0,197,198,1,0,0,0,198,
200,1,0,0,0,199,197,1,0,0,0,200,201,5,16,0,0,201,205,5,10,0,0,202,204,5,
71,0,0,203,202,1,0,0,0,204,207,1,0,0,0,205,203,1,0,0,0,205,206,1,0,0,0,206,
226,1,0,0,0,207,205,1,0,0,0,208,217,3,20,10,0,209,211,5,71,0,0,210,209,1,
0,0,0,211,212,1,0,0,0,212,210,1,0,0,0,212,213,1,0,0,0,213,214,1,0,0,0,214,
216,3,20,10,0,215,210,1,0,0,0,216,219,1,0,0,0,217,215,1,0,0,0,217,218,1,
0,0,0,218,223,1,0,0,0,219,217,1,0,0,0,220,222,5,71,0,0,221,220,1,0,0,0,222,
225,1,0,0,0,223,221,1,0,0,0,223,224,1,0,0,0,224,227,1,0,0,0,225,223,1,0,
0,0,226,208,1,0,0,0,226,227,1,0,0,0,227,228,1,0,0,0,228,229,5,11,0,0,229,
17,1,0,0,0,230,231,5,17,0,0,231,232,5,70,0,0,232,236,5,10,0,0,233,235,5,
71,0,0,234,233,1,0,0,0,235,238,1,0,0,0,236,234,1,0,0,0,236,237,1,0,0,0,237,
257,1,0,0,0,238,236,1,0,0,0,239,248,3,20,10,0,240,242,5,71,0,0,241,240,1,
0,0,0,242,243,1,0,0,0,243,241,1,0,0,0,243,244,1,0,0,0,244,245,1,0,0,0,245,
247,3,20,10,0,246,241,1,0,0,0,247,250,1,0,0,0,248,246,1,0,0,0,248,249,1,
0,0,0,249,254,1,0,0,0,250,248,1,0,0,0,251,253,5,71,0,0,252,251,1,0,0,0,253,
256,1,0,0,0,254,252,1,0,0,0,254,255,1,0,0,0,255,258,1,0,0,0,256,254,1,0,
0,0,257,239,1,0,0,0,257,258,1,0,0,0,258,259,1,0,0,0,259,260,5,11,0,0,260,
19,1,0,0,0,261,262,3,32,16,0,262,263,3,22,11,0,263,302,1,0,0,0,264,265,5,
6,0,0,265,266,5,70,0,0,266,268,5,7,0,0,267,269,3,26,13,0,268,267,1,0,0,0,
268,269,1,0,0,0,269,270,1,0,0,0,270,271,5,8,0,0,271,272,3,32,16,0,272,273,
3,34,17,0,273,302,1,0,0,0,274,275,5,6,0,0,275,276,5,70,0,0,276,278,5,7,0,
0,277,279,3,26,13,0,278,277,1,0,0,0,278,279,1,0,0,0,279,280,1,0,0,0,280,
281,5,8,0,0,281,302,3,34,17,0,282,283,5,18,0,0,283,284,3,24,12,0,284,285,
5,7,0,0,285,286,3,30,15,0,286,287,5,8,0,0,287,288,3,32,16,0,288,289,3,34,
17,0,289,302,1,0,0,0,290,291,5,19,0,0,291,293,5,7,0,0,292,294,3,26,13,0,
293,292,1,0,0,0,293,294,1,0,0,0,294,295,1,0,0,0,295,296,5,8,0,0,296,302,
3,34,17,0,297,298,5,20,0,0,298,299,5,7,0,0,299,300,5,8,0,0,300,302,3,34,
17,0,301,261,1,0,0,0,301,264,1,0,0,0,301,274,1,0,0,0,301,282,1,0,0,0,301,
290,1,0,0,0,301,297,1,0,0,0,302,21,1,0,0,0,303,304,7,0,0,0,304,23,1,0,0,
0,305,324,5,23,0,0,306,324,5,24,0,0,307,324,5,25,0,0,308,324,5,26,0,0,309,
324,5,27,0,0,310,324,5,28,0,0,311,324,5,29,0,0,312,324,5,14,0,0,313,324,
5,30,0,0,314,324,5,16,0,0,315,324,5,31,0,0,316,324,5,32,0,0,317,324,5,33,
0,0,318,324,5,34,0,0,319,324,5,35,0,0,320,324,5,36,0,0,321,322,5,37,0,0,
322,324,5,38,0,0,323,305,1,0,0,0,323,306,1,0,0,0,323,307,1,0,0,0,323,308,
1,0,0,0,323,309,1,0,0,0,323,310,1,0,0,0,323,311,1,0,0,0,323,312,1,0,0,0,
323,313,1,0,0,0,323,314,1,0,0,0,323,315,1,0,0,0,323,316,1,0,0,0,323,317,
1,0,0,0,323,318,1,0,0,0,323,319,1,0,0,0,323,320,1,0,0,0,323,321,1,0,0,0,
324,25,1,0,0,0,325,330,3,30,15,0,326,327,5,15,0,0,327,329,3,30,15,0,328,
326,1,0,0,0,329,332,1,0,0,0,330,328,1,0,0,0,330,331,1,0,0,0,331,27,1,0,0,
0,332,330,1,0,0,0,333,338,3,30,15,0,334,335,5,15,0,0,335,337,3,30,15,0,336,
334,1,0,0,0,337,340,1,0,0,0,338,336,1,0,0,0,338,339,1,0,0,0,339,343,1,0,
0,0,340,338,1,0,0,0,341,342,5,15,0,0,342,344,5,39,0,0,343,341,1,0,0,0,343,
344,1,0,0,0,344,347,1,0,0,0,345,347,5,39,0,0,346,333,1,0,0,0,346,345,1,0,
0,0,347,29,1,0,0,0,348,349,3,32,16,0,349,350,5,70,0,0,350,31,1,0,0,0,351,
375,5,40,0,0,352,375,5,41,0,0,353,375,5,42,0,0,354,375,5,43,0,0,355,375,
5,44,0,0,356,375,5,22,0,0,357,358,5,45,0,0,358,375,5,40,0,0,359,360,5,45,
0,0,360,375,5,43,0,0,361,362,5,70,0,0,362,363,5,14,0,0,363,368,3,32,16,0,
364,365,5,15,0,0,365,367,3,32,16,0,366,364,1,0,0,0,367,370,1,0,0,0,368,366,
1,0,0,0,368,369,1,0,0,0,369,371,1,0,0,0,370,368,1,0,0,0,371,372,5,16,0,0,
372,375,1,0,0,0,373,375,5,70,0,0,374,351,1,0,0,0,374,352,1,0,0,0,374,353,
1,0,0,0,374,354,1,0,0,0,374,355,1,0,0,0,374,356,1,0,0,0,374,357,1,0,0,0,
374,359,1,0,0,0,374,361,1,0,0,0,374,373,1,0,0,0,375,33,1,0,0,0,376,380,5,
10,0,0,377,379,5,71,0,0,378,377,1,0,0,0,379,382,1,0,0,0,380,378,1,0,0,0,
380,381,1,0,0,0,381,401,1,0,0,0,382,380,1,0,0,0,383,392,3,36,18,0,384,386,
5,71,0,0,385,384,1,0,0,0,386,387,1,0,0,0,387,385,1,0,0,0,387,388,1,0,0,0,
388,389,1,0,0,0,389,391,3,36,18,0,390,385,1,0,0,0,391,394,1,0,0,0,392,390,
1,0,0,0,392,393,1,0,0,0,393,398,1,0,0,0,394,392,1,0,0,0,395,397,5,71,0,0,
396,395,1,0,0,0,397,400,1,0,0,0,398,396,1,0,0,0,398,399,1,0,0,0,399,402,
1,0,0,0,400,398,1,0,0,0,401,383,1,0,0,0,401,402,1,0,0,0,402,403,1,0,0,0,
403,404,5,11,0,0,404,35,1,0,0,0,405,406,3,32,16,0,406,407,5,70,0,0,407,408,
5,37,0,0,408,409,5,65,0,0,409,410,5,38,0,0,410,480,1,0,0,0,411,412,3,32,
16,0,412,413,5,70,0,0,413,414,5,3,0,0,414,415,3,42,21,0,415,480,1,0,0,0,
416,417,3,32,16,0,417,418,5,70,0,0,418,480,1,0,0,0,419,420,5,70,0,0,420,
421,5,37,0,0,421,422,3,42,21,0,422,423,5,38,0,0,423,424,5,3,0,0,424,425,
3,42,21,0,425,480,1,0,0,0,426,427,5,70,0,0,427,428,5,3,0,0,428,480,3,42,
21,0,429,430,5,70,0,0,430,431,5,46,0,0,431,432,3,22,11,0,432,433,5,3,0,0,
433,434,3,42,21,0,434,480,1,0,0,0,435,436,5,70,0,0,436,437,5,47,0,0,437,
438,5,21,0,0,438,439,5,3,0,0,439,480,3,42,21,0,440,480,3,42,21,0,441,442,
5,48,0,0,442,443,5,7,0,0,443,444,3,42,21,0,444,445,5,8,0,0,445,448,3,34,
17,0,446,447,5,49,0,0,447,449,3,34,17,0,448,446,1,0,0,0,448,449,1,0,0,0,
449,480,1,0,0,0,450,451,5,50,0,0,451,452,5,7,0,0,452,453,3,42,21,0,453,454,
5,8,0,0,454,455,3,34,17,0,455,480,1,0,0,0,456,457,5,51,0,0,457,459,5,7,0,
0,458,460,3,38,19,0,459,458,1,0,0,0,459,460,1,0,0,0,460,461,1,0,0,0,461,
463,5,52,0,0,462,464,3,42,21,0,463,462,1,0,0,0,463,464,1,0,0,0,464,465,1,
0,0,0,465,467,5,52,0,0,466,468,3,40,20,0,467,466,1,0,0,0,467,468,1,0,0,0,
468,469,1,0,0,0,469,470,5,8,0,0,470,480,3,34,17,0,471,480,5,53,0,0,472,480,
5,54,0,0,473,475,5,55,0,0,474,476,3,42,21,0,475,474,1,0,0,0,475,476,1,0,
0,0,476,480,1,0,0,0,477,478,5,56,0,0,478,480,3,42,21,0,479,405,1,0,0,0,479,
411,1,0,0,0,479,416,1,0,0,0,479,419,1,0,0,0,479,426,1,0,0,0,479,429,1,0,
0,0,479,435,1,0,0,0,479,440,1,0,0,0,479,441,1,0,0,0,479,450,1,0,0,0,479,
456,1,0,0,0,479,471,1,0,0,0,479,472,1,0,0,0,479,473,1,0,0,0,479,477,1,0,
0,0,480,37,1,0,0,0,481,482,3,32,16,0,482,483,5,70,0,0,483,484,5,3,0,0,484,
485,3,42,21,0,485,490,1,0,0,0,486,487,5,70,0,0,487,488,5,3,0,0,488,490,3,
42,21,0,489,481,1,0,0,0,489,486,1,0,0,0,490,39,1,0,0,0,491,492,5,70,0,0,
492,493,5,3,0,0,493,494,3,42,21,0,494,41,1,0,0,0,495,496,3,44,22,0,496,43,
1,0,0,0,497,502,3,46,23,0,498,499,5,57,0,0,499,501,3,46,23,0,500,498,1,0,
0,0,501,504,1,0,0,0,502,500,1,0,0,0,502,503,1,0,0,0,503,45,1,0,0,0,504,502,
1,0,0,0,505,510,3,48,24,0,506,507,5,58,0,0,507,509,3,48,24,0,508,506,1,0,
0,0,509,512,1,0,0,0,510,508,1,0,0,0,510,511,1,0,0,0,511,47,1,0,0,0,512,510,
1,0,0,0,513,518,3,50,25,0,514,515,5,33,0,0,515,517,3,50,25,0,516,514,1,0,
0,0,517,520,1,0,0,0,518,516,1,0,0,0,518,519,1,0,0,0,519,49,1,0,0,0,520,518,
1,0,0,0,521,526,3,52,26,0,522,523,5,34,0,0,523,525,3,52,26,0,524,522,1,0,
0,0,525,528,1,0,0,0,526,524,1,0,0,0,526,527,1,0,0,0,527,51,1,0,0,0,528,526,
1,0,0,0,529,534,3,54,27,0,530,531,5,32,0,0,531,533,3,54,27,0,532,530,1,0,
0,0,533,536,1,0,0,0,534,532,1,0,0,0,534,535,1,0,0,0,535,53,1,0,0,0,536,534,
1,0,0,0,537,542,3,56,28,0,538,539,7,1,0,0,539,541,3,56,28,0,540,538,1,0,
0,0,541,544,1,0,0,0,542,540,1,0,0,0,542,543,1,0,0,0,543,55,1,0,0,0,544,542,
1,0,0,0,545,550,3,58,29,0,546,547,7,2,0,0,547,549,3,58,29,0,548,546,1,0,
0,0,549,552,1,0,0,0,550,548,1,0,0,0,550,551,1,0,0,0,551,57,1,0,0,0,552,550,
1,0,0,0,553,558,3,60,30,0,554,555,7,3,0,0,555,557,3,60,30,0,556,554,1,0,
0,0,557,560,1,0,0,0,558,556,1,0,0,0,558,559,1,0,0,0,559,59,1,0,0,0,560,558,
1,0,0,0,561,566,3,62,31,0,562,563,7,4,0,0,563,565,3,62,31,0,564,562,1,0,
0,0,565,568,1,0,0,0,566,564,1,0,0,0,566,567,1,0,0,0,567,61,1,0,0,0,568,566,
1,0,0,0,569,574,3,64,32,0,570,571,7,5,0,0,571,573,3,64,32,0,572,570,1,0,
0,0,573,576,1,0,0,0,574,572,1,0,0,0,574,575,1,0,0,0,575,63,1,0,0,0,576,574,
1,0,0,0,577,578,7,6,0,0,578,583,3,64,32,0,579,580,5,61,0,0,580,583,3,64,
32,0,581,583,3,66,33,0,582,577,1,0,0,0,582,579,1,0,0,0,582,581,1,0,0,0,583,
65,1,0,0,0,584,633,5,65,0,0,585,633,5,66,0,0,586,633,5,67,0,0,587,633,5,
68,0,0,588,633,5,69,0,0,589,633,5,62,0,0,590,633,5,63,0,0,591,633,5,64,0,
0,592,593,5,70,0,0,593,594,5,37,0,0,594,595,3,42,21,0,595,596,5,38,0,0,596,
597,5,47,0,0,597,598,5,22,0,0,598,633,1,0,0,0,599,600,5,70,0,0,600,601,5,
47,0,0,601,633,5,22,0,0,602,603,5,70,0,0,603,604,5,47,0,0,604,633,5,21,0,
0,605,606,5,70,0,0,606,608,5,7,0,0,607,609,3,68,34,0,608,607,1,0,0,0,608,
609,1,0,0,0,609,610,1,0,0,0,610,633,5,8,0,0,611,612,5,70,0,0,612,613,5,46,
0,0,613,614,5,70,0,0,614,616,5,7,0,0,615,617,3,68,34,0,616,615,1,0,0,0,616,
617,1,0,0,0,617,618,1,0,0,0,618,633,5,8,0,0,619,620,5,70,0,0,620,621,5,37,
0,0,621,622,3,42,21,0,622,623,5,38,0,0,623,633,1,0,0,0,624,625,5,70,0,0,
625,626,5,46,0,0,626,633,3,22,11,0,627,633,5,70,0,0,628,629,5,7,0,0,629,
630,3,42,21,0,630,631,5,8,0,0,631,633,1,0,0,0,632,584,1,0,0,0,632,585,1,
0,0,0,632,586,1,0,0,0,632,587,1,0,0,0,632,588,1,0,0,0,632,589,1,0,0,0,632,
590,1,0,0,0,632,591,1,0,0,0,632,592,1,0,0,0,632,599,1,0,0,0,632,602,1,0,
0,0,632,605,1,0,0,0,632,611,1,0,0,0,632,619,1,0,0,0,632,624,1,0,0,0,632,
627,1,0,0,0,632,628,1,0,0,0,633,67,1,0,0,0,634,639,3,42,21,0,635,636,5,15,
0,0,636,638,3,42,21,0,637,635,1,0,0,0,638,641,1,0,0,0,639,637,1,0,0,0,639,
640,1,0,0,0,640,69,1,0,0,0,641,639,1,0,0,0,642,643,7,7,0,0,643,71,1,0,0,
0,64,75,82,87,99,119,128,135,145,149,157,164,169,175,178,187,197,205,212,
217,223,226,236,243,248,254,257,268,278,293,301,323,330,338,343,346,368,
374,380,387,392,398,401,448,459,463,467,475,479,489,502,510,518,526,534,
542,550,558,566,574,582,608,616,632,639];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class HopperParser extends antlr4.Parser {

    static grammarFileName = "Hopper.g4";
    static literalNames = [ null, "'import'", "'const'", "'='", "'alias'", 
                            "'extern'", "'function'", "'('", "')'", "'struct'", 
                            "'{'", "'}'", "'pad'", "'template'", "'<'", 
                            "','", "'>'", "'class'", "'operator'", "'constructor'", 
                            "'destructor'", "'value'", "'address'", "'+'", 
                            "'-'", "'*'", "'/'", "'%'", "'=='", "'!='", 
                            "'<='", "'>='", "'&'", "'|'", "'^'", "'<<'", 
                            "'>>'", "'['", "']'", "'...'", "'int'", "'bool'", 
                            "'float'", "'byte'", "'String'", "'unsigned'", 
                            "'.'", "'::'", "'if'", "'else'", "'while'", 
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
                             null, "IntegerLiteral", "HexLiteral", "FloatLiteral", 
                             "StringLiteral", "CharLiteral", "Identifier", 
                             "NEWLINE", "LINE_COMMENT", "WS" ];
    static ruleNames = [ "program", "topLevelDecl", "importDecl", "constDecl", 
                         "aliasDecl", "functionDecl", "structDecl", "structMember", 
                         "templateDecl", "classDecl", "classMember", "fieldName", 
                         "operatorSymbol", "paramList", "externParamList", 
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
	        this.state = 75;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===71) {
	            this.state = 72;
	            this.match(HopperParser.NEWLINE);
	            this.state = 77;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 87;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 139894) !== 0)) {
	            this.state = 78;
	            this.topLevelDecl();
	            this.state = 82;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===71) {
	                this.state = 79;
	                this.match(HopperParser.NEWLINE);
	                this.state = 84;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 89;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 90;
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
	        this.state = 99;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	        case 6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 92;
	            this.functionDecl();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 93;
	            this.structDecl();
	            break;
	        case 17:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 94;
	            this.classDecl();
	            break;
	        case 13:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 95;
	            this.templateDecl();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 96;
	            this.constDecl();
	            break;
	        case 1:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 97;
	            this.importDecl();
	            break;
	        case 4:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 98;
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
	        this.state = 101;
	        this.match(HopperParser.T__0);
	        this.state = 102;
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
	        this.state = 104;
	        this.match(HopperParser.T__1);
	        this.state = 105;
	        this.match(HopperParser.Identifier);
	        this.state = 106;
	        this.match(HopperParser.T__2);
	        this.state = 107;
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
	        this.state = 109;
	        this.match(HopperParser.T__3);
	        this.state = 110;
	        this.match(HopperParser.Identifier);
	        this.state = 111;
	        this.match(HopperParser.T__2);
	        this.state = 112;
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
	        this.state = 149;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,8,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ExternFuncDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 114;
	            this.match(HopperParser.T__4);
	            this.state = 115;
	            this.match(HopperParser.T__5);
	            this.state = 116;
	            this.match(HopperParser.Identifier);
	            this.state = 117;
	            this.match(HopperParser.T__6);
	            this.state = 119;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===22 || ((((_la - 39)) & ~0x1f) === 0 && ((1 << (_la - 39)) & 2147483775) !== 0)) {
	                this.state = 118;
	                this.externParamList();
	            }

	            this.state = 121;
	            this.match(HopperParser.T__7);
	            this.state = 122;
	            this.type();
	            break;

	        case 2:
	            localctx = new ExternProcDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 123;
	            this.match(HopperParser.T__4);
	            this.state = 124;
	            this.match(HopperParser.T__5);
	            this.state = 125;
	            this.match(HopperParser.Identifier);
	            this.state = 126;
	            this.match(HopperParser.T__6);
	            this.state = 128;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===22 || ((((_la - 39)) & ~0x1f) === 0 && ((1 << (_la - 39)) & 2147483775) !== 0)) {
	                this.state = 127;
	                this.externParamList();
	            }

	            this.state = 130;
	            this.match(HopperParser.T__7);
	            break;

	        case 3:
	            localctx = new FuncDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 131;
	            this.match(HopperParser.T__5);
	            this.state = 132;
	            this.match(HopperParser.Identifier);
	            this.state = 133;
	            this.match(HopperParser.T__6);
	            this.state = 135;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===22 || ((((_la - 40)) & ~0x1f) === 0 && ((1 << (_la - 40)) & 1073741887) !== 0)) {
	                this.state = 134;
	                this.paramList();
	            }

	            this.state = 137;
	            this.match(HopperParser.T__7);
	            this.state = 138;
	            this.type();
	            this.state = 139;
	            this.block();
	            break;

	        case 4:
	            localctx = new ProcDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 141;
	            this.match(HopperParser.T__5);
	            this.state = 142;
	            this.match(HopperParser.Identifier);
	            this.state = 143;
	            this.match(HopperParser.T__6);
	            this.state = 145;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===22 || ((((_la - 40)) & ~0x1f) === 0 && ((1 << (_la - 40)) & 1073741887) !== 0)) {
	                this.state = 144;
	                this.paramList();
	            }

	            this.state = 147;
	            this.match(HopperParser.T__7);
	            this.state = 148;
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
	        this.state = 151;
	        this.match(HopperParser.T__8);
	        this.state = 152;
	        this.match(HopperParser.Identifier);
	        this.state = 153;
	        this.match(HopperParser.T__9);
	        this.state = 157;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===71) {
	            this.state = 154;
	            this.match(HopperParser.NEWLINE);
	            this.state = 159;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 178;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===12 || _la===22 || ((((_la - 40)) & ~0x1f) === 0 && ((1 << (_la - 40)) & 1073741887) !== 0)) {
	            this.state = 160;
	            this.structMember();
	            this.state = 169;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,11,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 162; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    do {
	                        this.state = 161;
	                        this.match(HopperParser.NEWLINE);
	                        this.state = 164; 
	                        this._errHandler.sync(this);
	                        _la = this._input.LA(1);
	                    } while(_la===71);
	                    this.state = 166;
	                    this.structMember(); 
	                }
	                this.state = 171;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,11,this._ctx);
	            }

	            this.state = 175;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===71) {
	                this.state = 172;
	                this.match(HopperParser.NEWLINE);
	                this.state = 177;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 180;
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
	        this.state = 187;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 22:
	        case 40:
	        case 41:
	        case 42:
	        case 43:
	        case 44:
	        case 45:
	        case 70:
	            localctx = new StructFieldContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 182;
	            this.type();
	            this.state = 183;
	            this.fieldName();
	            break;
	        case 12:
	            localctx = new StructPadContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 185;
	            this.match(HopperParser.T__11);
	            this.state = 186;
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
	    this.enterRule(localctx, 16, HopperParser.RULE_templateDecl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 189;
	        this.match(HopperParser.T__12);
	        this.state = 190;
	        this.match(HopperParser.Identifier);
	        this.state = 191;
	        this.match(HopperParser.T__13);
	        this.state = 192;
	        this.match(HopperParser.Identifier);
	        this.state = 197;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===15) {
	            this.state = 193;
	            this.match(HopperParser.T__14);
	            this.state = 194;
	            this.match(HopperParser.Identifier);
	            this.state = 199;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 200;
	        this.match(HopperParser.T__15);
	        this.state = 201;
	        this.match(HopperParser.T__9);
	        this.state = 205;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===71) {
	            this.state = 202;
	            this.match(HopperParser.NEWLINE);
	            this.state = 207;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 226;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 6029376) !== 0) || ((((_la - 40)) & ~0x1f) === 0 && ((1 << (_la - 40)) & 1073741887) !== 0)) {
	            this.state = 208;
	            this.classMember();
	            this.state = 217;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,18,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 210; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    do {
	                        this.state = 209;
	                        this.match(HopperParser.NEWLINE);
	                        this.state = 212; 
	                        this._errHandler.sync(this);
	                        _la = this._input.LA(1);
	                    } while(_la===71);
	                    this.state = 214;
	                    this.classMember(); 
	                }
	                this.state = 219;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,18,this._ctx);
	            }

	            this.state = 223;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===71) {
	                this.state = 220;
	                this.match(HopperParser.NEWLINE);
	                this.state = 225;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 228;
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



	classDecl() {
	    let localctx = new ClassDeclContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 18, HopperParser.RULE_classDecl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 230;
	        this.match(HopperParser.T__16);
	        this.state = 231;
	        this.match(HopperParser.Identifier);
	        this.state = 232;
	        this.match(HopperParser.T__9);
	        this.state = 236;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===71) {
	            this.state = 233;
	            this.match(HopperParser.NEWLINE);
	            this.state = 238;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 257;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 6029376) !== 0) || ((((_la - 40)) & ~0x1f) === 0 && ((1 << (_la - 40)) & 1073741887) !== 0)) {
	            this.state = 239;
	            this.classMember();
	            this.state = 248;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,23,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 241; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    do {
	                        this.state = 240;
	                        this.match(HopperParser.NEWLINE);
	                        this.state = 243; 
	                        this._errHandler.sync(this);
	                        _la = this._input.LA(1);
	                    } while(_la===71);
	                    this.state = 245;
	                    this.classMember(); 
	                }
	                this.state = 250;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,23,this._ctx);
	            }

	            this.state = 254;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===71) {
	                this.state = 251;
	                this.match(HopperParser.NEWLINE);
	                this.state = 256;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 259;
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
	    this.enterRule(localctx, 20, HopperParser.RULE_classMember);
	    var _la = 0;
	    try {
	        this.state = 301;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,29,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ClassFieldContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 261;
	            this.type();
	            this.state = 262;
	            this.fieldName();
	            break;

	        case 2:
	            localctx = new ClassMethodContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 264;
	            this.match(HopperParser.T__5);
	            this.state = 265;
	            this.match(HopperParser.Identifier);
	            this.state = 266;
	            this.match(HopperParser.T__6);
	            this.state = 268;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===22 || ((((_la - 40)) & ~0x1f) === 0 && ((1 << (_la - 40)) & 1073741887) !== 0)) {
	                this.state = 267;
	                this.paramList();
	            }

	            this.state = 270;
	            this.match(HopperParser.T__7);
	            this.state = 271;
	            this.type();
	            this.state = 272;
	            this.block();
	            break;

	        case 3:
	            localctx = new ClassProcMethodContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 274;
	            this.match(HopperParser.T__5);
	            this.state = 275;
	            this.match(HopperParser.Identifier);
	            this.state = 276;
	            this.match(HopperParser.T__6);
	            this.state = 278;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===22 || ((((_la - 40)) & ~0x1f) === 0 && ((1 << (_la - 40)) & 1073741887) !== 0)) {
	                this.state = 277;
	                this.paramList();
	            }

	            this.state = 280;
	            this.match(HopperParser.T__7);
	            this.state = 281;
	            this.block();
	            break;

	        case 4:
	            localctx = new ClassOperatorContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 282;
	            this.match(HopperParser.T__17);
	            this.state = 283;
	            this.operatorSymbol();
	            this.state = 284;
	            this.match(HopperParser.T__6);
	            this.state = 285;
	            this.param();
	            this.state = 286;
	            this.match(HopperParser.T__7);
	            this.state = 287;
	            this.type();
	            this.state = 288;
	            this.block();
	            break;

	        case 5:
	            localctx = new ClassConstructorContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 290;
	            this.match(HopperParser.T__18);
	            this.state = 291;
	            this.match(HopperParser.T__6);
	            this.state = 293;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===22 || ((((_la - 40)) & ~0x1f) === 0 && ((1 << (_la - 40)) & 1073741887) !== 0)) {
	                this.state = 292;
	                this.paramList();
	            }

	            this.state = 295;
	            this.match(HopperParser.T__7);
	            this.state = 296;
	            this.block();
	            break;

	        case 6:
	            localctx = new ClassDestructorContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 297;
	            this.match(HopperParser.T__19);
	            this.state = 298;
	            this.match(HopperParser.T__6);
	            this.state = 299;
	            this.match(HopperParser.T__7);
	            this.state = 300;
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
	    this.enterRule(localctx, 22, HopperParser.RULE_fieldName);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 303;
	        _la = this._input.LA(1);
	        if(!(_la===21 || _la===22 || _la===70)) {
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
	    this.enterRule(localctx, 24, HopperParser.RULE_operatorSymbol);
	    try {
	        this.state = 323;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 23:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 305;
	            this.match(HopperParser.T__22);
	            break;
	        case 24:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 306;
	            this.match(HopperParser.T__23);
	            break;
	        case 25:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 307;
	            this.match(HopperParser.T__24);
	            break;
	        case 26:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 308;
	            this.match(HopperParser.T__25);
	            break;
	        case 27:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 309;
	            this.match(HopperParser.T__26);
	            break;
	        case 28:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 310;
	            this.match(HopperParser.T__27);
	            break;
	        case 29:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 311;
	            this.match(HopperParser.T__28);
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 312;
	            this.match(HopperParser.T__13);
	            break;
	        case 30:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 313;
	            this.match(HopperParser.T__29);
	            break;
	        case 16:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 314;
	            this.match(HopperParser.T__15);
	            break;
	        case 31:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 315;
	            this.match(HopperParser.T__30);
	            break;
	        case 32:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 316;
	            this.match(HopperParser.T__31);
	            break;
	        case 33:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 317;
	            this.match(HopperParser.T__32);
	            break;
	        case 34:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 318;
	            this.match(HopperParser.T__33);
	            break;
	        case 35:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 319;
	            this.match(HopperParser.T__34);
	            break;
	        case 36:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 320;
	            this.match(HopperParser.T__35);
	            break;
	        case 37:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 321;
	            this.match(HopperParser.T__36);
	            this.state = 322;
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



	paramList() {
	    let localctx = new ParamListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 26, HopperParser.RULE_paramList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 325;
	        this.param();
	        this.state = 330;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===15) {
	            this.state = 326;
	            this.match(HopperParser.T__14);
	            this.state = 327;
	            this.param();
	            this.state = 332;
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
	    this.enterRule(localctx, 28, HopperParser.RULE_externParamList);
	    var _la = 0;
	    try {
	        this.state = 346;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 22:
	        case 40:
	        case 41:
	        case 42:
	        case 43:
	        case 44:
	        case 45:
	        case 70:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 333;
	            this.param();
	            this.state = 338;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,32,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 334;
	                    this.match(HopperParser.T__14);
	                    this.state = 335;
	                    this.param(); 
	                }
	                this.state = 340;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,32,this._ctx);
	            }

	            this.state = 343;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===15) {
	                this.state = 341;
	                this.match(HopperParser.T__14);
	                this.state = 342;
	                this.match(HopperParser.T__38);
	            }

	            break;
	        case 39:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 345;
	            this.match(HopperParser.T__38);
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
	    this.enterRule(localctx, 30, HopperParser.RULE_param);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 348;
	        this.type();
	        this.state = 349;
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
	    this.enterRule(localctx, 32, HopperParser.RULE_type);
	    var _la = 0;
	    try {
	        this.state = 374;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,36,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 351;
	            this.match(HopperParser.T__39);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 352;
	            this.match(HopperParser.T__40);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 353;
	            this.match(HopperParser.T__41);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 354;
	            this.match(HopperParser.T__42);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 355;
	            this.match(HopperParser.T__43);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 356;
	            this.match(HopperParser.T__21);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 357;
	            this.match(HopperParser.T__44);
	            this.state = 358;
	            this.match(HopperParser.T__39);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 359;
	            this.match(HopperParser.T__44);
	            this.state = 360;
	            this.match(HopperParser.T__42);
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 361;
	            this.match(HopperParser.Identifier);
	            this.state = 362;
	            this.match(HopperParser.T__13);
	            this.state = 363;
	            this.type();
	            this.state = 368;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===15) {
	                this.state = 364;
	                this.match(HopperParser.T__14);
	                this.state = 365;
	                this.type();
	                this.state = 370;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 371;
	            this.match(HopperParser.T__15);
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 373;
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
	    this.enterRule(localctx, 34, HopperParser.RULE_block);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 376;
	        this.match(HopperParser.T__9);
	        this.state = 380;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===71) {
	            this.state = 377;
	            this.match(HopperParser.NEWLINE);
	            this.state = 382;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 401;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 20971648) !== 0) || ((((_la - 40)) & ~0x1f) === 0 && ((1 << (_la - 40)) & 2147085631) !== 0)) {
	            this.state = 383;
	            this.statement();
	            this.state = 392;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,39,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 385; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    do {
	                        this.state = 384;
	                        this.match(HopperParser.NEWLINE);
	                        this.state = 387; 
	                        this._errHandler.sync(this);
	                        _la = this._input.LA(1);
	                    } while(_la===71);
	                    this.state = 389;
	                    this.statement(); 
	                }
	                this.state = 394;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,39,this._ctx);
	            }

	            this.state = 398;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===71) {
	                this.state = 395;
	                this.match(HopperParser.NEWLINE);
	                this.state = 400;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 403;
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
	    this.enterRule(localctx, 36, HopperParser.RULE_statement);
	    var _la = 0;
	    try {
	        this.state = 479;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,47,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ArrayDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 405;
	            this.type();
	            this.state = 406;
	            this.match(HopperParser.Identifier);
	            this.state = 407;
	            this.match(HopperParser.T__36);
	            this.state = 408;
	            this.match(HopperParser.IntegerLiteral);
	            this.state = 409;
	            this.match(HopperParser.T__37);
	            break;

	        case 2:
	            localctx = new VarDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 411;
	            this.type();
	            this.state = 412;
	            this.match(HopperParser.Identifier);
	            this.state = 413;
	            this.match(HopperParser.T__2);
	            this.state = 414;
	            this.expression();
	            break;

	        case 3:
	            localctx = new VarDeclNoInitContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 416;
	            this.type();
	            this.state = 417;
	            this.match(HopperParser.Identifier);
	            break;

	        case 4:
	            localctx = new ArrayAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 419;
	            this.match(HopperParser.Identifier);
	            this.state = 420;
	            this.match(HopperParser.T__36);
	            this.state = 421;
	            this.expression();
	            this.state = 422;
	            this.match(HopperParser.T__37);
	            this.state = 423;
	            this.match(HopperParser.T__2);
	            this.state = 424;
	            this.expression();
	            break;

	        case 5:
	            localctx = new AssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 426;
	            this.match(HopperParser.Identifier);
	            this.state = 427;
	            this.match(HopperParser.T__2);
	            this.state = 428;
	            this.expression();
	            break;

	        case 6:
	            localctx = new FieldAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 429;
	            this.match(HopperParser.Identifier);
	            this.state = 430;
	            this.match(HopperParser.T__45);
	            this.state = 431;
	            this.fieldName();
	            this.state = 432;
	            this.match(HopperParser.T__2);
	            this.state = 433;
	            this.expression();
	            break;

	        case 7:
	            localctx = new DerefAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 7);
	            this.state = 435;
	            this.match(HopperParser.Identifier);
	            this.state = 436;
	            this.match(HopperParser.T__46);
	            this.state = 437;
	            this.match(HopperParser.T__20);
	            this.state = 438;
	            this.match(HopperParser.T__2);
	            this.state = 439;
	            this.expression();
	            break;

	        case 8:
	            localctx = new ExprStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 8);
	            this.state = 440;
	            this.expression();
	            break;

	        case 9:
	            localctx = new IfStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 9);
	            this.state = 441;
	            this.match(HopperParser.T__47);
	            this.state = 442;
	            this.match(HopperParser.T__6);
	            this.state = 443;
	            this.expression();
	            this.state = 444;
	            this.match(HopperParser.T__7);
	            this.state = 445;
	            this.block();
	            this.state = 448;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===49) {
	                this.state = 446;
	                this.match(HopperParser.T__48);
	                this.state = 447;
	                this.block();
	            }

	            break;

	        case 10:
	            localctx = new WhileStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 10);
	            this.state = 450;
	            this.match(HopperParser.T__49);
	            this.state = 451;
	            this.match(HopperParser.T__6);
	            this.state = 452;
	            this.expression();
	            this.state = 453;
	            this.match(HopperParser.T__7);
	            this.state = 454;
	            this.block();
	            break;

	        case 11:
	            localctx = new ForStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 11);
	            this.state = 456;
	            this.match(HopperParser.T__50);
	            this.state = 457;
	            this.match(HopperParser.T__6);
	            this.state = 459;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===22 || ((((_la - 40)) & ~0x1f) === 0 && ((1 << (_la - 40)) & 1073741887) !== 0)) {
	                this.state = 458;
	                this.forInit();
	            }

	            this.state = 461;
	            this.match(HopperParser.T__51);
	            this.state = 463;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7 || _la===24 || ((((_la - 59)) & ~0x1f) === 0 && ((1 << (_la - 59)) & 4095) !== 0)) {
	                this.state = 462;
	                this.expression();
	            }

	            this.state = 465;
	            this.match(HopperParser.T__51);
	            this.state = 467;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===70) {
	                this.state = 466;
	                this.forUpdate();
	            }

	            this.state = 469;
	            this.match(HopperParser.T__7);
	            this.state = 470;
	            this.block();
	            break;

	        case 12:
	            localctx = new BreakStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 12);
	            this.state = 471;
	            this.match(HopperParser.T__52);
	            break;

	        case 13:
	            localctx = new ContinueStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 13);
	            this.state = 472;
	            this.match(HopperParser.T__53);
	            break;

	        case 14:
	            localctx = new ReturnStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 14);
	            this.state = 473;
	            this.match(HopperParser.T__54);
	            this.state = 475;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7 || _la===24 || ((((_la - 59)) & ~0x1f) === 0 && ((1 << (_la - 59)) & 4095) !== 0)) {
	                this.state = 474;
	                this.expression();
	            }

	            break;

	        case 15:
	            localctx = new DeferStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 15);
	            this.state = 477;
	            this.match(HopperParser.T__55);
	            this.state = 478;
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
	    this.enterRule(localctx, 38, HopperParser.RULE_forInit);
	    try {
	        this.state = 489;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,48,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ForInitDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 481;
	            this.type();
	            this.state = 482;
	            this.match(HopperParser.Identifier);
	            this.state = 483;
	            this.match(HopperParser.T__2);
	            this.state = 484;
	            this.expression();
	            break;

	        case 2:
	            localctx = new ForInitAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 486;
	            this.match(HopperParser.Identifier);
	            this.state = 487;
	            this.match(HopperParser.T__2);
	            this.state = 488;
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
	    this.enterRule(localctx, 40, HopperParser.RULE_forUpdate);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 491;
	        this.match(HopperParser.Identifier);
	        this.state = 492;
	        this.match(HopperParser.T__2);
	        this.state = 493;
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
	    this.enterRule(localctx, 42, HopperParser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 495;
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
	    this.enterRule(localctx, 44, HopperParser.RULE_logicalOr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 497;
	        this.logicalAnd();
	        this.state = 502;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===57) {
	            this.state = 498;
	            this.match(HopperParser.T__56);
	            this.state = 499;
	            this.logicalAnd();
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



	logicalAnd() {
	    let localctx = new LogicalAndContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 46, HopperParser.RULE_logicalAnd);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 505;
	        this.bitwiseOr();
	        this.state = 510;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===58) {
	            this.state = 506;
	            this.match(HopperParser.T__57);
	            this.state = 507;
	            this.bitwiseOr();
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



	bitwiseOr() {
	    let localctx = new BitwiseOrContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 48, HopperParser.RULE_bitwiseOr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 513;
	        this.bitwiseXor();
	        this.state = 518;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===33) {
	            this.state = 514;
	            this.match(HopperParser.T__32);
	            this.state = 515;
	            this.bitwiseXor();
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



	bitwiseXor() {
	    let localctx = new BitwiseXorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 50, HopperParser.RULE_bitwiseXor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 521;
	        this.bitwiseAnd();
	        this.state = 526;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===34) {
	            this.state = 522;
	            this.match(HopperParser.T__33);
	            this.state = 523;
	            this.bitwiseAnd();
	            this.state = 528;
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
	    this.enterRule(localctx, 52, HopperParser.RULE_bitwiseAnd);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 529;
	        this.equality();
	        this.state = 534;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===32) {
	            this.state = 530;
	            this.match(HopperParser.T__31);
	            this.state = 531;
	            this.equality();
	            this.state = 536;
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
	    this.enterRule(localctx, 54, HopperParser.RULE_equality);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 537;
	        this.relational();
	        this.state = 542;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===28 || _la===29) {
	            this.state = 538;
	            _la = this._input.LA(1);
	            if(!(_la===28 || _la===29)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 539;
	            this.relational();
	            this.state = 544;
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
	    this.enterRule(localctx, 56, HopperParser.RULE_relational);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 545;
	        this.shift();
	        this.state = 550;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3221307392) !== 0)) {
	            this.state = 546;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 3221307392) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 547;
	            this.shift();
	            this.state = 552;
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
	    this.enterRule(localctx, 58, HopperParser.RULE_shift);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 553;
	        this.additive();
	        this.state = 558;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===35 || _la===36) {
	            this.state = 554;
	            _la = this._input.LA(1);
	            if(!(_la===35 || _la===36)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 555;
	            this.additive();
	            this.state = 560;
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
	    this.enterRule(localctx, 60, HopperParser.RULE_additive);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 561;
	        this.multiplicative();
	        this.state = 566;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===23 || _la===24) {
	            this.state = 562;
	            _la = this._input.LA(1);
	            if(!(_la===23 || _la===24)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 563;
	            this.multiplicative();
	            this.state = 568;
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
	    this.enterRule(localctx, 62, HopperParser.RULE_multiplicative);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 569;
	        this.unary();
	        this.state = 574;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 234881024) !== 0)) {
	            this.state = 570;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 234881024) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 571;
	            this.unary();
	            this.state = 576;
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
	    this.enterRule(localctx, 64, HopperParser.RULE_unary);
	    var _la = 0;
	    try {
	        this.state = 582;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 24:
	        case 59:
	        case 60:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 577;
	            _la = this._input.LA(1);
	            if(!(_la===24 || _la===59 || _la===60)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 578;
	            this.unary();
	            break;
	        case 61:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 579;
	            this.match(HopperParser.T__60);
	            this.state = 580;
	            this.unary();
	            break;
	        case 7:
	        case 62:
	        case 63:
	        case 64:
	        case 65:
	        case 66:
	        case 67:
	        case 68:
	        case 69:
	        case 70:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 581;
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
	    this.enterRule(localctx, 66, HopperParser.RULE_primary);
	    var _la = 0;
	    try {
	        this.state = 632;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,62,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 584;
	            this.match(HopperParser.IntegerLiteral);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 585;
	            this.match(HopperParser.HexLiteral);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 586;
	            this.match(HopperParser.FloatLiteral);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 587;
	            this.match(HopperParser.StringLiteral);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 588;
	            this.match(HopperParser.CharLiteral);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 589;
	            this.match(HopperParser.T__61);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 590;
	            this.match(HopperParser.T__62);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 591;
	            this.match(HopperParser.T__63);
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 592;
	            this.match(HopperParser.Identifier);
	            this.state = 593;
	            this.match(HopperParser.T__36);
	            this.state = 594;
	            this.expression();
	            this.state = 595;
	            this.match(HopperParser.T__37);
	            this.state = 596;
	            this.match(HopperParser.T__46);
	            this.state = 597;
	            this.match(HopperParser.T__21);
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 599;
	            this.match(HopperParser.Identifier);
	            this.state = 600;
	            this.match(HopperParser.T__46);
	            this.state = 601;
	            this.match(HopperParser.T__21);
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 602;
	            this.match(HopperParser.Identifier);
	            this.state = 603;
	            this.match(HopperParser.T__46);
	            this.state = 604;
	            this.match(HopperParser.T__20);
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 605;
	            this.match(HopperParser.Identifier);
	            this.state = 606;
	            this.match(HopperParser.T__6);
	            this.state = 608;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7 || _la===24 || ((((_la - 59)) & ~0x1f) === 0 && ((1 << (_la - 59)) & 4095) !== 0)) {
	                this.state = 607;
	                this.argList();
	            }

	            this.state = 610;
	            this.match(HopperParser.T__7);
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 611;
	            this.match(HopperParser.Identifier);
	            this.state = 612;
	            this.match(HopperParser.T__45);
	            this.state = 613;
	            this.match(HopperParser.Identifier);
	            this.state = 614;
	            this.match(HopperParser.T__6);
	            this.state = 616;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===7 || _la===24 || ((((_la - 59)) & ~0x1f) === 0 && ((1 << (_la - 59)) & 4095) !== 0)) {
	                this.state = 615;
	                this.argList();
	            }

	            this.state = 618;
	            this.match(HopperParser.T__7);
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 619;
	            this.match(HopperParser.Identifier);
	            this.state = 620;
	            this.match(HopperParser.T__36);
	            this.state = 621;
	            this.expression();
	            this.state = 622;
	            this.match(HopperParser.T__37);
	            break;

	        case 15:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 624;
	            this.match(HopperParser.Identifier);
	            this.state = 625;
	            this.match(HopperParser.T__45);
	            this.state = 626;
	            this.fieldName();
	            break;

	        case 16:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 627;
	            this.match(HopperParser.Identifier);
	            break;

	        case 17:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 628;
	            this.match(HopperParser.T__6);
	            this.state = 629;
	            this.expression();
	            this.state = 630;
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
	    this.enterRule(localctx, 68, HopperParser.RULE_argList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 634;
	        this.expression();
	        this.state = 639;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===15) {
	            this.state = 635;
	            this.match(HopperParser.T__14);
	            this.state = 636;
	            this.expression();
	            this.state = 641;
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
	    this.enterRule(localctx, 70, HopperParser.RULE_literal);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 642;
	        _la = this._input.LA(1);
	        if(!(((((_la - 62)) & ~0x1f) === 0 && ((1 << (_la - 62)) & 123) !== 0))) {
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
HopperParser.IntegerLiteral = 65;
HopperParser.HexLiteral = 66;
HopperParser.FloatLiteral = 67;
HopperParser.StringLiteral = 68;
HopperParser.CharLiteral = 69;
HopperParser.Identifier = 70;
HopperParser.NEWLINE = 71;
HopperParser.LINE_COMMENT = 72;
HopperParser.WS = 73;

HopperParser.RULE_program = 0;
HopperParser.RULE_topLevelDecl = 1;
HopperParser.RULE_importDecl = 2;
HopperParser.RULE_constDecl = 3;
HopperParser.RULE_aliasDecl = 4;
HopperParser.RULE_functionDecl = 5;
HopperParser.RULE_structDecl = 6;
HopperParser.RULE_structMember = 7;
HopperParser.RULE_templateDecl = 8;
HopperParser.RULE_classDecl = 9;
HopperParser.RULE_classMember = 10;
HopperParser.RULE_fieldName = 11;
HopperParser.RULE_operatorSymbol = 12;
HopperParser.RULE_paramList = 13;
HopperParser.RULE_externParamList = 14;
HopperParser.RULE_param = 15;
HopperParser.RULE_type = 16;
HopperParser.RULE_block = 17;
HopperParser.RULE_statement = 18;
HopperParser.RULE_forInit = 19;
HopperParser.RULE_forUpdate = 20;
HopperParser.RULE_expression = 21;
HopperParser.RULE_logicalOr = 22;
HopperParser.RULE_logicalAnd = 23;
HopperParser.RULE_bitwiseOr = 24;
HopperParser.RULE_bitwiseXor = 25;
HopperParser.RULE_bitwiseAnd = 26;
HopperParser.RULE_equality = 27;
HopperParser.RULE_relational = 28;
HopperParser.RULE_shift = 29;
HopperParser.RULE_additive = 30;
HopperParser.RULE_multiplicative = 31;
HopperParser.RULE_unary = 32;
HopperParser.RULE_primary = 33;
HopperParser.RULE_argList = 34;
HopperParser.RULE_literal = 35;

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
