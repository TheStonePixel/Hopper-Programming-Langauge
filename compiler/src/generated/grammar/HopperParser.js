// Generated from grammar/Hopper.g4 by ANTLR 4.13.1
// jshint ignore: start
import antlr4 from 'antlr4';
import HopperListener from './HopperListener.js';
import HopperVisitor from './HopperVisitor.js';

const serializedATN = [4,1,76,667,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,
4,2,5,7,5,2,6,7,6,2,7,7,7,2,8,7,8,2,9,7,9,2,10,7,10,2,11,7,11,2,12,7,12,
2,13,7,13,2,14,7,14,2,15,7,15,2,16,7,16,2,17,7,17,2,18,7,18,2,19,7,19,2,
20,7,20,2,21,7,21,2,22,7,22,2,23,7,23,2,24,7,24,2,25,7,25,2,26,7,26,2,27,
7,27,2,28,7,28,2,29,7,29,2,30,7,30,2,31,7,31,2,32,7,32,2,33,7,33,2,34,7,
34,2,35,7,35,2,36,7,36,2,37,7,37,1,0,5,0,78,8,0,10,0,12,0,81,9,0,1,0,1,0,
5,0,85,8,0,10,0,12,0,88,9,0,5,0,90,8,0,10,0,12,0,93,9,0,1,0,1,0,1,1,1,1,
1,1,1,1,1,1,1,1,1,1,1,1,1,1,3,1,106,8,1,1,2,1,2,1,2,1,3,1,3,1,3,1,3,1,3,
1,3,1,3,1,4,1,4,1,4,1,4,1,4,1,4,1,4,3,4,125,8,4,1,5,1,5,1,5,1,5,1,5,1,6,
1,6,1,6,1,6,1,6,1,7,1,7,1,7,1,7,1,7,3,7,142,8,7,1,7,1,7,1,7,1,7,1,7,1,7,
1,7,3,7,151,8,7,1,7,1,7,1,7,1,7,1,7,3,7,158,8,7,1,7,1,7,1,7,1,7,1,7,1,7,
1,7,1,7,3,7,168,8,7,1,7,1,7,3,7,172,8,7,1,8,1,8,1,8,1,8,5,8,178,8,8,10,8,
12,8,181,9,8,1,8,1,8,4,8,185,8,8,11,8,12,8,186,1,8,5,8,190,8,8,10,8,12,8,
193,9,8,1,8,5,8,196,8,8,10,8,12,8,199,9,8,3,8,201,8,8,1,8,1,8,1,9,1,9,1,
9,1,9,1,9,3,9,210,8,9,1,10,1,10,1,10,1,10,1,10,1,10,5,10,218,8,10,10,10,
12,10,221,9,10,1,10,1,10,1,10,5,10,226,8,10,10,10,12,10,229,9,10,1,10,1,
10,4,10,233,8,10,11,10,12,10,234,1,10,5,10,238,8,10,10,10,12,10,241,9,10,
1,10,5,10,244,8,10,10,10,12,10,247,9,10,3,10,249,8,10,1,10,1,10,1,11,1,11,
1,11,1,11,5,11,257,8,11,10,11,12,11,260,9,11,1,11,1,11,4,11,264,8,11,11,
11,12,11,265,1,11,5,11,269,8,11,10,11,12,11,272,9,11,1,11,5,11,275,8,11,
10,11,12,11,278,9,11,3,11,280,8,11,1,11,1,11,1,12,1,12,1,12,1,12,1,12,1,
12,1,12,3,12,291,8,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,301,8,
12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,
316,8,12,1,12,1,12,1,12,1,12,1,12,1,12,3,12,324,8,12,1,13,1,13,1,14,1,14,
1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,14,1,
14,1,14,3,14,346,8,14,1,15,1,15,1,15,5,15,351,8,15,10,15,12,15,354,9,15,
1,16,1,16,1,16,5,16,359,8,16,10,16,12,16,362,9,16,1,16,1,16,3,16,366,8,16,
1,16,3,16,369,8,16,1,17,1,17,1,17,1,18,1,18,1,18,1,18,1,18,1,18,1,18,1,18,
1,18,1,18,1,18,1,18,1,18,1,18,1,18,5,18,389,8,18,10,18,12,18,392,9,18,1,
18,1,18,1,18,3,18,397,8,18,1,19,1,19,5,19,401,8,19,10,19,12,19,404,9,19,
1,19,1,19,4,19,408,8,19,11,19,12,19,409,1,19,5,19,413,8,19,10,19,12,19,416,
9,19,1,19,5,19,419,8,19,10,19,12,19,422,9,19,3,19,424,8,19,1,19,1,19,1,20,
1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,
20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,
1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,3,20,471,
8,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,1,20,3,20,482,8,20,1,20,1,20,
3,20,486,8,20,1,20,1,20,3,20,490,8,20,1,20,1,20,1,20,1,20,1,20,1,20,3,20,
498,8,20,1,20,1,20,3,20,502,8,20,1,21,1,21,1,21,1,21,1,21,1,21,1,21,1,21,
3,21,512,8,21,1,22,1,22,1,22,1,22,1,23,1,23,1,24,1,24,1,24,5,24,523,8,24,
10,24,12,24,526,9,24,1,25,1,25,1,25,5,25,531,8,25,10,25,12,25,534,9,25,1,
26,1,26,1,26,5,26,539,8,26,10,26,12,26,542,9,26,1,27,1,27,1,27,5,27,547,
8,27,10,27,12,27,550,9,27,1,28,1,28,1,28,5,28,555,8,28,10,28,12,28,558,9,
28,1,29,1,29,1,29,5,29,563,8,29,10,29,12,29,566,9,29,1,30,1,30,1,30,5,30,
571,8,30,10,30,12,30,574,9,30,1,31,1,31,1,31,5,31,579,8,31,10,31,12,31,582,
9,31,1,32,1,32,1,32,5,32,587,8,32,10,32,12,32,590,9,32,1,33,1,33,1,33,5,
33,595,8,33,10,33,12,33,598,9,33,1,34,1,34,1,34,1,34,1,34,3,34,605,8,34,
1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,
35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,3,35,631,8,35,1,35,1,35,
1,35,1,35,1,35,1,35,3,35,639,8,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,1,35,
1,35,1,35,1,35,1,35,1,35,1,35,3,35,655,8,35,1,36,1,36,1,36,5,36,660,8,36,
10,36,12,36,663,9,36,1,37,1,37,1,37,0,0,38,0,2,4,6,8,10,12,14,16,18,20,22,
24,26,28,30,32,34,36,38,40,42,44,46,48,50,52,54,56,58,60,62,64,66,68,70,
72,74,0,8,3,0,5,5,26,26,73,73,1,0,32,33,3,0,19,19,21,21,34,35,1,0,39,40,
1,0,27,28,1,0,29,31,2,0,28,28,62,63,2,0,65,66,68,71,758,0,79,1,0,0,0,2,105,
1,0,0,0,4,107,1,0,0,0,6,110,1,0,0,0,8,124,1,0,0,0,10,126,1,0,0,0,12,131,
1,0,0,0,14,171,1,0,0,0,16,173,1,0,0,0,18,209,1,0,0,0,20,211,1,0,0,0,22,252,
1,0,0,0,24,323,1,0,0,0,26,325,1,0,0,0,28,345,1,0,0,0,30,347,1,0,0,0,32,368,
1,0,0,0,34,370,1,0,0,0,36,396,1,0,0,0,38,398,1,0,0,0,40,501,1,0,0,0,42,511,
1,0,0,0,44,513,1,0,0,0,46,517,1,0,0,0,48,519,1,0,0,0,50,527,1,0,0,0,52,535,
1,0,0,0,54,543,1,0,0,0,56,551,1,0,0,0,58,559,1,0,0,0,60,567,1,0,0,0,62,575,
1,0,0,0,64,583,1,0,0,0,66,591,1,0,0,0,68,604,1,0,0,0,70,654,1,0,0,0,72,656,
1,0,0,0,74,664,1,0,0,0,76,78,5,74,0,0,77,76,1,0,0,0,78,81,1,0,0,0,79,77,
1,0,0,0,79,80,1,0,0,0,80,91,1,0,0,0,81,79,1,0,0,0,82,86,3,2,1,0,83,85,5,
74,0,0,84,83,1,0,0,0,85,88,1,0,0,0,86,84,1,0,0,0,86,87,1,0,0,0,87,90,1,0,
0,0,88,86,1,0,0,0,89,82,1,0,0,0,90,93,1,0,0,0,91,89,1,0,0,0,91,92,1,0,0,
0,92,94,1,0,0,0,93,91,1,0,0,0,94,95,5,0,0,1,95,1,1,0,0,0,96,106,3,14,7,0,
97,106,3,16,8,0,98,106,3,22,11,0,99,106,3,20,10,0,100,106,3,10,5,0,101,106,
3,4,2,0,102,106,3,12,6,0,103,106,3,8,4,0,104,106,3,6,3,0,105,96,1,0,0,0,
105,97,1,0,0,0,105,98,1,0,0,0,105,99,1,0,0,0,105,100,1,0,0,0,105,101,1,0,
0,0,105,102,1,0,0,0,105,103,1,0,0,0,105,104,1,0,0,0,106,3,1,0,0,0,107,108,
5,1,0,0,108,109,5,71,0,0,109,5,1,0,0,0,110,111,5,2,0,0,111,112,5,69,0,0,
112,113,5,3,0,0,113,114,5,73,0,0,114,115,5,4,0,0,115,116,5,5,0,0,116,7,1,
0,0,0,117,118,5,6,0,0,118,119,5,73,0,0,119,125,3,38,19,0,120,121,5,6,0,0,
121,122,5,73,0,0,122,123,5,7,0,0,123,125,3,46,23,0,124,117,1,0,0,0,124,120,
1,0,0,0,125,9,1,0,0,0,126,127,5,8,0,0,127,128,5,73,0,0,128,129,5,7,0,0,129,
130,3,74,37,0,130,11,1,0,0,0,131,132,5,9,0,0,132,133,5,73,0,0,133,134,5,
7,0,0,134,135,3,36,18,0,135,13,1,0,0,0,136,137,5,10,0,0,137,138,5,11,0,0,
138,139,5,73,0,0,139,141,5,12,0,0,140,142,3,32,16,0,141,140,1,0,0,0,141,
142,1,0,0,0,142,143,1,0,0,0,143,144,5,13,0,0,144,172,3,36,18,0,145,146,5,
10,0,0,146,147,5,11,0,0,147,148,5,73,0,0,148,150,5,12,0,0,149,151,3,32,16,
0,150,149,1,0,0,0,150,151,1,0,0,0,151,152,1,0,0,0,152,172,5,13,0,0,153,154,
5,11,0,0,154,155,5,73,0,0,155,157,5,12,0,0,156,158,3,30,15,0,157,156,1,0,
0,0,157,158,1,0,0,0,158,159,1,0,0,0,159,160,5,13,0,0,160,161,3,36,18,0,161,
162,3,38,19,0,162,172,1,0,0,0,163,164,5,11,0,0,164,165,5,73,0,0,165,167,
5,12,0,0,166,168,3,30,15,0,167,166,1,0,0,0,167,168,1,0,0,0,168,169,1,0,0,
0,169,170,5,13,0,0,170,172,3,38,19,0,171,136,1,0,0,0,171,145,1,0,0,0,171,
153,1,0,0,0,171,163,1,0,0,0,172,15,1,0,0,0,173,174,5,14,0,0,174,175,5,73,
0,0,175,179,5,15,0,0,176,178,5,74,0,0,177,176,1,0,0,0,178,181,1,0,0,0,179,
177,1,0,0,0,179,180,1,0,0,0,180,200,1,0,0,0,181,179,1,0,0,0,182,191,3,18,
9,0,183,185,5,74,0,0,184,183,1,0,0,0,185,186,1,0,0,0,186,184,1,0,0,0,186,
187,1,0,0,0,187,188,1,0,0,0,188,190,3,18,9,0,189,184,1,0,0,0,190,193,1,0,
0,0,191,189,1,0,0,0,191,192,1,0,0,0,192,197,1,0,0,0,193,191,1,0,0,0,194,
196,5,74,0,0,195,194,1,0,0,0,196,199,1,0,0,0,197,195,1,0,0,0,197,198,1,0,
0,0,198,201,1,0,0,0,199,197,1,0,0,0,200,182,1,0,0,0,200,201,1,0,0,0,201,
202,1,0,0,0,202,203,5,16,0,0,203,17,1,0,0,0,204,205,3,36,18,0,205,206,3,
26,13,0,206,210,1,0,0,0,207,208,5,17,0,0,208,210,5,68,0,0,209,204,1,0,0,
0,209,207,1,0,0,0,210,19,1,0,0,0,211,212,5,18,0,0,212,213,5,73,0,0,213,214,
5,19,0,0,214,219,5,73,0,0,215,216,5,20,0,0,216,218,5,73,0,0,217,215,1,0,
0,0,218,221,1,0,0,0,219,217,1,0,0,0,219,220,1,0,0,0,220,222,1,0,0,0,221,
219,1,0,0,0,222,223,5,21,0,0,223,227,5,15,0,0,224,226,5,74,0,0,225,224,1,
0,0,0,226,229,1,0,0,0,227,225,1,0,0,0,227,228,1,0,0,0,228,248,1,0,0,0,229,
227,1,0,0,0,230,239,3,24,12,0,231,233,5,74,0,0,232,231,1,0,0,0,233,234,1,
0,0,0,234,232,1,0,0,0,234,235,1,0,0,0,235,236,1,0,0,0,236,238,3,24,12,0,
237,232,1,0,0,0,238,241,1,0,0,0,239,237,1,0,0,0,239,240,1,0,0,0,240,245,
1,0,0,0,241,239,1,0,0,0,242,244,5,74,0,0,243,242,1,0,0,0,244,247,1,0,0,0,
245,243,1,0,0,0,245,246,1,0,0,0,246,249,1,0,0,0,247,245,1,0,0,0,248,230,
1,0,0,0,248,249,1,0,0,0,249,250,1,0,0,0,250,251,5,16,0,0,251,21,1,0,0,0,
252,253,5,22,0,0,253,254,5,73,0,0,254,258,5,15,0,0,255,257,5,74,0,0,256,
255,1,0,0,0,257,260,1,0,0,0,258,256,1,0,0,0,258,259,1,0,0,0,259,279,1,0,
0,0,260,258,1,0,0,0,261,270,3,24,12,0,262,264,5,74,0,0,263,262,1,0,0,0,264,
265,1,0,0,0,265,263,1,0,0,0,265,266,1,0,0,0,266,267,1,0,0,0,267,269,3,24,
12,0,268,263,1,0,0,0,269,272,1,0,0,0,270,268,1,0,0,0,270,271,1,0,0,0,271,
276,1,0,0,0,272,270,1,0,0,0,273,275,5,74,0,0,274,273,1,0,0,0,275,278,1,0,
0,0,276,274,1,0,0,0,276,277,1,0,0,0,277,280,1,0,0,0,278,276,1,0,0,0,279,
261,1,0,0,0,279,280,1,0,0,0,280,281,1,0,0,0,281,282,5,16,0,0,282,23,1,0,
0,0,283,284,3,36,18,0,284,285,3,26,13,0,285,324,1,0,0,0,286,287,5,11,0,0,
287,288,5,73,0,0,288,290,5,12,0,0,289,291,3,30,15,0,290,289,1,0,0,0,290,
291,1,0,0,0,291,292,1,0,0,0,292,293,5,13,0,0,293,294,3,36,18,0,294,295,3,
38,19,0,295,324,1,0,0,0,296,297,5,11,0,0,297,298,5,73,0,0,298,300,5,12,0,
0,299,301,3,30,15,0,300,299,1,0,0,0,300,301,1,0,0,0,301,302,1,0,0,0,302,
303,5,13,0,0,303,324,3,38,19,0,304,305,5,23,0,0,305,306,3,28,14,0,306,307,
5,12,0,0,307,308,3,34,17,0,308,309,5,13,0,0,309,310,3,36,18,0,310,311,3,
38,19,0,311,324,1,0,0,0,312,313,5,24,0,0,313,315,5,12,0,0,314,316,3,30,15,
0,315,314,1,0,0,0,315,316,1,0,0,0,316,317,1,0,0,0,317,318,5,13,0,0,318,324,
3,38,19,0,319,320,5,25,0,0,320,321,5,12,0,0,321,322,5,13,0,0,322,324,3,38,
19,0,323,283,1,0,0,0,323,286,1,0,0,0,323,296,1,0,0,0,323,304,1,0,0,0,323,
312,1,0,0,0,323,319,1,0,0,0,324,25,1,0,0,0,325,326,7,0,0,0,326,27,1,0,0,
0,327,346,5,27,0,0,328,346,5,28,0,0,329,346,5,29,0,0,330,346,5,30,0,0,331,
346,5,31,0,0,332,346,5,32,0,0,333,346,5,33,0,0,334,346,5,19,0,0,335,346,
5,34,0,0,336,346,5,21,0,0,337,346,5,35,0,0,338,346,5,36,0,0,339,346,5,37,
0,0,340,346,5,38,0,0,341,346,5,39,0,0,342,346,5,40,0,0,343,344,5,41,0,0,
344,346,5,42,0,0,345,327,1,0,0,0,345,328,1,0,0,0,345,329,1,0,0,0,345,330,
1,0,0,0,345,331,1,0,0,0,345,332,1,0,0,0,345,333,1,0,0,0,345,334,1,0,0,0,
345,335,1,0,0,0,345,336,1,0,0,0,345,337,1,0,0,0,345,338,1,0,0,0,345,339,
1,0,0,0,345,340,1,0,0,0,345,341,1,0,0,0,345,342,1,0,0,0,345,343,1,0,0,0,
346,29,1,0,0,0,347,352,3,34,17,0,348,349,5,20,0,0,349,351,3,34,17,0,350,
348,1,0,0,0,351,354,1,0,0,0,352,350,1,0,0,0,352,353,1,0,0,0,353,31,1,0,0,
0,354,352,1,0,0,0,355,360,3,34,17,0,356,357,5,20,0,0,357,359,3,34,17,0,358,
356,1,0,0,0,359,362,1,0,0,0,360,358,1,0,0,0,360,361,1,0,0,0,361,365,1,0,
0,0,362,360,1,0,0,0,363,364,5,20,0,0,364,366,5,43,0,0,365,363,1,0,0,0,365,
366,1,0,0,0,366,369,1,0,0,0,367,369,5,43,0,0,368,355,1,0,0,0,368,367,1,0,
0,0,369,33,1,0,0,0,370,371,3,36,18,0,371,372,5,73,0,0,372,35,1,0,0,0,373,
397,5,44,0,0,374,397,5,45,0,0,375,397,5,46,0,0,376,397,5,47,0,0,377,397,
5,48,0,0,378,397,5,5,0,0,379,380,5,49,0,0,380,397,5,44,0,0,381,382,5,49,
0,0,382,397,5,47,0,0,383,384,5,73,0,0,384,385,5,19,0,0,385,390,3,36,18,0,
386,387,5,20,0,0,387,389,3,36,18,0,388,386,1,0,0,0,389,392,1,0,0,0,390,388,
1,0,0,0,390,391,1,0,0,0,391,393,1,0,0,0,392,390,1,0,0,0,393,394,5,21,0,0,
394,397,1,0,0,0,395,397,5,73,0,0,396,373,1,0,0,0,396,374,1,0,0,0,396,375,
1,0,0,0,396,376,1,0,0,0,396,377,1,0,0,0,396,378,1,0,0,0,396,379,1,0,0,0,
396,381,1,0,0,0,396,383,1,0,0,0,396,395,1,0,0,0,397,37,1,0,0,0,398,402,5,
15,0,0,399,401,5,74,0,0,400,399,1,0,0,0,401,404,1,0,0,0,402,400,1,0,0,0,
402,403,1,0,0,0,403,423,1,0,0,0,404,402,1,0,0,0,405,414,3,40,20,0,406,408,
5,74,0,0,407,406,1,0,0,0,408,409,1,0,0,0,409,407,1,0,0,0,409,410,1,0,0,0,
410,411,1,0,0,0,411,413,3,40,20,0,412,407,1,0,0,0,413,416,1,0,0,0,414,412,
1,0,0,0,414,415,1,0,0,0,415,420,1,0,0,0,416,414,1,0,0,0,417,419,5,74,0,0,
418,417,1,0,0,0,419,422,1,0,0,0,420,418,1,0,0,0,420,421,1,0,0,0,421,424,
1,0,0,0,422,420,1,0,0,0,423,405,1,0,0,0,423,424,1,0,0,0,424,425,1,0,0,0,
425,426,5,16,0,0,426,39,1,0,0,0,427,428,3,36,18,0,428,429,5,73,0,0,429,430,
5,41,0,0,430,431,5,68,0,0,431,432,5,42,0,0,432,502,1,0,0,0,433,434,3,36,
18,0,434,435,5,73,0,0,435,436,5,7,0,0,436,437,3,46,23,0,437,502,1,0,0,0,
438,439,3,36,18,0,439,440,5,73,0,0,440,502,1,0,0,0,441,442,5,73,0,0,442,
443,5,41,0,0,443,444,3,46,23,0,444,445,5,42,0,0,445,446,5,7,0,0,446,447,
3,46,23,0,447,502,1,0,0,0,448,449,5,73,0,0,449,450,5,7,0,0,450,502,3,46,
23,0,451,452,5,73,0,0,452,453,5,50,0,0,453,454,3,26,13,0,454,455,5,7,0,0,
455,456,3,46,23,0,456,502,1,0,0,0,457,458,5,73,0,0,458,459,5,4,0,0,459,460,
5,26,0,0,460,461,5,7,0,0,461,502,3,46,23,0,462,502,3,46,23,0,463,464,5,51,
0,0,464,465,5,12,0,0,465,466,3,46,23,0,466,467,5,13,0,0,467,470,3,38,19,
0,468,469,5,52,0,0,469,471,3,38,19,0,470,468,1,0,0,0,470,471,1,0,0,0,471,
502,1,0,0,0,472,473,5,53,0,0,473,474,5,12,0,0,474,475,3,46,23,0,475,476,
5,13,0,0,476,477,3,38,19,0,477,502,1,0,0,0,478,479,5,54,0,0,479,481,5,12,
0,0,480,482,3,42,21,0,481,480,1,0,0,0,481,482,1,0,0,0,482,483,1,0,0,0,483,
485,5,55,0,0,484,486,3,46,23,0,485,484,1,0,0,0,485,486,1,0,0,0,486,487,1,
0,0,0,487,489,5,55,0,0,488,490,3,44,22,0,489,488,1,0,0,0,489,490,1,0,0,0,
490,491,1,0,0,0,491,492,5,13,0,0,492,502,3,38,19,0,493,502,5,56,0,0,494,
502,5,57,0,0,495,497,5,58,0,0,496,498,3,46,23,0,497,496,1,0,0,0,497,498,
1,0,0,0,498,502,1,0,0,0,499,500,5,59,0,0,500,502,3,46,23,0,501,427,1,0,0,
0,501,433,1,0,0,0,501,438,1,0,0,0,501,441,1,0,0,0,501,448,1,0,0,0,501,451,
1,0,0,0,501,457,1,0,0,0,501,462,1,0,0,0,501,463,1,0,0,0,501,472,1,0,0,0,
501,478,1,0,0,0,501,493,1,0,0,0,501,494,1,0,0,0,501,495,1,0,0,0,501,499,
1,0,0,0,502,41,1,0,0,0,503,504,3,36,18,0,504,505,5,73,0,0,505,506,5,7,0,
0,506,507,3,46,23,0,507,512,1,0,0,0,508,509,5,73,0,0,509,510,5,7,0,0,510,
512,3,46,23,0,511,503,1,0,0,0,511,508,1,0,0,0,512,43,1,0,0,0,513,514,5,73,
0,0,514,515,5,7,0,0,515,516,3,46,23,0,516,45,1,0,0,0,517,518,3,48,24,0,518,
47,1,0,0,0,519,524,3,50,25,0,520,521,5,60,0,0,521,523,3,50,25,0,522,520,
1,0,0,0,523,526,1,0,0,0,524,522,1,0,0,0,524,525,1,0,0,0,525,49,1,0,0,0,526,
524,1,0,0,0,527,532,3,52,26,0,528,529,5,61,0,0,529,531,3,52,26,0,530,528,
1,0,0,0,531,534,1,0,0,0,532,530,1,0,0,0,532,533,1,0,0,0,533,51,1,0,0,0,534,
532,1,0,0,0,535,540,3,54,27,0,536,537,5,37,0,0,537,539,3,54,27,0,538,536,
1,0,0,0,539,542,1,0,0,0,540,538,1,0,0,0,540,541,1,0,0,0,541,53,1,0,0,0,542,
540,1,0,0,0,543,548,3,56,28,0,544,545,5,38,0,0,545,547,3,56,28,0,546,544,
1,0,0,0,547,550,1,0,0,0,548,546,1,0,0,0,548,549,1,0,0,0,549,55,1,0,0,0,550,
548,1,0,0,0,551,556,3,58,29,0,552,553,5,36,0,0,553,555,3,58,29,0,554,552,
1,0,0,0,555,558,1,0,0,0,556,554,1,0,0,0,556,557,1,0,0,0,557,57,1,0,0,0,558,
556,1,0,0,0,559,564,3,60,30,0,560,561,7,1,0,0,561,563,3,60,30,0,562,560,
1,0,0,0,563,566,1,0,0,0,564,562,1,0,0,0,564,565,1,0,0,0,565,59,1,0,0,0,566,
564,1,0,0,0,567,572,3,62,31,0,568,569,7,2,0,0,569,571,3,62,31,0,570,568,
1,0,0,0,571,574,1,0,0,0,572,570,1,0,0,0,572,573,1,0,0,0,573,61,1,0,0,0,574,
572,1,0,0,0,575,580,3,64,32,0,576,577,7,3,0,0,577,579,3,64,32,0,578,576,
1,0,0,0,579,582,1,0,0,0,580,578,1,0,0,0,580,581,1,0,0,0,581,63,1,0,0,0,582,
580,1,0,0,0,583,588,3,66,33,0,584,585,7,4,0,0,585,587,3,66,33,0,586,584,
1,0,0,0,587,590,1,0,0,0,588,586,1,0,0,0,588,589,1,0,0,0,589,65,1,0,0,0,590,
588,1,0,0,0,591,596,3,68,34,0,592,593,7,5,0,0,593,595,3,68,34,0,594,592,
1,0,0,0,595,598,1,0,0,0,596,594,1,0,0,0,596,597,1,0,0,0,597,67,1,0,0,0,598,
596,1,0,0,0,599,600,7,6,0,0,600,605,3,68,34,0,601,602,5,64,0,0,602,605,3,
68,34,0,603,605,3,70,35,0,604,599,1,0,0,0,604,601,1,0,0,0,604,603,1,0,0,
0,605,69,1,0,0,0,606,655,5,68,0,0,607,655,5,69,0,0,608,655,5,70,0,0,609,
655,5,71,0,0,610,655,5,72,0,0,611,655,5,65,0,0,612,655,5,66,0,0,613,655,
5,67,0,0,614,615,5,73,0,0,615,616,5,41,0,0,616,617,3,46,23,0,617,618,5,42,
0,0,618,619,5,4,0,0,619,620,5,5,0,0,620,655,1,0,0,0,621,622,5,73,0,0,622,
623,5,4,0,0,623,655,5,5,0,0,624,625,5,73,0,0,625,626,5,4,0,0,626,655,5,26,
0,0,627,628,5,73,0,0,628,630,5,12,0,0,629,631,3,72,36,0,630,629,1,0,0,0,
630,631,1,0,0,0,631,632,1,0,0,0,632,655,5,13,0,0,633,634,5,73,0,0,634,635,
5,50,0,0,635,636,5,73,0,0,636,638,5,12,0,0,637,639,3,72,36,0,638,637,1,0,
0,0,638,639,1,0,0,0,639,640,1,0,0,0,640,655,5,13,0,0,641,642,5,73,0,0,642,
643,5,41,0,0,643,644,3,46,23,0,644,645,5,42,0,0,645,655,1,0,0,0,646,647,
5,73,0,0,647,648,5,50,0,0,648,655,3,26,13,0,649,655,5,73,0,0,650,651,5,12,
0,0,651,652,3,46,23,0,652,653,5,13,0,0,653,655,1,0,0,0,654,606,1,0,0,0,654,
607,1,0,0,0,654,608,1,0,0,0,654,609,1,0,0,0,654,610,1,0,0,0,654,611,1,0,
0,0,654,612,1,0,0,0,654,613,1,0,0,0,654,614,1,0,0,0,654,621,1,0,0,0,654,
624,1,0,0,0,654,627,1,0,0,0,654,633,1,0,0,0,654,641,1,0,0,0,654,646,1,0,
0,0,654,649,1,0,0,0,654,650,1,0,0,0,655,71,1,0,0,0,656,661,3,46,23,0,657,
658,5,20,0,0,658,660,3,46,23,0,659,657,1,0,0,0,660,663,1,0,0,0,661,659,1,
0,0,0,661,662,1,0,0,0,662,73,1,0,0,0,663,661,1,0,0,0,664,665,7,7,0,0,665,
75,1,0,0,0,65,79,86,91,105,124,141,150,157,167,171,179,186,191,197,200,209,
219,227,234,239,245,248,258,265,270,276,279,290,300,315,323,345,352,360,
365,368,390,396,402,409,414,420,423,470,481,485,489,497,501,511,524,532,
540,548,556,564,572,580,588,596,604,630,638,654,661];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class HopperParser extends antlr4.Parser {

    static grammarFileName = "Hopper.g4";
    static literalNames = [ null, "'import'", "'bind'", "'to'", "'::'", 
                            "'address'", "'entry'", "'='", "'const'", "'alias'", 
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
	        while(_la===74) {
	            this.state = 76;
	            this.match(HopperParser.NEWLINE);
	            this.state = 81;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 91;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 4476742) !== 0)) {
	            this.state = 82;
	            this.topLevelDecl();
	            this.state = 86;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===74) {
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
	        case 10:
	        case 11:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 96;
	            this.functionDecl();
	            break;
	        case 14:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 97;
	            this.structDecl();
	            break;
	        case 22:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 98;
	            this.classDecl();
	            break;
	        case 18:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 99;
	            this.templateDecl();
	            break;
	        case 8:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 100;
	            this.constDecl();
	            break;
	        case 1:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 101;
	            this.importDecl();
	            break;
	        case 9:
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
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
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
	        this.state = 124;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,4,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new EntryBlockContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 117;
	            this.match(HopperParser.T__5);
	            this.state = 118;
	            this.match(HopperParser.Identifier);
	            this.state = 119;
	            this.block();
	            break;

	        case 2:
	            localctx = new EntryAddrContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 120;
	            this.match(HopperParser.T__5);
	            this.state = 121;
	            this.match(HopperParser.Identifier);
	            this.state = 122;
	            this.match(HopperParser.T__6);
	            this.state = 123;
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
	        this.state = 126;
	        this.match(HopperParser.T__7);
	        this.state = 127;
	        this.match(HopperParser.Identifier);
	        this.state = 128;
	        this.match(HopperParser.T__6);
	        this.state = 129;
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
	        this.state = 131;
	        this.match(HopperParser.T__8);
	        this.state = 132;
	        this.match(HopperParser.Identifier);
	        this.state = 133;
	        this.match(HopperParser.T__6);
	        this.state = 134;
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
	        this.state = 171;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,9,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ExternFuncDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 136;
	            this.match(HopperParser.T__9);
	            this.state = 137;
	            this.match(HopperParser.T__10);
	            this.state = 138;
	            this.match(HopperParser.Identifier);
	            this.state = 139;
	            this.match(HopperParser.T__11);
	            this.state = 141;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5 || ((((_la - 43)) & ~0x1f) === 0 && ((1 << (_la - 43)) & 1073741951) !== 0)) {
	                this.state = 140;
	                this.externParamList();
	            }

	            this.state = 143;
	            this.match(HopperParser.T__12);
	            this.state = 144;
	            this.type();
	            break;

	        case 2:
	            localctx = new ExternProcDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
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
	            break;

	        case 3:
	            localctx = new FuncDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 153;
	            this.match(HopperParser.T__10);
	            this.state = 154;
	            this.match(HopperParser.Identifier);
	            this.state = 155;
	            this.match(HopperParser.T__11);
	            this.state = 157;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5 || ((((_la - 44)) & ~0x1f) === 0 && ((1 << (_la - 44)) & 536870975) !== 0)) {
	                this.state = 156;
	                this.paramList();
	            }

	            this.state = 159;
	            this.match(HopperParser.T__12);
	            this.state = 160;
	            this.type();
	            this.state = 161;
	            this.block();
	            break;

	        case 4:
	            localctx = new ProcDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 163;
	            this.match(HopperParser.T__10);
	            this.state = 164;
	            this.match(HopperParser.Identifier);
	            this.state = 165;
	            this.match(HopperParser.T__11);
	            this.state = 167;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5 || ((((_la - 44)) & ~0x1f) === 0 && ((1 << (_la - 44)) & 536870975) !== 0)) {
	                this.state = 166;
	                this.paramList();
	            }

	            this.state = 169;
	            this.match(HopperParser.T__12);
	            this.state = 170;
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
	        this.state = 173;
	        this.match(HopperParser.T__13);
	        this.state = 174;
	        this.match(HopperParser.Identifier);
	        this.state = 175;
	        this.match(HopperParser.T__14);
	        this.state = 179;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===74) {
	            this.state = 176;
	            this.match(HopperParser.NEWLINE);
	            this.state = 181;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 200;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===5 || _la===17 || ((((_la - 44)) & ~0x1f) === 0 && ((1 << (_la - 44)) & 536870975) !== 0)) {
	            this.state = 182;
	            this.structMember();
	            this.state = 191;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,12,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 184; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    do {
	                        this.state = 183;
	                        this.match(HopperParser.NEWLINE);
	                        this.state = 186; 
	                        this._errHandler.sync(this);
	                        _la = this._input.LA(1);
	                    } while(_la===74);
	                    this.state = 188;
	                    this.structMember(); 
	                }
	                this.state = 193;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,12,this._ctx);
	            }

	            this.state = 197;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===74) {
	                this.state = 194;
	                this.match(HopperParser.NEWLINE);
	                this.state = 199;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 202;
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
	    this.enterRule(localctx, 18, HopperParser.RULE_structMember);
	    try {
	        this.state = 209;
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
	            this.state = 204;
	            this.type();
	            this.state = 205;
	            this.fieldName();
	            break;
	        case 17:
	            localctx = new StructPadContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 207;
	            this.match(HopperParser.T__16);
	            this.state = 208;
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
	        this.state = 211;
	        this.match(HopperParser.T__17);
	        this.state = 212;
	        this.match(HopperParser.Identifier);
	        this.state = 213;
	        this.match(HopperParser.T__18);
	        this.state = 214;
	        this.match(HopperParser.Identifier);
	        this.state = 219;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===20) {
	            this.state = 215;
	            this.match(HopperParser.T__19);
	            this.state = 216;
	            this.match(HopperParser.Identifier);
	            this.state = 221;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 222;
	        this.match(HopperParser.T__20);
	        this.state = 223;
	        this.match(HopperParser.T__14);
	        this.state = 227;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===74) {
	            this.state = 224;
	            this.match(HopperParser.NEWLINE);
	            this.state = 229;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 248;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 58722336) !== 0) || ((((_la - 44)) & ~0x1f) === 0 && ((1 << (_la - 44)) & 536870975) !== 0)) {
	            this.state = 230;
	            this.classMember();
	            this.state = 239;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,19,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 232; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    do {
	                        this.state = 231;
	                        this.match(HopperParser.NEWLINE);
	                        this.state = 234; 
	                        this._errHandler.sync(this);
	                        _la = this._input.LA(1);
	                    } while(_la===74);
	                    this.state = 236;
	                    this.classMember(); 
	                }
	                this.state = 241;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,19,this._ctx);
	            }

	            this.state = 245;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===74) {
	                this.state = 242;
	                this.match(HopperParser.NEWLINE);
	                this.state = 247;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 250;
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
	    this.enterRule(localctx, 22, HopperParser.RULE_classDecl);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 252;
	        this.match(HopperParser.T__21);
	        this.state = 253;
	        this.match(HopperParser.Identifier);
	        this.state = 254;
	        this.match(HopperParser.T__14);
	        this.state = 258;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===74) {
	            this.state = 255;
	            this.match(HopperParser.NEWLINE);
	            this.state = 260;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 279;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 58722336) !== 0) || ((((_la - 44)) & ~0x1f) === 0 && ((1 << (_la - 44)) & 536870975) !== 0)) {
	            this.state = 261;
	            this.classMember();
	            this.state = 270;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,24,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 263; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    do {
	                        this.state = 262;
	                        this.match(HopperParser.NEWLINE);
	                        this.state = 265; 
	                        this._errHandler.sync(this);
	                        _la = this._input.LA(1);
	                    } while(_la===74);
	                    this.state = 267;
	                    this.classMember(); 
	                }
	                this.state = 272;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,24,this._ctx);
	            }

	            this.state = 276;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===74) {
	                this.state = 273;
	                this.match(HopperParser.NEWLINE);
	                this.state = 278;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 281;
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
	    this.enterRule(localctx, 24, HopperParser.RULE_classMember);
	    var _la = 0;
	    try {
	        this.state = 323;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,30,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ClassFieldContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 283;
	            this.type();
	            this.state = 284;
	            this.fieldName();
	            break;

	        case 2:
	            localctx = new ClassMethodContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 286;
	            this.match(HopperParser.T__10);
	            this.state = 287;
	            this.match(HopperParser.Identifier);
	            this.state = 288;
	            this.match(HopperParser.T__11);
	            this.state = 290;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5 || ((((_la - 44)) & ~0x1f) === 0 && ((1 << (_la - 44)) & 536870975) !== 0)) {
	                this.state = 289;
	                this.paramList();
	            }

	            this.state = 292;
	            this.match(HopperParser.T__12);
	            this.state = 293;
	            this.type();
	            this.state = 294;
	            this.block();
	            break;

	        case 3:
	            localctx = new ClassProcMethodContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 296;
	            this.match(HopperParser.T__10);
	            this.state = 297;
	            this.match(HopperParser.Identifier);
	            this.state = 298;
	            this.match(HopperParser.T__11);
	            this.state = 300;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5 || ((((_la - 44)) & ~0x1f) === 0 && ((1 << (_la - 44)) & 536870975) !== 0)) {
	                this.state = 299;
	                this.paramList();
	            }

	            this.state = 302;
	            this.match(HopperParser.T__12);
	            this.state = 303;
	            this.block();
	            break;

	        case 4:
	            localctx = new ClassOperatorContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 304;
	            this.match(HopperParser.T__22);
	            this.state = 305;
	            this.operatorSymbol();
	            this.state = 306;
	            this.match(HopperParser.T__11);
	            this.state = 307;
	            this.param();
	            this.state = 308;
	            this.match(HopperParser.T__12);
	            this.state = 309;
	            this.type();
	            this.state = 310;
	            this.block();
	            break;

	        case 5:
	            localctx = new ClassConstructorContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 312;
	            this.match(HopperParser.T__23);
	            this.state = 313;
	            this.match(HopperParser.T__11);
	            this.state = 315;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5 || ((((_la - 44)) & ~0x1f) === 0 && ((1 << (_la - 44)) & 536870975) !== 0)) {
	                this.state = 314;
	                this.paramList();
	            }

	            this.state = 317;
	            this.match(HopperParser.T__12);
	            this.state = 318;
	            this.block();
	            break;

	        case 6:
	            localctx = new ClassDestructorContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 319;
	            this.match(HopperParser.T__24);
	            this.state = 320;
	            this.match(HopperParser.T__11);
	            this.state = 321;
	            this.match(HopperParser.T__12);
	            this.state = 322;
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
	        this.state = 325;
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
	    this.enterRule(localctx, 28, HopperParser.RULE_operatorSymbol);
	    try {
	        this.state = 345;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 27:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 327;
	            this.match(HopperParser.T__26);
	            break;
	        case 28:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 328;
	            this.match(HopperParser.T__27);
	            break;
	        case 29:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 329;
	            this.match(HopperParser.T__28);
	            break;
	        case 30:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 330;
	            this.match(HopperParser.T__29);
	            break;
	        case 31:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 331;
	            this.match(HopperParser.T__30);
	            break;
	        case 32:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 332;
	            this.match(HopperParser.T__31);
	            break;
	        case 33:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 333;
	            this.match(HopperParser.T__32);
	            break;
	        case 19:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 334;
	            this.match(HopperParser.T__18);
	            break;
	        case 34:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 335;
	            this.match(HopperParser.T__33);
	            break;
	        case 21:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 336;
	            this.match(HopperParser.T__20);
	            break;
	        case 35:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 337;
	            this.match(HopperParser.T__34);
	            break;
	        case 36:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 338;
	            this.match(HopperParser.T__35);
	            break;
	        case 37:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 339;
	            this.match(HopperParser.T__36);
	            break;
	        case 38:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 340;
	            this.match(HopperParser.T__37);
	            break;
	        case 39:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 341;
	            this.match(HopperParser.T__38);
	            break;
	        case 40:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 342;
	            this.match(HopperParser.T__39);
	            break;
	        case 41:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 343;
	            this.match(HopperParser.T__40);
	            this.state = 344;
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
	    this.enterRule(localctx, 30, HopperParser.RULE_paramList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 347;
	        this.param();
	        this.state = 352;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===20) {
	            this.state = 348;
	            this.match(HopperParser.T__19);
	            this.state = 349;
	            this.param();
	            this.state = 354;
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
	        this.state = 368;
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
	            this.state = 355;
	            this.param();
	            this.state = 360;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,33,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 356;
	                    this.match(HopperParser.T__19);
	                    this.state = 357;
	                    this.param(); 
	                }
	                this.state = 362;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,33,this._ctx);
	            }

	            this.state = 365;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===20) {
	                this.state = 363;
	                this.match(HopperParser.T__19);
	                this.state = 364;
	                this.match(HopperParser.T__42);
	            }

	            break;
	        case 43:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 367;
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
	    this.enterRule(localctx, 34, HopperParser.RULE_param);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 370;
	        this.type();
	        this.state = 371;
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
	        this.state = 396;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,37,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 373;
	            this.match(HopperParser.T__43);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 374;
	            this.match(HopperParser.T__44);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 375;
	            this.match(HopperParser.T__45);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 376;
	            this.match(HopperParser.T__46);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 377;
	            this.match(HopperParser.T__47);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 378;
	            this.match(HopperParser.T__4);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 379;
	            this.match(HopperParser.T__48);
	            this.state = 380;
	            this.match(HopperParser.T__43);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 381;
	            this.match(HopperParser.T__48);
	            this.state = 382;
	            this.match(HopperParser.T__46);
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 383;
	            this.match(HopperParser.Identifier);
	            this.state = 384;
	            this.match(HopperParser.T__18);
	            this.state = 385;
	            this.type();
	            this.state = 390;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===20) {
	                this.state = 386;
	                this.match(HopperParser.T__19);
	                this.state = 387;
	                this.type();
	                this.state = 392;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	            this.state = 393;
	            this.match(HopperParser.T__20);
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 395;
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
	        this.state = 398;
	        this.match(HopperParser.T__14);
	        this.state = 402;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===74) {
	            this.state = 399;
	            this.match(HopperParser.NEWLINE);
	            this.state = 404;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 423;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if((((_la) & ~0x1f) === 0 && ((1 << _la) & 268439584) !== 0) || ((((_la - 44)) & ~0x1f) === 0 && ((1 << (_la - 44)) & 1073542847) !== 0)) {
	            this.state = 405;
	            this.statement();
	            this.state = 414;
	            this._errHandler.sync(this);
	            var _alt = this._interp.adaptivePredict(this._input,40,this._ctx)
	            while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	                if(_alt===1) {
	                    this.state = 407; 
	                    this._errHandler.sync(this);
	                    _la = this._input.LA(1);
	                    do {
	                        this.state = 406;
	                        this.match(HopperParser.NEWLINE);
	                        this.state = 409; 
	                        this._errHandler.sync(this);
	                        _la = this._input.LA(1);
	                    } while(_la===74);
	                    this.state = 411;
	                    this.statement(); 
	                }
	                this.state = 416;
	                this._errHandler.sync(this);
	                _alt = this._interp.adaptivePredict(this._input,40,this._ctx);
	            }

	            this.state = 420;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            while(_la===74) {
	                this.state = 417;
	                this.match(HopperParser.NEWLINE);
	                this.state = 422;
	                this._errHandler.sync(this);
	                _la = this._input.LA(1);
	            }
	        }

	        this.state = 425;
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
	    this.enterRule(localctx, 40, HopperParser.RULE_statement);
	    var _la = 0;
	    try {
	        this.state = 501;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,48,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ArrayDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 427;
	            this.type();
	            this.state = 428;
	            this.match(HopperParser.Identifier);
	            this.state = 429;
	            this.match(HopperParser.T__40);
	            this.state = 430;
	            this.match(HopperParser.IntegerLiteral);
	            this.state = 431;
	            this.match(HopperParser.T__41);
	            break;

	        case 2:
	            localctx = new VarDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 433;
	            this.type();
	            this.state = 434;
	            this.match(HopperParser.Identifier);
	            this.state = 435;
	            this.match(HopperParser.T__6);
	            this.state = 436;
	            this.expression();
	            break;

	        case 3:
	            localctx = new VarDeclNoInitContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 438;
	            this.type();
	            this.state = 439;
	            this.match(HopperParser.Identifier);
	            break;

	        case 4:
	            localctx = new ArrayAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 4);
	            this.state = 441;
	            this.match(HopperParser.Identifier);
	            this.state = 442;
	            this.match(HopperParser.T__40);
	            this.state = 443;
	            this.expression();
	            this.state = 444;
	            this.match(HopperParser.T__41);
	            this.state = 445;
	            this.match(HopperParser.T__6);
	            this.state = 446;
	            this.expression();
	            break;

	        case 5:
	            localctx = new AssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 5);
	            this.state = 448;
	            this.match(HopperParser.Identifier);
	            this.state = 449;
	            this.match(HopperParser.T__6);
	            this.state = 450;
	            this.expression();
	            break;

	        case 6:
	            localctx = new FieldAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 6);
	            this.state = 451;
	            this.match(HopperParser.Identifier);
	            this.state = 452;
	            this.match(HopperParser.T__49);
	            this.state = 453;
	            this.fieldName();
	            this.state = 454;
	            this.match(HopperParser.T__6);
	            this.state = 455;
	            this.expression();
	            break;

	        case 7:
	            localctx = new DerefAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 7);
	            this.state = 457;
	            this.match(HopperParser.Identifier);
	            this.state = 458;
	            this.match(HopperParser.T__3);
	            this.state = 459;
	            this.match(HopperParser.T__25);
	            this.state = 460;
	            this.match(HopperParser.T__6);
	            this.state = 461;
	            this.expression();
	            break;

	        case 8:
	            localctx = new ExprStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 8);
	            this.state = 462;
	            this.expression();
	            break;

	        case 9:
	            localctx = new IfStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 9);
	            this.state = 463;
	            this.match(HopperParser.T__50);
	            this.state = 464;
	            this.match(HopperParser.T__11);
	            this.state = 465;
	            this.expression();
	            this.state = 466;
	            this.match(HopperParser.T__12);
	            this.state = 467;
	            this.block();
	            this.state = 470;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===52) {
	                this.state = 468;
	                this.match(HopperParser.T__51);
	                this.state = 469;
	                this.block();
	            }

	            break;

	        case 10:
	            localctx = new WhileStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 10);
	            this.state = 472;
	            this.match(HopperParser.T__52);
	            this.state = 473;
	            this.match(HopperParser.T__11);
	            this.state = 474;
	            this.expression();
	            this.state = 475;
	            this.match(HopperParser.T__12);
	            this.state = 476;
	            this.block();
	            break;

	        case 11:
	            localctx = new ForStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 11);
	            this.state = 478;
	            this.match(HopperParser.T__53);
	            this.state = 479;
	            this.match(HopperParser.T__11);
	            this.state = 481;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===5 || ((((_la - 44)) & ~0x1f) === 0 && ((1 << (_la - 44)) & 536870975) !== 0)) {
	                this.state = 480;
	                this.forInit();
	            }

	            this.state = 483;
	            this.match(HopperParser.T__54);
	            this.state = 485;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===12 || _la===28 || ((((_la - 62)) & ~0x1f) === 0 && ((1 << (_la - 62)) & 4095) !== 0)) {
	                this.state = 484;
	                this.expression();
	            }

	            this.state = 487;
	            this.match(HopperParser.T__54);
	            this.state = 489;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===73) {
	                this.state = 488;
	                this.forUpdate();
	            }

	            this.state = 491;
	            this.match(HopperParser.T__12);
	            this.state = 492;
	            this.block();
	            break;

	        case 12:
	            localctx = new BreakStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 12);
	            this.state = 493;
	            this.match(HopperParser.T__55);
	            break;

	        case 13:
	            localctx = new ContinueStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 13);
	            this.state = 494;
	            this.match(HopperParser.T__56);
	            break;

	        case 14:
	            localctx = new ReturnStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 14);
	            this.state = 495;
	            this.match(HopperParser.T__57);
	            this.state = 497;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===12 || _la===28 || ((((_la - 62)) & ~0x1f) === 0 && ((1 << (_la - 62)) & 4095) !== 0)) {
	                this.state = 496;
	                this.expression();
	            }

	            break;

	        case 15:
	            localctx = new DeferStmtContext(this, localctx);
	            this.enterOuterAlt(localctx, 15);
	            this.state = 499;
	            this.match(HopperParser.T__58);
	            this.state = 500;
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
	        this.state = 511;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,49,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new ForInitDeclContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 503;
	            this.type();
	            this.state = 504;
	            this.match(HopperParser.Identifier);
	            this.state = 505;
	            this.match(HopperParser.T__6);
	            this.state = 506;
	            this.expression();
	            break;

	        case 2:
	            localctx = new ForInitAssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 508;
	            this.match(HopperParser.Identifier);
	            this.state = 509;
	            this.match(HopperParser.T__6);
	            this.state = 510;
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
	        this.state = 513;
	        this.match(HopperParser.Identifier);
	        this.state = 514;
	        this.match(HopperParser.T__6);
	        this.state = 515;
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
	        this.state = 517;
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
	        this.state = 519;
	        this.logicalAnd();
	        this.state = 524;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===60) {
	            this.state = 520;
	            this.match(HopperParser.T__59);
	            this.state = 521;
	            this.logicalAnd();
	            this.state = 526;
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
	        this.state = 527;
	        this.bitwiseOr();
	        this.state = 532;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===61) {
	            this.state = 528;
	            this.match(HopperParser.T__60);
	            this.state = 529;
	            this.bitwiseOr();
	            this.state = 534;
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
	        this.state = 535;
	        this.bitwiseXor();
	        this.state = 540;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===37) {
	            this.state = 536;
	            this.match(HopperParser.T__36);
	            this.state = 537;
	            this.bitwiseXor();
	            this.state = 542;
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
	        this.state = 543;
	        this.bitwiseAnd();
	        this.state = 548;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===38) {
	            this.state = 544;
	            this.match(HopperParser.T__37);
	            this.state = 545;
	            this.bitwiseAnd();
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



	bitwiseAnd() {
	    let localctx = new BitwiseAndContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 56, HopperParser.RULE_bitwiseAnd);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 551;
	        this.equality();
	        this.state = 556;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===36) {
	            this.state = 552;
	            this.match(HopperParser.T__35);
	            this.state = 553;
	            this.equality();
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



	equality() {
	    let localctx = new EqualityContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 58, HopperParser.RULE_equality);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 559;
	        this.relational();
	        this.state = 564;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===32 || _la===33) {
	            this.state = 560;
	            _la = this._input.LA(1);
	            if(!(_la===32 || _la===33)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 561;
	            this.relational();
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



	relational() {
	    let localctx = new RelationalContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 60, HopperParser.RULE_relational);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 567;
	        this.shift();
	        this.state = 572;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(((((_la - 19)) & ~0x1f) === 0 && ((1 << (_la - 19)) & 98309) !== 0)) {
	            this.state = 568;
	            _la = this._input.LA(1);
	            if(!(((((_la - 19)) & ~0x1f) === 0 && ((1 << (_la - 19)) & 98309) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 569;
	            this.shift();
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



	shift() {
	    let localctx = new ShiftContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 62, HopperParser.RULE_shift);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 575;
	        this.additive();
	        this.state = 580;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===39 || _la===40) {
	            this.state = 576;
	            _la = this._input.LA(1);
	            if(!(_la===39 || _la===40)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 577;
	            this.additive();
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



	additive() {
	    let localctx = new AdditiveContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 64, HopperParser.RULE_additive);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 583;
	        this.multiplicative();
	        this.state = 588;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===27 || _la===28) {
	            this.state = 584;
	            _la = this._input.LA(1);
	            if(!(_la===27 || _la===28)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 585;
	            this.multiplicative();
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



	multiplicative() {
	    let localctx = new MultiplicativeContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 66, HopperParser.RULE_multiplicative);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 591;
	        this.unary();
	        this.state = 596;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while((((_la) & ~0x1f) === 0 && ((1 << _la) & 3758096384) !== 0)) {
	            this.state = 592;
	            _la = this._input.LA(1);
	            if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 3758096384) !== 0))) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 593;
	            this.unary();
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



	unary() {
	    let localctx = new UnaryContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 68, HopperParser.RULE_unary);
	    var _la = 0;
	    try {
	        this.state = 604;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 28:
	        case 62:
	        case 63:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 599;
	            _la = this._input.LA(1);
	            if(!(_la===28 || _la===62 || _la===63)) {
	            this._errHandler.recoverInline(this);
	            }
	            else {
	            	this._errHandler.reportMatch(this);
	                this.consume();
	            }
	            this.state = 600;
	            this.unary();
	            break;
	        case 64:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 601;
	            this.match(HopperParser.T__63);
	            this.state = 602;
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
	            this.state = 603;
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
	        this.state = 654;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,63,this._ctx);
	        switch(la_) {
	        case 1:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 606;
	            this.match(HopperParser.IntegerLiteral);
	            break;

	        case 2:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 607;
	            this.match(HopperParser.HexLiteral);
	            break;

	        case 3:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 608;
	            this.match(HopperParser.FloatLiteral);
	            break;

	        case 4:
	            this.enterOuterAlt(localctx, 4);
	            this.state = 609;
	            this.match(HopperParser.StringLiteral);
	            break;

	        case 5:
	            this.enterOuterAlt(localctx, 5);
	            this.state = 610;
	            this.match(HopperParser.CharLiteral);
	            break;

	        case 6:
	            this.enterOuterAlt(localctx, 6);
	            this.state = 611;
	            this.match(HopperParser.T__64);
	            break;

	        case 7:
	            this.enterOuterAlt(localctx, 7);
	            this.state = 612;
	            this.match(HopperParser.T__65);
	            break;

	        case 8:
	            this.enterOuterAlt(localctx, 8);
	            this.state = 613;
	            this.match(HopperParser.T__66);
	            break;

	        case 9:
	            this.enterOuterAlt(localctx, 9);
	            this.state = 614;
	            this.match(HopperParser.Identifier);
	            this.state = 615;
	            this.match(HopperParser.T__40);
	            this.state = 616;
	            this.expression();
	            this.state = 617;
	            this.match(HopperParser.T__41);
	            this.state = 618;
	            this.match(HopperParser.T__3);
	            this.state = 619;
	            this.match(HopperParser.T__4);
	            break;

	        case 10:
	            this.enterOuterAlt(localctx, 10);
	            this.state = 621;
	            this.match(HopperParser.Identifier);
	            this.state = 622;
	            this.match(HopperParser.T__3);
	            this.state = 623;
	            this.match(HopperParser.T__4);
	            break;

	        case 11:
	            this.enterOuterAlt(localctx, 11);
	            this.state = 624;
	            this.match(HopperParser.Identifier);
	            this.state = 625;
	            this.match(HopperParser.T__3);
	            this.state = 626;
	            this.match(HopperParser.T__25);
	            break;

	        case 12:
	            this.enterOuterAlt(localctx, 12);
	            this.state = 627;
	            this.match(HopperParser.Identifier);
	            this.state = 628;
	            this.match(HopperParser.T__11);
	            this.state = 630;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===12 || _la===28 || ((((_la - 62)) & ~0x1f) === 0 && ((1 << (_la - 62)) & 4095) !== 0)) {
	                this.state = 629;
	                this.argList();
	            }

	            this.state = 632;
	            this.match(HopperParser.T__12);
	            break;

	        case 13:
	            this.enterOuterAlt(localctx, 13);
	            this.state = 633;
	            this.match(HopperParser.Identifier);
	            this.state = 634;
	            this.match(HopperParser.T__49);
	            this.state = 635;
	            this.match(HopperParser.Identifier);
	            this.state = 636;
	            this.match(HopperParser.T__11);
	            this.state = 638;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	            if(_la===12 || _la===28 || ((((_la - 62)) & ~0x1f) === 0 && ((1 << (_la - 62)) & 4095) !== 0)) {
	                this.state = 637;
	                this.argList();
	            }

	            this.state = 640;
	            this.match(HopperParser.T__12);
	            break;

	        case 14:
	            this.enterOuterAlt(localctx, 14);
	            this.state = 641;
	            this.match(HopperParser.Identifier);
	            this.state = 642;
	            this.match(HopperParser.T__40);
	            this.state = 643;
	            this.expression();
	            this.state = 644;
	            this.match(HopperParser.T__41);
	            break;

	        case 15:
	            this.enterOuterAlt(localctx, 15);
	            this.state = 646;
	            this.match(HopperParser.Identifier);
	            this.state = 647;
	            this.match(HopperParser.T__49);
	            this.state = 648;
	            this.fieldName();
	            break;

	        case 16:
	            this.enterOuterAlt(localctx, 16);
	            this.state = 649;
	            this.match(HopperParser.Identifier);
	            break;

	        case 17:
	            this.enterOuterAlt(localctx, 17);
	            this.state = 650;
	            this.match(HopperParser.T__11);
	            this.state = 651;
	            this.expression();
	            this.state = 652;
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
	    this.enterRule(localctx, 72, HopperParser.RULE_argList);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 656;
	        this.expression();
	        this.state = 661;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===20) {
	            this.state = 657;
	            this.match(HopperParser.T__19);
	            this.state = 658;
	            this.expression();
	            this.state = 663;
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
	        this.state = 664;
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
