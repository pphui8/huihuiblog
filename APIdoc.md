```What`s this？```  &emsp;APi document of huihuiblog ~~better score for  curriculum design~~

```how to use？``` &emsp;`root` + `router rule` 

```API specification？``` RESTful api

```root:``` &emsp; https://api.pphui8.me

---

#### ```GET``` / &emsp;&emsp;>> API test
> ##### expected return
```json
{
    "status": 200
}
```

#### ```GET``` / index &emsp;&emsp;>> get index of blog
> ##### expected return
```json
{
    "index": [
        {
            "id": 1,
            "name": "pphui8",
            "descript": "hello world",
        },
        ......
    ] 
}
```

#### ```GET``` / blog / { id } &emsp;&emsp;>> get blog
> ##### expected return
```json
{
    "status": 200,
    "blog_root": "https://xx.xxx.xxx",
}
```

#### ```POST``` / addblog / token &emsp;&emsp;>> add blog
> ##### request body format
```json
{
    "blog_name": "blog_name",
    "desc": "blog description",
    "value": "pphui8",
    "token": "xxxx",
}
```
> ##### expected return
```json
# success
{
    "status": "success"
}
# failed
{
    "status": "failed",
    "error": "failed to add blog"
}
```

#### ```DELETE``` / delblog &emsp;&emsp;>> delete blog
> ##### 预期返回
```json
{
    // 待编辑
}
```