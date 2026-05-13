// Generated from grammar/Hopper.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import HopperListener from './HopperListener.js';
import HopperVisitor from './HopperVisitor.js';

const serializedATN = [4,1,76,676,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,2,38,7,38,1,0,5,0,80,8,0,10,0,12,0,83,9,
0,1,0,1,0,5,0,87,8,0,10,0,12,0,90,9,0,5,0,92,8,0,10,0,12,0,95,9,0,1,0,1,
0,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,109,8,1,1,2,1,2,1,2,1,3,1,
3,1,3,1,3,1,3,1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,5,1,5,1,
5,3,5,134,8,5,1,6,1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,1,8,1,8,1,8,1,8,1,
8,3,8,151,8,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,160,8,8,1,8,1,8,1,8,1,8,1,
8,3,8,167,8,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,1,8,3,8,177,8,8,1,8,1,8,3,8,181,
8,8,1,9,1,9,1,9,1,9,5,9,187,8,9,10,9,12,9,190,9,9,1,9,1,9,4,9,194,8,9,11,
9,12,9,195,1,9,5,9,199,8,9,10,9,12,9,202,9,9,1,9,5,9,205,8,9,10,9,12,9,208,
9,9,3,9,210,8,9,1,9,1,9,1,10,1,10,1,10,1,10,1,10,3,10,219,8,10,1,11,1,11,
1,11,1,11,1,11,1,11,5,11,227,8,11,10,11,12,11,230,9,11,1,11,1,11,1,11,5,
11,235,8,11,10,11,12,11,238,9,11,1,11,1,11,4,11,242,8,11,11,11,12,11,243,
1,11,5,11,247,8,11,10,11,12,11,250,9,11,1,11,5,11,253,8,11,10,11,12,11,256,
9,11,3,11,258,8,11,1,11,1,11,1,12,1,12,1,12,1,12,5,12,266,8,12,10,12,12,
12,269,9,12,1,12,1,12,4,12,273,8,12,11,12,12,12,274,1,12,5,12,278,8,12,10,
12,12,12,281,9,12,1,12,5,12,284,8,12,10,12,12,12,287,9,12,3,12,289,8,12,
1,12,1,12,1,13,1,13,1,13,1,13,1,13,1,13,1,13,3,13,300,8,13,1,13,1,13,1,13,
1,13,1,13,1,13,1,13,1,13,3,13,310,8,13,1,13,1,13,1,13,1,13,1,13,1,13,1,13,
1,13,1,13,1,13,1,13,1,13,1,13,3,13,325,8,13,1,13,1,13,1,13,1,13,1,13,1,13,
3,13,333,8,13,1,14,1,14,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,
1,15,1,15,1,15,1,15,1,15,1,15,1,15,1,15,3,15,355,8,15,1,16,1,16,1,16,5,16,
360,8,16,10,16,12,16,363,9,16,1,17,1,17,1,17,5,17,368,8,17,10,17,12,17,371,
9,17,1,17,1,17,3,17,375,8,17,1,17,3,17,378,8,17,1,18,1,18,1,18,1,19,1,19,
1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,1,19,5,19,398,
8,19,10,19,12,19,401,9,19,1,19,1,19,1,19,3,19,406,8,19,1,20,1,20,5,20,410,
8,20,10,20,12,20,413,9,20,1,20,1,20,4,20,417,8,20,11,20,12,20,418,1,20,5,
20,422,8,20,10,20,12,20,425,9,20,1,20,5,20,428,8,20,10,20,12,20,431,9,20,
3,20,433,8,20,1,20,1,20,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,
1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,
21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,
1,21,1,21,1,21,1,21,3,21,480,8,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,
1,21,3,21,491,8,21,1,21,1,21,3,21,495,8,21,1,21,1,21,3,21,499,8,21,1,21,
1,21,1,21,1,21,1,21,1,21,3,21,507,8,21,1,21,1,21,3,21,511,8,21,1,22,1,22,
1,22,1,22,1,22,1,22,1,22,1,22,3,22,521,8,22,1,23,1,23,1,23,1,23,1,24,1,24,
1,25,1,25,1,25,5,25,532,8,25,10,25,12,25,535,9,25,1,26,1,26,1,26,5,26,540,
8,26,10,26,12,26,543,9,26,1,27,1,27,1,27,5,27,548,8,27,10,27,12,27,551,9,
27,1,28,1,28,1,28,5,28,556,8,28,10,28,12,28,559,9,28,1,29,1,29,1,29,5,29,
564,8,29,10,29,12,29,567,9,29,1,30,1,30,1,30,5,30,572,8,30,10,30,12,30,575,
9,30,1,31,1,31,1,31,5,31,580,8,31,10,31,12,31,583,9,31,1,32,1,32,1,32,5,
32,588,8,32,10,32,12,32,591,9,32,1,33,1,33,1,33,5,33,596,8,33,10,33,12,33,
599,9,33,1,34,1,34,1,34,5,34,604,8,34,10,34,12,34,607,9,34,1,35,1,35,1,35,
1,35,1,35,3,35,614,8,35,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,
1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,3,
36,640,8,36,1,36,1,36,1,36,1,36,1,36,1,36,3,36,648,8,36,1,36,1,36,1,36,1,
36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,1,36,3,36,664,8,36,1,37,
1,37,1,37,5,37,669,8,37,10,37,12,37,672,9,37,1,38,1,38,1,38,0,0,39,0,2,4,
6,8,10,12,14,16,18,20,22,24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,
56,58,60,62,64,66,68,70,72,74,76,0,8,3,0,5,5,26,26,73,73,1,0,32,33,3,0,19,
19,21,21,34,35,1,0,39,40,1,0,27,28,1,0,29,31,2,0,28,28,62,63,2,0,65,66,68,
71,767,0,81,1,0,0,0,2,108,1,0,0,0,4,110,1,0,0,0,6,113,1,0,0,0,8,120,1,0,
0,0,10,133,1,0,0,0,12,135,1,0,0,0,14,140,1,0,0,0,16,180,1,0,0,0,18,182,1,
0,0,0,20,218,1,0,0,0,22,220,1,0,0,0,24,261,1,0,0,0,26,332,1,0,0,0,28,334,
1,0,0,0,30,354,1,0,0,0,32,356,1,0,0,0,34,377,1,0,0,0,36,379,1,0,0,0,38,405,
1,0,0,0,40,407,1,0,0,0,42,510,1,0,0,0,44,520,1,0,0,0,46,522,1,0,0,0,48,526,
1,0,0,0,50,528,1,0,0,0,52,536,1,0,0,0,54,544,1,0,0,0,56,552,1,0,0,0,58,560,
1,0,0,0,60,568,1,0,0,0,62,576,1,0,0,0,64,584,1,0,0,0,66,592,1,0,0,0,68,600,
1,0,0,0,70,613,1,0,0,0,72,663,1,0,0,0,74,665,1,0,0,0,76,673,1,0,0,0,78,80,
5,74,0,0,79,78,1,0,0,0,80,83,1,0,0,0,81,79,1,0,0,0,81,82,1,0,0,0,82,93,1,
0,0,0,83,81,1,0,0,0,84,88,3,2,1,0,85,87,5,74,0,0,86,85,1,0,0,0,87,90,1,0,
0,0,88,86,1,0,0,0,88,89,1,0,0,0,89,92,1,0,0,0,90,88,1,0,0,0,91,84,1,0,0,
0,92,95,1,0,0,0,93,91,1,0,0,0,93,94,1,0,0,0,94,96,1,0,0,0,95,93,1,0,0,0,
96,97,5,0,0,1,97,1,1,0,0,0,98,109,3,16,8,0,99,109,3,18,9,0,100,109,3,24,
12,0,101,109,3,22,11,0,102,109,3,12,6,0,103,109,3,4,2,0,104,109,3,14,7,0,
105,109,3,10,5,0,106,109,3,6,3,0,107,109,3,8,4,0,108,98,1,0,0,0,108,99,1,
0,0,0,108,100,1,0,0,0,108,101,1,0,0,0,108,102,1,0,0,0,108,103,1,0,0,0,108,
104,1,0,0,0,108,105,1,0,0,0,108,106,1,0,0,0,108,107,1,0,0,0,109,3,1,0,0,
0,110,111,5,1,0,0,111,112,5,71,0,0,112,5,1,0,0,0,113,114,5,2,0,0,114,115,
5,69,0,0,115,116,5,3,0,0,116,117,5,73,0,0,117,118,5,4,0,0,118,119,5,5,0,
0,119,7,1,0,0,0,120,121,5,6,0,0,121,122,3,38,19,0,122,123,5,73,0,0,123,124,
5,3,0,0,124,125,5,69,0,0,125,9,1,0,0,0,126,127,5,7,0,0,127,128,5,73,0,0,
128,134,3,40,20,0,129,130,5,7,0,0,130,131,5,73,0,0,131,132,5,3,0,0,132,134,
3,48,24,0,133,126,1,0,0,0,133,129,1,0,0,0,134,11,1,0,0,0,135,136,5,8,0,0,
136,137,5,73,0,0,137,138,5,3,0,0,138,139,3,76,38,0,139,13,1,0,0,0,140,141,
5,9,0,0,141,142,5,73,0,0,142,143,5,3,0,0,143,144,3,38,19,0,144,15,1,0,0,
0,145,146,5,10,0,0,146,147,5,11,0,0,147,148,5,73,0,0,148,150,5,12,0,0,149,
151,3,34,17,0,150,149,1,0,0,0,150,151,1,0,0,0,151,152,1,0,0,0,152,153,5,
13,0,0,153,181,3,38,19,0,154,155,5,10,0,0,155,156,5,11,0,0,156,157,5,73,
0,0,157,159,5,12,0,0,158,160,3,34,17,0,159,158,1,0,0,0,159,160,1,0,0,0,160,
161,1,0,0,0,161,181,5,13,0,0,162,163,5,11,0,0,163,164,5,73,0,0,164,166,5,
12,0,0,165,167,3,32,16,0,166,165,1,0,0,0,166,167,1,0,0,0,167,168,1,0,0,0,
168,169,5,13,0,0,169,170,3,38,19,0,170,171,3,40,20,0,171,181,1,0,0,0,172,
173,5,11,0,0,173,174,5,73,0,0,174,176,5,12,0,0,175,177,3,32,16,0,176,175,
1,0,0,0,176,177,1,0,0,0,177,178,1,0,0,0,178,179,5,13,0,0,179,181,3,40,20,
0,180,145,1,0,0,0,180,154,1,0,0,0,180,162,1,0,0,0,180,172,1,0,0,0,181,17,
1,0,0,0,182,183,5,14,0,0,183,184,5,73,0,0,184,188,5,15,0,0,185,187,5,74,
0,0,186,185,1,0,0,0,187,190,1,0,0,0,188,186,1,0,0,0,188,189,1,0,0,0,189,
209,1,0,0,0,190,188,1,0,0,0,191,200,3,20,10,0,192,194,5,74,0,0,193,192,1,
0,0,0,194,195,1,0,0,0,195,193,1,0,0,0,195,196,1,0,0,0,196,197,1,0,0,0,197,
199,3,20,10,0,198,193,1,0,0,0,199,202,1,0,0,0,200,198,1,0,0,0,200,201,1,
0,0,0,201,206,1,0,0,0,202,200,1,0,0,0,203,205,5,74,0,0,204,203,1,0,0,0,205,
208,1,0,0,0,206,204,1,0,0,0,206,207,1,0,0,0,207,210,1,0,0,0,208,206,1,0,
0,0,209,191,1,0,0,0,209,210,1,0,0,0,210,211,1,0,0,0,211,212,5,16,0,0,212,
19,1,0,0,0,213,214,3,38,19,0,214,215,3,28,14,0,215,219,1,0,0,0,216,217,5,
17,0,0,217,219,5,68,0,0,218,213,1,0,0,0,218,216,1,0,0,0,219,21,1,0,0,0,220,
221,5,18,0,0,221,222,5,73,0,0,222,223,5,19,0,0,223,228,5,73,0,0,224,225,
5,20,0,0,225,227,5,73,0,0,226,224,1,0,0,0,227,230,1,0,0,0,228,226,1,0,0,
0,228,229,1,0,0,0,229,231,1,0,0,0,230,228,1,0,0,0,231,232,5,21,0,0,232,236,
5,15,0,0,233,235,5,74,0,0,234,233,1,0,0,0,235,238,1,0,0,0,236,234,1,0,0,
0,236,237,1,0,0,0,237,257,1,0,0,0,238,236,1,0,0,0,239,248,3,26,13,0,240,
242,5,74,0,0,241,240,1,0,0,0,242,243,1,0,0,0,243,241,1,0,0,0,243,244,1,0,
0,0,244,245,1,0,0,0,245,247,3,26,13,0,246,241,1,0,0,0,247,250,1,0,0,0,248,
246,1,0,0,0,248,249,1,0,0,0,249,254,1,0,0,0,250,248,1,0,0,0,251,253,5,74,
0,0,252,251,1,0,0,0,253,256,1,0,0,0,254,252,1,0,0,0,254,255,1,0,0,0,255,
258,1,0,0,0,256,254,1,0,0,0,257,239,1,0,0,0,257,258,1,0,0,0,258,259,1,0,
0,0,259,260,5,16,0,0,260,23,1,0,0,0,261,262,5,22,0,0,262,263,5,73,0,0,263,
267,5,15,0,0,264,266,5,74,0,0,265,264,1,0,0,0,266,269,1,0,0,0,267,265,1,
0,0,0,267,268,1,0,0,0,268,288,1,0,0,0,269,267,1,0,0,0,270,279,3,26,13,0,
271,273,5,74,0,0,272,271,1,0,0,0,273,274,1,0,0,0,274,272,1,0,0,0,274,275,
1,0,0,0,275,276,1,0,0,0,276,278,3,26,13,0,277,272,1,0,0,0,278,281,1,0,0,
0,279,277,1,0,0,0,279,280,1,0,0,0,280,285,1,0,0,0,281,279,1,0,0,0,282,284,
5,74,0,0,283,282,1,0,0,0,284,287,1,0,0,0,285,283,1,0,0,0,285,286,1,0,0,0,
286,289,1,0,0,0,287,285,1,0,0,0,288,270,1,0,0,0,288,289,1,0,0,0,289,290,
1,0,0,0,290,291,5,16,0,0,291,25,1,0,0,0,292,293,3,38,19,0,293,294,3,28,14,
0,294,333,1,0,0,0,295,296,5,11,0,0,296,297,5,73,0,0,297,299,5,12,0,0,298,
300,3,32,16,0,299,298,1,0,0,0,299,300,1,0,0,0,300,301,1,0,0,0,301,302,5,
13,0,0,302,303,3,38,19,0,303,304,3,40,20,0,304,333,1,0,0,0,305,306,5,11,
0,0,306,307,5,73,0,0,307,309,5,12,0,0,308,310,3,32,16,0,309,308,1,0,0,0,
309,310,1,0,0,0,310,311,1,0,0,0,311,312,5,13,0,0,312,333,3,40,20,0,313,314,
5,23,0,0,314,315,3,30,15,0,315,316,5,12,0,0,316,317,3,36,18,0,317,318,5,
13,0,0,318,319,3,38,19,0,319,320,3,40,20,0,320,333,1,0,0,0,321,322,5,24,
0,0,322,324,5,12,0,0,323,325,3,32,16,0,324,323,1,0,0,0,324,325,1,0,0,0,325,
326,1,0,0,0,326,327,5,13,0,0,327,333,3,40,20,0,328,329,5,25,0,0,329,330,
5,12,0,0,330,331,5,13,0,0,331,333,3,40,20,0,332,292,1,0,0,0,332,295,1,0,
0,0,332,305,1,0,0,0,332,313,1,0,0,0,332,321,1,0,0,0,332,328,1,0,0,0,333,
27,1,0,0,0,334,335,7,0,0,0,335,29,1,0,0,0,336,355,5,27,0,0,337,355,5,28,
0,0,338,355,5,29,0,0,339,355,5,30,0,0,340,355,5,31,0,0,341,355,5,32,0,0,
342,355,5,33,0,0,343,355,5,19,0,0,344,355,5,34,0,0,345,355,5,21,0,0,346,
355,5,35,0,0,347,355,5,36,0,0,348,355,5,37,0,0,349,355,5,38,0,0,350,355,
5,39,0,0,351,355,5,40,0,0,352,353,5,41,0,0,353,355,5,42,0,0,354,336,1,0,
0,0,354,337,1,0,0,0,354,338,1,0,0,0,354,339,1,0,0,0,354,340,1,0,0,0,354,
341,1,0,0,0,354,342,1,0,0,0,354,343,1,0,0,0,354,344,1,0,0,0,354,345,1,0,
0,0,354,346,1,0,0,0,354,347,1,0,0,0,354,348,1,0,0,0,354,349,1,0,0,0,354,
350,1,0,0,0,354,351,1,0,0,0,354,352,1,0,0,0,355,31,1,0,0,0,356,361,3,36,
18,0,357,358,5,20,0,0,358,360,3,36,18,0,359,357,1,0,0,0,360,363,1,0,0,0,
361,359,1,0,0,0,361,362,1,0,0,0,362,33,1,0,0,0,363,361,1,0,0,0,364,369,3,
36,18,0,365,366,5,20,0,0,366,368,3,36,18,0,367,365,1,0,0,0,368,371,1,0,0,
0,369,367,1,0,0,0,369,370,1,0,0,0,370,374,1,0,0,0,371,369,1,0,0,0,372,373,
5,20,0,0,373,375,5,43,0,0,374,372,1,0,0,0,374,375,1,0,0,0,375,378,1,0,0,
0,376,378,5,43,0,0,377,364,1,0,0,0,377,376,1,0,0,0,378,35,1,0,0,0,379,380,
3,38,19,0,380,381,5,73,0,0,381,37,1,0,0,0,382,406,5,44,0,0,383,406,5,45,
0,0,384,406,5,46,0,0,385,406,5,47,0,0,386,406,5,48,0,0,387,406,5,5,0,0,388,
389,5,49,0,0,389,406,5,44,0,0,390,391,5,49,0,0,391,406,5,47,0,0,392,393,
5,73,0,0,393,394,5,19,0,0,394,399,3,38,19,0,395,396,5,20,0,0,396,398,3,38,
19,0,397,395,1,0,0,0,398,401,1,0,0,0,399,397,1,0,0,0,399,400,1,0,0,0,400,
402,1,0,0,0,401,399,1,0,0,0,402,403,5,21,0,0,403,406,1,0,0,0,404,406,5,73,
0,0,405,382,1,0,0,0,405,383,1,0,0,0,405,384,1,0,0,0,405,385,1,0,0,0,405,
386,1,0,0,0,405,387,1,0,0,0,405,388,1,0,0,0,405,390,1,0,0,0,405,392,1,0,
0,0,405,404,1,0,0,0,406,39,1,0,0,0,407,411,5,15,0,0,408,410,5,74,0,0,409,
408,1,0,0,0,410,413,1,0,0,0,411,409,1,0,0,0,411,412,1,0,0,0,412,432,1,0,
0,0,413,411,1,0,0,0,414,423,3,42,21,0,415,417,5,74,0,0,416,415,1,0,0,0,417,
418,1,0,0,0,418,416,1,0,0,0,418,419,1,0,0,0,419,420,1,0,0,0,420,422,3,42,
21,0,421,416,1,0,0,0,422,425,1,0,0,0,423,421,1,0,0,0,423,424,1,0,0,0,424,
429,1,0,0,0,425,423,1,0,0,0,426,428,5,74,0,0,427,426,1,0,0,0,428,431,1,0,
0,0,429,427,1,0,0,0,429,430,1,0,0,0,430,433,1,0,0,0,431,429,1,0,0,0,432,
414,1,0,0,0,432,433,1,0,0,0,433,434,1,0,0,0,434,435,5,16,0,0,435,41,1,0,
0,0,436,437,3,38,19,0,437,438,5,73,0,0,438,439,5,41,0,0,439,440,5,68,0,0,
440,441,5,42,0,0,441,511,1,0,0,0,442,443,3,38,19,0,443,444,5,73,0,0,444,
445,5,3,0,0,445,446,3,48,24,0,446,511,1,0,0,0,447,448,3,38,19,0,448,449,
5,73,0,0,449,511,1,0,0,0,450,451,5,73,0,0,451,452,5,41,0,0,452,453,3,48,
24,0,453,454,5,42,0,0,454,455,5,3,0,0,455,456,3,48,24,0,456,511,1,0,0,0,
457,458,5,73,0,0,458,459,5,3,0,0,459,511,3,48,24,0,460,461,5,73,0,0,461,
462,5,50,0,0,462,463,3,28,14,0,463,464,5,3,0,0,464,465,3,48,24,0,465,511,
1,0,0,0,466,467,5,73,0,0,467,468,5,4,0,0,468,469,5,26,0,0,469,470,5,3,0,
0,470,511,3,48,24,0,471,511,3,48,24,0,472,473,5,51,0,0,473,474,5,12,0,0,
474,475,3,48,24,0,475,476,5,13,0,0,476,479,3,40,20,0,477,478,5,52,0,0,478,
480,3,40,20,0,479,477,1,0,0,0,479,480,1,0,0,0,480,511,1,0,0,0,481,482,5,
53,0,0,482,483,5,12,0,0,483,484,3,48,24,0,484,485,5,13,0,0,485,486,3,40,
20,0,486,511,1,0,0,0,487,488,5,54,0,0,488,490,5,12,0,0,489,491,3,44,22,0,
490,489,1,0,0,0,490,491,1,0,0,0,491,492,1,0,0,0,492,494,5,55,0,0,493,495,
3,48,24,0,494,493,1,0,0,0,494,495,1,0,0,0,495,496,1,0,0,0,496,498,5,55,0,
0,497,499,3,46,23,0,498,497,1,0,0,0,498,499,1,0,0,0,499,500,1,0,0,0,500,
501,5,13,0,0,501,511,3,40,20,0,502,511,5,56,0,0,503,511,5,57,0,0,504,506,
5,58,0,0,505,507,3,48,24,0,506,505,1,0,0,0,506,507,1,0,0,0,507,511,1,0,0,
0,508,509,5,59,0,0,509,511,3,48,24,0,510,436,1,0,0,0,510,442,1,0,0,0,510,
447,1,0,0,0,510,450,1,0,0,0,510,457,1,0,0,0,510,460,1,0,0,0,510,466,1,0,
0,0,510,471,1,0,0,0,510,472,1,0,0,0,510,481,1,0,0,0,510,487,1,0,0,0,510,
502,1,0,0,0,510,503,1,0,0,0,510,504,1,0,0,0,510,508,1,0,0,0,511,43,1,0,0,
0,512,513,3,38,19,0,513,514,5,73,0,0,514,515,5,3,0,0,515,516,3,48,24,0,516,
521,1,0,0,0,517,518,5,73,0,0,518,519,5,3,0,0,519,521,3,48,24,0,520,512,1,
0,0,0,520,517,1,0,0,0,521,45,1,0,0,0,522,523,5,73,0,0,523,524,5,3,0,0,524,
525,3,48,24,0,525,47,1,0,0,0,526,527,3,50,25,0,527,49,1,0,0,0,528,533,3,
52,26,0,529,530,5,60,0,0,530,532,3,52,26,0,531,529,1,0,0,0,532,535,1,0,0,
0,533,531,1,0,0,0,533,534,1,0,0,0,534,51,1,0,0,0,535,533,1,0,0,0,536,541,
3,54,27,0,537,538,5,61,0,0,538,540,3,54,27,0,539,537,1,0,0,0,540,543,1,0,
0,0,541,539,1,0,0,0,541,542,1,0,0,0,542,53,1,0,0,0,543,541,1,0,0,0,544,549,
3,56,28,0,545,546,5,37,0,0,546,548,3,56,28,0,547,545,1,0,0,0,548,551,1,0,
0,0,549,547,1,0,0,0,549,550,1,0,0,0,550,55,1,0,0,0,551,549,1,0,0,0,552,557,
3,58,29,0,553,554,5,38,0,0,554,556,3,58,29,0,555,553,1,0,0,0,556,559,1,0,
0,0,557,555,1,0,0,0,557,558,1,0,0,0,558,57,1,0,0,0,559,557,1,0,0,0,560,565,
3,60,30,0,561,562,5,36,0,0,562,564,3,60,30,0,563,561,1,0,0,0,564,567,1,0,
0,0,565,563,1,0,0,0,565,566,1,0,0,0,566,59,1,0,0,0,567,565,1,0,0,0,568,573,
3,62,31,0,569,570,7,1,0,0,570,572,3,62,31,0,571,569,1,0,0,0,572,575,1,0,
0,0,573,571,1,0,0,0,573,574,1,0,0,0,574,61,1,0,0,0,575,573,1,0,0,0,576,581,
3,64,32,0,577,578,7,2,0,0,578,580,3,64,32,0,579,577,1,0,0,0,580,583,1,0,
0,0,581,579,1,0,0,0,581,582,1,0,0,0,582,63,1,0,0,0,583,581,1,0,0,0,584,589,
3,66,33,0,585,586,7,3,0,0,586,588,3,66,33,0,587,585,1,0,0,0,588,591,1,0,
0,0,589,587,1,0,0,0,589,590,1,0,0,0,590,65,1,0,0,0,591,589,1,0,0,0,592,597,
3,68,34,0,593,594,7,4,0,0,594,596,3,68,34,0,595,593,1,0,0,0,596,599,1,0,
0,0,597,595,1,0,0,0,597,598,1,0,0,0,598,67,1,0,0,0,599,597,1,0,0,0,600,605,
3,70,35,0,601,602,7,5,0,0,602,604,3,70,35,0,603,601,1,0,0,0,604,607,1,0,
0,0,605,603,1,0,0,0,605,606,1,0,0,0,606,69,1,0,0,0,607,605,1,0,0,0,608,609,
7,6,0,0,609,614,3,70,35,0,610,611,5,64,0,0,611,614,3,70,35,0,612,614,3,72,
36,0,613,608,1,0,0,0,613,610,1,0,0,0,613,612,1,0,0,0,614,71,1,0,0,0,615,
664,5,68,0,0,616,664,5,69,0,0,617,664,5,70,0,0,618,664,5,71,0,0,619,664,
5,72,0,0,620,664,5,65,0,0,621,664,5,66,0,0,622,664,5,67,0,0,623,624,5,73,
0,0,624,625,5,41,0,0,625,626,3,48,24,0,626,627,5,42,0,0,627,628,5,4,0,0,
628,629,5,5,0,0,629,664,1,0,0,0,630,631,5,73,0,0,631,632,5,4,0,0,632,664,
5,5,0,0,633,634,5,73,0,0,634,635,5,4,0,0,635,664,5,26,0,0,636,637,5,73,0,
0,637,639,5,12,0,0,638,640,3,74,37,0,639,638,1,0,0,0,639,640,1,0,0,0,640,
641,1,0,0,0,641,664,5,13,0,0,642,643,5,73,0,0,643,644,5,50,0,0,644,645,5,
73,0,0,645,647,5,12,0,0,646,648,3,74,37,0,647,646,1,0,0,0,647,648,1,0,0,
0,648,649,1,0,0,0,649,664,5,13,0,0,650,651,5,73,0,0,651,652,5,41,0,0,652,
653,3,48,24,0,653,654,5,42,0,0,654,664,1,0,0,0,655,656,5,73,0,0,656,657,
5,50,0,0,657,664,3,28,14,0,658,664,5,73,0,0,659,660,5,12,0,0,660,661,3,48,
24,0,661,662,5,13,0,0,662,664,1,0,0,0,663,615,1,0,0,0,663,616,1,0,0,0,663,
617,1,0,0,0,663,618,1,0,0,0,663,619,1,0,0,0,663,620,1,0,0,0,663,621,1,0,
0,0,663,622,1,0,0,0,663,623,1,0,0,0,663,630,1,0,0,0,663,633,1,0,0,0,663,
636,1,0,0,0,663,642,1,0,0,0,663,650,1,0,0,0,663,655,1,0,0,0,663,658,1,0,
0,0,663,659,1,0,0,0,664,73,1,0,0,0,665,670,3,48,24,0,666,667,5,20,0,0,667,
669,3,48,24,0,668,666,1,0,0,0,669,672,1,0,0,0,670,668,1,0,0,0,670,671,1,
0,0,0,671,75,1,0,0,0,672,670,1,0,0,0,673,674,7,7,0,0,674,77,1,0,0,0,65,81,
88,93,108,133,150,159,166,176,180,188,195,200,206,209,218,228,236,243,248,
254,257,267,274,279,285,288,299,309,324,332,354,361,369,374,377,399,405,
411,418,423,429,432,479,490,494,498,506,510,520,533,541,549,557,565,573,
581,589,597,605,613,639,647,663,670];


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
                             null, null, null, null, "IntegerLiteral", "HexLiteral", 
                             "FloatLiteral", "StringLiteral", "CharLiteral", 
                             "Identifier", "NEWLINE", "LINE_COMMENT", "WS" ];
    static ruleNames = [ "program", "topLevelDecl", "importDecl", "bindDecl", 
                         "strictDecl", "entryDecl", "constDecl", "aliasDecl", 
                         "functionDecl", "structDecl", "structMember", "templateDecl", 
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
	        this.state = 81;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===74) {
	            this.state = 78;
	            this.match(HopperParser.NEWLINE);
	            this.state = 83;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 93;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4476870) !== 0)) {
	            this.state = 84;
	            this.topLevelDecl();
	            this.state = 88;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===74) {
	                this.state = 85;
	                this.match(HopperParser.NEWLINE);
	                this.state = 90;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 95;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 96;
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
	        this.state = 108;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 10:
	        case 11:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 98;
	            this.functionDecl();
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 99;
	            this.structDecl();
	            break;
	        case 22:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 100;
	            this.classDecl();
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 101;
	            this.templateDecl();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 102;
	            this.constDecl();
	            break;
	        case 1:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 103;
	            this.importDecl();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 104;
	            this.aliasDecl();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 105;
	            this.entryDecl();
	            break;
	        case 2:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 106;
	            this.bindDecl();
	            break;
	        case 6:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 107;
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
	        this.state = 110;
	        this.match(HopperParser.T__0);
	        this.state = 111;
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
	        this.state = 113;
	        this.match(HopperParser.T__1);
	        this.state = 114;
	        this.match(HopperParser.HexLiteral);
	        this.state = 115;
	        this.match(HopperParser.T__2);
	        this.state = 116;
	        this.match(HopperParser.Identifier);
	        this.state = 117;
	        this.match(HopperParser.T__3);
	        this.state = 118;
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
	        this.state = 120;
	        this.match(HopperParser.T__5);
	        this.state = 121;
	        this.type();
	        this.state = 122;
	        this.match(HopperParser.Identifier);
	        this.state = 123;
	        this.match(HopperParser.T__2);
	        this.state = 124;
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
	        this.state = 133;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new EntryBlockContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 126;
	            this.match(HopperParser.T__6);
	            this.state = 127;
	            this.match(HopperParser.Identifier);
	            this.state = 128;
	            this.block();
	            break;

	        case 2:
	            localctx = new EntryAddrContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 129;
	            this.match(HopperParser.T__6);
	            this.state = 130;
	            this.match(HopperParser.Identifier);
	            this.state = 131;
	            this.match(HopperParser.T__2);
	            this.state = 132;
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
	        this.state = 135;
	        this.match(HopperParser.T__7);
	        this.state = 136;
	        this.match(HopperParser.Identifier);
	        this.state = 137;
	        this.match(HopperParser.T__2);
	        this.state = 138;
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
	        this.state = 140;
	        this.match(HopperParser.T__8);
	        this.state = 141;
	        this.match(HopperParser.Identifier);
	        this.state = 142;
	        this.match(HopperParser.T__2);
	        this.state = 143;
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
	        this.state = 180;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ExternFuncDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 145;
	            this.match(HopperParser.T__9);
	            this.state = 146;
	            this.match(HopperParser.T__10);
	            this.state = 147;
	            this.match(HopperParser.Identifier);
	            this.state = 148;
	            this.match(HopperParser.T__11);
	            this.state = 150;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5 || ((((_la - 43)) & ~0x1f) === 0 && ((1 << (_la - 43)) & 1073741951) !== 0)) {
	                this.state = 149;
	                this.externParamList();
	            }

	            this.state = 152;
	            this.match(HopperParser.T__12);
	            this.state = 153;
	            this.type();
	            break;

	        case 2:
	            localctx = new ExternProcDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 154;
	            this.match(HopperParser.T__9);
	            this.state = 155;
	            this.match(HopperParser.T__10);
	            this.state = 156;
	            this.match(HopperParser.Identifier);
	            this.state = 157;
	            this.match(HopperParser.T__11);
	            this.state = 159;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5 || ((((_la - 43)) & ~0x1f) === 0 && ((1 << (_la - 43)) & 1073741951) !== 0)) {
	                this.state = 158;
	                this.externParamList();
	            }

	            this.state = 161;
	            this.match(HopperParser.T__12);
	            break;

	        case 3:
	            localctx = new FuncDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 162;
	            this.match(HopperParser.T__10);
	            this.state = 163;
	            this.match(HopperParser.Identifier);
	            this.state = 164;
	            this.match(HopperParser.T__11);
	            this.state = 166;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5 || ((((_la - 44)) & ~0x1f) === 0 && ((1 << (_la - 44)) & 536870975) !== 0)) {
	                this.state = 165;
	                this.paramList();
	            }

	            this.state = 168;
	            this.match(HopperParser.T__12);
	            this.state = 169;
	            this.type();
	            this.state = 170;
	            this.block();
	            break;

	        case 4:
	            localctx = new ProcDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 172;
	            this.match(HopperParser.T__10);
	            this.state = 173;
	            this.match(HopperParser.Identifier);
	            this.state = 174;
	            this.match(HopperParser.T__11);
	            this.state = 176;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5 || ((((_la - 44)) & ~0x1f) === 0 && ((1 << (_la - 44)) & 536870975) !== 0)) {
	                this.state = 175;
	                this.paramList();
	            }

	            this.state = 178;
	            this.match(HopperParser.T__12);
	            this.state = 179;
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
	        this.state = 182;
	        this.match(HopperParser.T__13);
	        this.state = 183;
	        this.match(HopperParser.Identifier);
	        this.state = 184;
	        this.match(HopperParser.T__14);
	        this.state = 188;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===74) {
	            this.state = 185;
	            this.match(HopperParser.NEWLINE);
	            this.state = 190;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 209;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5 || _la===17 || ((((_la - 44)) & ~0x1f) === 0 && ((1 << (_la - 44)) & 536870975) !== 0)) {
	            this.state = 191;
	            this.structMember();
	            this.state = 200;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 193; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    do {
	                        this.state = 192;
	                        this.match(HopperParser.NEWLINE);
	                        this.state = 195; 
	                        this._errHandler.sync(this);
	                        _la = this._input.LA(1);
	                    } while(_la===74);
	                    this.state = 197;
	                    this.structMember(); 
	                }
	                this.state = 202;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
	            }

	            this.state = 206;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===74) {
	                this.state = 203;
	                this.match(HopperParser.NEWLINE);
	                this.state = 208;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 211;
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
	        this.state = 218;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	        case 44:
	        case 45:
	        case 46:
	        case 47:
	        case 48:
	        case 49:
	        case 73:
	            localctx = new StructFieldContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 213;
	            this.type();
	            this.state = 214;
	            this.fieldName();
	            break;
	        case 17:
	            localctx = new StructPadContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 216;
	            this.match(HopperParser.T__16);
	            this.state = 217;
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
	        this.state = 220;
	        this.match(HopperParser.T__17);
	        this.state = 221;
	        this.match(HopperParser.Identifier);
	        this.state = 222;
	        this.match(HopperParser.T__18);
	        this.state = 223;
	        this.match(HopperParser.Identifier);
	        this.state = 228;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===20) {
	            this.state = 224;
	            this.match(HopperParser.T__19);
	            this.state = 225;
	            this.match(HopperParser.Identifier);
	            this.state = 230;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 231;
	        this.match(HopperParser.T__20);
	        this.state = 232;
	        this.match(HopperParser.T__14);
	        this.state = 236;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===74) {
	            this.state = 233;
	            this.match(HopperParser.NEWLINE);
	            this.state = 238;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 257;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 58722336) !== 0) || ((((_la - 44)) & ~0x1f) === 0 && ((1 << (_la - 44)) & 536870975) !== 0)) {
	            this.state = 239;
	            this.classMember();
	            this.state = 248;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
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
	                    } while(_la===74);
	                    this.state = 245;
	                    this.classMember(); 
	                }
	                this.state = 250;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
	            }

	            this.state = 254;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===74) {
	                this.state = 251;
	                this.match(HopperParser.NEWLINE);
	                this.state = 256;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 259;
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
	        this.state = 261;
	        this.match(HopperParser.T__21);
	        this.state = 262;
	        this.match(HopperParser.Identifier);
	        this.state = 263;
	        this.match(HopperParser.T__14);
	        this.state = 267;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===74) {
	            this.state = 264;
	            this.match(HopperParser.NEWLINE);
	            this.state = 269;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 288;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 58722336) !== 0) || ((((_la - 44)) & ~0x1f) === 0 && ((1 << (_la - 44)) & 536870975) !== 0)) {
	            this.state = 270;
	            this.classMember();
	            this.state = 279;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,24,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 272; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    do {
	                        this.state = 271;
	                        this.match(HopperParser.NEWLINE);
	                        this.state = 274; 
	                        this._errHandler.sync(this);
	                        _la = this._input.LA(1);
	                    } while(_la===74);
	                    this.state = 276;
	                    this.classMember(); 
	                }
	                this.state = 281;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,24,this._ctx);
	            }

	            this.state = 285;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===74) {
	                this.state = 282;
	                this.match(HopperParser.NEWLINE);
	                this.state = 287;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 290;
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
	        this.state = 332;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ClassFieldContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 292;
	            this.type();
	            this.state = 293;
	            this.fieldName();
	            break;

	        case 2:
	            localctx = new ClassMethodContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 295;
	            this.match(HopperParser.T__10);
	            this.state = 296;
	            this.match(HopperParser.Identifier);
	            this.state = 297;
	            this.match(HopperParser.T__11);
	            this.state = 299;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5 || ((((_la - 44)) & ~0x1f) === 0 && ((1 << (_la - 44)) & 536870975) !== 0)) {
	                this.state = 298;
	                this.paramList();
	            }

	            this.state = 301;
	            this.match(HopperParser.T__12);
	            this.state = 302;
	            this.type();
	            this.state = 303;
	            this.block();
	            break;

	        case 3:
	            localctx = new ClassProcMethodContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 305;
	            this.match(HopperParser.T__10);
	            this.state = 306;
	            this.match(HopperParser.Identifier);
	            this.state = 307;
	            this.match(HopperParser.T__11);
	            this.state = 309;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5 || ((((_la - 44)) & ~0x1f) === 0 && ((1 << (_la - 44)) & 536870975) !== 0)) {
	                this.state = 308;
	                this.paramList();
	            }

	            this.state = 311;
	            this.match(HopperParser.T__12);
	            this.state = 312;
	            this.block();
	            break;

	        case 4:
	            localctx = new ClassOperatorContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 313;
	            this.match(HopperParser.T__22);
	            this.state = 314;
	            this.operatorSymbol();
	            this.state = 315;
	            this.match(HopperParser.T__11);
	            this.state = 316;
	            this.param();
	            this.state = 317;
	            this.match(HopperParser.T__12);
	            this.state = 318;
	            this.type();
	            this.state = 319;
	            this.block();
	            break;

	        case 5:
	            localctx = new ClassConstructorContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 321;
	            this.match(HopperParser.T__23);
	            this.state = 322;
	            this.match(HopperParser.T__11);
	            this.state = 324;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5 || ((((_la - 44)) & ~0x1f) === 0 && ((1 << (_la - 44)) & 536870975) !== 0)) {
	                this.state = 323;
	                this.paramList();
	            }

	            this.state = 326;
	            this.match(HopperParser.T__12);
	            this.state = 327;
	            this.block();
	            break;

	        case 6:
	            localctx = new ClassDestructorContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 328;
	            this.match(HopperParser.T__24);
	            this.state = 329;
	            this.match(HopperParser.T__11);
	            this.state = 330;
	            this.match(HopperParser.T__12);
	            this.state = 331;
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
	        this.state = 334;
	        _la = this._input.LA(1);
	        if(!(_la===5 || _la===26 || _la===73)) {
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
	        this.state = 354;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 27:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 336;
	            this.match(HopperParser.T__26);
	            break;
	        case 28:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 337;
	            this.match(HopperParser.T__27);
	            break;
	        case 29:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 338;
	            this.match(HopperParser.T__28);
	            break;
	        case 30:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 339;
	            this.match(HopperParser.T__29);
	            break;
	        case 31:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 340;
	            this.match(HopperParser.T__30);
	            break;
	        case 32:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 341;
	            this.match(HopperParser.T__31);
	            break;
	        case 33:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 342;
	            this.match(HopperParser.T__32);
	            break;
	        case 19:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 343;
	            this.match(HopperParser.T__18);
	            break;
	        case 34:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 344;
	            this.match(HopperParser.T__33);
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 345;
	            this.match(HopperParser.T__20);
	            break;
	        case 35:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 346;
	            this.match(HopperParser.T__34);
	            break;
	        case 36:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 347;
	            this.match(HopperParser.T__35);
	            break;
	        case 37:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 348;
	            this.match(HopperParser.T__36);
	            break;
	        case 38:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 349;
	            this.match(HopperParser.T__37);
	            break;
	        case 39:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 350;
	            this.match(HopperParser.T__38);
	            break;
	        case 40:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 351;
	            this.match(HopperParser.T__39);
	            break;
	        case 41:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 352;
	            this.match(HopperParser.T__40);
	            this.state = 353;
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



	paramList() {
	    let localctx = new ParamListContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 32, HopperParser.RULE_paramList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 356;
	        this.param();
	        this.state = 361;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===20) {
	            this.state = 357;
	            this.match(HopperParser.T__19);
	            this.state = 358;
	            this.param();
	            this.state = 363;
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
	        this.state = 377;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 5:
	        case 44:
	        case 45:
	        case 46:
	        case 47:
	        case 48:
	        case 49:
	        case 73:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 364;
	            this.param();
	            this.state = 369;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,33,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 365;
	                    this.match(HopperParser.T__19);
	                    this.state = 366;
	                    this.param(); 
	                }
	                this.state = 371;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,33,this._ctx);
	            }

	            this.state = 374;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===20) {
	                this.state = 372;
	                this.match(HopperParser.T__19);
	                this.state = 373;
	                this.match(HopperParser.T__42);
	            }

	            break;
	        case 43:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 376;
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



	param() {
	    let localctx = new ParamContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 36, HopperParser.RULE_param);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 379;
	        this.type();
	        this.state = 380;
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
	    this.enterRule(localctx, 38, HopperParser.RULE_type);
	    var _la = 0;
	    try {
	        this.state = 405;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 382;
	            this.match(HopperParser.T__43);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 383;
	            this.match(HopperParser.T__44);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 384;
	            this.match(HopperParser.T__45);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 385;
	            this.match(HopperParser.T__46);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 386;
	            this.match(HopperParser.T__47);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 387;
	            this.match(HopperParser.T__4);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 388;
	            this.match(HopperParser.T__48);
	            this.state = 389;
	            this.match(HopperParser.T__43);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 390;
	            this.match(HopperParser.T__48);
	            this.state = 391;
	            this.match(HopperParser.T__46);
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 392;
	            this.match(HopperParser.Identifier);
	            this.state = 393;
	            this.match(HopperParser.T__18);
	            this.state = 394;
	            this.type();
	            this.state = 399;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===20) {
	                this.state = 395;
	                this.match(HopperParser.T__19);
	                this.state = 396;
	                this.type();
	                this.state = 401;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 402;
	            this.match(HopperParser.T__20);
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 404;
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
	    this.enterRule(localctx, 40, HopperParser.RULE_block);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 407;
	        this.match(HopperParser.T__14);
	        this.state = 411;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===74) {
	            this.state = 408;
	            this.match(HopperParser.NEWLINE);
	            this.state = 413;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 432;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 268439584) !== 0) || ((((_la - 44)) & ~0x1f) === 0 && ((1 << (_la - 44)) & 1073542847) !== 0)) {
	            this.state = 414;
	            this.statement();
	            this.state = 423;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,40,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 416; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    do {
	                        this.state = 415;
	                        this.match(HopperParser.NEWLINE);
	                        this.state = 418; 
	                        this._errHandler.sync(this);
	                        _la = this._input.LA(1);
	                    } while(_la===74);
	                    this.state = 420;
	                    this.statement(); 
	                }
	                this.state = 425;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,40,this._ctx);
	            }

	            this.state = 429;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===74) {
	                this.state = 426;
	                this.match(HopperParser.NEWLINE);
	                this.state = 431;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 434;
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
	    this.enterRule(localctx, 42, HopperParser.RULE_statement);
	    var _la = 0;
	    try {
	        this.state = 510;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,48,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ArrayDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 436;
	            this.type();
	            this.state = 437;
	            this.match(HopperParser.Identifier);
	            this.state = 438;
	            this.match(HopperParser.T__40);
	            this.state = 439;
	            this.match(HopperParser.IntegerLiteral);
	            this.state = 440;
	            this.match(HopperParser.T__41);
	            break;

	        case 2:
	            localctx = new VarDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 442;
	            this.type();
	            this.state = 443;
	            this.match(HopperParser.Identifier);
	            this.state = 444;
	            this.match(HopperParser.T__2);
	            this.state = 445;
	            this.expression();
	            break;

	        case 3:
	            localctx = new VarDeclNoInitContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 447;
	            this.type();
	            this.state = 448;
	            this.match(HopperParser.Identifier);
	            break;

	        case 4:
	            localctx = new ArrayAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 450;
	            this.match(HopperParser.Identifier);
	            this.state = 451;
	            this.match(HopperParser.T__40);
	            this.state = 452;
	            this.expression();
	            this.state = 453;
	            this.match(HopperParser.T__41);
	            this.state = 454;
	            this.match(HopperParser.T__2);
	            this.state = 455;
	            this.expression();
	            break;

	        case 5:
	            localctx = new AssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 457;
	            this.match(HopperParser.Identifier);
	            this.state = 458;
	            this.match(HopperParser.T__2);
	            this.state = 459;
	            this.expression();
	            break;

	        case 6:
	            localctx = new FieldAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 460;
	            this.match(HopperParser.Identifier);
	            this.state = 461;
	            this.match(HopperParser.T__49);
	            this.state = 462;
	            this.fieldName();
	            this.state = 463;
	            this.match(HopperParser.T__2);
	            this.state = 464;
	            this.expression();
	            break;

	        case 7:
	            localctx = new DerefAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 7);
	            this.state = 466;
	            this.match(HopperParser.Identifier);
	            this.state = 467;
	            this.match(HopperParser.T__3);
	            this.state = 468;
	            this.match(HopperParser.T__25);
	            this.state = 469;
	            this.match(HopperParser.T__2);
	            this.state = 470;
	            this.expression();
	            break;

	        case 8:
	            localctx = new ExprStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 8);
	            this.state = 471;
	            this.expression();
	            break;

	        case 9:
	            localctx = new IfStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 9);
	            this.state = 472;
	            this.match(HopperParser.T__50);
	            this.state = 473;
	            this.match(HopperParser.T__11);
	            this.state = 474;
	            this.expression();
	            this.state = 475;
	            this.match(HopperParser.T__12);
	            this.state = 476;
	            this.block();
	            this.state = 479;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===52) {
	                this.state = 477;
	                this.match(HopperParser.T__51);
	                this.state = 478;
	                this.block();
	            }

	            break;

	        case 10:
	            localctx = new WhileStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 10);
	            this.state = 481;
	            this.match(HopperParser.T__52);
	            this.state = 482;
	            this.match(HopperParser.T__11);
	            this.state = 483;
	            this.expression();
	            this.state = 484;
	            this.match(HopperParser.T__12);
	            this.state = 485;
	            this.block();
	            break;

	        case 11:
	            localctx = new ForStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 11);
	            this.state = 487;
	            this.match(HopperParser.T__53);
	            this.state = 488;
	            this.match(HopperParser.T__11);
	            this.state = 490;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5 || ((((_la - 44)) & ~0x1f) === 0 && ((1 << (_la - 44)) & 536870975) !== 0)) {
	                this.state = 489;
	                this.forInit();
	            }

	            this.state = 492;
	            this.match(HopperParser.T__54);
	            this.state = 494;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===12 || _la===28 || ((((_la - 62)) & ~0x1f) === 0 && ((1 << (_la - 62)) & 4095) !== 0)) {
	                this.state = 493;
	                this.expression();
	            }

	            this.state = 496;
	            this.match(HopperParser.T__54);
	            this.state = 498;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===73) {
	                this.state = 497;
	                this.forUpdate();
	            }

	            this.state = 500;
	            this.match(HopperParser.T__12);
	            this.state = 501;
	            this.block();
	            break;

	        case 12:
	            localctx = new BreakStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 12);
	            this.state = 502;
	            this.match(HopperParser.T__55);
	            break;

	        case 13:
	            localctx = new ContinueStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 13);
	            this.state = 503;
	            this.match(HopperParser.T__56);
	            break;

	        case 14:
	            localctx = new ReturnStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 14);
	            this.state = 504;
	            this.match(HopperParser.T__57);
	            this.state = 506;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===12 || _la===28 || ((((_la - 62)) & ~0x1f) === 0 && ((1 << (_la - 62)) & 4095) !== 0)) {
	                this.state = 505;
	                this.expression();
	            }

	            break;

	        case 15:
	            localctx = new DeferStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 15);
	            this.state = 508;
	            this.match(HopperParser.T__58);
	            this.state = 509;
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
	    this.enterRule(localctx, 44, HopperParser.RULE_forInit);
	    try {
	        this.state = 520;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,49,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ForInitDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 512;
	            this.type();
	            this.state = 513;
	            this.match(HopperParser.Identifier);
	            this.state = 514;
	            this.match(HopperParser.T__2);
	            this.state = 515;
	            this.expression();
	            break;

	        case 2:
	            localctx = new ForInitAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 517;
	            this.match(HopperParser.Identifier);
	            this.state = 518;
	            this.match(HopperParser.T__2);
	            this.state = 519;
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
	    this.enterRule(localctx, 46, HopperParser.RULE_forUpdate);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 522;
	        this.match(HopperParser.Identifier);
	        this.state = 523;
	        this.match(HopperParser.T__2);
	        this.state = 524;
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
	    this.enterRule(localctx, 48, HopperParser.RULE_expression);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 526;
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
	    this.enterRule(localctx, 50, HopperParser.RULE_logicalOr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 528;
	        this.logicalAnd();
	        this.state = 533;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===60) {
	            this.state = 529;
	            this.match(HopperParser.T__59);
	            this.state = 530;
	            this.logicalAnd();
	            this.state = 535;
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
	    this.enterRule(localctx, 52, HopperParser.RULE_logicalAnd);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 536;
	        this.bitwiseOr();
	        this.state = 541;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===61) {
	            this.state = 537;
	            this.match(HopperParser.T__60);
	            this.state = 538;
	            this.bitwiseOr();
	            this.state = 543;
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
	    this.enterRule(localctx, 54, HopperParser.RULE_bitwiseOr);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 544;
	        this.bitwiseXor();
	        this.state = 549;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===37) {
	            this.state = 545;
	            this.match(HopperParser.T__36);
	            this.state = 546;
	            this.bitwiseXor();
	            this.state = 551;
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
	    this.enterRule(localctx, 56, HopperParser.RULE_bitwiseXor);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 552;
	        this.bitwiseAnd();
	        this.state = 557;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===38) {
	            this.state = 553;
	            this.match(HopperParser.T__37);
	            this.state = 554;
	            this.bitwiseAnd();
	            this.state = 559;
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
	    this.enterRule(localctx, 58, HopperParser.RULE_bitwiseAnd);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 560;
	        this.equality();
	        this.state = 565;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===36) {
	            this.state = 561;
	            this.match(HopperParser.T__35);
	            this.state = 562;
	            this.equality();
	            this.state = 567;
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
	    this.enterRule(localctx, 60, HopperParser.RULE_equality);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 568;
	        this.relational();
	        this.state = 573;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===32 || _la===33) {
	            this.state = 569;
	            _la = this._input.LA(1);
	            if(!(_la===32 || _la===33)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 570;
	            this.relational();
	            this.state = 575;
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
	    this.enterRule(localctx, 62, HopperParser.RULE_relational);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 576;
	        this.shift();
	        this.state = 581;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 19)) & ~0x1f) === 0 && ((1 << (_la - 19)) & 98309) !== 0)) {
	            this.state = 577;
	            _la = this._input.LA(1);
	            if(!(((((_la - 19)) & ~0x1f) === 0 && ((1 << (_la - 19)) & 98309) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 578;
	            this.shift();
	            this.state = 583;
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
	    this.enterRule(localctx, 64, HopperParser.RULE_shift);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 584;
	        this.additive();
	        this.state = 589;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===39 || _la===40) {
	            this.state = 585;
	            _la = this._input.LA(1);
	            if(!(_la===39 || _la===40)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 586;
	            this.additive();
	            this.state = 591;
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
	    this.enterRule(localctx, 66, HopperParser.RULE_additive);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 592;
	        this.multiplicative();
	        this.state = 597;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===27 || _la===28) {
	            this.state = 593;
	            _la = this._input.LA(1);
	            if(!(_la===27 || _la===28)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 594;
	            this.multiplicative();
	            this.state = 599;
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
	    this.enterRule(localctx, 68, HopperParser.RULE_multiplicative);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 600;
	        this.unary();
	        this.state = 605;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3758096384) !== 0)) {
	            this.state = 601;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 3758096384) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 602;
	            this.unary();
	            this.state = 607;
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
	    this.enterRule(localctx, 70, HopperParser.RULE_unary);
	    var _la = 0;
	    try {
	        this.state = 613;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 28:
	        case 62:
	        case 63:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 608;
	            _la = this._input.LA(1);
	            if(!(_la===28 || _la===62 || _la===63)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 609;
	            this.unary();
	            break;
	        case 64:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 610;
	            this.match(HopperParser.T__63);
	            this.state = 611;
	            this.unary();
	            break;
	        case 12:
	        case 65:
	        case 66:
	        case 67:
	        case 68:
	        case 69:
	        case 70:
	        case 71:
	        case 72:
	        case 73:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 612;
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
	    this.enterRule(localctx, 72, HopperParser.RULE_primary);
	    var _la = 0;
	    try {
	        this.state = 663;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,63,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 615;
	            this.match(HopperParser.IntegerLiteral);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 616;
	            this.match(HopperParser.HexLiteral);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 617;
	            this.match(HopperParser.FloatLiteral);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 618;
	            this.match(HopperParser.StringLiteral);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 619;
	            this.match(HopperParser.CharLiteral);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 620;
	            this.match(HopperParser.T__64);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 621;
	            this.match(HopperParser.T__65);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 622;
	            this.match(HopperParser.T__66);
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 623;
	            this.match(HopperParser.Identifier);
	            this.state = 624;
	            this.match(HopperParser.T__40);
	            this.state = 625;
	            this.expression();
	            this.state = 626;
	            this.match(HopperParser.T__41);
	            this.state = 627;
	            this.match(HopperParser.T__3);
	            this.state = 628;
	            this.match(HopperParser.T__4);
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 630;
	            this.match(HopperParser.Identifier);
	            this.state = 631;
	            this.match(HopperParser.T__3);
	            this.state = 632;
	            this.match(HopperParser.T__4);
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 633;
	            this.match(HopperParser.Identifier);
	            this.state = 634;
	            this.match(HopperParser.T__3);
	            this.state = 635;
	            this.match(HopperParser.T__25);
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 636;
	            this.match(HopperParser.Identifier);
	            this.state = 637;
	            this.match(HopperParser.T__11);
	            this.state = 639;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===12 || _la===28 || ((((_la - 62)) & ~0x1f) === 0 && ((1 << (_la - 62)) & 4095) !== 0)) {
	                this.state = 638;
	                this.argList();
	            }

	            this.state = 641;
	            this.match(HopperParser.T__12);
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 642;
	            this.match(HopperParser.Identifier);
	            this.state = 643;
	            this.match(HopperParser.T__49);
	            this.state = 644;
	            this.match(HopperParser.Identifier);
	            this.state = 645;
	            this.match(HopperParser.T__11);
	            this.state = 647;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===12 || _la===28 || ((((_la - 62)) & ~0x1f) === 0 && ((1 << (_la - 62)) & 4095) !== 0)) {
	                this.state = 646;
	                this.argList();
	            }

	            this.state = 649;
	            this.match(HopperParser.T__12);
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 650;
	            this.match(HopperParser.Identifier);
	            this.state = 651;
	            this.match(HopperParser.T__40);
	            this.state = 652;
	            this.expression();
	            this.state = 653;
	            this.match(HopperParser.T__41);
	            break;

	        case 15:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 655;
	            this.match(HopperParser.Identifier);
	            this.state = 656;
	            this.match(HopperParser.T__49);
	            this.state = 657;
	            this.fieldName();
	            break;

	        case 16:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 658;
	            this.match(HopperParser.Identifier);
	            break;

	        case 17:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 659;
	            this.match(HopperParser.T__11);
	            this.state = 660;
	            this.expression();
	            this.state = 661;
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
	    this.enterRule(localctx, 74, HopperParser.RULE_argList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 665;
	        this.expression();
	        this.state = 670;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===20) {
	            this.state = 666;
	            this.match(HopperParser.T__19);
	            this.state = 667;
	            this.expression();
	            this.state = 672;
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
	    this.enterRule(localctx, 76, HopperParser.RULE_literal);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 673;
	        _la = this._input.LA(1);
	        if(!(((((_la - 65)) & ~0x1f) === 0 && ((1 << (_la - 65)) & 123) !== 0))) {
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
HopperParser.IntegerLiteral = 68;
HopperParser.HexLiteral = 69;
HopperParser.FloatLiteral = 70;
HopperParser.StringLiteral = 71;
HopperParser.CharLiteral = 72;
HopperParser.Identifier = 73;
HopperParser.NEWLINE = 74;
HopperParser.LINE_COMMENT = 75;
HopperParser.WS = 76;

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
HopperParser.RULE_type = 19;
HopperParser.RULE_block = 20;
HopperParser.RULE_statement = 21;
HopperParser.RULE_forInit = 22;
HopperParser.RULE_forUpdate = 23;
HopperParser.RULE_expression = 24;
HopperParser.RULE_logicalOr = 25;
HopperParser.RULE_logicalAnd = 26;
HopperParser.RULE_bitwiseOr = 27;
HopperParser.RULE_bitwiseXor = 28;
HopperParser.RULE_bitwiseAnd = 29;
HopperParser.RULE_equality = 30;
HopperParser.RULE_relational = 31;
HopperParser.RULE_shift = 32;
HopperParser.RULE_additive = 33;
HopperParser.RULE_multiplicative = 34;
HopperParser.RULE_unary = 35;
HopperParser.RULE_primary = 36;
HopperParser.RULE_argList = 37;
HopperParser.RULE_literal = 38;

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
