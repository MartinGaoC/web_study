# HTTPS 加密机制
 
# 为什么需要加密？
- 因为HTTP是需要明文传输的，中间需要经过中间代理服务器，路由器，wifi热点等多个物理节点。容易被篡改暴露，所以需要加密


# 对称加密
- 用一个密钥，对一段内容加密，加密后只有它才可以解密看到原本的内容

# 非对称加密
- 有两把密钥，通常一把叫公钥，一把叫私钥。用公钥加密的内容可以用私钥揭开，反之亦然

# HTTPS采用的方式 非对称加密+对称加密

# 如何证明浏览器收到的公钥一定是该网站的公钥
- 类似身份证的数字证书

# 数字证书
- 网站使用HTTPS之前，需要向CA机构申请一份数字证书，里边有证书支持者，证书持有者等公钥的信息。
# 如何防止数字证书被篡改
- 证书内容生成一份签名，比对证书内容和签名是否一致就能察觉是否被篡改。
