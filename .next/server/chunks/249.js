"use strict";exports.id=249,exports.ids=[249],exports.modules={6352:(e,s,r)=>{r.d(s,{I8:()=>f,w7:()=>N,zB:()=>y});var t=r(35936),a=r(40461),i=r(54068),n=r(68897),d=r(35472),o=r(79306),l=r(39558),c=r(53020),u=r(58995);let m={pages:{signIn:"/sign-in",error:"/sign-in"},session:{strategy:"jwt",maxAge:2592e3},adapter:(0,t.J)(o.Z),providers:[(0,d.Z)({credentials:{email:{type:"email"},password:{type:"password"}},async authorize(e){if(null==e)return null;let s=await o.Z.query.users.findFirst({where:(0,i.eq)(l.users.email,e.email)});return s&&s.password&&(0,a.oH)(e.password,s.password)?{id:s.id,name:s.name,email:s.email,role:s.role}:null}})],callbacks:{jwt:async({token:e,user:s,trigger:r,session:t})=>{if(s&&("signIn"===r||"signUp"===r)){let e=c.cookies().get("sessionCartId")?.value;if(!e)throw Error("Session Cart Not Found");let r=await o.Z.query.carts.findFirst({where:(0,i.eq)(l.carts.sessionCartId,e)});if(r&&!r.userId){let t=await o.Z.query.carts.findFirst({where:(0,i.eq)(l.carts.userId,s.id)});t?((0,c.cookies)().set("beforeSigninSessionCartId",e),(0,c.cookies)().set("sessionCartId",t.sessionCartId)):o.Z.update(l.carts).set({userId:s.id}).where((0,i.eq)(l.carts.id,r.id))}}return t?.user.name&&"update"===r&&(e.name=t.user.name),e},session:async({session:e,user:s,trigger:r,token:t})=>(e.user.id=t.sub,e.user.role=t.role,e.user.name=t.name,"update"===r&&(e.user.name=s.name),e),authorized({request:e,auth:s}){let{pathname:r}=e.nextUrl;if(!s&&[/\/shipping-address/,/\/payment-method/,/\/place-order/,/\/profile/,/\/user\/(.*)/,/\/order\/(.*)/,/\/admin/].some(e=>e.test(r)))return!1;if(e.cookies.get("sessionCartId"))return!0;{let s=crypto.randomUUID(),r=new Headers(e.headers),t=u.NextResponse.next({request:{headers:r}});return t.cookies.set("sessionCartId",s),t}}}},{handlers:p,auth:f,signIn:y,signOut:N}=(0,n.ZP)(m)},6669:(e,s,r)=>{r.d(s,{Ol:()=>d,SZ:()=>l,Zb:()=>n,aY:()=>c,ll:()=>o});var t=r(72051),a=r(26269),i=r(37170);let n=a.forwardRef(({className:e,...s},r)=>t.jsx("div",{ref:r,className:(0,i.cn)("rounded-xl border bg-card text-card-foreground shadow",e),...s}));n.displayName="Card";let d=a.forwardRef(({className:e,...s},r)=>t.jsx("div",{ref:r,className:(0,i.cn)("flex flex-col space-y-1.5 p-6",e),...s}));d.displayName="CardHeader";let o=a.forwardRef(({className:e,...s},r)=>t.jsx("h3",{ref:r,className:(0,i.cn)("font-semibold leading-none tracking-tight",e),...s}));o.displayName="CardTitle";let l=a.forwardRef(({className:e,...s},r)=>t.jsx("p",{ref:r,className:(0,i.cn)("text-sm text-muted-foreground",e),...s}));l.displayName="CardDescription";let c=a.forwardRef(({className:e,...s},r)=>t.jsx("div",{ref:r,className:(0,i.cn)("p-6 pt-0",e),...s}));c.displayName="CardContent",a.forwardRef(({className:e,...s},r)=>t.jsx("div",{ref:r,className:(0,i.cn)("flex items-center p-6 pt-0",e),...s})).displayName="CardFooter"},79306:(e,s,r)=>{r.d(s,{Z:()=>n});var t=r(39558),a=r(6355),i=r(49834);let n=(0,a.t)(i.i6,{schema:t})},39558:(e,s,r)=>{r.r(s),r.d(s,{accounts:()=>y,carts:()=>h,orderItems:()=>_,orderItemsRelations:()=>Z,orders:()=>b,ordersRelations:()=>I,products:()=>w,sessions:()=>N,users:()=>f,verificationTokens:()=>g});var t=r(17936),a=r(74342),i=r(62428),n=r(19169),d=r(79492),o=r(40915),l=r(74722),c=r(23662),u=r(89221),m=r(5614),p=r(55519);let f=(0,a.af)("user",{id:(0,i.Vj)("id").defaultRandom().primaryKey().notNull(),name:(0,n.fL)("name").default("NO_NAME").notNull(),role:(0,n.fL)("role").notNull().default("user"),password:(0,n.fL)("password"),email:(0,n.fL)("email").notNull(),emailVerified:(0,d.AB)("emailVerified",{mode:"date"}),image:(0,n.fL)("image"),address:(0,o.AV)("address").$type(),paymentMethod:(0,n.fL)("paymentMethod")}),y=(0,a.af)("account",{userId:(0,i.Vj)("userId").notNull().references(()=>f.id,{onDelete:"cascade"}),type:(0,n.fL)("type").$type().notNull(),provider:(0,n.fL)("provider").notNull(),providerAccountId:(0,n.fL)("providerAccountId").notNull(),refresh_token:(0,n.fL)("refresh_token"),access_token:(0,n.fL)("access_token"),expires_at:(0,l._L)("expires_at"),token_type:(0,n.fL)("token_type"),scope:(0,n.fL)("scope"),id_token:(0,n.fL)("id_token"),session_state:(0,n.fL)("session_state")},e=>({compoundKey:(0,p.CK)({columns:[e.provider,e.providerAccountId]})})),N=(0,a.af)("session",{sessionToken:(0,n.fL)("sessionToken").primaryKey(),userId:(0,i.Vj)("userId").notNull().references(()=>f.id,{onDelete:"cascade"}),expires:(0,d.AB)("expires",{mode:"date"}).notNull()}),g=(0,a.af)("verificationToken",{identifier:(0,n.fL)("identifier").notNull(),token:(0,n.fL)("token").notNull(),expires:(0,d.AB)("expires",{mode:"date"}).notNull()},e=>({compoundKey:(0,p.CK)({columns:[e.identifier,e.token]})})),w=(0,a.af)("product",{id:(0,i.Vj)("id").defaultRandom().primaryKey().notNull(),name:(0,n.fL)("name").notNull(),slug:(0,n.fL)("slug").notNull(),category:(0,n.fL)("category").notNull(),images:(0,n.fL)("images").array().notNull(),brand:(0,n.fL)("brand").notNull(),description:(0,n.fL)("description").notNull(),stock:(0,l._L)("stock").notNull(),price:(0,c.uR)("price",{precision:12,scale:2}).notNull().default("0"),rating:(0,c.uR)("rating",{precision:3,scale:2}).notNull().default("0"),numReviews:(0,l._L)("numReviews").notNull().default(0),isFeatured:(0,u.O7)("isFeatured").default(!1).notNull(),banner:(0,n.fL)("banner"),createdAt:(0,d.AB)("createdAt").defaultNow().notNull()},e=>({productSlugIdx:(0,m.o9)("product_slug_idx").on(e.slug)})),h=(0,a.af)("cart",{id:(0,i.Vj)("id").notNull().defaultRandom().primaryKey(),userId:(0,i.Vj)("userId").references(()=>f.id,{onDelete:"cascade"}),sessionCartId:(0,n.fL)("sessionCartId").notNull(),items:(0,o.AV)("items").$type().notNull().default([]),itemsPrice:(0,c.uR)("itemsPrice",{precision:12,scale:2}).notNull(),shippingPrice:(0,c.uR)("shippingPrice",{precision:12,scale:2}).notNull(),taxPrice:(0,c.uR)("taxPrice",{precision:12,scale:2}).notNull(),totalPrice:(0,c.uR)("totalPrice",{precision:12,scale:2}).notNull(),createdAt:(0,d.AB)("createdAt").notNull().defaultNow()}),b=(0,a.af)("order",{id:(0,i.Vj)("id").defaultRandom().primaryKey(),userId:(0,i.Vj)("userId").notNull().references(()=>f.id,{onDelete:"cascade"}),shippingAddress:(0,o.AV)("shippingAddress").$type().notNull(),paymentMethod:(0,n.fL)("paymentMethod").notNull(),paymentResult:(0,o.AV)("paymentResult").$type(),itemsPrice:(0,c.uR)("itemsPrice",{precision:12,scale:2}).notNull(),shippingPrice:(0,c.uR)("shippingPrice",{precision:12,scale:2}).notNull(),taxPrice:(0,c.uR)("taxPrice",{precision:12,scale:2}).notNull(),totalPrice:(0,c.uR)("totalPrice",{precision:12,scale:2}).notNull(),isPaid:(0,u.O7)("isPaid").notNull().default(!1),paidAt:(0,d.AB)("paidAt"),isDelivered:(0,u.O7)("isDelivered").notNull().default(!1),deliveredAt:(0,d.AB)("deliveredAt"),createdAt:(0,d.AB)("createdAt").notNull().defaultNow()}),I=(0,t.lE)(b,({one:e,many:s})=>({orderItems:s(_),user:e(f,{fields:[b.userId],references:[f.id]})})),_=(0,a.af)("orderItems",{orderId:(0,i.Vj)("orderId").notNull().references(()=>b.id,{onDelete:"cascade"}),productId:(0,i.Vj)("productId").notNull().references(()=>w.id,{onDelete:"cascade"}),qty:(0,l._L)("qty").notNull(),price:(0,c.uR)("price",{precision:12,scale:2}).notNull(),name:(0,n.fL)("name").notNull(),slug:(0,n.fL)("slug").notNull(),image:(0,n.fL)("image").notNull()},e=>({compoundKey:(0,p.CK)({columns:[e.orderId,e.productId]})})),Z=(0,t.lE)(_,({one:e})=>({order:e(b,{fields:[_.orderId],references:[b.id]})}))},48185:(e,s,r)=>{r.r(s),r.d(s,{$$ACTION_0:()=>g,SignOut:()=>N,getUserById:()=>w,signInWithCredentials:()=>y,signUp:()=>f,updateProfile:()=>I,updateUserAddress:()=>h,updateUserPaymentMethod:()=>b});var t=r(28713);r(9640);var a=r(22614),i=r(6352),n=r(62276),d=r(40461),o=r(79306),l=r(39558),c=r(70592),u=r(54068),m=r(80166),p=r(83557);async function f(e,s){try{let e=n.hV.parse({name:s.get("name"),email:s.get("email"),confirmPassword:s.get("confirmPassword"),password:s.get("password")}),r={id:crypto.randomUUID(),...e,password:(0,d.St)(e.password,10)};return await o.Z.insert(l.users).values(r),await (0,i.zB)("credentials",{email:e.email,password:e.password}),{success:!0,message:"User created successfully"}}catch(e){if((0,a.isRedirectError)(e))throw e;return{success:!1,message:(0,c.Z)(e).includes('duplicate key value violates unique constraint "user_email_idx"')?"Email is already exist":(0,c.Z)(e)}}}async function y(e,s){try{let e=n.aW.parse({email:s.get("email"),password:s.get("password")});return await (0,i.zB)("credentials",e),{success:!0,message:"Sig in successfully"}}catch(e){if((0,a.isRedirectError)(e))throw e;return{success:!1,message:"Invalid email or password"}}}let N=(0,t.j)("9894e6c57f99a2f4eccac4a43c9c453c2e8680a4",g);async function g(){await (0,i.w7)()}async function w(e){let s=await o.Z.query.users.findFirst({where:(s,{eq:r})=>r(s.id,e)});if(!s)throw Error("User not found");return s}async function h(e){try{let s=await (0,i.I8)(),r=await o.Z.query.users.findFirst({where:(e,{eq:r})=>r(e.id,s?.user.id)});if(!r)throw Error("User not found");let t=n.tV.parse(e);return await o.Z.update(l.users).set({address:t}).where((0,u.eq)(l.users.id,r.id)),(0,m.revalidatePath)("/place-order"),{success:!0,message:"User updated successfully"}}catch(e){return{success:!1,message:(0,c.Z)(e)}}}async function b(e){try{let s=await (0,i.I8)(),r=await o.Z.query.users.findFirst({where:(e,{eq:r})=>r(e.id,s?.user.id)});if(!r)throw Error("User not found");let t=n.LD.parse(e);return await o.Z.update(l.users).set({paymentMethod:t.type}).where((0,u.eq)(l.users.id,r.id)),{success:!0,message:"User updated successfully"}}catch(e){return{success:!1,message:(0,c.Z)(e)}}}async function I(e){try{let s=await (0,i.I8)(),r=await o.Z.query.users.findFirst({where:(e,{eq:r})=>r(e.id,s?.user.id)});if(!r)throw Error("User not found");return await o.Z.update(l.users).set({name:e.name}).where((0,u.eq)(l.users.id,r.id)),{success:!0,message:"User updated successfully"}}catch(e){return{success:!1,message:(0,c.Z)(e)}}}(0,p.h)([f,y,N,w,h,b,I]),(0,t.j)("be840f0dc3afac8b8d0c6b02dc3328bacb294db1",f),(0,t.j)("c90075d8792b89f7584984a67b421aab69e556af",y),(0,t.j)("6f62a9caef1528e29ef4461e98a41e80f8b1eae5",N),(0,t.j)("4896ea1b4f1dace1ade49eb3651161dc0c4f102a",w),(0,t.j)("7ef6945e100c99ebbac8da6a81410b4410597f01",h),(0,t.j)("abc73778e07b95e9d8f15868fea7f03dbbca9e71",b),(0,t.j)("37248d5a5d92203bea071298526bbf56bd6a282e",I)},6335:(e,s,r)=>{r.d(s,{IV:()=>t,LM:()=>a});let t=Number(process.env.PAGE_SIZE)||3,a=process.env.PAYMENT_METHODS?process.env.PAYMENT_METHODS.split(", "):["PayPal","Stripe"];process.env.DEFAULT_PAYMENT_METHOD},70592:(e,s,r)=>{r.d(s,{Aj:()=>a,Xp:()=>i,Z:()=>t}),Intl.NumberFormat("en-US",{currency:"USD",style:"currency",minimumFractionDigits:2});let t=e=>"ZodError"===e.name?Object.keys(e.errors).map(s=>{let r=e.errors[s].message;return`${e.errors[s].path}: ${r}`}).join(". "):"ValidationError"===e.name?Object.keys(e.errors).map(s=>e.errors[s].message).join(". "):"string"==typeof e.message?e.message:JSON.stringify(e.message),a=e=>{let[s,r]=e.toString().split(".");return r?`${s}.${r.padEnd(2,"0")}`:s},i=e=>{if("number"==typeof e)return Math.round((e+Number.EPSILON)*100)/100;if("string"==typeof e)return Math.round((Number(e)+Number.EPSILON)*100)/100;throw Error("value is not a number nor a string")}},62276:(e,s,r)=>{r.d(s,{LD:()=>m,Mn:()=>p,aW:()=>o,hV:()=>l,oU:()=>c,tV:()=>u});var t=r(79176),a=r(13805),i=r(70592),n=r(6335),d=r(39558);let o=t.Ry({email:t.Z_().email().min(3,"Email must be at least 3 characters"),password:t.Z_().min(3,"Password must be at least 3 characters")}),l=t.Ry({name:t.Z_().min(3,"Name must be at least 3 characters"),email:t.Z_().email().min(3,"Email must be at least 3 characters"),password:t.Z_().min(3,"Password must be at least 3 characters"),confirmPassword:t.Z_().min(3,"Confirm password must be at least 3 characters")}).refine(e=>e.password===e.confirmPassword,{message:"Passwords don't match",path:["confirmPassword"]}),c=t.Ry({productId:t.Z_().min(1,"Product is required"),name:t.Z_().min(1,"Name is required"),slug:t.Z_().min(1,"Slug is required"),qty:t.Rx().int().nonnegative("Quantity must be a non-negative number"),image:t.Z_().min(1,"Image is required"),price:t.Rx().refine(e=>/^\d+(\.\d{2})?$/.test((0,i.Aj)(e)),"Price must have exactly two decimal places (e.g., 49.99)")}),u=t.Ry({fullName:t.Z_().min(3,"Name must be at least 3 characters"),streetAddress:t.Z_().min(3,"Address must be at least 3 characters"),city:t.Z_().min(3,"city must be at least 3 characters"),postalCode:t.Z_().min(3,"Postal code must be at least 3 characters"),country:t.Z_().min(3,"Country must be at least 3 characters"),lat:t.Rx().optional(),lng:t.Rx().optional()}),m=t.Ry({type:t.Z_().min(1,"Payment method is required")}).refine(e=>n.LM.includes(e.type),{path:["type"],message:"Invalid payment method"});t.Ry({id:t.Z_(),status:t.Z_(),email_address:t.Z_(),pricePaid:t.Z_()});let p=(0,a.fC)(d.orders,{shippingAddress:u,paymentResult:t.Ry({id:t.Z_(),status:t.Z_(),email_address:t.Z_(),pricePaid:t.Z_()}).optional()});(0,a.fC)(d.orderItems,{price:t.Rx()}),t.Ry({name:t.Z_().min(3,"Name must be at least 3 characters"),email:t.Z_().email().min(3,"Email must be at least 3 characters")})}};