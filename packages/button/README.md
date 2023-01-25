# `button`

> TODO: description

## 属性

| 属性名       | 值                                            | 描述                              |
|-----------|----------------------------------------------|---------------------------------|
| type      | default,primary,Info,danger,warnning,rainbow | 分别对应默认，主要按钮，灰色按钮，危险按钮，警告按钮,彩虹按钮 |
| Hollow    | solid,Hollow                                 | 实心，空心, 默认实心                     |
| Curvature | Microcurvature , curved                      | 微曲和大曲度，默认微曲                     |
| circle | true , false | 指定按钮是否为圆，默认false |
| size | large , normal , small | 按钮尺寸的大中小，默认是normal |

## demo
```
  <etu-button>按钮</etu-button>
  <etu-button type="primary">按钮</etu-button>
  <etu-button type="success">按钮</etu-button>
  <etu-button type="Info">按钮</etu-button>
  <etu-button type="warning">按钮</etu-button>
  <etu-button type="danger">按钮</etu-button>
  <etu-button type="rainbow">按钮</etu-button>

  <etu-button Hollow="Hollow">按钮</etu-button>
  <etu-button type="primary" Hollow="Hollow">按钮</etu-button>
  <etu-button type="success" Hollow="Hollow">按钮</etu-button>
  <etu-button type="Info" Hollow="Hollow">按钮</etu-button>
  <etu-button type="warning" Hollow="Hollow">按钮</etu-button>
  <etu-button type="danger" Hollow="Hollow">按钮</etu-button>
  <etu-button type="rainbow" Hollow="Hollow">按钮</etu-button>

  <etu-button Curvature="curved">按钮</etu-button>
  <etu-button type="primary" Curvature="curved">按钮</etu-button>
  <etu-button type="success" Curvature="curved">按钮</etu-button>
  <etu-button type="Info" Curvature="curved">按钮</etu-button>
  <etu-button type="warning" Curvature="curved">按钮</etu-button>
  <etu-button type="danger" Curvature="curved">按钮</etu-button>
  <etu-button type="rainbow" Curvature="curved">按钮</etu-button>
  
```