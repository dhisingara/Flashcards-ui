(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[988],{9133:function(e,t,n){Promise.resolve().then(n.bind(n,4371))},8690:function(e,t){"use strict";t.Z={meEndpoint:"/auth/me",loginEndpoint:"/auth/login",registerEndpoint:"/user/register",storageTokenKeyName:"accessToken",onTokenExpiration:"refreshToken"}},7476:function(e,t,n){"use strict";n.d(t,{H:function(){return u},V:function(){return c}});var o=n(9268),r=n(6006),a=n(6008),i=n(4214),s=n(8690);let l={user:null,loading:!0,setUser:()=>null,setLoading:()=>Boolean,login:()=>Promise.resolve(),logout:()=>Promise.resolve(),register:()=>Promise.resolve()},c=(0,r.createContext)(l),u=e=>{let{children:t}=e,[n,u]=(0,r.useState)(l.user),[d,h]=(0,r.useState)(l.loading),g=(0,a.useRouter)(),m=(0,a.usePathname)();(0,r.useEffect)(()=>{let e=async()=>{let e=window.localStorage.getItem(s.Z.storageTokenKeyName);e?(h(!0),await i.Z.get("http://localhost:3333/api"+s.Z.meEndpoint,{headers:{Authorization:e}}).then(async e=>{h(!1),u({...e.data})}).catch(()=>{localStorage.removeItem("userData"),localStorage.removeItem("refreshToken"),localStorage.removeItem("accessToken"),u(null),h(!1),"logout"!==s.Z.onTokenExpiration||m.includes("login")||g.replace("/login")})):h(!1)};e()},[]);let p=(e,t)=>{i.Z.post("http://localhost:3333/api"+s.Z.loginEndpoint,e).then(async t=>{e.rememberMe&&window.localStorage.setItem(s.Z.storageTokenKeyName,t.data.accessToken),u({...t.data.userData}),e.rememberMe&&window.localStorage.setItem("userData",JSON.stringify(t.data.userData)),g.replace("/practice")}).catch(e=>{t&&t(e)})};return(0,o.jsx)(c.Provider,{value:{user:n,loading:d,setUser:u,setLoading:h,login:p,logout:()=>{u(null),window.localStorage.removeItem("userData"),window.localStorage.removeItem(s.Z.storageTokenKeyName),g.push("/login")},register:(e,t)=>{i.Z.post("http://localhost:3333/api"+s.Z.registerEndpoint,e).then(n=>{n.data.error?t&&t(n.data.error):p({email:e.email,password:e.password})}).catch(e=>t?t(e):null)}},children:t})}},529:function(e,t,n){"use strict";var o=n(9268),r=n(6487),a=n(1771);let i=(0,r.ZP)(a.Z)(e=>{let{theme:t}=e;return{height:"100vh","& .content-center":{display:"flex",minHeight:"100vh",alignItems:"center",justifyContent:"center",padding:t.spacing(5)},"& .content-right":{display:"flex",minHeight:"100vh",overflowX:"hidden",position:"relative"}}});t.Z=e=>{let{children:t}=e;return(0,o.jsx)(i,{className:"layout-wrapper",children:(0,o.jsx)(a.Z,{className:"app-content",sx:{overflow:"hidden",minHeight:"100vh",position:"relative"},children:t})})}},4371:function(e,t,n){"use strict";n.r(t);var o=n(9268),r=n(7476),a=n(529);t.default=e=>{let{children:t}=e;return(0,o.jsx)("html",{lang:"en",children:(0,o.jsx)("body",{children:(0,o.jsx)(r.H,{children:(0,o.jsx)(a.Z,{children:t})})})})}},6008:function(e,t,n){e.exports=n(4e3)}},function(e){e.O(0,[71,253,698,744],function(){return e(e.s=9133)}),_N_E=e.O()}]);