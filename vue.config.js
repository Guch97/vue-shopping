module.exports = {
    configureWebpack: {
        devServer: {
            //MOCK接口编写的地方
            //每次做更改这个配置文件的时候，都必须重启项目才会生效
            before(app) {
                // app.get('请求地址',(req,res)=>{
                //   res.json({
                //   })
                // })

                //用户信息池
                let userpoor = [
                        { username: 'gch', password: '123456' },
                        { username: 'tim', password: '123456' }
                    ]
                    //注册接口
                app.get('/api/register', (req, res) => {
                        const { username, password } = req.query
                        const userlength = userpoor.filter(v => v.username == username).length
                        if (userlength > 0) {
                            res.json({
                                success: false,
                                message: '用户名已存在'
                            })
                        } else {
                            res.json({
                                success: true,
                                message: '注册成功'
                            })
                        }
                    })
                    //登录接口
                let tokenkey = 'xdclass'
                app.get('/api/login', (req, res) => {
                    const { username, password } = req.query
                    if (username == 'gch' && password == '123456' || username == 'tim' && password == '123456') {
                        res.json({
                            code: 0,
                            message: '登录成功',
                            token: tokenkey + '-' + username + '-' + (new Date().getTime() + 60 * 60 * 1000)
                        })
                    } else {
                        res.json({
                            code: 1,
                            message: '账号或密码错误'
                        })
                    }
                })

                //首页轮播图数据接口
                app.get('/api/banner', (req, res) => {
                        res.json({
                            data: [{
                                    image: 'https://img20.360buyimg.com/da/jfs/t1/94969/3/8987/105620/5e0aef5cEceb85d04/d9b5bb216c05e863.jpg'
                                },
                                {
                                    image: 'https://img10.360buyimg.com/da/jfs/t1/89449/29/2731/126534/5dd74e27Ea00f78f0/02f3be72dcecbf55.png'
                                },
                                {
                                    image: 'https://img11.360buyimg.com/da/jfs/t1/39081/22/12393/126937/5d37b4b8E52d6ce7c/dcbe17e4d5047824.jpg'
                                }
                            ]
                        })
                    })
                    //滚动分类接口
                app.get('/api/rollinglist', (req, res) => {
                        res.json({
                            data: [
                                [{
                                        url: 'https://www.jd.com',
                                        image: 'https://img20.360buyimg.com/mobilecms/s140x140_jfs/t1/99530/9/8183/163118/5e02c867Ecc5ea797/85df20b9abb554bc.jpg.webp',
                                        label: '鞋类'
                                    },
                                    {
                                        url: 'https://www.jd.com',
                                        image: 'https://img12.360buyimg.com/mobilecms/s140x140_jfs/t1/99437/40/7898/196142/5e004f8eE5bf519a7/02a5aaecded15bae.jpg.webp',
                                        label: '衣服'
                                    },
                                    {
                                        url: 'https://www.jd.com',
                                        image: 'https://img10.360buyimg.com/mobilecms/s140x140_jfs/t1/108314/37/2100/74059/5e0420e3Ed5c370fe/61da90e6a6d5c5c5.jpg.webp',
                                        label: '耳机'
                                    },
                                    {
                                        url: 'https://www.jd.com',
                                        image: 'https://img12.360buyimg.com/mobilecms/s130x130_jfs/t1/53453/26/16515/295769/5dd74427Ec8752c28/415cf08bf0cd3bd1.jpg.webp',
                                        label: '酒类'
                                    },
                                    {
                                        url: 'https://www.jd.com',
                                        image: 'https://img10.360buyimg.com/mobilecms/s130x130_jfs/t24529/101/1891623973/405929/c89e7ebf/5b6d5b65N76c88261.jpg.webp',
                                        label: '手机'
                                    },
                                    {
                                        url: 'https://www.jd.com',
                                        image: 'https://img13.360buyimg.com/img/s150x150_jfs/t1/90996/8/8136/15323/5e019c53E4dd6f151/4dee02388357b41f.jpg!q70.jpg.webp',
                                        label: '礼盒套'
                                    },
                                    {
                                        url: 'https://www.jd.com',
                                        image: 'https://img10.360buyimg.com/img/s170x170_jfs/t1/109156/9/2330/19099/5e05ce5cE1633ca57/e329ce3373943a28.jpg!q70.jpg.webp',
                                        label: '毛衣'
                                    },
                                    {
                                        url: 'https://www.jd.com',
                                        image: 'https://img12.360buyimg.com/img/s150x150_jfs/t1/85810/30/8070/16096/5e01a374Ef104477d/247a72601cf95793.jpg!q70.jpg.webp',
                                        label: '百雀羚'
                                    },
                                    {
                                        url: 'https://www.jd.com',
                                        image: 'https://img11.360buyimg.com/img/s170x170_jfs/t1/95537/9/7990/14653/5e009f8fE2cf95690/760fbb31c63bef5f.jpg!q70.jpg.webp',
                                        label: '护肤品'
                                    },
                                    {
                                        url: 'https://www.jd.com',
                                        image: 'https://img30.360buyimg.com/img/s170x170_jfs/t1/104717/19/8396/15577/5e04aa3eE54b4be09/907762001af67f7f.jpg!q70.jpg.webp',
                                        label: '补水用品'
                                    },
                                ],
                                [{
                                  url: 'https://www.jd.com',
                                  image: 'https://img20.360buyimg.com/mobilecms/s140x140_jfs/t1/99530/9/8183/163118/5e02c867Ecc5ea797/85df20b9abb554bc.jpg.webp',
                                  label: '鞋类'
                              },
                              {
                                  url: 'https://www.jd.com',
                                  image: 'https://img12.360buyimg.com/mobilecms/s140x140_jfs/t1/99437/40/7898/196142/5e004f8eE5bf519a7/02a5aaecded15bae.jpg.webp',
                                  label: '衣服'
                              },
                              {
                                  url: 'https://www.jd.com',
                                  image: 'https://img10.360buyimg.com/mobilecms/s140x140_jfs/t1/108314/37/2100/74059/5e0420e3Ed5c370fe/61da90e6a6d5c5c5.jpg.webp',
                                  label: '耳机'
                              },
                              {
                                  url: 'https://www.jd.com',
                                  image: 'https://img12.360buyimg.com/mobilecms/s130x130_jfs/t1/53453/26/16515/295769/5dd74427Ec8752c28/415cf08bf0cd3bd1.jpg.webp',
                                  label: '酒类'
                              },
                              {
                                  url: 'https://www.jd.com',
                                  image: 'https://img10.360buyimg.com/mobilecms/s130x130_jfs/t24529/101/1891623973/405929/c89e7ebf/5b6d5b65N76c88261.jpg.webp',
                                  label: '手机'
                              },
                              {
                                  url: 'https://www.jd.com',
                                  image: 'https://img13.360buyimg.com/img/s150x150_jfs/t1/90996/8/8136/15323/5e019c53E4dd6f151/4dee02388357b41f.jpg!q70.jpg.webp',
                                  label: '礼盒套'
                              },
                              {
                                  url: 'https://www.jd.com',
                                  image: 'https://img10.360buyimg.com/img/s170x170_jfs/t1/109156/9/2330/19099/5e05ce5cE1633ca57/e329ce3373943a28.jpg!q70.jpg.webp',
                                  label: '毛衣'
                              },
                              {
                                  url: 'https://www.jd.com',
                                  image: 'https://img12.360buyimg.com/img/s150x150_jfs/t1/85810/30/8070/16096/5e01a374Ef104477d/247a72601cf95793.jpg!q70.jpg.webp',
                                  label: '百雀羚'
                              },
                              {
                                  url: 'https://www.jd.com',
                                  image: 'https://img11.360buyimg.com/img/s170x170_jfs/t1/95537/9/7990/14653/5e009f8fE2cf95690/760fbb31c63bef5f.jpg!q70.jpg.webp',
                                  label: '护肤品'
                              },
                              {
                                  url: 'https://www.jd.com',
                                  image: 'https://img30.360buyimg.com/img/s170x170_jfs/t1/104717/19/8396/15577/5e04aa3eE54b4be09/907762001af67f7f.jpg!q70.jpg.webp',
                                  label: '补水用品'
                              },
                                ],
                            ]
                        })
                    })
                    //获取分类页的分类接口
                app.get('/api/classify', (req, res) => {
                    switch (req.query.type) {
                        case '0':
                            res.json({
                                data: [{
                                        image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label: '小米'
                                    },
                                    {
                                        image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                        label: '华为'
                                    },
                                    {
                                        image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                        label: '荣耀'
                                    },
                                    {
                                        image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                        label: '雪梨手机'
                                    },
                                    {
                                        image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label: '小米'
                                    },
                                    {
                                        image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                        label: '华为'
                                    },
                                    {
                                        image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                        label: '荣耀'
                                    },
                                    {
                                        image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                        label: '雪梨手机'
                                    },
                                    {
                                        image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label: '小米'
                                    },
                                    {
                                        image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                        label: '华为'
                                    },
                                    {
                                        image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                        label: '荣耀'
                                    },
                                    {
                                        image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                        label: '雪梨手机'
                                    },
                                    {
                                        image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label: '小米'
                                    },
                                    {
                                        image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                        label: '华为'
                                    },
                                    {
                                        image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                        label: '荣耀'
                                    },
                                    {
                                        image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                        label: '雪梨手机'
                                    },
                                    {
                                        image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label: '小米'
                                    },
                                    {
                                        image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                        label: '华为'
                                    },
                                    {
                                        image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                        label: '荣耀'
                                    },
                                    {
                                        image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                        label: '雪梨手机'
                                    },

                                ]
                            });
                            break;
                        case '1':
                            res.json({
                                data: [{
                                        image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label: '小米'
                                    },
                                    {
                                        image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label: '小米'
                                    },
                                    {
                                        image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label: '小米'
                                    },
                                    {
                                        image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label: '小米'
                                    },
                                ]
                            });
                            break;
                        case '2':
                            res.json({
                                data: [{
                                        image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                        label: '华为'
                                    },
                                    {
                                        image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                        label: '华为'
                                    },
                                    {
                                        image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                        label: '华为'
                                    },
                                    {
                                        image: '//img14.360buyimg.com/focus/s140x140_jfs/t11929/135/2372293765/1396/e103ec31/5a1692e2Nbea6e136.jpg',
                                        label: '华为'
                                    }
                                ]
                            });
                            break;
                        case '3':
                            res.json({
                                data: [{
                                        image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                        label: '荣耀'
                                    },
                                    {
                                        image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                        label: '荣耀'
                                    },
                                    {
                                        image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                        label: '荣耀'
                                    },
                                    {
                                        image: '//img10.360buyimg.com/focus/s140x140_jfs/t12178/348/911080073/4732/db0ad9c7/5a1692e2N6df7c609.jpg',
                                        label: '荣耀'
                                    },
                                ]
                            });
                            break;
                        case '4':
                            res.json({
                                data: [{
                                        image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label: '小米'
                                    },
                                    {
                                        image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label: '小米'
                                    },
                                    {
                                        image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label: '小米'
                                    },
                                    {
                                        image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label: '小米'
                                    },
                                ]
                            });
                            break;
                        case '5':
                            res.json({
                                data: [{
                                        image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                        label: '雪梨手机'
                                    },
                                    {
                                        image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                        label: '雪梨手机'
                                    },
                                    {
                                        image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                        label: '雪梨手机'
                                    },
                                    {
                                        image: '//img20.360buyimg.com/focus/s140x140_jfs/t13759/194/897734755/2493/1305d4c4/5a1692ebN8ae73077.jpg',
                                        label: '雪梨手机'
                                    },
                                ]
                            });
                            break;
                        case '6':
                            res.json({
                                data: [{
                                        image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label: '小米'
                                    },
                                    {
                                        image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label: '小米'
                                    },
                                    {
                                        image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label: '小米'
                                    },
                                    {
                                        image: '//img30.360buyimg.com/focus/s140x140_jfs/t13411/188/926813276/3945/a4f47292/5a1692eeN105a64b4.png',
                                        label: '小米'
                                    },
                                ]
                            });
                            break;
                    }
                })
            }
        }
    },
    css: {
        loaderOptions: {
            stylus: {
                'resolve url': true,
                'import': [
                    './src/theme'
                ]
            }
        }
    },
    pluginOptions: {
        'cube-ui': {
            postCompile: true,
            theme: true
        }
    }
}