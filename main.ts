import{readdirSync as A,readFileSync as B,mkdirSync as C,writeFileSync as D}from"node:fs";
const T='0Aa46:;?oooooooo999999959995999o999oooooooooooooPTTP0ooooooooooo58oooooooooooooo4414';
function R(p,q){
let S=new Int32Array(256),K=S.slice(0,64),M=S.slice(),O=Buffer.alloc(65536),L=0,s=0,k=0,i=0,x=0,t=0,a,b;
const F=e=>{throw[O.slice(0,L),e]};
try{for(;;){
if(t==1e6)F(10);
if(x<0||x>=p.length)F(9);
let o=p[x],v=T.charCodeAt(o)-48;
if(!(v<63))F(5);
let m=+"0124"[v>>4],u=(v>>2)&3,g=v&3;
if(x+m>=p.length)F(9);
t++;
let y=x+1+m;
if(s<u)F(2);
if(s-u+g>256)F(3);
x=y;
if(!o)F(0);
else if(o==23||o==27)S[s-1]=o<24?-S[s-1]:~S[s-1];
else if(o>15&&o<35){b=S[s-1],a=S[s-2],m=a>>>0,u=b>>>0;
if(o>18&&o<23&&!b)F(4);
let r=[a+b,a-b,Math.imul(a,b),a/b,a%b,m/u,m%u,0,a&b,a|b,a^b,0,a<<b,a>>b,a>>>b,0,a==b|0,a<b|0,m<u|0][o-16];
s-=2;S[s++]=r;}
else if(o==1)S[s++]=p[y-1]<<24>>24;
else if(o==2)S[s++]=p[y-4]|p[y-3]<<8|p[y-2]<<16|p[y-1]<<24;
else if(o==3)s--;
else if(o==4||o==6)S[s]=S[s-(o==4?1:2)],s++;
else if(o==5)a=S[s-1],S[s-1]=S[s-2],S[s-2]=a;
else if(o==7)a=S[s-3],S[s-3]=S[s-2],S[s-2]=S[s-1],S[s-1]=a;
else if(o>47&&o<51)a=(p[y-2]|p[y-1]<<8)<<16>>16,o==48||S[--s]==0==(o<50)?x=y+a:0;
else if(o==51)k==64?F(7):(K[k++]=y,x=p[y-2]|p[y-1]<<8);
else if(o==52)k?x=K[--k]:F(8);
else if(o>63&&o<66)a=S[s-1],a>>>8?F(6):o==64?S[s-1]=M[a]:(s-=2,M[a]=S[s]);
else if(o==80)g=""+S[s-1],L+g.length>65536?F(11):(L+=O.write(g,L),s--);
else if(o==81)L>65535?F(11):O[L++]=S[--s]&255;
else if(o==82)S[s++]=i<q.length?q[i++]:-1;
else F(S[--s]&255);
}}catch(r){return r}
}
const{MAKEFUN_INPUT_DIR:I="/input",MAKEFUN_OUTPUT_DIR:O="/output"}=process.env;
for(const d of A(I)){let P=I+"/"+d+"/",Q=O+"/"+d+"/",r=R(B(P+"program.bin"),B(P+"input.bin"));C(Q,{recursive:true});D(Q+"stdout.bin",r[0]);D(Q+"exit.txt",r[1]+"");}
