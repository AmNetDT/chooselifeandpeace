(()=>{var e={};e.id=912,e.ids=[912],e.modules={72934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},54580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},45869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},20399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},78893:e=>{"use strict";e.exports=require("buffer")},84770:e=>{"use strict";e.exports=require("crypto")},17702:e=>{"use strict";e.exports=require("events")},92048:e=>{"use strict";e.exports=require("fs")},32615:e=>{"use strict";e.exports=require("http")},35240:e=>{"use strict";e.exports=require("https")},98216:e=>{"use strict";e.exports=require("net")},19801:e=>{"use strict";e.exports=require("os")},55315:e=>{"use strict";e.exports=require("path")},76162:e=>{"use strict";e.exports=require("stream")},82452:e=>{"use strict";e.exports=require("tls")},17360:e=>{"use strict";e.exports=require("url")},71568:e=>{"use strict";e.exports=require("zlib")},72254:e=>{"use strict";e.exports=require("node:buffer")},6005:e=>{"use strict";e.exports=require("node:crypto")},47261:e=>{"use strict";e.exports=require("node:util")},93739:()=>{},52627:(e,t,r)=>{"use strict";r.r(t),r.d(t,{originalPathname:()=>f,patchFetch:()=>m,requestAsyncStorage:()=>d,routeModule:()=>l,serverHooks:()=>p,staticGenerationAsyncStorage:()=>c});var s={};r.r(s),r.d(s,{GET:()=>a,POST:()=>u});var i=r(73278),o=r(45002),n=r(54877);let{GET:a,POST:u}=r(1779).handlers,l=new i.AppRouteRouteModule({definition:{kind:o.x.APP_ROUTE,page:"/api/auth/[...nextauth]/route",pathname:"/api/auth/[...nextauth]",filename:"route",bundlePath:"app/api/auth/[...nextauth]/route"},resolvedPagePath:"/Users/obadosunmu/Documents/newcommerce/chooselifeandpeace/app/api/auth/[...nextauth]/route.ts",nextConfigOutput:"",userland:s}),{requestAsyncStorage:d,staticGenerationAsyncStorage:c,serverHooks:p}=l,f="/api/auth/[...nextauth]/route";function m(){return(0,n.patchFetch)({serverHooks:p,staticGenerationAsyncStorage:c})}},1779:(e,t,r)=>{"use strict";r.d(t,{I8:()=>m,handlers:()=>f,w7:()=>h,zB:()=>x});var s=r(56513),i=r(17198),o=r(29785),n=r(35872),a=r(35957),u=r(9396),l=r(53117),d=r(52845),c=r(71309);let p={pages:{signIn:"/sign-in",error:"/sign-in"},session:{strategy:"jwt",maxAge:2592e3},adapter:(0,s.J)(u.Z),providers:[(0,a.Z)({credentials:{email:{type:"email"},password:{type:"password"}},async authorize(e){if(null==e)return null;let t=await u.Z.query.users.findFirst({where:(0,o.eq)(l.users.email,e.email)});return t&&t.password&&(0,i.oH)(e.password,t.password)?{id:t.id,name:t.name,email:t.email,role:t.role}:null}})],callbacks:{jwt:async({token:e,user:t,trigger:r,session:s})=>{if(t&&("signIn"===r||"signUp"===r)){let e=d.cookies().get("sessionCartId")?.value;if(!e)throw Error("Session Cart Not Found");let r=await u.Z.query.carts.findFirst({where:(0,o.eq)(l.carts.sessionCartId,e)});if(r&&!r.userId){let s=await u.Z.query.carts.findFirst({where:(0,o.eq)(l.carts.userId,t.id)});s?((0,d.cookies)().set("beforeSigninSessionCartId",e),(0,d.cookies)().set("sessionCartId",s.sessionCartId)):u.Z.update(l.carts).set({userId:t.id}).where((0,o.eq)(l.carts.id,r.id))}}return s?.user.name&&"update"===r&&(e.name=s.user.name),e},session:async({session:e,user:t,trigger:r,token:s})=>(e.user.id=s.sub,e.user.role=s.role,e.user.name=s.name,"update"===r&&(e.user.name=t.name),e),authorized({request:e,auth:t}){let{pathname:r}=e.nextUrl;if(!t&&[/\/shipping-address/,/\/payment-method/,/\/place-order/,/\/profile/,/\/user\/(.*)/,/\/order\/(.*)/,/\/admin/].some(e=>e.test(r)))return!1;if(e.cookies.get("sessionCartId"))return!0;{let t=crypto.randomUUID(),r=new Headers(e.headers),s=c.NextResponse.next({request:{headers:r}});return s.cookies.set("sessionCartId",t),s}}}},{handlers:f,auth:m,signIn:x,signOut:h}=(0,n.ZP)(p)},9396:(e,t,r)=>{"use strict";r.d(t,{Z:()=>n});var s=r(53117),i=r(60713),o=r(52143);let n=(0,i.t)(o.i6,{schema:s})},53117:(e,t,r)=>{"use strict";r.r(t),r.d(t,{accounts:()=>m,carts:()=>g,products:()=>N,sessions:()=>x,users:()=>f,verificationTokens:()=>h});var s=r(15308),i=r(59397),o=r(39411),n=r(70380),a=r(46248),u=r(67691),l=r(21305),d=r(10950),c=r(22344),p=r(14244);let f=(0,s.af)("user",{id:(0,i.Vj)("id").defaultRandom().primaryKey().notNull(),name:(0,o.fL)("name").default("NO_NAME").notNull(),role:(0,o.fL)("role").notNull().default("user"),password:(0,o.fL)("password"),email:(0,o.fL)("email").notNull(),emailVerified:(0,n.AB)("emailVerified",{mode:"date"}),image:(0,o.fL)("image")}),m=(0,s.af)("account",{userId:(0,i.Vj)("userId").notNull().references(()=>f.id,{onDelete:"cascade"}),type:(0,o.fL)("type").$type().notNull(),provider:(0,o.fL)("provider").notNull(),providerAccountId:(0,o.fL)("providerAccountId").notNull(),refresh_token:(0,o.fL)("refresh_token"),access_token:(0,o.fL)("access_token"),expires_at:(0,a._L)("expires_at"),token_type:(0,o.fL)("token_type"),scope:(0,o.fL)("scope"),id_token:(0,o.fL)("id_token"),session_state:(0,o.fL)("session_state")},e=>({compoundKey:(0,p.CK)({columns:[e.provider,e.providerAccountId]})})),x=(0,s.af)("session",{sessionToken:(0,o.fL)("sessionToken").primaryKey(),userId:(0,i.Vj)("userId").notNull().references(()=>f.id,{onDelete:"cascade"}),expires:(0,n.AB)("expires",{mode:"date"}).notNull()}),h=(0,s.af)("verificationToken",{identifier:(0,o.fL)("identifier").notNull(),token:(0,o.fL)("token").notNull(),expires:(0,n.AB)("expires",{mode:"date"}).notNull()},e=>({compoundKey:(0,p.CK)({columns:[e.identifier,e.token]})})),N=(0,s.af)("product",{id:(0,i.Vj)("id").defaultRandom().primaryKey().notNull(),name:(0,o.fL)("name").notNull(),slug:(0,o.fL)("slug").notNull(),category:(0,o.fL)("category").notNull(),images:(0,o.fL)("images").array().notNull(),brand:(0,o.fL)("brand").notNull(),description:(0,o.fL)("description").notNull(),stock:(0,a._L)("stock").notNull(),price:(0,u.uR)("price",{precision:12,scale:2}).notNull().default("0"),rating:(0,u.uR)("rating",{precision:3,scale:2}).notNull().default("0"),numReviews:(0,a._L)("numReviews").notNull().default(0),isFeatured:(0,l.O7)("isFeatured").default(!1).notNull(),banner:(0,o.fL)("banner"),createdAt:(0,n.AB)("createdAt").defaultNow().notNull()},e=>({productSlugIdx:(0,d.o9)("product_slug_idx").on(e.slug)})),g=(0,s.af)("cart",{id:(0,i.Vj)("id").notNull().defaultRandom().primaryKey(),userId:(0,i.Vj)("userId").references(()=>f.id,{onDelete:"cascade"}),sessionCartId:(0,o.fL)("sessionCartId").notNull(),items:(0,c.AV)("items").$type().notNull().default([]),itemsPrice:(0,u.uR)("itemsPrice",{precision:12,scale:2}).notNull(),shippingPrice:(0,u.uR)("shippingPrice",{precision:12,scale:2}).notNull(),taxPrice:(0,u.uR)("taxPrice",{precision:12,scale:2}).notNull(),totalPrice:(0,u.uR)("totalPrice",{precision:12,scale:2}).notNull(),createdAt:(0,n.AB)("createdAt").notNull().defaultNow()})},73278:(e,t,r)=>{"use strict";e.exports=r(30517)}};var t=require("../../../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),s=t.X(0,[329,51],()=>r(52627));module.exports=s})();