export function getCurrentAuthority(){
  //获取后台返回的权限（这里为了演示直接写死了）
  return ["admin"]
}

export function check(authority){
  //检查是否具有访问权限
  const current =  getCurrentAuthority();
  return current.some(item => authority.includes(item))
}


export function isLogin(){
  const current = getCurrentAuthority();
  return current && current[0] !== "guest"
}
