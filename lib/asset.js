export const asset=(p)=>{
  if(!p)return p;
  if(/^https?:\/\//.test(p))return p;
  const base=process.env.NEXT_PUBLIC_BASE_PATH||"";
  const path=p.startsWith("/")?p:"/"+p;
  if(base&&(path===base||path.startsWith(base+"/")))return path;
  return `${base}${path}`;
};
